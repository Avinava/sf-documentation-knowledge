---
title: "org list auth"
domain: cli-commands
topic: org-list-auth
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, list, auth, List, authorization, information, orgs, created, logged, into., Description, Examples, Flags, Aliases]
---

# org list auth

> List authorization information about the orgs you created or logged into.

## org list auth

List authorization information about the orgs you created or logged into.

### Description for org list auth

This command uses local authorization information that Salesforce CLI caches when you create a scratch org or log into an org. The command doesn't actually connect to the orgs to verify that they're still active. As a result, this command executes very quickly. If you want to view live information about your authorized orgs, such as their connection status, use the "org list" command.

### Examples for org list auth

List local authorization information about your orgs:

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

### Aliases for org list auth

```

```

```

```