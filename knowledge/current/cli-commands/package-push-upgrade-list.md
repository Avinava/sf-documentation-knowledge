---
title: "package push-upgrade list"
domain: cli-commands
topic: package-push-upgrade-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T10:26:31.318Z
keywords: [package, push-upgrade, list, Lists, status, push, upgrade, requests, given, package., Description, Examples, Flags, Aliases]
---

# package push-upgrade list

> Lists the status of push upgrade requests for a given package.

## package push-upgrade list

Lists the status of push upgrade requests for a given package.

### Description for package push-upgrade list

Shows the details of each request to create a push upgrade in the Dev Hub org.

All filter parameters are applied using the AND logical operator (not OR).

To get information about a specific request, run "sf package pushupgrade report" and supply the request ID.

### Examples for package push-upgrade list

List all package push upgrade requests in the specified Dev Hub org:

```

```

List all package push upgrade requests in the specified Dev Hub org scheduled in the last 30 days:

```

```

List all package push upgrade with a status Succeeded:

```

```

List all package push upgrade with a status Failed:

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

Package ID (starts with 033) of the package that you want push upgrade information for.

Type: option

\-l | \--scheduled-last-days SCHEDULED-LAST-DAYS

Optional

Number of days in the past for which to display the list of push upgrade requests that were scheduled. Used to filter the list output to only recently scheduled push upgrades.

Type: option

\-s | \--status STATUS

Optional

Status used to filter the list output Valid values are: Created, Canceled, Pending, In Progress, Failed, or Succeeded

Type: option

Permissible values are: Created, Cancelled, Pending, In Progress, Failed, Succeeded

\--show-push-migrations-only

Optional

Display only push upgrade requests for package migrations.

Type: boolean

### Aliases for package push-upgrade list

```

```