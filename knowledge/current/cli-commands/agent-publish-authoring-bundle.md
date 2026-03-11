---
title: "agent publish authoring-bundle"
domain: cli-commands
topic: agent-publish-authoring-bundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.528Z
keywords: [agent, publish, authoring-bundle, Publish, authoring, bundle, org, which, results, new, version, existing, agent., Description, Examples, Flags]
---

# agent publish authoring-bundle

> Publish an authoring bundle to your org, which results in a new agent or a new version of an existing agent.

## agent publish authoring-bundle

Publish an authoring bundle to your org, which results in a new agent or a new version of an existing agent.

### Description for agent publish authoring-bundle

An authoring bundle is a metadata type (named aiAuthoringBundle) that provides the blueprint for an agent. The metadata type contains two files: the standard metatada XML file and an Agent Script file (extension ".agent") that fully describes the agent using the Agent Script language.

When you publish an authoring bundle to your org, a number of things happen. First, this command validates that the Agent Script file successfully compiles. If there are compilation errors, the command exits and you must fix the Agent Script file to continue. Once the Agent Script file compiles, then it's published to the org, which in turn creates new associated metadata (Bot, BotVersion, GenAiX), or new versions of the metadata if the agent already exists. The new or updated metadata is retrieved back to your DX project; specify the --skip-retrieve flag to skip this step. Finally, the authoring bundle metadata (AiAuthoringBundle) is deployed to your org.

This command uses the API name of the authoring bundle.

### Examples for agent publish authoring-bundle

Publish an authoring bundle by being prompted for its API name; use your default org:

```

```

Publish an authoring bundle with API name MyAuthoringBundle to the org with alias "my-dev-org":

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

API name of the authoring bundle you want to publish; if not specified, the command provides a list that you can choose from.

Type: option

\--skip-retrieve

Optional

Don't retrieve the metadata associated with the agent to your DX project.

Type: boolean