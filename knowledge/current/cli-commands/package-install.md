---
title: "package install"
domain: cli-commands
topic: package-install
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.907Z
keywords: [package, install, Install, upgrade, version, target, org., Description, Examples, Flags, Aliases]
---

# package install

> Install or upgrade a version of a package in the target org.

## package install

Install or upgrade a version of a package in the target org.

### Description for package install

To install or upgrade a package, specify a specific version of the package using the 04t package ID. The package and the version you specified installs in your default target org unless you supply the username for a different target org.

When upgrading an unlocked package, include the --upgrade-type value to specify whether any removed components are deprecated or deleted. To delete components that can be safely deleted and deprecate the others, specify "--upgrade-type Mixed" (the default). To deprecate all removed components, specify "--upgrade-type DeprecateOnly". To delete all removed components, except for custom objects and custom fields, that don't have dependencies, specify "--upgrade-type Delete". (Note: This option can result in the loss of data that is associated with the deleted components.)

### Examples for package install

Install or upgrade a package version with the specified ID in the org with username "me@example.com":

```

```

Install or upgrade a package version with the specified alias into your default org:

```

```

Install or upgrade a package version with an alias that includes spaces into your default org:

```

```

Upgrade an unlocked package version with the specified ID and deprecate all removed components:

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

Number of minutes to wait for installation status.

Type: option

Default value: 0 minutes

\-k | \--installation-key INSTALLATION-KEY

Optional

Installation key for key-protected package (default: null).

Type: option

\-b | \--publish-wait PUBLISH-WAIT

Optional

Maximum number of minutes to wait for the Subscriber Package Version ID to become available in the target org before canceling the install request.

Type: option

Default value: 0 minutes

\-r | \--no-prompt

Optional

Don't prompt for confirmation.

Allows the following without an explicit confirmation response: 1) Remote Site Settings and Content Security Policy websites to send or receive data, and 2) --upgrade-type Delete to proceed.

Type: boolean

\-p | \--package PACKAGE

Required

ID (starts with 04t) or alias of the package version to install.

Type: option

\-a | \--apex-compile APEX-COMPILE

Optional

Compile all Apex in the org and package, or only Apex in the package; unlocked packages only.

Applies to unlocked packages only. Specifies whether to compile all Apex in the org and package, or only the Apex in the package.

For package installs into production orgs, or any org that has Apex Compile on Deploy enabled, the platform compiles all Apex in the org after the package install or upgrade operation completes.

This approach assures that package installs and upgrades don’t impact the performance of an org, and is done even if --apex-compile package is specified.

Type: option

Permissible values are: all, package

Default value: all

\-s | \--security-type SECURITY-TYPE

Optional

Security access type for the installed package. Available options are AdminsOnly and AllUsers.

Type: option

Permissible values are: AllUsers, AdminsOnly

Default value: AdminsOnly

\-t | \--upgrade-type UPGRADE-TYPE

Optional

Upgrade type for the package installation; available only for unlocked packages.

For unlocked package upgrades, set this flag to one of these values:

\- DeprecateOnly: Mark all removed components as deprecated.

\- Mixed: Delete all removed components that can be safely deleted and deprecate the other components.

\- Delete: Delete removed components, except for custom objects and custom fields, that don't have dependencies.

Type: option

Permissible values are: DeprecateOnly, Mixed, Delete

Default value: Mixed

### Aliases for package install

```

```