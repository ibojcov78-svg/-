"""Authentication helpers for NotebookLM."""

import os


class AuthError(Exception):
    pass


def get_credentials():
    """
    Load credentials from environment variables.

    Supported env vars (in priority order):
      NOTEBOOKLM_COOKIE  - full Cookie header string (e.g. from browser DevTools)
      GOOGLE_ACCESS_TOKEN - OAuth2 bearer token
    """
    cookie = os.environ.get("NOTEBOOKLM_COOKIE", "").strip()
    if cookie:
        return {"type": "cookie", "value": cookie}

    token = os.environ.get("GOOGLE_ACCESS_TOKEN", "").strip()
    if token:
        return {"type": "bearer", "value": token}

    return None


def build_headers(credentials):
    """Return HTTP headers for the given credentials."""
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (X11; Linux x86_64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/123.0.0.0 Safari/537.36"
        ),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
    }
    if credentials["type"] == "cookie":
        headers["Cookie"] = credentials["value"]
    elif credentials["type"] == "bearer":
        headers["Authorization"] = f"Bearer {credentials['value']}"
    return headers
