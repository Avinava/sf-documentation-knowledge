---
title: "org resume sandbox"
domain: cli-commands
topic: org-resume-sandbox
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.839Z
keywords: [org, resume, sandbox, Check, status, creation, log, it's, ready., Description, Examples, Flags, Aliases]
---

# org resume sandbox

> Check the status of a sandbox creation, and log in to it if it's ready.

## org resume sandbox

Check the status of a sandbox creation, and log in to it if it's ready.

### Description for org resume sandbox

Sandbox creation can take a long time. If the original "sf org create sandbox" command either times out, or you specified the --async flag, the command displays a job ID. Use this job ID to check whether the sandbox creation is complete, and if it is, the command then logs into it.

You can also use the sandbox name to check the status or the --use-most-recent flag to use the job ID of the most recent sandbox creation.

### Examples for org resume sandbox

Check the status of a sandbox creation using its name and specify a production org with alias "prodOrg":

```

```

Check the status using the job ID:

```

```

Check the status of the most recent sandbox create request:

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

\-w | \--wait WAIT

Optional

Number of minutes to wait for the sandbox org to be ready.

If the command continues to run after the wait period, the CLI returns control of the terminal window to you and returns the job ID. To resume checking the sandbox creation, rerun this command.

Type: option

\-n | \--name NAME

Optional

Name of the sandbox org.

Type: option

\-i | \--job-id JOB-ID

Optional

Job ID of the incomplete sandbox creation that you want to check the status of.

The job ID is valid for 24 hours after you start the sandbox creation.

Type: option

\-l | \--use-most-recent

Optional

Use the most recent sandbox create request.

Type: boolean

\-o | \--target-org TARGET-ORG

Optional

Username or alias of the production org that contains the sandbox license.

When it creates the sandbox org, Salesforce copies the metadata, and optionally data, from your production org to the new sandbox org.

Type: option

### Aliases for org resume sandbox

```

```