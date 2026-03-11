---
title: "data delete bulk"
domain: cli-commands
topic: data-delete-bulk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, delete, bulk, Bulk, records, org, CSV, file., Uses, API, 2.0., Description, Examples, Flags]
---

# data delete bulk

> Bulk delete records from an org using a CSV file. Uses Bulk API 2.0.

## data delete bulk

Bulk delete records from an org using a CSV file. Uses Bulk API 2.0.

### Description for data delete bulk

The CSV file must have only one column ("Id") and then the list of record IDs you want to delete, one ID per line.

When you execute this command, it starts a job, displays the ID, and then immediately returns control of the terminal to you by default. If you prefer to wait, set the --wait flag to the number of minutes; if it times out, the command outputs the IDs. Use the job ID to check the status of the job with the "sf data delete resume" command.

### Examples for data delete bulk

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

CSV file that contains the IDs of the records to update or delete.

Type: option

\-s | \--sobject SOBJECT

Required

API name of the Salesforce object, either standard or custom, that you want to update or delete records from.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete before displaying the results.

Type: option

\--line-ending LINE-ENDING

Optional

Line ending used in the CSV file. Default value on Windows is \`CRLF\`; on macOS and Linux it's \`LF\`.

Type: option

Permissible values are: CRLF, LF

\--hard-delete

Optional

Mark the records as immediately eligible for deletion by your org. If you don't specify this flag, the deleted records go into the Recycle Bin.

You must have the "Bulk API Hard Delete" system permission to use this flag. The permission is disabled by default and can be enabled only by a system administrator.

Type: boolean