---
title: "data bulk results"
domain: cli-commands
topic: data-bulk-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.138Z
keywords: [data, bulk, results, Get, ingest, job, previously, ran., Description, Examples, Flags]
---

# data bulk results

> Get the results of a bulk ingest job that you previously ran.

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