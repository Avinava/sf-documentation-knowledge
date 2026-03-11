---
title: "data upsert resume"
domain: cli-commands
topic: data-upsert-resume
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, upsert, resume, Resume, bulk, job, previously, started., Uses, Bulk, API, 2.0., Description, Examples, Flags]
---

# data upsert resume

> Resume a bulk upsert job that you previously started. Uses Bulk API 2.0.

## data upsert resume

Resume a bulk upsert job that you previously started. Uses Bulk API 2.0.

### Description for data upsert resume

The command uses the job ID returned from the "sf data upsert bulk" command or the most recently-run bulk upsert job.

### Examples for data upsert resume

Resume a bulk upsert job from your default org using an ID:

```

```

Resume the most recently run bulk upsert job for an org with alias my-scratch:

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

Optional

Username or alias of the target org. Not required if the "target-org" configuration variable is already set.

Type: option

\-i | \--job-id JOB-ID

Optional

ID of the job you want to resume.

Type: option

\--use-most-recent

Optional

Use the ID of the most recently-run bulk job.

Type: boolean

Default value: true

\--wait WAIT

Optional

Number of minutes to wait for the command to complete before displaying the results.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option