---
title: "data export resume"
domain: cli-commands
topic: data-export-resume
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, export, resume, Resume, bulk, job, previously, started., Uses, Bulk, API, 2.0., Description, Examples, Flags]
---

# data export resume

> Resume a bulk export job that you previously started. Uses Bulk API 2.0.

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