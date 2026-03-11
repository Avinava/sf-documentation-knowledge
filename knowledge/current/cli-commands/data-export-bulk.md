---
title: "data export bulk"
domain: cli-commands
topic: data-export-bulk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.138Z
keywords: [data, export, bulk, Bulk, records, org, file, SOQL, query., Uses, API, 2.0., Description, Examples, Flags]
---

# data export bulk

> Bulk export records from an org into a file using a SOQL query. Uses Bulk API 2.0.

## data export bulk

Bulk export records from an org into a file using a SOQL query. Uses Bulk API 2.0.

### Description for data export bulk

You can use this command to export millions of records from an org, either to migrate data or to back it up.

Use a SOQL query to specify the fields of a standard or custom object that you want to export. Specify the SOQL query either at the command line with the --query flag or read it from a file with the --query-file flag; you can't specify both flags. The --output-file flag is required, which means you can only write the records to a file, in either CSV or JSON format.

Bulk exports can take a while, depending on how many records are returned by the SOQL query. If the command times out, the command displays the job ID. To see the status and get the results of the job, run "sf data export resume" and pass the job ID to the --job-id flag.

IMPORTANT: This command uses Bulk API 2.0, which limits the type of SOQL queries you can run. For example, you can't use aggregate functions such as count(). For the complete list of limitations, see the "SOQL Considerations" section in the "Bulk API 2.0 and Bulk API Developer Guide" (https://developer.salesforce.com/docs/atlas.en-us.api\_asynch.meta/api\_asynch/queries.htm).

### Examples for data export bulk

Export the Id, Name, and Account.Name fields of the Contact object into a CSV-formatted file; if the export doesn't complete in 10 minutes, the command ends and displays a job ID. Use the org with alias "my-scratch":

```

```

Similar to previous example, but use the default org, export the records into a JSON-formatted file, and include records that have been soft deleted:

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

\-w | \--wait WAIT

Optional

Time to wait for the command to finish, in minutes.

Type: option

\-q | \--query QUERY

Optional

SOQL query to execute.

Type: option

\--query-file QUERY-FILE

Optional

File that contains the SOQL query.

Type: option

\--all-rows

Optional

Include records that have been soft-deleted due to a merge or delete. By default, deleted records are not returned.

Type: boolean

\--output-file OUTPUT-FILE

Required

File where records are written.

Type: option

\-r | \--result-format RESULT-FORMAT

Required

Format to write the results.

Type: option

Permissible values are: csv, json

Default value: csv

\--column-delimiter COLUMN-DELIMITER

Optional

Column delimiter to be used when writing CSV output. Default is COMMA.

Type: option

Permissible values are: BACKQUOTE, CARET, COMMA, PIPE, SEMICOLON, TAB

\--line-ending LINE-ENDING

Optional

Line ending to be used when writing CSV output. Default value on Windows is is \`CRLF\`; on macOS and Linux it's \`LR\`.

Type: option

Permissible values are: LF, CRLF