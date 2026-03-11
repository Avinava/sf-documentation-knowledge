---
title: "dev audit messages"
domain: cli-commands
topic: dev-audit-messages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.701Z
keywords: [dev, audit, messages, Audit, plugin's, directory, locate, unused, missing, references, source, code., Examples, Flags]
---

# dev audit messages

> Audit messages in a plugin's messages directory to locate unused messages and missing messages that have references in source code.

## dev audit messages

Audit messages in a plugin's messages directory to locate unused messages and missing messages that have references in source code.

### Examples for dev audit messages

Audit messages using default directories:

```

```

Audit messages in the "messages" directory in the current working directory; the plugin's source directory is in "src":

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

Location of the project where messages are to be audited.

Type: option

Default value: .

\-m | \--messages-dir MESSAGES-DIR

Optional

Directory that contains the plugin's message files.

The default is the "messages" directory in the current working directory.

Type: option

Default value: messages

\-s | \--source-dir SOURCE-DIR

Optional

Directory that contains the plugin's source code.

The default is the "src" directory in the current working directory.

Type: option

Default value: src