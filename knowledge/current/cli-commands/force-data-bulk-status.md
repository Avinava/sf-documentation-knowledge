---
title: "force data bulk status"
domain: cli-commands
topic: force-data-bulk-status
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.169Z
keywords: [force, data, bulk, status, View, load, job, batch., Uses, Bulk, API, 1.0., Description, Examples, Flags]
---

# force data bulk status

> View the status of a bulk data load job or batch. Uses Bulk API 1.0.

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