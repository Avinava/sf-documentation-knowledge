---
title: "force Commands"
domain: cli-commands
topic: force-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:03.224Z
estimatedTokens: 2145
keywords: [force, Commands, Bulk, delete, records, org, CSV, file., Uses, API, 1.0., data, bulk, Description, Examples, Flags, status, upsert, lightning, lwc]
---

# force Commands

> Bulk delete records from an org using a CSV file. Uses Bulk API 1.0.

# force Commands

Legacy commands for backward compatibility.

-   **[force data bulk delete](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm#cli_reference_force_data_bulk_delete_unified)**
    Bulk delete records from an org using a CSV file. Uses Bulk API 1.0.
-   **[force data bulk status](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm#cli_reference_force_data_bulk_status_unified)**
    View the status of a bulk data load job or batch. Uses Bulk API 1.0.
-   **[force data bulk upsert](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm#cli_reference_force_data_bulk_upsert_unified)**
    Bulk upsert records to an org from a CSV file. Uses Bulk API 1.0.
-   **[force lightning lwc test create](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm#cli_reference_force_lightning_lwc_test_create_unified)**

-   **[force lightning lwc test run](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm#cli_reference_force_lightning_lwc_test_run_unified)**

-   **[force lightning lwc test setup](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm#cli_reference_force_lightning_lwc_test_setup_unified)**


## force data bulk delete

Bulk delete records from an org using a CSV file. Uses Bulk API 1.0.

### Description for force data bulk delete

The CSV file must have only one column ("Id") and then the list of record IDs you want to delete, one ID per line.

When you execute this command, it starts a job and one or more batches, displays their IDs, and then immediately returns control of the terminal to you by default. If you prefer to wait, set the --wait flag to the number of minutes; if it times out, the command outputs the IDs. Use the job and batch IDs to check the status of the job with the "sf force data bulk status" command. A single job can contain many batches, depending on the length of the CSV file.

### Examples for force data bulk delete

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

CSV file that contains the IDs of the records to delete.

Type: option

\-s | \--sobject SOBJECT

Required

API name of the Salesforce object, either standard or custom, that you want to delete records from.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete before displaying the results.

Type: option

## force data bulk status

View the status of a bulk data load job or batch. Uses Bulk API 1.0.

### Description for force data bulk status

Run this command using the job ID or batch ID returned from the "sf force data bulk delete" or "sf force data bulk upsert" commands.

### Examples for force data bulk status

View the status of a bulk load job in your default org:

```

```

View the status of a bulk load job and a specific batches in an org with alias my-scratch:

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

## force lightning lwc test create

### Description for force lightning lwc test create

creates a Lightning web component test file with boilerplate code inside a \_\_tests\_\_ directory.

### Examples for force lightning lwc test create

```

```

### Flags

\--json

Optional

format output as json

Type: boolean

\--loglevel LOGLEVEL

Optional

logging level for this command invocation

Type: enum

Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL

Default value: warn

\-f | \--filepath FILEPATH

Required

path to Lightning web component .js file to create a test for

Type: string

## force lightning lwc test run

### Description for force lightning lwc test run

invokes Lightning Web Components Jest unit tests.

### Examples for force lightning lwc test run

```

```

```

```

### Flags

\--json

Optional

format output as json

Type: boolean

\--loglevel LOGLEVEL

Optional

logging level for this command invocation

Type: enum

Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL

Default value: warn

\-d | \--debug

Optional

run tests in debug mode

Type: boolean

\--watch

Optional

run tests in watch mode

Type: boolean

## force lightning lwc test setup

### Description for force lightning lwc test setup

install Jest unit testing tools for Lightning Web Components.

### Examples for force lightning lwc test setup

```

```

### Flags

\--json

Optional

format output as json

Type: boolean

\--loglevel LOGLEVEL

Optional

logging level for this command invocation

Type: enum

Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL

Default value: warn

## Code Examples

```
sf force data bulk delete --sobject Account --file files/delete.csv
```

```
sf force data bulk delete --sobject MyObject__c --file files/delete.csv --wait 5 --target-org my-scratch
```

```
sf force data bulk status --job-id 750xx000000005sAAA
```

```
sf force data bulk status --job-id 750xx000000005sAAA --batch-id 751xx000000005nAAA --target-org my-scratch
```

```
sf --sobject Contact --file files/contacts.csv --external-id Id
```

## Related Topics

- force data bulk delete (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm)
- force data bulk status (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm)
- force data bulk upsert (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm)
- force lightning lwc test create (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm)
- force lightning lwc test run (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm)
- force lightning lwc test setup (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_commands_unified.htm)
