---
title: "force data bulk delete"
domain: cli-commands
topic: force-data-bulk-delete
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.728Z
keywords: [force, data, bulk, delete, Bulk, records, org, CSV, file., Uses, API, 1.0., Description, Examples, Flags]
---

# force data bulk delete

> Bulk delete records from an org using a CSV file. Uses Bulk API 1.0.

## force data bulk delete

Bulk delete records from an org using a CSV file. Uses Bulk API 1.0.

### Description for force data bulk delete

The CSV file must have only one column ("Id") and then the list of record IDs you want to delete, one ID per line.

When you execute this command, it starts a job and one or more batches, displays their IDs, and then immediately returns control of the terminal to you by default. If you prefer to wait, set the --wait flag to the number of minutes; if it times out, the command outputs the IDs. Use the job and batch IDs to check the status of the job with the "sf force data bulk status" command. A single job can contain many batches, depending on the length of the CSV file.

### Examples for force data bulk delete

Bulk delete Account records from your default org using the list of IDs in the "files/delete.csv" file:

```

```

Bulk delete records from a custom object in an org with alias my-scratch and wait 5 minutes for the command to complete:

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

\-f | \--file FILE

Required

CSV file that contains the IDs of the records to delete.

Type: option

\-s | \--sobject SOBJECT

Required

API name of the Salesforce object, either standard or custom, that you want to delete records from.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete before displaying the results.

Type: option