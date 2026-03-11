---
title: "org create snapshot"
domain: cli-commands
topic: org-create-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, create, snapshot, Create, scratch, org., Description, Examples, Flags, Aliases]
---

# org create snapshot

> Create a snapshot of a scratch org.

## org create snapshot

Create a snapshot of a scratch org.

### Description for org create snapshot

A snapshot is a point-in-time copy of a scratch org. The copy is referenced by its unique name in a scratch org definition file.

Use "sf org get snapshot" to get details, including status, about a snapshot creation request.

To create a scratch org from a snapshot, include the "snapshot" option (instead of "edition") in the scratch org definition file and set it to the name of the snapshot. Then use "sf org create scratch" to create the scratch org.

### Examples for org create snapshot

Create a snapshot called "Dependencies" using the source scratch org ID and your default Dev Hub org:

```

```

Create a snapshot called "NightlyBranch" using the source scratch org username and a Dev Hub org with alias NightlyDevHub:

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

\-o | \--source-org SOURCE-ORG

Required

ID or locally authenticated username or alias of scratch org to snapshot.

Type: option

\-n | \--name NAME

Required

Unique name of snapshot.

Type: option

\-d | \--description DESCRIPTION

Optional

Description of snapshot.

Use this description to document the contents of the snapshot. We suggest that you include a reference point, such as a version control system tag or commit ID.

Type: option

### Aliases for org create snapshot

```

```