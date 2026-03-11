---
title: "agent test list"
domain: cli-commands
topic: agent-test-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.528Z
keywords: [agent, test, list, List, available, tests, org., Description, Examples, Flags]
---

# agent test list

> List the available agent tests in your org.

## agent test list

List the available agent tests in your org.

### Description for agent test list

The command outputs a table with the name (API name) of each test along with its unique ID and the date it was created in the org.

### Examples for agent test list

List the agent tests in your default org:

```

```

List the agent tests in an org with alias "my-org""

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