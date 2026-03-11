---
title: "data upsert bulk"
domain: cli-commands
topic: data-upsert-bulk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, upsert, bulk, Bulk, records, org, CSV, file., Uses, API, 2.0., Description, Examples, Flags]
---

# data upsert bulk

> Bulk upsert records to an org from a CSV file. Uses Bulk API 2.0.

## data upsert bulk

Bulk upsert records to an org from a CSV file. Uses Bulk API 2.0.

### Description for data upsert bulk

An upsert refers to inserting a record into a Salesforce object if the record doesn't already exist, or updating it if it does exist.

When you execute this command, it starts a job, displays the ID, and then immediately returns control of the terminal to you by default. If you prefer to wait, set the --wait flag to the number of minutes; if it times out, the command outputs the IDs. Use the job and batch IDs to check the status of the job with the "sf data upsert resume" command.

See "Prepare CSV Files" in the Bulk API Developer Guide for details on formatting your CSV file. (https://developer.salesforce.com/docs/atlas.en-us.api\_asynch.meta/api\_asynch/datafiles\_prepare\_csv.htm)

### Examples for data upsert bulk

Bulk upsert records to the Contact object in your default org:

```

```

Bulk upsert records to a custom object in an org with alias my-scratch and wait 5 minutes for the command to complete:

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

\--column-delimiter COLUMN-DELIMITER

Optional

Column delimiter used in the CSV file.

Type: option

Permissible values are: BACKQUOTE, CARET, COMMA, PIPE, SEMICOLON, TAB

\-i | \--external-id EXTERNAL-ID

Required

Name of the external ID field, or the Id field.

Type: option