---
title: "agent validate authoring-bundle"
domain: cli-commands
topic: agent-validate-authoring-bundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.528Z
keywords: [agent, validate, authoring-bundle, Validate, authoring, bundle, ensure, its, Agent, Script, file, compiles, successfully, used, publish, agent., Description, Examples, Flags]
---

# agent validate authoring-bundle

> Validate an authoring bundle to ensure its Agent Script file compiles successfully and can be used to publish an agent.

## agent validate authoring-bundle

Validate an authoring bundle to ensure its Agent Script file compiles successfully and can be used to publish an agent.

### Description for agent validate authoring-bundle

An authoring bundle is a metadata type (named aiAuthoringBundle) that provides the blueprint for an agent. The metadata type contains two files: the standard metatada XML file and an Agent Script file (extension ".agent") that fully describes the agent using the Agent Script language.

This command validates that the Agent Script file in the authoring bundle compiles without errors so that you can later publish the bundle to your org. Use this command while you code the Agent Script file to ensure that it's valid. If the validation fails, the command outputs the list of syntax errors, a brief description of the error, and the location in the Agent Script file where the error occurred.

This command uses the API name of the authoring bundle. If you don't provide an API name with the --api-name flag, the command searches the current DX project and outputs a list of authoring bundles that it found for you to choose from.

### Examples for agent validate authoring-bundle

Validate an authoring bundle by being prompted for its API name; use your default org:

```

```

Validate an authoring bundle with API name MyAuthoringBundle; use the org with alias "my-dev-org":

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

API name of the authoring bundle you want to validate; if not specified, the command provides a list that you can choose from.

Type: option