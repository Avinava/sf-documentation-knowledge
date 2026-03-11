---
title: "package install report"
domain: cli-commands
topic: package-install-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.907Z
keywords: [package, install, report, Retrieve, status, installation, request., Examples, Flags, Aliases]
---

# package install report

> Retrieve the status of a package installation request.

## package install report

Retrieve the status of a package installation request.

### Examples for package install report

Retrieve the status of a package installation request with the specified ID on your default org:

```

```

Similar to previous example, except use the org with username me@example.com:

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

ID of the package install request you want to check; starts with 0Hf.

Type: option

### Aliases for package install report

```

```