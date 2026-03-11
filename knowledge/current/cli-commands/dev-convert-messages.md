---
title: "dev convert messages"
domain: cli-commands
topic: dev-convert-messages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.148Z
keywords: [dev, convert, messages, Convert, .json, file, Markdown., Description, Examples, Flags]
---

# dev convert messages

> Convert a .json messages file into Markdown.

## dev convert messages

Convert a .json messages file into Markdown.

### Description for dev convert messages

Preserves the filename and the original messages file, then creates a new file with the Markdown extension and standard headers for the command and flag summaries, descriptions, and so on. After you review the new Markdown file, delete the old .json file.

### Examples for dev convert messages

Convert the my-command.json message file into my-command.md with the standard messages headers:

```

```

Similar to previous example, but specify the plugin project directory:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-p | \--project-dir PROJECT-DIR

Optional

Location of the project whose messages are to be converted.

Type: option

Default value: .

\-f | \--file-name FILE-NAME

Required

Filename to convert.

Type: option