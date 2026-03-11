---
title: "org list snapshot"
domain: cli-commands
topic: org-list-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, list, snapshot, List, scratch, snapshots., Description, Examples, Flags, Aliases]
---

# org list snapshot

> List scratch org snapshots.

## org list snapshot

List scratch org snapshots.

### Description for org list snapshot

You can view all the snapshots in a Dev Hub that you have access to. If you’re an admin, you can see all snapshots associated with the Dev Hub org. If you’re a user, you can see only your snapshots unless a Dev Hub admin gives you View All permissions.

To create a snapshot, use the "sf org create snapshot" command. To get details about a snapshot request, use "sf org get snapshot".

### Examples for org list snapshot

List snapshots in the default Dev Hub:

```

```

List snapshots in the Dev Hub with alias SnapshotDevHub:

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

### Aliases for org list snapshot

```

```