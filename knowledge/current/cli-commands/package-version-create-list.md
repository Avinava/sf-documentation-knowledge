---
title: "package version create list"
domain: cli-commands
topic: package-version-create-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T09:49:04.908Z
keywords: [package, version, create, list, List, creation, requests., Description, Examples, Flags, Aliases]
---

# package version create list

> List package version creation requests.

## package version create list

List package version creation requests.

### Description for package version create list

Shows the details of each request to create a package version in the Dev Hub org.

All filter parameters are applied using the AND logical operator (not OR).

To get information about a specific request, run "sf package version create report" and supply the request ID.

### Examples for package version create list

List all package version creation requests in your default Dev Hub org:

```

```

List package version creation requests from the last 3 days in the Dev Hub org with username devhub@example.com:

```

```

List package version creation requests with status Error:

```

```

List package version creation requests with status InProgress:

```

```

List package version creation requests with status Success that were created today:

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

\-c | \--created-last-days CREATED-LAST-DAYS

Optional

Number of days since the request was created, starting at 00:00:00 of first day to now. Use 0 for today.

Type: option

\-s | \--status STATUS

Optional

Status of the version creation request, used to filter the list.

Type: option

Permissible values are: Queued, InProgress, Success, Error

\--show-conversions-only

Optional

Filter the list output to display only converted package version.

Type: boolean

\--verbose

Optional

Displays additional information at a slight performance cost, such as the version name and number for each package version create request.

Type: boolean

### Aliases for package version create list

```

```