---
title: "Data Loader Command-Line Operations and Exit Codes"
domain: dataLoader
topic: data-loader-command-line-operations-and-exit-codes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.294Z
estimatedTokens: 681
keywords: [Data, Loader, Command-Line, Operations, Exit, Codes, running, batch, mode, command, line, several, operation, flow, Salesforce]
---

# Data Loader Command-Line Operations and Exit Codes

> When running Data Loader in batch mode from the command line, several operations are
    supported. An operation represents the flow of data between Salesforce and an external data
    source, such as a CSV file or database. You can use these operations and refer to these exit
    codes.

# Data Loader Command-Line Operations and Exit Codes

When running Data Loader in batch mode from the command line, several operations are supported. An operation represents the flow of data between Salesforce and an external data source, such as a CSV file or database. You can use these operations and refer to these exit codes.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


## Operations

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

The Data Loader command-line interface is supported for Windows only.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=dataLoader)

#### Note

Enter values in the process.operation parameter in lowercase.

| Operation | Description |
| --- | --- |
| extract | Uses the Salesforce Object Query Language to export a set of records from Salesforce. The exported data is written to a data source. Soft-deleted records are not included. |
| extract_all | Uses SOQL to export a set of records from Salesforce, including existing and soft-deleted records. The exported data is written to a data source. |
| insert | Loads data from a data source into Salesforce as new records. |
| update | Loads data from a data source into Salesforce, and updates existing records with matching ID fields. |
| upsert | Loads data from a data source into Salesforce. Existing records with a matching custom external ID field are updated. Records without matches are inserted as new records. |
| delete | Loads data from a data source into Salesforce, and deletes existing records with matching ID fields. Deleted records are moved to the Recycle Bin. |
| hard_delete | Loads data from a data source into Salesforce, and deletes existing records with matching ID fields without first storing them in the Recycle Bin. |

## Exit Codes

To help you find the cause of an error, Data Loader version 62 and later uses these exit codes.

| Exit Code | Description |
| --- | --- |
| 0 | Successful execution.NoteIf the property process.batchMode.exitWithErrorOnFailedRows is set to false (default is false) in the Data Loader config.properties file, then the execution can succeed, even if one or more rows fails to upload. |
| 1 | Client-side error occurred. |
| 2 | Server-side error occurred. |
| 3 | Error in executing the operation. |
| 4 | Operation succeeded but failed to upload one or more rows due to an error in data. This exit code is only used if the property process.batchMode.exitWithErrorOnFailedRows is set to true (default is false) in the Data Loader config.properties file. |
