---
title: "package version create report"
domain: cli-commands
topic: package-version-create-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, version, create, report, Retrieve, details, creation, request., Description, Examples, Flags, Aliases]
---

# package version create report

> Retrieve details about a package version creation request.

## package version create report

Retrieve details about a package version creation request.

### Description for package version create report

Specify the request ID for which you want to view details. If applicable, the command displays errors related to the request.

To show all requests in the org, run "sf package version create list".

### Examples for package version create report

Retrieve details about the package version creation request with the specified ID; uses your default Dev Hub org:

```

```

Retrieve details about the specified package version creation request in the Dev Hub org with username devhub@example.com:

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

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-i | \--package-create-request-id PACKAGE-CREATE-REQUEST-ID

Required

ID (starts with 08c) of the package version creation request you want to display.

Type: option

### Aliases for package version create report

```

```