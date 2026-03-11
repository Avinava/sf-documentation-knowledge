---
title: "org display"
domain: cli-commands
topic: org-display
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, display, Display, information, org., Description, Examples, Flags, Aliases]
---

# org display

> Display information about an org.

## org display

Display information about an org.

### Description for org display

Output includes your access token, client Id, connected status, org ID, instance URL, username, and alias, if applicable.

Use --verbose to include the SFDX auth URL. WARNING: The SFDX auth URL contains sensitive information, such as a refresh token that can be used to access an org. Don't share or distribute this URL or token.

Including --verbose displays the sfdxAuthUrl property only if you authenticated to the org using "org login web" (not "org login jwt").

### Examples for org display

Display information about your default org:

```

```

Display information, including the sfdxAuthUrl property, about the org with alias TestOrg1:

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

\--verbose

Optional

Display the sfdxAuthUrl property.

Type: boolean

### Aliases for org display

```

```