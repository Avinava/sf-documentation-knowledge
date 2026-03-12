---
title: "Work With Large Datasets"
domain: sfdx-dev
topic: work-with-large-datasets
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.182Z
estimatedTokens: 2670
keywords: [Work, Large, Datasets, you’re, ready, real-world, testing, often, data, millions, records, case, various, bulk, CLI]
---

# Work With Large Datasets

> When you’re ready to do more real-world testing, you often need large sets of data,
    such as millions of records. In this case, you use the various data
      bulk CLI commands to move the data around, typically between sandboxes. These
    commands are also useful when automating data extractions and data loads in production
    orgs.

# Work With Large Datasets

When you’re ready to do more real-world testing, you often need large sets of data, such as millions of records. In this case, you use the various data bulk CLI commands to move the data around, typically between sandboxes. These commands are also useful when automating data extractions and data loads in production orgs.

Salesforce CLI’s data bulk commands use the Salesforce Bulk API 2.0, which is optimized for working with large sets of data. You can use these CLI commands to import, export, update, upsert, or delete many records asynchronously; collectively these actions are also known as bulk ingests. The commands work in pairs: first run a command such as data import bulk to submit a bulk ingest request, and then later run data import resume to view the status and results. Salesforce processes the request in the background.

Here are the bulk commands:

-   data export bulk|resume
-   data import bulk|resume
-   data delete bulk|resume
-   data upsert bulk|resume
-   data update bulk|resume
-   data bulk results

Let’s see how these commands work.

## Bulk Export and Import

Let’s first assume you already have many records in an org that you want to export and store in a file so you can later import them into another org for scale testing. Use a SOQL query to select the records you want to export; you can query only one Salesforce object. This example shows how to export records from the Account object from your default org:

```

```

When the request finishes, the file accounts.csv contains the records in comma-separated values (CSV) format. The \--wait flag specifies that the command waits for 10 minutes to complete before it times out.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=sfdx_dev)

#### Warning

The data export bulk command uses Bulk API 2.0, which limits the type of SOQL queries you can run. For example, you can’t use clauses such as GROUP BY or LIMIT, or aggregate functions such as count(). For the complete list of limitations, see the SOQL Considerations section in the Bulk API Developer Guide.

Here are a few other flags you can specify to customize the export.
| Flag | Description |
| --- | --- |
| --query-file | Read the SOQL query from a file rather than at the command line. This flag is useful if your SOQL query is very long. |
| --result-format: | Export into a file that uses JSON format rather than CSV, the default. Note that bulk imports support files in only CSV format, not JSON. |
| --all-rows: | Include rows that have been soft-deleted due to a merge or delete; by default, deleted records are not included. |
| --column-delimiter: | The character used between columns when writing CSV output. Default is COMMA, but you can specify BACKQUOTE, CARET, and more. |

This example gets the SOQL query from the soql-query.txt file, writes the records to a file in JSON format, and includes soft-deleted records; it also runs on an org with the alias my-org:

```

```

Bulk exports can take a while, depending on how many records are returned by the SOQL query. In our previous examples, we specified that the command wait for 10 minutes for it to finish. If the command times out, it displays the data export resume command you must run to get the status and results of the job. The command then returns control of the terminal, even though the job processing is still happening in the background. The resume command uses a job ID, or you can use the \--use-most-recent flag to resume the most recently run job.

```

```

To bulk import the records from a file, run the data import bulk command. Similar to exporting, you can import records into only one Salesforce object at a time, so the records in the file must be for the same object. Also, bulk import supports only files in CSV format, not JSON.

This example shows how to bulk import records from the accounts.csv file into the Account object in the org with the alias new-scratch-org. You must specify the column delimiter used in the file, which in this example is the comma.

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

The format of the CSV file from which you’re importing must follow the rules and guidelines imposed by Bulk API 2.0. For example, the first row lists the fields you’re importing, and you must include all the object's required fields. For complete documentation about creating these files, see the Prepare Data to Ingest section of the Bulk API Developer Guide.

The CSV file created by the data export bulk command follows the required formatting rules and guidelines.

Similar to the bulk export command, if the import times out, it completes and displays the data import resume command you must run to get the status and results of the job. You can also use the \--use-most-recent flag to resume the most recently run import job.

```

```

## Bulk Delete

Use the data delete bulk command to delete multiple records at once from a single Salesforce object. You must specify a comma-separated values (CSV) file that has only one column (named Id) and then the list of record IDs you want to delete, one ID per line. This sample CSV file snippet is for deleting account records:

```

```

This example deletes the accounts listed in the specified CSV file from the default org:

```

```

As with all the bulk data commands, if the data delete bulk command times out, it displays the data delete resume command you must run to see the status and results.

By default, the data delete bulk command puts the deleted records into the Salesforce Recycle Bin. You can specify that you want the records to be marked for immediate deletion, also known as hard delete, by including the \--hard-delete flag.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

You must have the "Bulk API Hard Delete” system permission to use the \--hard-delete flag. This system permission is disabled by default and can be enabled only by your Salesforce admin.

## Bulk Update and Upsert

The data update bulk and data upsert bulk commands both read a CSV file that has new field values for a single Salesforce object. The first column in the file must be a record ID. The remaining columns are the fields you want to update. This sample CSV file snippet is for updating the Name field of the Account object:

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=sfdx_dev)

#### Important

See Prepare Data to Ingest in the Bulk API Developer Guide for full documentation about the format of the CSV file when bulk updating and upserting.

However, when you run data update bulk, you can update only existing records; if the command finds an ID in the CSV file that doesn’t currently exist, the command fails. By contrast, if you run data upsert bulk on the same CSV file, the command updates existing records and creates a record if necessary.

This example updates records of the Account object of your default org using the accounts-update.csv file:

```

```

If all the records in accounts-update.csv exist, then the command completes successfully and the Account object fields are updated with their new values. To also insert new records, you must use data upsert bulk. The command requires the \--external-id flag, which for this example we set to just the Id field. Then, in the CSV file, rows that contain no value for the Id column are inserted as new records. For example:

```

```

Here’s how to run the upsert command:

```

```

As with all the bulk data commands, if the data update|upsert bulk commands time out, they display the data update|upsert resume commands you must run to see the status and results.

## Get Detailed Results From Any Bulk Ingest Job

Use the data bulk results CLI command to get detailed results from any completed bulk ingest job that you previously ran using any Salesforce tool. Examples of these tools include:

-   The bulk Salesforce CLI commands discussed in this topic, such as data import bulk and data upsert bulk
-   Data Loader
-   A partner product on AppExchange that uses Bulk API 2.0

The data bulk results command requires that the bulk ingest job has completed; the command also needs the job ID. For example, if you’re using data import bulk, and it’s still processing, run data import resume first and wait for it to complete. Make note of the outputted job ID.

The data bulk results command first shows a summary of the job results. It includes the overall status, the executed operation, the affected Salesforce object, and the number of successful and failed records that were processed. For example:

```

```

The command also provides a CSV file that contains details of every successful record that was processed, including the new Salesforce record IDs; in our sample output, the name of the file is 75fake00CZBD1IAP-success-records.csv. If any errors occurred during the bulk ingest job, the command generates separate CSV files with details about the failures, and if possible, the unprocessed records.

#### See Also

-   [*Salesforce CLI Command Reference*: data Commands](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_data_commands_unified.htm "Salesforce CLI Command Reference: data Commands - HTML (New Window)")

-   [*Salesforce Help*: Sandbox Licenses and Storage Limits by Type](https://help.salesforce.com/s/articleView?id=platform.data_sandbox_environments.htm&type=5&language=en_US "Salesforce Help: Sandbox Licenses and Storage Limits by Type - HTML (New Window)")

-   [*Bulk API Developer Guide*: Bulk API 2.0](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_asynch/bulk_api_2_0.htm "Bulk API Developer Guide: Bulk API 2.0 - HTML (New Window)")

-   [*Bulk API Developer Guide*: SOQL Considerations](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_asynch/queries.htm "Bulk API Developer Guide: SOQL Considerations - HTML (New Window)")

-   [*Bulk API Developer Guide*: Prepare Data to Ingest](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_asynch.meta/api_asynch/datafiles_prepare_data.htm "Bulk API Developer Guide: Prepare Data to Ingest - HTML (New Window)")

-   [*Data Loader Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.dataLoader.meta/dataLoader/data_loader_intro.htm "Data Loader Guide - HTML (New Window)")

-   [Salesforce AppExchange](https://appexchange.salesforce.com/ "Salesforce AppExchange - HTML (New Window)")

## Code Examples

```
sf data export bulk \
    --query "SELECT Name, Phone, Website FROM Account" \
    --output-file accounts.csv --wait 10
```

```
sf data export bulk \
    --query-file soql-query.txt --result-format json --all-rows \
    --output-file accounts-all.json --wait 10 --target-org my-org
```

```
sf data export resume --job-id 750xx00fake00005sAAA
```

```
sf data import bulk --file accounts.csv --sobject Account \
   --column-delimiter COMMA --wait 10 --target-org new-scratch-org
```

```
sf data import resume --use-most-recent
```
