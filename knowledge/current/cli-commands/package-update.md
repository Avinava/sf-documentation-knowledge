---
title: "package update"
domain: cli-commands
topic: package-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, update, Update, details., Description, Examples, Flags, Aliases]
---

# package update

> Update package details.

## package update

Update package details.

### Description for package update

Specify a new value for each option you want to update.

Run "sf package list" to list all packages in the Dev Hub org.

### Examples for package update

Update the name of the package with the specified alias; uses your default Dev Hub org:

```

```

Update the description of the package with the specified ID; uses the specified Dev Hub org:

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

ID (starts with 0Ho) or alias of the package to update.

Type: option

\-n | \--name NAME

Optional

New name of the package.

Type: option

\-d | \--description DESCRIPTION

Optional

New description of the package.

Type: option

\-o | \--error-notification-username ERROR-NOTIFICATION-USERNAME

Optional

Active Dev Hub user designated to receive email notifications for package errors.

Email notifications include information about unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package.

Type: option

\--enable-app-analytics

Optional

Enable AppExchange App Analytics usage data collection on this managed package and its components.

Type: boolean

\-r | \--recommended-version-id RECOMMENDED-VERSION-ID

Optional

ID of the package version that's installed when subscribers click the Upgrade to Recommended Version option on the Installed Packages page of their org.

Specify the recommended package version for subscribers to install. If a subscriber has a package version installed in their org that's lower than the version you set, the subscriber sees the Upgrade to Recommended Version option on the Installed Packages page. Only released package versions can be set as the recommended version.

Type: option

\--skip-ancestor-check

Optional

Bypass the ancestry check for setting a recommended version.

Type: boolean

### Aliases for package update

```

```