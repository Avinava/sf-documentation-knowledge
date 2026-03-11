---
title: "org list"
domain: cli-commands
topic: org-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, list, List, orgs, you’ve, created, authenticated, to., Examples, Flags, Aliases]
---

# org list

> List all orgs you’ve created or authenticated to.

## org list

List all orgs you’ve created or authenticated to.

### Examples for org list

List all orgs you've created or authenticated to:

```

```

List all orgs, including expired, deleted, and unknown-status orgs; don't include the connection status:

```

```

List orgs and remove local org authorization info about non-active scratch orgs:

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

\--verbose

Optional

List more information about each org.

Type: boolean

\--all

Optional

Include expired, deleted, and unknown-status scratch orgs.

Type: boolean

\--clean

Optional

Remove all local org authorizations for non-active scratch orgs. Use "org logout" to remove non-scratch orgs.

Type: boolean

\-p | \--no-prompt

Optional

Don't prompt for confirmation.

Type: boolean

\--skip-connection-status

Optional

Skip retrieving the connection status of non-scratch orgs.

Type: boolean

### Aliases for org list

```

```