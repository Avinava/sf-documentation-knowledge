---
title: "org get snapshot"
domain: cli-commands
topic: org-get-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, get, snapshot, Get, details, scratch, snapshot., Description, Examples, Flags, Aliases]
---

# org get snapshot

> Get details about a scratch org snapshot.

## org get snapshot

Get details about a scratch org snapshot.

### Description for org get snapshot

Snapshot creation can take a while. Use this command with the snapshot name or ID to check its creation status. After the status changes to Active, you can use the snapshot to create scratch orgs.

To create a snapshot, use the "sf org create snapshot" command. To retrieve a list of all snapshots, use "sf org list snapshot".

### Examples for org get snapshot

Get snapshot details using its ID and the default Dev Hub org:

```

```

Get snapshot details using its name from a Dev Hub org with alias SnapshotDevHub:

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

Name or ID of snapshot to retrieve.

The IDs of scratch org snapshots start with 0Oo.

Type: option

### Aliases for org get snapshot

```

```