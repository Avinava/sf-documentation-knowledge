---
title: "data update bulk"
domain: cli-commands
topic: data-update-bulk
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, update, bulk, Bulk, records, org, CSV, file., Uses, API, 2.0., Description, Examples, Flags]
---

# data update bulk

> Bulk update records to an org from a CSV file. Uses Bulk API 2.0.

## data update bulk

Bulk update records to an org from a CSV file. Uses Bulk API 2.0.

### Description for data update bulk

You can use this command to update millions of Salesforce object records based on a file in comma-separated values (CSV) format.

All the records in the CSV file must be for the same Salesforce object. Specify the object with the \`--sobject\` flag. The first column of every line in the CSV file must be an ID of the record you want to update. The CSV file can contain only existing records; if a record in the file doesn't currently exist in the Salesforce object, the command fails. Consider using "sf data upsert bulk" if you also want to insert new records.

Bulk updates can take a while, depending on how many records are in the CSV file. If the command times out, the command displays the job ID. To see the status and get the results of the job, run "sf data update resume" and pass the job ID to the --job-id flag.

For information and examples about how to prepare your CSV files, see "Prepare Data to Ingest" in the "Bulk API 2.0 and Bulk API Developer Guide" (https://developer.salesforce.com/docs/atlas.en-us.api\_asynch.meta/api\_asynch/datafiles\_prepare\_data.htm).

### Examples for data update bulk

Update Account records from a CSV-formatted file into an org with alias "my-scratch"; if the update doesn't complete in 10 minutes, the command ends and displays a job ID:

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

\-w | \--wait WAIT

Optional

Time to wait for the command to finish, in minutes.

Type: option

\-f | \--file FILE

Required

CSV file that contains the Salesforce object records you want to update.

Type: option

\-s | \--sobject SOBJECT

Required

API name of the Salesforce object, either standard or custom, which you are updating.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--line-ending LINE-ENDING

Optional

Line ending used in the CSV file. Default value on Windows is \`CRLF\`; on macOS and Linux it's \`LF\`.

Type: option

Permissible values are: CRLF, LF

\--column-delimiter COLUMN-DELIMITER

Optional

Column delimiter used in the CSV file.

Type: option

Permissible values are: BACKQUOTE, CARET, COMMA, PIPE, SEMICOLON, TAB