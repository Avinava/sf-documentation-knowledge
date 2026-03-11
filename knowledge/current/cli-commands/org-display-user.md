---
title: "org display user"
domain: cli-commands
topic: org-display-user
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, display, user, Display, information, Salesforce, user., Description, Examples, Flags, Aliases]
---

# org display user

> Display information about a Salesforce user.

## org display user

Display information about a Salesforce user.

### Description for org display user

Output includes the profile name, org ID, access token, instance URL, login URL, and alias if applicable. The displayed alias is local and different from the Alias field of the User sObject record of the new user, which you set in the Setup UI.

### Examples for org display user

Display information about the admin user of your default scratch org:

```

```

Display information about the specified user and output in JSON format:

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

### Aliases for org display user

```

```