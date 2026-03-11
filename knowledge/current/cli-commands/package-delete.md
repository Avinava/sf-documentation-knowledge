---
title: "package delete"
domain: cli-commands
topic: package-delete
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.318Z
keywords: [package, delete, Delete, package., Description, Examples, Flags, Aliases]
---

# package delete

> Delete a package.

## package delete

Delete a package.

### Description for package delete

Specify the ID or alias of the package you want to delete.

Delete unlocked and second-generation managed packages. Before you delete a package, first delete all associated package versions.

### Examples for package delete

Delete a package using its alias from your default Dev Hub org:

```

```

Delete a package using its ID from the specified Dev Hub org:

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

\-n | \--no-prompt

Optional

Don't prompt before deleting the package.

Type: boolean

\-p | \--package PACKAGE

Required

ID (starts with 0Ho) or alias of the package to delete.

Type: option

### Aliases for package delete

```

```