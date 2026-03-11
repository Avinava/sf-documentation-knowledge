---
title: "agent generate agent-spec"
domain: cli-commands
topic: agent-generate-agent-spec
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:26:30.986Z
keywords: [agent, generate, agent-spec, Generate, spec, which, YAML, file, captures, do., Description, Examples, Flags]
---

# agent generate agent-spec

> Generate an agent spec, which is a YAML file that captures what an agent can do.

## agent generate agent-spec

Generate an agent spec, which is a YAML file that captures what an agent can do.

### Description for agent generate agent-spec

An agent spec is a YAML-formatted file that contains basic information about the agent, such as its role, company description, and an AI-generated list of topics based on this information. Topics define the range of jobs your agent can handle.

Use flags, such as --role and --company-description, to provide details about your company and the role that the agent plays in your company. If you prefer, you can also be prompted for the basic information; use --full-interview to be prompted for all required and optional properties. Upon command execution, the large language model (LLM) associated with your org uses the provided information to generate a list of topics for the agent. Because the LLM uses the company and role information to generate the topics, we recommend that you provide accurate, complete, and specific details so the LLM generates the best and most relevant topics. Once generated, you can edit the spec file; for example, you can remove topics that don't apply or change a topic's description.

You can also iterate the spec generation process by using the --spec flag to pass an existing agent spec file to this command, and then using the --role, --company-description, etc, flags to refine your agent properties. Iteratively improving the description of your agent allows the LLM to generate progressively better topics.

You can also specify other agent properties, such as a custom prompt template, how to ground the prompt template to add context to the agent's prompts, the tone of the prompts, and the username of a user in the org to assign to the agent.

When your agent spec is ready, generate an authoring bundle from it by passing the spec file to the --spec flag of the "agent generate authoring-bundle" CLI command. An authoring bundle is a metadata type that contains an Agent Script file, which is the blueprint for an agent. (While not recommended, you can also use the agent spec file to immediately create an agent with the "agent create" command. We don't recommend this workflow because these types of agents don't use Agent Script, and are thus less flexible and more difficult to maintain.)

### Examples for agent generate agent-spec

Generate an agent spec in the default location and use flags to specify the agent properties, such as its role and your company details; use your default org:

```

```

Generate an agent spec by being prompted for the required agent properties and generate a maxiumum of 5 topics; write the generated file to the "specs/resortManagerSpec.yaml" file and use the org with alias "my-org":

```

```

Be prompted for all required and optional agent properties; use your default org:

```

```

Specify an existing agent spec file called "specs/resortManagerAgent.yaml", and then overwrite it with a new version that contains newly AI-generated topics based on the updated role information passed in with the --role flag:

```

```

Specify that the conversational tone of the agent is formal and to attach the "resortmanager@myorg.com" username to it; be prompted for the required properties and use your default org:

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

\--type TYPE

Optional

Type of agent to create. Internal types are copilots used internally by your company and customer types are the agents you create for your customers.

Type: option

Permissible values are: customer, internal

\--role ROLE

Optional

Role of the agent.

Type: option

\--company-name COMPANY-NAME

Optional

Name of your company.

Type: option

\--company-description COMPANY-DESCRIPTION

Optional

Description of your company.

Type: option

\--company-website COMPANY-WEBSITE

Optional

Website URL of your company.

Type: option

\--max-topics MAX-TOPICS

Optional

Maximum number of topics to generate in the agent spec; default is 5.

Type: option

\--agent-user AGENT-USER

Optional

Username of a user in your org to assign to your agent; determines what your agent can access and do.

Type: option

\--enrich-logs ENRICH-LOGS

Optional

Adds agent conversation data to event logs so you can view all agent session activity in one place.

Type: option

Permissible values are: true, false

\--tone TONE

Optional

Conversational style of the agent, such as how it expresses your brand personality in its messages through word choice, punctuation, and sentence structure.

Type: option

Permissible values are: formal, casual, neutral

\--spec SPEC

Optional

Agent spec file, in YAML format, to use as input to the command.

Type: option

\--output-file OUTPUT-FILE

Optional

Path for the generated YAML agent spec file; can be an absolute or relative path.

Type: option

Default value: specs/agentSpec.yaml

\--full-interview

Optional

Prompt for both required and optional flags.

Type: boolean

\--prompt-template PROMPT-TEMPLATE

Optional

API name of a customized prompt template to use instead of the default prompt template.

Type: option

\--grounding-context GROUNDING-CONTEXT

Optional

Context information and personalization that's added to your prompts when using a custom prompt template.

Type: option

\--force-overwrite

Optional

Don't prompt the user to confirm that an existing spec file will be overwritten.

Type: boolean