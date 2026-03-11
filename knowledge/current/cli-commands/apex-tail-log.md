---
title: "apex tail log"
domain: cli-commands
topic: apex-tail-log
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:31.029Z
keywords: [apex, tail, log, Activate, debug, logging, display, logs, terminal., Description, Examples, Flags, Aliases]
---

# apex tail log

> Activate debug logging and display logs in the terminal.

## apex tail log

Activate debug logging and display logs in the terminal.

### Description for apex tail log

You can also pipe the logs to a file.

### Examples for apex tail log

Activate debug logging:

```

```

Specify a debug level:

```

```

Skip the trace flag setup and apply default colors:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-c | \--color

Optional

Apply default colors to noteworthy log lines.

Type: boolean

\-d | \--debug-level DEBUG-LEVEL

Optional

Debug level to set on the DEVELOPER\_LOG trace flag for your user.

Type: option

\-s | \--skip-trace-flag

Optional

Skip trace flag setup. Assumes that a trace flag and debug level are fully set up.

Type: boolean

### Aliases for apex tail log

```

```