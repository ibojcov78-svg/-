"""
Entry point for:  python -m notebooklm <command>

Supported commands:
  list   – check auth and list notebooks
"""

import sys

from .auth import get_credentials, AuthError
from .client import NotebookLMClient


def cmd_list():
    creds = get_credentials()
    if creds is None:
        print("ERROR: No credentials found.")
        print()
        print("Set one of the following environment variables and re-run:")
        print("  NOTEBOOKLM_COOKIE      - Cookie header copied from browser DevTools")
        print("  GOOGLE_ACCESS_TOKEN    - OAuth2 bearer token")
        sys.exit(1)

    print(f"Auth type : {creds['type']}")
    print("Connecting to NotebookLM …")

    client = NotebookLMClient(creds)

    try:
        auth_info = client.check_auth()
    except Exception as exc:
        print(f"ERROR: Could not reach NotebookLM: {exc}")
        sys.exit(1)

    if not auth_info["authenticated"]:
        print(f"FAIL  Authorization check failed (HTTP {auth_info['status_code']}).")
        print("      The credentials appear to be invalid or expired.")
        sys.exit(1)

    user_label = auth_info["user"] or "(unknown)"
    print(f"OK    Authenticated as: {user_label}")
    print()

    try:
        notebooks = client.list_notebooks()
    except AuthError as exc:
        print(f"ERROR: {exc}")
        sys.exit(1)
    except Exception as exc:
        print(f"ERROR: Failed to retrieve notebooks: {exc}")
        sys.exit(1)

    if not notebooks:
        print("No notebooks found (or unable to parse notebook list from page).")
        return

    print(f"Notebooks ({len(notebooks)}):")
    for nb in notebooks:
        nb_id = nb.get("id") or ""
        title = nb.get("title") or "(untitled)"
        id_suffix = f"  [{nb_id}]" if nb_id else ""
        print(f"  - {title}{id_suffix}")


COMMANDS = {
    "list": cmd_list,
}


def main():
    if len(sys.argv) < 2:
        print(f"Usage: python -m notebooklm <command>")
        print(f"Commands: {', '.join(COMMANDS)}")
        sys.exit(1)

    cmd = sys.argv[1].lower()
    if cmd not in COMMANDS:
        print(f"Unknown command: {cmd!r}")
        print(f"Available commands: {', '.join(COMMANDS)}")
        sys.exit(1)

    COMMANDS[cmd]()


if __name__ == "__main__":
    main()
