---
title: "agent activate"
domain: cli-commands
topic: agent-activate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.527Z
keywords: [agent, activate, Activate, org., Description, Examples, Flags]
---

# agent activate

> Activate an agent in an org.

## agent activate

Activate an agent in an org.

### Description for agent activate

Activating an agent makes it immediately available to your users. An agent must be active before you can preview it with the "agent preview" CLI command or VS Code.

You must know the agent's API name to activate it; you can either be prompted for it or you can specify it with the --api-name flag. Find the agent's API name in its Agent Details page of your org's Agentforce Studio UI in Setup.

### Examples for agent activate

Activate an agent in your default target org by being prompted:

```

```

Activate an agent with API name Resort\_Manager in the org with alias "my-org":

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

API name of the agent to activate.

Type: option