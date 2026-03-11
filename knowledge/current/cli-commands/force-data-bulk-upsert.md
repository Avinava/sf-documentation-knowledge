---
title: "force data bulk upsert"
domain: cli-commands
topic: force-data-bulk-upsert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.728Z
keywords: [force, data, bulk, upsert, Bulk, records, org, CSV, file., Uses, API, 1.0., Description, Examples, Flags]
---

# force data bulk upsert

> Bulk upsert records to an org from a CSV file. Uses Bulk API 1.0.

## force data bulk upsert

Bulk upsert records to an org from a CSV file. Uses Bulk API 1.0.

### Description for force data bulk upsert

An upsert refers to inserting a record into a Salesforce object if the record doesn't already exist, or updating it if it does exist.

When you execute this command, it starts a job and one or more batches, displays their IDs, and then immediately returns control of the terminal to you by default. If you prefer to wait, set the --wait flag to the number of minutes; if it times out, the command outputs the IDs. Use the job and batch IDs to check the status of the job with the "sf force data bulk status" command. A single job can contain many batches, depending on the length of the CSV file.

See "Prepare CSV Files" in the Bulk API Developer Guide for details on formatting your CSV file. (https://developer.salesforce.com/docs/atlas.en-us.api\_asynch.meta/api\_asynch/datafiles\_csv\_preparing.htm)

By default, the job runs the batches in parallel, which we recommend. You can run jobs serially by specifying the --serial flag. But don't process data in serial mode unless you know this would otherwise result in lock timeouts and you can't reorganize your batches to avoid the locks.

### Examples for force data bulk upsert

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

\-i | \--external-id EXTERNAL-ID

Required

Name of the external ID field, or the Id field.

Type: option

\-f | \--file FILE

Required

CSV file that contains the records to upsert.

Type: option

\-s | \--sobject SOBJECT

Required

API name of the Salesforce object, either standard or custom, that you want to upsert records to.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete before displaying the results.

Type: option

\-r | \--serial

Optional

Run batches in serial mode.

Type: boolean