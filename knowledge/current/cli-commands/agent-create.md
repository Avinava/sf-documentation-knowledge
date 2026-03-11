---
title: "agent create"
domain: cli-commands
topic: agent-create
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:30.986Z
keywords: [agent, create, Create, org, local, spec, file., Description, Examples, Flags]
---

# agent create

> Create an agent in your org using a local agent spec file.

## agent create

Create an agent in your org using a local agent spec file.

### Description for agent create

NOTE: This command creates an agent that doesn't use Agent Script as its blueprint. We generally don't recommend you use this workflow to create an agent. Rather, use the "agent generate|validate|publish authoring-bundle" commands to author agents that use the Agent Script language. See "Author an Agent" (https://developer.salesforce.com/docs/einstein/genai/guide/agent-dx-nga-author-agent.html) for details.

To run this command, you must have an agent spec file, which is a YAML file that define the agent properties and contains a list of AI-generated topics. Topics define the range of jobs the agent can handle. Use the "agent generate agent-spec" CLI command to generate an agent spec file. Then specify the file to this command using the --spec flag, along with the name (label) of the new agent with the --name flag. If you don't specify any of the required flags, the command prompts you.

When this command completes, your org contains the new agent, which you can then edit and customize in the Agent Builder UI. The new agent's topics are the same as the ones listed in the agent spec file. The agent might also have some AI-generated actions, or you can add them. This command also retrieves all the metadata files associated with the new agent to your local Salesforce DX project.

Use the --preview flag to review what the agent looks like without actually saving it in your org. When previewing, the command creates a JSON file in the current directory with all the agent details. The name of the JSON file is the agent's API name and a timestamp.

To open the new agent in your org's Agent Builder UI, run this command: "sf org open agent --api-name <api-name>".

### Examples for agent create

Create an agent by being prompted for the required information, such as the agent spec file and agent name, and then create it in your default org:

```

```

Create an agent by specifying the agent name, API name, and spec file with flags; use the org with alias "my-org"; the command fails if the API name is already being used in your org:

```

```

Preview the creation of an agent named "Resort Manager" and use your default org:

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

\--name NAME

Optional

Name (label) of the new agent.

Type: option

\--api-name API-NAME

Optional

API name of the new agent; if not specified, the API name is derived from the agent name (label); the API name must not exist in the org.

Type: option

\--spec SPEC

Optional

Path to an agent spec file.

Type: option

\--preview

Optional

Preview the agent without saving it in your org.

Type: boolean