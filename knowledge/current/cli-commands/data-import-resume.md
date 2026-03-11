---
title: "data import resume"
domain: cli-commands
topic: data-import-resume
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.138Z
keywords: [data, import, resume, Resume, bulk, job, previously, started., Uses, Bulk, API, 2.0., Description, Examples, Flags]
---

# data import resume

> Resume a bulk import job that you previously started. Uses Bulk API 2.0.

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