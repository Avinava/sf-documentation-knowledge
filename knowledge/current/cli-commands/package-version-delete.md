---
title: "package version delete"
domain: cli-commands
topic: package-version-delete
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.319Z
keywords: [package, version, delete, Delete, version., Description, Examples, Flags, Aliases]
---

# package version delete

> Delete a package version.

## package version delete

Delete a package version.

### Description for package version delete

Specify the ID or alias of the package version you want to delete. In second-generation managed packaging, only beta package versions can be deleted. Before deleting a package version, review the considerations outlined in https://developer.salesforce.com/docs/atlas.en-us.pkg2\_dev.meta/pkg2\_dev/sfdx\_dev\_dev2gp\_package\_deletion.htm.

### Examples for package version delete

Delete a package version with the specified alias using your default Dev Hub org:

```

```

Delete a package version with the specified ID using the Dev Hub org with username "devhub@example.com":

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

Don’t prompt before deleting the package version.

Type: boolean

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package version to delete.

Type: option

### Aliases for package version delete

```

```