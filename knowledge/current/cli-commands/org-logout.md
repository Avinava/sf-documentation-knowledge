---
title: "org logout"
domain: cli-commands
topic: org-logout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, logout, Log, Salesforce, org., Description, Examples, Flags, Aliases]
---

# org logout

> Log out of a Salesforce org.

## org logout

Log out of a Salesforce org.

### Description for org logout

If you run this command with no flags and no default org set in your config or environment, it first displays a list of orgs you've created or logged into, with none of the orgs selected. Use the arrow keys to scroll through the list and the space bar to select the orgs you want to log out of. Press Enter when you're done; the command asks for a final confirmation before logging out of the selected orgs.

The process is similar if you specify --all, except that in the initial list of orgs, they're all selected. Use --target-org to logout of a specific org. In both these cases by default, you must still confirm that you want to log out. Use --no-prompt to never be asked for confirmation when also using --all or --target-org.

Be careful! If you log out of a scratch org without having access to its password, you can't access the scratch org again, either through the CLI or the Salesforce UI.

Use the --client-app flag to log out of the link you previously created between an authenticated user and a connected app or external client app; you create these links with "org login web --client-app". Run "org display" to get the list of client app names.

### Examples for org logout

Interactively select the orgs to log out of:

```

```

Log out of the org with username me@my.org:

```

```

Log out of all orgs after confirmation:

```

```

Logout of the org with alias my-scratch and don't prompt for confirmation:

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

Optional

Username or alias of the target org.

Type: option

\-c | \--client-app CLIENT-APP

Optional

Client app to log out of.

Type: option

\-a | \--all

Optional

Include all authenticated orgs.

All orgs includes Dev Hubs, sandboxes, DE orgs, and expired, deleted, and unknown-status scratch orgs.

Type: boolean

\-p | \--no-prompt

Optional

Don't prompt for confirmation.

Type: boolean

### Aliases for org logout

```

```

```

```