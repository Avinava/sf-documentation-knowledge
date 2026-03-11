---
title: "org list users"
domain: cli-commands
topic: org-list-users
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, list, users, List, locally-authenticated, org., Description, Examples, Flags, Aliases]
---

# org list users

> List all locally-authenticated users of an org.

## org list users

List all locally-authenticated users of an org.

### Description for org list users

For scratch orgs, the list includes any users you've created with the "org create user" command; the original scratch org admin user is marked with "(A)". For other orgs, the list includes the users you used to authenticate to the org.

### Examples for org list users

List the locally-authenticated users of your default org:

```

```

List the locally-authenticated users of the specified org:

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

### Aliases for org list users

```

```