---
title: "agent deactivate"
domain: cli-commands
topic: agent-deactivate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:30.986Z
keywords: [agent, deactivate, Deactivate, org., Description, Examples, Flags]
---

# agent deactivate

> Deactivate an agent in an org.

## agent deactivate

Deactivate an agent in an org.

### Description for agent deactivate

Deactivating an agent makes it unavailable to your users. To make changes to an agent, such as adding or removing topics or actions, you must deactivate it. You can't preview an agent with the "agent preview" CLI command or VS Code if it's deactivated.

You must know the agent's API name to deactivate it; you can either be prompted for it or you can specify it with the --api-name flag. Find the agent's API name in its Agent Details page of your org's Agentforce Studio UI in Setup.

### Examples for agent deactivate

Deactivate an agent in your default target org by being prompted:

```

```

Deactivate the agent Resort\_Manager in the org with alias "my\_org":

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

\-n | \--api-name API-NAME

Optional

API name of the agent to deactivate.

Type: option