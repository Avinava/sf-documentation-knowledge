---
title: "package version list"
domain: cli-commands
topic: package-version-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.319Z
keywords: [package, version, list, List, versions, Dev, Hub, org., Description, Examples, Flags, Aliases]
---

# package version list

> List all package versions in the Dev Hub org.

## package version list

List all package versions in the Dev Hub org.

### Description for package version list

Description

### Examples for package version list

List package versions in your default Dev Hub org that were created in the last 3 days; show only the released versions and order the list using the PatchVersion field. Display extended details about each package version:

```

```

List the released package versions for the two specified packages that were modified today; use the Dev Hub org with username devhub@example.com:

```

```

List all released package versions in your default Dev Hub org:

```

```

List package versions that were modified today in your default Dev Hub org; show limited details about each one:

```

```

List package versions that are based on the "featureA" branch in your source control system that were modified today in your default Dev Hub org; show limited details about each one:

```

```

List released package versions that were created in the last 3 days in your default Dev Hub org; show limited details:

```

```

List released package versions that were modified today for the two packages with specified aliases in your default Dev Hub org:

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

\--concise

Optional

Display limited package version details.

Type: boolean

\--show-conversions-only

Optional

Filter the list output to display only converted package version.

Type: boolean

\-m | \--modified-last-days MODIFIED-LAST-DAYS

Optional

Number of days since the items were modified, starting at 00:00:00 of first day to now. Use 0 for today.

Type: option

\-p | \--packages PACKAGES

Optional

Comma-delimited list of packages (aliases or 0Ho IDs) to list.

Type: option

\-r | \--released

Optional

Display released versions only (IsReleased=true).

Type: boolean

\-b | \--branch BRANCH

Optional

Branch in your source control system used to filter the results; only package versions based on the specified branch are listed.

Type: option

\-o | \--order-by ORDER-BY

Optional

Package version fields used to order the list.

Type: option

\--verbose

Optional

Display extended package version details.

Type: boolean

### Aliases for package version list

```

```