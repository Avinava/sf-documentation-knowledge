---
title: "org delete sandbox"
domain: cli-commands
topic: org-delete-sandbox
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, delete, sandbox, Delete, sandbox., Description, Examples, Flags, Aliases]
---

# org delete sandbox

> Delete a sandbox.

## org delete sandbox

Delete a sandbox.

### Description for org delete sandbox

Salesforce CLI marks the org for deletion in the production org that contains the sandbox licenses and then deletes all local references to the org from your computer.

Specify a sandbox with either the username you used when you logged into it, or the alias you gave the sandbox when you created it. Run "sf org list" to view all your orgs, including sandboxes, and their aliases.

Both the sandbox and the associated production org must already be authenticated with the CLI to successfully delete the sandbox.

### Examples for org delete sandbox

Delete a sandbox with alias my-sandbox:

```

```

Specify a username instead of an alias:

```

```

Delete the sandbox without prompting to confirm:

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

\-p | \--no-prompt

Optional

Don't prompt the user to confirm the deletion.

Type: boolean

### Aliases for org delete sandbox

```

```