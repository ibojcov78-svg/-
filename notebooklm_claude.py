"""
NotebookLM + Claude интеграция
-------------------------------
Использование:
  1. python notebooklm_claude.py login       — авторизация в Google (один раз)
  2. python notebooklm_claude.py run         — запуск основного сценария
"""

import asyncio
import sys
import os
import anthropic
from notebooklm import NotebookLMClient


ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")


async def login():
    """Авторизация в Google NotebookLM через браузер (запускать один раз)."""
    print("Открывается браузер для входа в Google...")
    print("Войди в аккаунт Google и закрой браузер.")
    client = await NotebookLMClient.from_login()
    await client.close()
    print("Авторизация сохранена.")


async def run():
    """Основной сценарий: создать ноутбук, добавить источник, задать вопрос через Claude."""

    if not ANTHROPIC_API_KEY:
        print("Ошибка: установи переменную окружения ANTHROPIC_API_KEY")
        print("  Windows: set ANTHROPIC_API_KEY=sk-ant-...")
        sys.exit(1)

    claude = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

    print("Подключение к NotebookLM...")
    client = await NotebookLMClient.from_storage()

    # 1. Создаём ноутбук
    notebook = await client.notebooks.create(title="Мой исследовательский ноутбук")
    print(f"Ноутбук создан: {notebook.title}")

    # 2. Добавляем источник (URL или текст)
    url = "https://ru.wikipedia.org/wiki/Искусственный_интеллект"
    print(f"Добавляем источник: {url}")
    source = await client.sources.add_url(notebook_id=notebook.id, url=url)
    print(f"Источник добавлен: {source.title}")

    # 3. Задаём вопрос NotebookLM
    user_question = "Что такое искусственный интеллект и каковы его основные направления?"
    print(f"\nВопрос: {user_question}")

    response = await client.chat.ask(notebook_id=notebook.id, message=user_question)
    notebooklm_answer = response.content
    print(f"\nОтвет NotebookLM:\n{notebooklm_answer}\n")

    # 4. Передаём ответ в Claude для анализа / обобщения
    print("Анализируем ответ через Claude...")
    claude_response = claude.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        messages=[
            {
                "role": "user",
                "content": (
                    f"Вот информация из NotebookLM на вопрос '{user_question}':\n\n"
                    f"{notebooklm_answer}\n\n"
                    "Пожалуйста, сделай краткое структурированное резюме на русском языке."
                ),
            }
        ],
    )

    print("Резюме от Claude:")
    print(claude_response.content[0].text)

    await client.close()


if __name__ == "__main__":
    command = sys.argv[1] if len(sys.argv) > 1 else "run"

    if command == "login":
        asyncio.run(login())
    elif command == "run":
        asyncio.run(run())
    else:
        print(f"Неизвестная команда: {command}")
        print("Использование: python notebooklm_claude.py [login|run]")
