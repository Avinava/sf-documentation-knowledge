---
title: "package version report"
domain: cli-commands
topic: package-version-report
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, version, report, Retrieve, details, Dev, Hub, org., Description, Examples, Flags, Aliases]
---

# package version report

> Retrieve details about a package version in the Dev Hub org.

## package version report

Retrieve details about a package version in the Dev Hub org.

### Description for package version report

To update package version values, run "sf package version update".

### Examples for package version report

Retrieve details about the package version with the specified ID from your default Dev Hub org:

```

```

Retrieve details about the package version with the specified alias (that contains spaces) from the Dev Hub org with username devhub@example.com:

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

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package to retrieve details for.

Type: option

\--verbose

Optional

Display extended package version details.

Type: boolean

### Aliases for package version report

```

```