---
title: "org list sobject record-counts"
domain: cli-commands
topic: org-list-sobject-record-counts
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, list, sobject, record-counts, Display, record, counts, specified, standard, custom, objects., Description, Examples, Flags, Aliases]
---

# org list sobject record-counts

> Display record counts for the specified standard or custom objects.

## org list sobject record-counts

Display record counts for the specified standard or custom objects.

### Description for org list sobject record-counts

Use this command to get an approximate count of the records in standard or custom objects in your org. These record counts are the same as the counts listed in the Storage Usage page in the Setup UI. The record counts are approximate because they're calculated asynchronously and your org's storage usage isn't updated immediately. To display all available record counts, run the command without the --sobject flag.

### Examples for org list sobject record-counts

Display all available record counts in your default org:

```

```

Display record counts for the Account, Contact, Lead, and Opportunity objects in your default org:

```

```

Display record counts for the Account and Lead objects for the org with alias "my-scratch-org":

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

\-s | \--sobject SOBJECT

Optional

API name of the standard or custom object for which to display record counts.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

### Aliases for org list sobject record-counts

```

```

```

```