---
title: "data Commands"
domain: cli-commands
topic: data-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:03.176Z
estimatedTokens: 11358
keywords: [data, Commands, Get, results, bulk, ingest, job, previously, ran., Description, Examples, Flags, create, file, record, Aliases, delete, resume, export, tree]
---

# data Commands

> Get the results of a bulk ingest job that you previously ran.

# data Commands

Manage records in your org.

-   **[data bulk results](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_bulk_results_unified)**
    Get the results of a bulk ingest job that you previously ran.
-   **[data create file](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_create_file_unified)**
    Upload a local file to an org.
-   **[data create record](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_create_record_unified)**
    Create and insert a record into a Salesforce or Tooling API object.
-   **[data delete bulk](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_delete_bulk_unified)**
    Bulk delete records from an org using a CSV file. Uses Bulk API 2.0.
-   **[data delete record](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_delete_record_unified)**
    Deletes a single record from a Salesforce or Tooling API object.
-   **[data delete resume](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_delete_resume_unified)**
    Resume a bulk delete job that you previously started. Uses Bulk API 2.0.
-   **[data export bulk](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_export_bulk_unified)**
    Bulk export records from an org into a file using a SOQL query. Uses Bulk API 2.0.
-   **[data export resume](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_export_resume_unified)**
    Resume a bulk export job that you previously started. Uses Bulk API 2.0.
-   **[data export tree](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_export_tree_unified)**
    Export data from an org into one or more JSON files.
-   **[data get record](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_get_record_unified)**
    Retrieve and display a single record of a Salesforce or Tooling API object.
-   **[data import bulk](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_import_bulk_unified)**
    Bulk import records into a Salesforce object from a CSV file. Uses Bulk API 2.0.
-   **[data import resume](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_import_resume_unified)**
    Resume a bulk import job that you previously started. Uses Bulk API 2.0.
-   **[data import tree](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_import_tree_unified)**
    Import data from one or more JSON files into an org.
-   **[data query](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_query_unified)**
    Execute a SOQL query.
-   **[data resume](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_resume_unified)**
    View the status of a bulk data load job or batch.
-   **[data search](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_search_unified)**
    Execute a SOSL text-based search query.
-   **[data update bulk](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_update_bulk_unified)**
    Bulk update records to an org from a CSV file. Uses Bulk API 2.0.
-   **[data update record](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_update_record_unified)**
    Updates a single record of a Salesforce or Tooling API object.
-   **[data update resume](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_update_resume_unified)**
    Resume a bulk update job that you previously started. Uses Bulk API 2.0.
-   **[data upsert bulk](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_upsert_bulk_unified)**
    Bulk upsert records to an org from a CSV file. Uses Bulk API 2.0.
-   **[data upsert resume](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm#cli_reference_data_upsert_resume_unified)**
    Resume a bulk upsert job that you previously started. Uses Bulk API 2.0.

## data bulk results

Get the results of a bulk ingest job that you previously ran.

### Description for data bulk results

Use this command to get the complete results after running one of the CLI commands that uses Bulk API 2.0 to ingest (import, update, upsert, or delete) large datasets to your org, such as "data import bulk". The previously-run bulk command must have completed; if it's still processing, run the corresponding resume command first, such as "data import resume." Make note of the job ID of the previous bulk command because you use it to run this command.

You can also use this command to get results from running a bulk ingest job with a different tool, such as Data Loader, as long as you have the job ID. For information on Data Loader, see https://developer.salesforce.com/docs/atlas.en-us.dataLoader.meta/dataLoader/data\_loader\_intro.htm.

This command first displays the status of the previous bulk job, the operation that was executed in the org (such as insert or hard delete), and the updated Salesforce object. The command then displays how many records were processed in total, and how many were successful or failed. Finally, the output displays the names of the generated CSV-formatted files that contain the specific results for each ingested record. Depending on the success or failure of the bulk command, the results files can include the IDs of inserted records or the specific errors. When possible, if the ingest job failed or was aborted, you also get a CSV file with the unprocessed results.

### Examples for data bulk results

Get results from a bulk ingest job; use the org with alias "my-scratch":

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

\-i | \--job-id JOB-ID

Required

Job ID of the bulk job.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

## data create file

Upload a local file to an org.

### Description for data create file

This command always creates a new file in the org; you can't update an existing file. After a successful upload, the command displays the ID of the new ContentDocument record which represents the uploaded file.

By default, the uploaded file isn't attached to a record; in the Salesforce UI the file shows up in the Files tab. You can optionally attach the file to an existing record, such as an account, as long as you know its record ID.

You can also give the file a new name after it's been uploaded; by default its name in the org is the same as the local file name.

### Examples for data create file

Upload the local file "resources/astro.png" to your default org:

```

```

Give the file a different filename after it's uploaded to the org with alias "my-scratch":

```

```

Attach the file to a record in the org:

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

\-t | \--title TITLE

Optional

New title given to the file (ContentDocument) after it's uploaded.

Type: option

\-f | \--file FILE

Required

Path of file to upload.

Type: option

\-i | \--parent-id PARENT-ID

Optional

ID of the record to attach the file to.

Type: option

## data create record

Create and insert a record into a Salesforce or Tooling API object.

### Description for data create record

You must specify a value for all required fields of the object.

When specifying fields, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of double quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

This command inserts a record into Salesforce objects by default. Use the --use-tooling-api flag to insert into a Tooling API object.

### Examples for data create record

Insert a record into the Account object of your default org; only the required Name field has a value:

```

```

Insert an Account record with values for two fields, one value contains a space; the command uses the org with alias "my-scratch":

```

```

Insert a record into the Tooling API object TraceFlag:

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

\-s | \--sobject SOBJECT

Required

API name of the Salesforce or Tooling API object that you're inserting a record into.

Type: option

\-v | \--values VALUES

Required

Values for the flags in the form <fieldName>=<value>, separate multiple pairs with spaces.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API so you can insert a record in a Tooling API object.

Type: boolean

### Aliases for data create record

```

```

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

## data delete record

Deletes a single record from a Salesforce or Tooling API object.

### Description for data delete record

Specify the record you want to delete with either its ID or with a list of field-value pairs that identify the record. If your list of fields identifies more than one record, the delete fails; the error displays how many records were found.

When specifying field-value pairs, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of double quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

This command deletes a record from Salesforce objects by default. Use the --use-tooling-api flag to delete from a Tooling API object.

### Examples for data delete record

Delete a record from Account with the specified (truncated) ID:

```

```

Delete a record from Account whose name equals "Acme":

```

```

Delete a record from Account identified with two field values, one that contains a space; the command uses the org with alias "my-scratch":

```

```

Delete a record from the Tooling API object TraceFlag with the specified (truncated) ID:

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

\-s | \--sobject SOBJECT

Required

API name of the Salesforce or Tooling API object that you're deleting a record from.

Type: option

\-i | \--record-id RECORD-ID

Optional

ID of the record you’re deleting.

Type: option

\-w | \--where WHERE

Optional

List of <fieldName>=<value> pairs that identify the record you want to delete.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API so you can delete a record from a Tooling API object.

Type: boolean

### Aliases for data delete record

```

```

## data delete resume

Resume a bulk delete job that you previously started. Uses Bulk API 2.0.

### Description for data delete resume

The command uses the job ID returned by the "sf data delete bulk" command or the most recently-run bulk delete job.

### Examples for data delete resume

Resume a bulk delete job from your default org using an ID:

```

```

Resume the most recently run bulk delete job for an org with alias my-scratch:

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

Optional

Username or alias of the target org. Not required if the "target-org" configuration variable is already set.

Type: option

\-i | \--job-id JOB-ID

Optional

ID of the job you want to resume.

Type: option

\--use-most-recent

Optional

Use the ID of the most recently-run bulk job.

Type: boolean

Default value: true

\--wait WAIT

Optional

Number of minutes to wait for the command to complete before displaying the results.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

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

## data export resume

Resume a bulk export job that you previously started. Uses Bulk API 2.0.

### Description for data export resume

When the original "data export bulk" command times out, it displays a job ID. To see the status and get the results of the bulk export, run this command by either passing it the job ID or using the --use-most-recent flag to specify the most recent bulk export job.

Using either \`--job-id\` or \`--use-most-recent\` will properly resolve to the correct org where the bulk job was started based on the cached data by "data export bulk".

### Examples for data export resume

Resume a bulk export job run by specifying a job ID:

```

```

Resume the most recently-run bulk export job:

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

\-i | \--job-id JOB-ID

Optional

Job ID of the bulk export.

Type: option

\--use-most-recent

Optional

Use the job ID of the bulk export job that was most recently run.

Type: boolean

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

## data export tree

Export data from an org into one or more JSON files.

### Description for data export tree

Specify a SOQL query, either directly at the command line or read from a file, to retrieve the data you want to export. The exported data is written to JSON files in sObject tree format, which is a collection of nested, parent-child records with a single root record. Use these JSON files to import data into an org with the "sf data import tree" command.

If your SOQL query references multiple objects, the command generates a single JSON file by default. You can specify the --plan flag to generate separate JSON files for each object and a plan definition file that aggregates them. You then specify just this plan definition file when you import the data into an org.

The SOQL query can return a maximum of 2,000 records. For more information, see the REST API Developer Guide. (https://developer.salesforce.com/docs/atlas.en-us.api\_rest.meta/api\_rest/resources\_composite\_sobject\_tree.htm).

### Examples for data export tree

Export records retrieved with the specified SOQL query into a single JSON file in the current directory; the command uses your default org:

```

```

Export data using a SOQL query in the "query.txt" file and generate JSON files for each object and a plan that aggregates them:

```

```

Prepend "export-demo" before each generated file and generate the files in the "export-out" directory; run the command on the org with alias "my-scratch":

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

\-q | \--query QUERY

Required

SOQL query, or filepath of a file that contains the query, to retrieve records.

Type: option

\-p | \--plan

Optional

Generate multiple sObject tree files and a plan definition file for aggregated import.

Type: boolean

\-x | \--prefix PREFIX

Optional

Prefix of generated files.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory in which to generate the JSON files; default is current directory.

Type: option

### Aliases for data export tree

```

```

## data get record

Retrieve and display a single record of a Salesforce or Tooling API object.

### Description for data get record

Specify the record you want to retrieve with either its ID or with a list of field-value pairs that identify the record. If your list of fields identifies more than one record, the command fails; the error displays how many records were found.

When specifying field-value pairs, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of double quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

The command displays all the record's fields and their values, one field per terminal line. Fields with no values are displayed as "null".

This command retrieves a record from Salesforce objects by default. Use the --use-tooling-api flag to retrieve from a Tooling API object.

### Examples for data get record

Retrieve and display a record from Account with the specified (truncated) ID:

```

```

Retrieve a record from Account whose name equals "Acme":

```

```

Retrieve a record from Account identified with two field values, one that contains a space; the command uses the org with alias "my-scratch":

```

```

Retrieve a record from the Tooling API object TraceFlag with the specified (truncated) ID:

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

\-s | \--sobject SOBJECT

Required

API name of the Salesforce or Tooling API object that you're retrieving a record from.

Type: option

\-i | \--record-id RECORD-ID

Optional

ID of the record you’re retrieving.

Type: option

\-w | \--where WHERE

Optional

List of <fieldName>=<value> pairs that identify the record you want to display.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API so you can retrieve a record from a Tooling API object.

Type: boolean

### Aliases for data get record

```

```

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

## data import resume

Resume a bulk import job that you previously started. Uses Bulk API 2.0.

### Description for data import resume

When the original "sf data import bulk" command times out, it displays a job ID. To see the status and get the results of the bulk import, run this command by either passing it the job ID or using the --use-most-recent flag to specify the most recent bulk import job.

### Examples for data import resume

Resume a bulk import job to your default org using an ID:

```

```

Resume the most recently run bulk import job for an org with alias my-scratch:

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

\--use-most-recent

Optional

Use the job ID of the bulk import job that was most recently run.

Type: boolean

\-i | \--job-id JOB-ID

Optional

Job ID of the bulk import.

Type: option

\-w | \--wait WAIT

Optional

Time to wait for the command to finish, in minutes.

Type: option

## data import tree

Import data from one or more JSON files into an org.

### Description for data import tree

The JSON files that contain the data are in sObject tree format, which is a collection of nested, parent-child records with a single root record. Use the "sf data export tree" command to generate these JSON files.

If you used the --plan flag when exporting the data to generate a plan definition file, use the --plan flag to reference the file when you import. If you're not using a plan, use the --files flag to list the files. If you specify multiple JSON files that depend on each other in a parent-child relationship, be sure you list them in the correct order.

### Examples for data import tree

Import the records contained in two JSON files into the org with alias "my-scratch":

```

```

Import records using a plan definition file into your default org:

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

\-f | \--files FILES

Optional

Comma-separated and in-order JSON files that contain the records, in sObject tree format, that you want to insert.

Type: option

\-p | \--plan PLAN

Optional

Plan definition file to insert multiple data files.

Unlike when you use the \`--files\` flag, the files listed in the plan definition file \*\*can\*\* contain more then 200 records. When the CLI executes the import, it automatically batches the records to comply with the 200 record limit set by the API.

The order in which you list the files in the plan definition file matters. Specifically, records with lookups to records in another file should be listed AFTER that file. For example, let's say you're loading Account and Contact records, and the contacts have references to those accounts. Be sure you list the Accounts file before the Contacts file.

The plan definition file has the following schema:

\- items(object) - SObject Type: Definition of records to be insert per SObject Type

\- sobject(string) - Name of SObject: Child file references must have SObject roots of this type

\- files(array) - Files: An array of files paths to load

Type: option

### Aliases for data import tree

```

```

## data query

Execute a SOQL query.

### Description for data query

Specify the SOQL query at the command line with the --query flag or read the query from a file with the --file flag.

If your query returns more than 10,000 records, prefer to use the \`sf data export bulk\` command instead. It runs the query using Bulk API 2.0, which has higher limits than the default API used by the command.

### Examples for data query

Specify a SOQL query at the command line; the command uses your default org:

```

```

Read the SOQL query from a file called "query.txt" and write the CSV-formatted output to a file; the command uses the org with alias "my-scratch":

```

```

Use Tooling API to run a query on the ApexTrigger Tooling API object:

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

\-q | \--query QUERY

Optional

SOQL query to execute.

Type: option

\-f | \--file FILE

Optional

File that contains the SOQL query.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API so you can run queries on Tooling API objects.

Type: boolean

\--all-rows

Optional

Include deleted records. By default, deleted records are not returned.

Type: boolean

\-r | \--result-format RESULT-FORMAT

Optional

Format to display the results; the --json flag overrides this flag.

Type: option

Permissible values are: human, csv, json

Default value: human

\--output-file OUTPUT-FILE

Optional

File where records are written; only CSV and JSON output formats are supported.

Type: option

### Aliases for data query

```

```

## data resume

View the status of a bulk data load job or batch.

### Description for data resume

Run this command using the job ID or batch ID returned from the "sf data delete bulk" or "sf data upsert bulk" commands.

### Examples for data resume

View the status of a bulk load job:

```

```

View the status of a bulk load job and a specific batches:

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

\-b | \--batch-id BATCH-ID

Optional

ID of the batch whose status you want to view; you must also specify the job ID.

Type: option

\-i | \--job-id JOB-ID

Required

ID of the job whose status you want to view.

Type: option

## data search

Execute a SOSL text-based search query.

### Description for data search

Specify the SOSL query at the command line with the --query flag or read the query from a file with the --file flag.

By default, the results are written to the terminal in human-readable format. If you specify \`--result-format csv\`, the output is written to one or more CSV (comma-separated values) files. The file names correspond to the Salesforce objects in the results, such as Account.csv. Both \`--result-format human\` and \`--result-format json\` display only to the terminal.

### Examples for data search

Specify a SOSL query at the command line; the command uses your default org:

```

```

Read the SOSL query from a file called "query.txt"; the command uses the org with alias "my-scratch":

```

```

Similar to the previous example, but write the results to one or more CSV files, depending on the Salesforce objects in the results:

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

\-q | \--query QUERY

Optional

SOSL query to execute.

Type: option

\-f | \--file FILE

Optional

File that contains the SOSL query.

Type: option

\-r | \--result-format RESULT-FORMAT

Optional

Format to display the results, or to write to disk if you specify "csv".

Type: option

Permissible values are: human, csv, json

Default value: human

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

## data update record

Updates a single record of a Salesforce or Tooling API object.

### Description for data update record

Specify the record you want to update with either its ID or with a list of field-value pairs that identify the record. If your list of fields identifies more than one record, the update fails; the error displays how many records were found.

When using field-value pairs for both identifying the record and specifiyng the new field values, use the format <fieldName>=<value>. Enclose all field-value pairs in one set of double quotation marks, delimited by spaces. Enclose values that contain spaces in single quotes.

This command updates a record in Salesforce objects by default. Use the --use-tooling-api flag to update a Tooling API object.

### Examples for data update record

Update the Name field of an Account record with the specified (truncated) ID:

```

```

Update the Name field of an Account record whose current name is 'Old Acme':

```

```

Update the Name and Website fields of an Account record with the specified (truncated) ID:

```

```

Update the ExpirationDate field of a record of the Tooling API object TraceFlag using the specified (truncated) ID:

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

\-s | \--sobject SOBJECT

Required

API name of the Salesforce or Tooling API object that contains the record you're updating.

Type: option

\-i | \--record-id RECORD-ID

Optional

ID of the record you’re updating.

Type: option

\-w | \--where WHERE

Optional

List of <fieldName>=<value> pairs that identify the record you want to update.

Type: option

\-v | \--values VALUES

Required

Fields that you're updating, in the format of <fieldName>=<value> pairs.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API so you can update a record in a Tooling API object.

Type: boolean

### Aliases for data update record

```

```

## data update resume

Resume a bulk update job that you previously started. Uses Bulk API 2.0.

### Description for data update resume

When the original "sf data update bulk" command times out, it displays a job ID. To see the status and get the results of the bulk update, run this command by either passing it the job ID or using the --use-most-recent flag to specify the most recent bulk update job.

Using either \`--job-id\` or \`--use-most-recent\` will properly resolve to the correct org where the bulk job was started based on the cached data by "data update bulk".

### Examples for data update resume

Resume a bulk update job using a job ID:

```

```

Resume the most recently run bulk update job:

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

\--use-most-recent

Optional

Use the job ID of the bulk update job that was most recently run.

Type: boolean

\-i | \--job-id JOB-ID

Optional

Job ID of the bulk update.

Type: option

\-w | \--wait WAIT

Optional

Time to wait for the command to finish, in minutes.

Type: option

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

## data upsert resume

Resume a bulk upsert job that you previously started. Uses Bulk API 2.0.

### Description for data upsert resume

The command uses the job ID returned from the "sf data upsert bulk" command or the most recently-run bulk upsert job.

### Examples for data upsert resume

Resume a bulk upsert job from your default org using an ID:

```

```

Resume the most recently run bulk upsert job for an org with alias my-scratch:

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

Optional

Username or alias of the target org. Not required if the "target-org" configuration variable is already set.

Type: option

\-i | \--job-id JOB-ID

Optional

ID of the job you want to resume.

Type: option

\--use-most-recent

Optional

Use the ID of the most recently-run bulk job.

Type: boolean

Default value: true

\--wait WAIT

Optional

Number of minutes to wait for the command to complete before displaying the results.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

## Code Examples

```
sf data bulk results --job-id 7507i000fake341G --target-org my-scratch
```

```
sf data create file --file resources/astro.png
```

```
sf data create file --file resources/astro.png --title AstroOnABoat.png --target-org my-scratch
```

```
sf data create file --file path/to/astro.png --parent-id a03fakeLoJWPIA3
```

```
sf data create record --sobject Account --values "Name=Acme"
```

## Related Topics

- data bulk results (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
- data create file (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
- data create record (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
- data delete bulk (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
- data delete record (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
- data delete resume (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
- data export bulk (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
- data export resume (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
- data export tree (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
- data get record (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm)
