---
title: "data resume"
domain: cli-commands
topic: data-resume
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, resume, View, status, bulk, load, job, batch., Description, Examples, Flags]
---

# data resume

> View the status of a bulk data load job or batch.

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