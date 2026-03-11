---
title: "apex get log"
domain: cli-commands
topic: apex-get-log
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.029Z
keywords: [apex, get, log, Fetch, specified, given, number, most, recent, logs, org., Description, Examples, Flags, Aliases]
---

# apex get log

> Fetch the specified log or given number of most recent logs from the org.

## apex get log

Fetch the specified log or given number of most recent logs from the org.

### Description for apex get log

To get the IDs for your debug logs, run "sf apex log list". Executing this command without flags returns the most recent log.

### Examples for apex get log

Fetch the log in your default org using an ID:

```

```

Fetch the log in the org with the specified username using an ID:

```

```

Fetch the two most recent logs in your default org:

```

```

Similar to previous example, but save the two log files in the specified directory:

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

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--log-id LOG-ID

Optional

ID of the specific log to display.

Type: option

\-n | \--number NUMBER

Optional

Number of the most recent logs to display.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory for saving the log files.

The location can be an absolute path or relative to the current working directory. The default is the current directory.

Type: option

### Aliases for apex get log

```

```