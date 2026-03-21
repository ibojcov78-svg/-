"""NotebookLM HTTP client."""

import re
import json
import requests

from .auth import build_headers, AuthError

BASE_URL = "https://notebooklm.google.com"


class NotebookLMClient:
    def __init__(self, credentials):
        self._creds = credentials
        self._session = requests.Session()
        self._session.headers.update(build_headers(credentials))

    # ------------------------------------------------------------------
    # Auth check
    # ------------------------------------------------------------------

    def check_auth(self):
        """
        Fetch the NotebookLM home page and decide whether we are logged in.

        Returns a dict:
          {"authenticated": bool, "user": str|None, "status_code": int}
        """
        resp = self._session.get(BASE_URL, timeout=15, allow_redirects=True)
        status = resp.status_code

        # A redirect to accounts.google.com means not authenticated
        if "accounts.google.com" in resp.url:
            return {"authenticated": False, "user": None, "status_code": status}

        # Look for email or display-name hints embedded in the page JS
        user = None
        for pattern in [
            r'"email"\s*:\s*"([^"]+@[^"]+)"',
            r'"displayName"\s*:\s*"([^"]+)"',
            r'data-email="([^"]+)"',
        ]:
            m = re.search(pattern, resp.text)
            if m:
                user = m.group(1)
                break

        authenticated = status == 200 and "accounts.google.com" not in resp.url
        return {"authenticated": authenticated, "user": user, "status_code": status}

    # ------------------------------------------------------------------
    # List notebooks
    # ------------------------------------------------------------------

    def list_notebooks(self):
        """
        Retrieve the list of notebooks.

        NotebookLM embeds notebook data inside the initial HTML as a JSON
        blob.  We extract it with a best-effort regex.  Returns a list of
        dicts with at least {"id": ..., "title": ...}.
        """
        resp = self._session.get(BASE_URL, timeout=15, allow_redirects=True)

        if "accounts.google.com" in resp.url:
            raise AuthError("Not authenticated — redirected to Google login.")

        notebooks = []

        # Pattern 1 – JSON array that contains notebook objects with "title"
        for pattern in [
            r'\[\s*\{[^]]*?"title"\s*:\s*"([^"]*)"[^]]*?\}[^]]*?\]',
            r'"notebooks"\s*:\s*(\[[^\]]*\])',
            r'"projects"\s*:\s*(\[[^\]]*\])',
        ]:
            m = re.search(pattern, resp.text, re.DOTALL)
            if m:
                try:
                    raw = json.loads(m.group(0) if pattern.startswith(r'\[') else m.group(1))
                    if isinstance(raw, list) and raw:
                        for item in raw:
                            if isinstance(item, dict):
                                notebooks.append({
                                    "id": item.get("id") or item.get("notebookId", ""),
                                    "title": item.get("title") or item.get("name", "(untitled)"),
                                })
                        if notebooks:
                            break
                except (json.JSONDecodeError, KeyError):
                    continue

        return notebooks
