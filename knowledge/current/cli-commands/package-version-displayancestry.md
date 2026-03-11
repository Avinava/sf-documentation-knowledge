---
title: "package version displayancestry"
domain: cli-commands
topic: package-version-displayancestry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.319Z
keywords: [package, version, displayancestry, Display, ancestry, tree, 2GP, managed, version., Examples, Flags, Aliases]
---

# package version displayancestry

> Display the ancestry tree for a 2GP managed package version.

## package version displayancestry

Display the ancestry tree for a 2GP managed package version.

### Examples for package version displayancestry

Display the ancestry tree for a package version with the specified alias, using your default Dev Hub org:

```

```

Similar to previous example, but display the output in DOT code:

```

```

Display the ancestry tree for a package with the specified ID, using the Dev Hub org with username devhub@example.com:

```

```

Display the ancestry tree of a package version with the specified ID, using your default Dev Hub org:

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

ID or alias of the package (starts with 0Ho) or package version (starts with 04t) to display ancestry for.

If you specify a package ID (starts with 0Ho) or alias, the ancestor tree for every package version associated with the package ID is displayed. If you specify a package version (starts with 04t) or alias, the ancestry tree of the specified package version is displayed.

Type: option

\--dot-code

Optional

Display the ancestry tree in DOT code.

You can use the DOT code output in graph visualization software to create tree visualizations.

Type: boolean

\--verbose

Optional

Display both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in the ancestry tree.

Type: boolean

### Aliases for package version displayancestry

```

```