---
title: "org delete shape"
domain: cli-commands
topic: org-delete-shape
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, delete, shape, Delete, shapes, target, org., Description, Examples, Flags, Aliases]
---

# org delete shape

> Delete all org shapes for a target org.

## org delete shape

Delete all org shapes for a target org.

### Description for org delete shape

A source org can have only one active org shape. If you try to create an org shape for a source org that already has one, the previous shape is marked inactive and replaced by a new active shape. If you don’t want to create scratch orgs based on this shape, you can delete the org shape.

### Examples for org delete shape

Delete all org shapes for the source org with alias SourceOrg:

```

```

Delete all org shapes without prompting:

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

\-p | \--no-prompt

Optional

Don't prompt for confirmation.

Type: boolean

### Aliases for org delete shape

```

```