---
title: "package uninstall"
domain: cli-commands
topic: package-uninstall
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:31.319Z
keywords: [package, uninstall, Uninstall, second-generation, target, org., Description, Examples, Flags, Aliases]
---

# package uninstall

> Uninstall a second-generation package from the target org.

## package uninstall

Uninstall a second-generation package from the target org.

### Description for package uninstall

Specify the package ID for a second-generation package.

To list the org’s installed packages, run "sf package installed list".

To uninstall a first-generation package, from Setup, enter Installed Packages in the Quick Find box, then select Installed Packages.

### Examples for package uninstall

Uninstall a package with specified ID from an org with username me@example.com:

```

```

Uninstall a package with the specified alias from your default org:

```

```

Uninstall a package with an alias that contains spaces from your default org:

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

\-w | \--wait WAIT

Optional

Number of minutes to wait for uninstall status.

Type: option

Default value: 0 minutes

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package version to uninstall.

Type: option

### Aliases for package uninstall

```

```