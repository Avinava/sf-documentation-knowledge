---
title: "apex list log"
domain: cli-commands
topic: apex-list-log
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.029Z
keywords: [apex, list, log, Display, IDs, general, information, debug, logs., Description, Examples, Flags, Aliases]
---

# apex list log

> Display a list of IDs and general information about debug logs.

## apex list log

Display a list of IDs and general information about debug logs.

### Description for apex list log

Run this command in a project to list the IDs and general information for all debug logs in your default org.

To fetch a specific log from your org, obtain the ID from this command's output, then run the “sf apex log get” command.

### Examples for apex list log

List the IDs and information about the debug logs in your default org:

```

```

Similar to previous example, but use the org with the specified username:

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

### Aliases for apex list log

```

```