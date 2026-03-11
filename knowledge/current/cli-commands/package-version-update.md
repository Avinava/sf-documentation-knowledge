---
title: "package version update"
domain: cli-commands
topic: package-version-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, version, update, Update, version., Description, Examples, Flags, Aliases]
---

# package version update

> Update a package version.

## package version update

Update a package version.

### Description for package version update

Specify a new value for each option you want to update.

To display details about a package version, run "sf package version display".

### Examples for package version update

Update the package version that has the specified alias (that contains spaces) with a new installation key "password123"; uses your default Dev Hub org:

```

```

Update the package version that has the specified ID with a new branch and tag; use the Dev Hub org with username devhub@example.com:

```

```

Update the package version that has the specified ID with a new description:

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

ID (starts with 04t) or alias of the package to update a version of.

Type: option

\-a | \--version-name VERSION-NAME

Optional

New package version name.

Type: option

\-e | \--version-description VERSION-DESCRIPTION

Optional

New package version description.

Type: option

\-b | \--branch BRANCH

Optional

New package version branch.

Type: option

\-t | \--tag TAG

Optional

New package version tag.

Type: option

\-k | \--installation-key INSTALLATION-KEY

Optional

New installation key for key-protected package (default: null)

Type: option

### Aliases for package version update

```

```