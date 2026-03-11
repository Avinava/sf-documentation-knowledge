---
title: "project delete tracking"
domain: cli-commands
topic: project-delete-tracking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, delete, tracking, Delete, local, source, information., Description, Examples, Flags, Aliases]
---

# project delete tracking

> Delete all local source tracking information.

## project delete tracking

Delete all local source tracking information.

### Description for project delete tracking

WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

Deletes all local source tracking information. When you next run 'project deploy preview', Salesforce CLI displays all local and remote files as changed, and any files with the same name are listed as conflicts.

### Examples for project delete tracking

Delete local source tracking for the org with alias "my-scratch":

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

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-p | \--no-prompt

Optional

Don't prompt for source tracking override confirmation.

Type: boolean

### Aliases for project delete tracking

```

```