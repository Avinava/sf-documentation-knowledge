---
title: "org delete scratch"
domain: cli-commands
topic: org-delete-scratch
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, delete, scratch, Delete, org., Description, Examples, Flags, Aliases]
---

# org delete scratch

> Delete a scratch org.

## org delete scratch

Delete a scratch org.

### Description for org delete scratch

Salesforce CLI marks the org for deletion in the Dev Hub org and then deletes all local references to the org from your computer.

Specify a scratch org with either the username or the alias you gave the scratch org when you created it. Run "sf org list" to view all your orgs, including scratch orgs, and their aliases.

### Examples for org delete scratch

Delete a scratch org with alias my-scratch-org:

```

```

Specify a username instead of an alias:

```

```

Delete the scratch org without prompting to confirm :

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

### Aliases for org delete scratch

```

```