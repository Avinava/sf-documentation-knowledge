---
title: "package uninstall report"
domain: cli-commands
topic: package-uninstall-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.319Z
keywords: [package, uninstall, report, Retrieve, status, request., Examples, Flags, Aliases]
---

# package uninstall report

> Retrieve the status of a package uninstall request.

## package uninstall report

Retrieve the status of a package uninstall request.

### Examples for package uninstall report

Retrieve the status of a package uninstall in your default org using the specified request ID:

```

```

Similar to previous example, but use the org with username me@example.com:

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

\-i | \--request-id REQUEST-ID

Required

ID of the package uninstall request you want to check; starts with 06y.

Type: option

### Aliases for package uninstall report

```

```