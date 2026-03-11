---
title: "project reset tracking"
domain: cli-commands
topic: project-reset-tracking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.983Z
keywords: [project, reset, tracking, Reset, local, remote, source, tracking., Description, Examples, Flags, Aliases]
---

# project reset tracking

> Reset local and remote source tracking.

## project reset tracking

Reset local and remote source tracking.

### Description for project reset tracking

WARNING: This command deletes or overwrites all existing source tracking files. Use with extreme caution.

Resets local and remote source tracking so that Salesforce CLI no longer registers differences between your local files and those in the org. When you next run 'project deploy preview', Salesforce CLI returns no results, even though conflicts might actually exist. Salesforce CLI then resumes tracking new source changes as usual.

Use the --revision flag to reset source tracking to a specific revision number of an org source member. To get the revision number, query the SourceMember Tooling API object with the 'data soql' command. For example:

sf data query --query "SELECT MemberName, MemberType, RevisionCounter FROM SourceMember" --use-tooling-api --target-org my-scratch

### Examples for project reset tracking

Reset source tracking for the org with alias "my-scratch":

```

```

Reset source tracking to revision number 30 for your default org:

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

\-r | \--revision REVISION

Optional

SourceMember revision counter number to reset to.

Type: option

\-p | \--no-prompt

Optional

Don't prompt for source tracking override confirmation.

Type: boolean

### Aliases for project reset tracking

```

```