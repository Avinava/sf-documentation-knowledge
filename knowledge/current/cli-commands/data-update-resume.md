---
title: "data update resume"
domain: cli-commands
topic: data-update-resume
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.138Z
keywords: [data, update, resume, Resume, bulk, job, previously, started., Uses, Bulk, API, 2.0., Description, Examples, Flags]
---

# data update resume

> Resume a bulk update job that you previously started. Uses Bulk API 2.0.

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