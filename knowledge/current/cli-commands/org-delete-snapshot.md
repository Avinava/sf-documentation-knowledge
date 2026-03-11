---
title: "org delete snapshot"
domain: cli-commands
topic: org-delete-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, delete, snapshot, Delete, scratch, snapshot., Description, Examples, Flags, Aliases]
---

# org delete snapshot

> Delete a scratch org snapshot.

## org delete snapshot

Delete a scratch org snapshot.

### Description for org delete snapshot

Dev Hub admins can delete any snapshot. Users can delete only their own snapshots, unless a Dev Hub admin gives the user Modify All permission, which works only with the Salesforce license.

### Examples for org delete snapshot

Delete a snapshot from the default Dev Hub using the snapshot ID:

```

```

Delete a snapshot from the specified Dev Hub using the snapshot name:

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

\-v | \--target-dev-hub TARGET-DEV-HUB

Required

Username or alias of the Dev Hub org. Not required if the \`target-dev-hub\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-s | \--snapshot SNAPSHOT

Required

Name or ID of snapshot to delete.

The IDs of scratch org snapshots start with 0Oo.

Type: option

\-p | \--no-prompt

Optional

Don't prompt the user to confirm the deletion.

Type: boolean

### Aliases for org delete snapshot

```

```