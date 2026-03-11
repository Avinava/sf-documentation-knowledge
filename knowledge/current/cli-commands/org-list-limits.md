---
title: "org list limits"
domain: cli-commands
topic: org-list-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, list, limits, Display, information, org., Description, Examples, Flags, Aliases]
---

# org list limits

> Display information about limits in your org.

## org list limits

Display information about limits in your org.

### Description for org list limits

For each limit, this command returns the maximum allocation and the remaining allocation based on usage. See this topic for a description of each limit: https://developer.salesforce.com/docs/atlas.en-us.api\_rest.meta/api\_rest/resources\_limits.htm.

### Examples for org list limits

Display limits in your default org:

```

```

Display limits in the org with alias "my-scratch-org":

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

### Aliases for org list limits

```

```

```

```