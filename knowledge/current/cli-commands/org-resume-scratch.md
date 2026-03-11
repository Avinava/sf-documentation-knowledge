---
title: "org resume scratch"
domain: cli-commands
topic: org-resume-scratch
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.839Z
keywords: [org, resume, scratch, Resume, creation, incomplete, org., Description, Examples, Flags, Aliases]
---

# org resume scratch

> Resume the creation of an incomplete scratch org.

## org resume scratch

Resume the creation of an incomplete scratch org.

### Description for org resume scratch

When the original "sf org create scratch" command either times out or is run with the --async flag, it displays a job ID.

Run this command by either passing it a job ID or using the --use-most-recent flag to specify the most recent incomplete scratch org.

### Examples for org resume scratch

Resume a scratch org create with a job ID:

```

```

Resume your most recent incomplete scratch org:

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

Job ID of the incomplete scratch org create that you want to resume.

The job ID is the same as the record ID of the incomplete scratch org in the ScratchOrgInfo object of the Dev Hub.

The job ID is valid for 24 hours after you start the scratch org creation.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent incomplete scratch org.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the scratch org to be ready.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To resume checking the scratch creation, rerun this command.

Type: option

### Aliases for org resume scratch

```

```