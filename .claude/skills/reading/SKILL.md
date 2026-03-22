---
name: reading
description: Read and summarize content from files, documents, and web pages. Use when the user wants to read, analyze, or extract information from SVG files, HTML, text files, code, or other documents. Trigger words: "прочитай", "read", "открой файл", "что в файле", "summary of", "summarize".
---

# Reading Skill

Read, analyze, and summarize content from files and documents.

## Supported File Types

- **SVG** — vector graphics, extract structure, paths, elements
- **HTML/CSS/JS** — web pages, styles, scripts
- **Text files** — plain text, markdown, logs
- **Code files** — any programming language
- **JSON/XML/YAML** — data and config files

## Workflow

Make a todo list for all the tasks in this workflow and work through them one by one.

### 1. Identify the Target

Determine what the user wants to read:
- A specific file path provided by the user
- A file matching a pattern in the project
- Multiple files for comparison

### 2. Read the File

Use the Read tool for file content. For large files, read in chunks using `offset` and `limit`.

For SVG files specifically:
```
Read the SVG file and analyze:
- Root <svg> element attributes (viewBox, width, height, xmlns)
- Top-level child elements (g, path, rect, circle, text, etc.)
- Identified groups and their IDs/classes
- Any embedded styles or scripts
- Overall structure and complexity
```

### 3. Analyze Content

After reading:
- Identify the file type and purpose
- Extract key information relevant to the user's question
- Note any important patterns, issues, or notable elements

### 4. Summarize

Provide a clear summary:
- **Purpose**: What the file does / contains
- **Structure**: How it is organized
- **Key elements**: Most important parts
- **Size/complexity**: Number of lines, elements, sections

## Example Interactions

**User**: "Прочитай файл logo.svg"
→ Read the SVG, report dimensions, element count, structure, any text content

**User**: "Что в файле config.json?"
→ Read and summarize the JSON configuration keys and values

**User**: "Открой и объясни index.html"
→ Read the HTML, describe the page structure, scripts, styles, and content

## Output Format

```
## Файл: [filename]
**Тип**: [file type]
**Размер**: [lines/elements count]

### Структура
[description of structure]

### Ключевые элементы
- [element 1]
- [element 2]

### Содержимое
[summary of content]
```

## Notes

- Always read the file before describing it — never guess content
- For binary or image files, note that they cannot be read as text
- If the file is very large, offer to read specific sections
- Respond in the same language the user used (Russian or English)
