---
title: "data import bulk"
domain: cli-commands
topic: data-import-bulk
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:31.138Z
keywords: [data, import, bulk, Bulk, records, Salesforce, object, CSV, file., Uses, API, 2.0., Description, Examples, Flags]
---

# data import bulk

> Bulk import records into a Salesforce object from a CSV file. Uses Bulk API 2.0.

## data import bulk

Bulk import records into a Salesforce object from a CSV file. Uses Bulk API 2.0.

### Description for data import bulk

You can use this command to import millions of records into the object from a file in comma-separated values (CSV) format.

All the records in the CSV file must be for the same Salesforce object. Specify the object with the \`--sobject\` flag.

Bulk imports can take a while, depending on how many records are in the CSV file. If the command times out, the command displays the job ID. To see the status and get the results of the job, run "sf data import resume" and pass the job ID to the --job-id flag.

For information and examples about how to prepare your CSV files, see "Prepare Data to Ingest" in the "Bulk API 2.0 and Bulk API Developer Guide" (https://developer.salesforce.com/docs/atlas.en-us.api\_asynch.meta/api\_asynch/datafiles\_prepare\_data.htm).

### Examples for data import bulk

Import Account records from a CSV-formatted file into an org with alias "my-scratch"; if the import doesn't complete in 10 minutes, the command ends and displays a job ID:

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

\-f | \--file FILE

Required

CSV file that contains the Salesforce object records you want to import.

Type: option

\-s | \--sobject SOBJECT

Required

API name of the Salesforce object, either standard or custom, into which you're importing records.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-w | \--wait WAIT

Optional

Time to wait for the command to finish, in minutes.

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