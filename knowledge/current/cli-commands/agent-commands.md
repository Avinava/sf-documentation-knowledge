---
title: "agent Commands"
domain: cli-commands
topic: agent-commands
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:05.174Z
estimatedTokens: 14036
keywords: [agent, Commands, Activate, org, Examples, Flags, deactivate, generate, agent-spec, authoring-bundle, template, test-spec, preview, end, Beta]
---

# agent Commands

> Activate an agent in an org.

# agent Commands

Commands to work with agents.

-   **[agent activate](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_activate_unified)**
    Activate an agent in an org.
-   **[agent create](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_create_unified)**
    Create an agent in your org using a local agent spec file.
-   **[agent deactivate](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_deactivate_unified)**
    Deactivate an agent in an org.
-   **[agent generate agent-spec](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_generate_agent-spec_unified)**
    Generate an agent spec, which is a YAML file that captures what an agent can do.
-   **[agent generate authoring-bundle](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_generate_authoring-bundle_unified)**
    Generate an authoring bundle from an existing agent spec YAML file.
-   **[agent generate template](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_generate_template_unified)**
    Generate an agent template from an existing agent in your DX project so you can then package the template in a managed package.
-   **[agent generate test-spec](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_generate_test-spec_unified)**
    Generate an agent test spec, which is a YAML file that lists the test cases for testing a specific agent.
-   **[agent preview](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_preview_unified)**
    Interact with an agent to preview how it responds to your statements, questions, and commands (utterances).
-   **[agent preview end (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_preview_end_unified)**
    End an existing programmatic agent preview session and get trace location.
-   **[agent preview send (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_preview_send_unified)**
    Send a message to an existing agent preview session.
-   **[agent preview sessions (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_preview_sessions_unified)**
    List all known programmatic agent preview sessions.
-   **[agent preview start (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_preview_start_unified)**
    Start a programmatic agent preview session.
-   **[agent publish authoring-bundle](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_publish_authoring-bundle_unified)**
    Publish an authoring bundle to your org, which results in a new agent or a new version of an existing agent.
-   **[agent test create](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_test_create_unified)**
    Create an agent test in your org using a local test spec YAML file.
-   **[agent test list](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_test_list_unified)**
    List the available agent tests in your org.
-   **[agent test results](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_test_results_unified)**
    Get the results of a completed agent test run.
-   **[agent test resume](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_test_resume_unified)**
    Resume an agent test that you previously started in your org so you can view the test results.
-   **[agent test run](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_test_run_unified)**
    Start an agent test in your org.
-   **[agent validate authoring-bundle](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_validate_authoring-bundle_unified)**
    Validate an authoring bundle to ensure its Agent Script file compiles successfully and can be used to publish an agent.

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

## agent generate authoring-bundle

Generate an authoring bundle from an existing agent spec YAML file.

### Description for agent generate authoring-bundle

Authoring bundles are metadata components that contain an agent's Agent Script file. The Agent Script file is the agent's blueprint; it fully describes what the agent can do using the Agent Script language.

Use this command to generate a new authoring bundle based on an agent spec YAML file, which you create with the "agent generate agent-spec" command. The agent spec YAML file is a high-level description of the agent; it describes its essence rather than exactly what it can do. The resulting Agent Script file is customized to reflect what's in the agent spec file. You can also create an authoring bundle without an agent spec file by specifying the "--no-spec" flag; in this case, the resulting Agent Script file is just the default boilerplate.

The metadata type for authoring bundles is aiAuthoringBundle, which consist of a standard "<bundle-api-name>.bundle-meta.xml" metadata file and the Agent Script file (with extension ".agent"). When you run this command, the new authoring bundle is generated in the force-app/main/default/aiAuthoringBundles/<bundle-api-name> directory. Use the --output-dir flag to generate them elsewhere.

After you generate the initial authoring bundle, code the Agent Script file so your agent behaves exactly as you want. The Agent Script file generated by this command is just a first draft of your agent! Interactively test the agent by conversing with it using the "agent preview" command. Then publish the agent to your org with the "agent publish authoring-bundle" command.

This command requires an org because it uses it to access an LLM for generating the Agent Script file.

### Examples for agent generate authoring-bundle

Generate an authoring bundle by being prompted for all required values, such as the agent spec YAML file, the bundle name, and the API name; use your default org:

```

```

Generate an authoring bundle without using an agent spec file; give the bundle the label "My Authoring Bundle" and use your default org:

```

```

Generate an authoring bundle from the "specs/agentSpec.yaml" agent spec YAML file and give it the label "My Authoring Bundle"; use your default org:

```

```

Similar to previous example, but generate the authoring bundle files in the "other-package-dir/main/default" package directory; use the org with alias "my-dev-org":

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

\--api-name API-NAME

Optional

API name of the new authoring bundle; if not specified, the API name is derived from the authoring bundle name (label); the API name can't exist in the org.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-f | \--spec SPEC

Optional

Path to the agent spec YAML file. If you don't specify the flag, the command provides a list that you can choose from. Use the --no-spec flag to skip using an agent spec entirely.

Type: option

\--no-spec

Optional

Skip prompting for an agent spec and use the default Agent Script boilerplate in the generated authoring bundle.

Type: boolean

\-d | \--output-dir OUTPUT-DIR

Optional

Directory where the authoring bundle files are generated.

Type: option

\-n | \--name NAME

Optional

Name (label) of the authoring bundle; if not specified, you're prompted for the name.

Type: option

\--force-overwrite

Optional

Overwrite the existing authoring bundle if one with the same API name already exists locally.

Type: boolean

## agent generate template

Generate an agent template from an existing agent in your DX project so you can then package the template in a managed package.

### Description for agent generate template

At a high-level, agents are defined by the Bot, BotVersion, and GenAiPlannerBundle metadata types. The GenAiPlannerBundle type in turn defines the agent's topics and actions. This command uses the metadata files for these three types, located in your local DX project, to generate a BotTemplate file for a specific agent (Bot). You then use the BotTemplate file, along with the GenAiPlannerBundle file that references the BotTemplate, to package the template in a managed package that you can share between orgs or on AppExchange.

Use the --agent-file flag to specify the relative or full pathname of the Bot metadata file, such as force-app/main/default/bots/My\_Awesome\_Agent/My\_Awesome\_Agent.bot-meta.xml. A single Bot can have multiple BotVersions, so use the --agent-version flag to specify the version. The corresponding BotVersion file must exist locally. For example, if you specify "--agent-version 4", then the file force-app/main/default/bots/My\_Awesome\_Agent/v4.botVersion-meta.xml must exist.

The new BotTemplate file is generated in the "botTemplates" directory in your local package directory, and has the name <Agent\_API\_name>\_v<Version>\_Template.botTemplate-meta.xml, such as force-app/main/default/botTemplates/My\_Awesome\_Agent\_v4\_Template.botTemplate-meta.xml. The command displays the full pathname of the generated files when it completes.

### Examples for agent generate template

Generate an agent template from a Bot metadata file in your DX project that corresponds to the My\_Awesome\_Agent agent; use version 1 of the agent.

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

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\--agent-version AGENT-VERSION

Required

Version of the agent (BotVersion).

Type: option

\-f | \--agent-file AGENT-FILE

Required

Path to an agent (Bot) metadata file.

Type: option

## agent generate test-spec

Generate an agent test spec, which is a YAML file that lists the test cases for testing a specific agent.

### Description for agent generate test-spec

The first step when using Salesforce CLI to create an agent test in your org is to use this interactive command to generate a local YAML-formatted test spec file. The test spec YAML file contains information about the agent being tested, such as its API name, and then one or more test cases. This command uses the metadata components in your DX project when prompting for information, such as the agent API name; it doesn't look in your org.

To generate a specific agent test case, this command prompts you for this information; when possible, the command provides a list of options for you to choose from:

\- Utterance: Natural language statement, question, or command used to test the agent.

\- Expected topic: API name of the topic you expect the agent to use when responding to the utterance.

\- Expected actions: One or more API names of the expection actions the agent takes.

\- Expected outcome: Natural language description of the outcome you expect.

\- (Optional) Custom evaluation: Test an agent's response for specific strings or numbers.

\- (Optional) Conversation history: Boilerplate for additional context you can add to the test in the form of a conversation history.

When your test spec is ready, you then run the "agent test create" command to actually create the test in your org and synchronize the metadata with your DX project. The metadata type for an agent test is AiEvaluationDefinition.

If you have an existing AiEvaluationDefinition metadata XML file in your DX project, you can generate its equivalent YAML test spec file with the --from-definition flag.

### Examples for agent generate test-spec

Generate an agent test spec YAML file interactively:

```

```

Generate an agent test spec YAML file and specify a name for the new file; if the file exists, overwrite it without confirmation:

```

```

Generate an agent test spec YAML file from an existing AiEvaluationDefinition metadata XML file in your DX project:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-d | \--from-definition FROM-DEFINITION

Optional

Filepath to the AIEvaluationDefinition metadata XML file in your DX project that you want to convert to a test spec YAML file.

Type: option

\--force-overwrite

Optional

Don't prompt for confirmation when overwriting an existing test spec YAML file.

Type: boolean

\-f | \--output-file OUTPUT-FILE

Optional

Name of the generated test spec YAML file. Default value is "specs/<AGENT\_API\_NAME>-testSpec.yaml".

Type: option

## agent preview

Interact with an agent to preview how it responds to your statements, questions, and commands (utterances).

### Description for agent preview

Use this command to have a natural language conversation with an agent, either while you code its local Agent Script file or when it's published to an org. Previewing an agent acts like an initial test to make sure it responds to your utterances as you expect. For example, you can test that the agent uses a particular topic when asked a question, and then whether it invokes the correct action associated with that topic. This command is the CLI-equivalent of the Preview panel in your org's Agentforce Builder UI.

Run without flags, this command provides a list of agents to preview, divided into two categories: "Agent Script", which are agents that have a local authoring bundle in your DX project, or "Published", which are agents that are published and activated in your org. Authoring bundles contain an agent's Agent Script file. You then choose the agent you want to preview from the list. Or you can use the --authoring-bundle flag to specify a local authoring bundle's API name or --api-name to specify an activated published agent.

When previewing an agent from its Agent Script file, you can use these two modes:

\- Simulated mode (Default): Uses only the Agent Script file to converse, and it simulates (mocks) all the actions. Use this mode if none of the Apex classes, flows, or prompt templates that implement your actions are available yet. The LLM uses the information about topics in the Agent Script file to simulate what the action does or how it responds.

\- Live mode: Uses the actual Apex classes, flows, and prompt templates in your development org in the agent preview. If you've changed the Apex classe, flows, or prompt templates in your local DX project, then you must deploy them to your development org if you want to use them in your live preview.

You can use the Apex Replay Debugger to debug your Apex classes when using live mode for Agent Script files and for activated published agents; specify the --apex-debug flag.

Once connected to your agent, the preview interface is simple: in the "Start typing..." prompt, enter a statement, question, or command; when you're done, enter Return. Your utterance is posted on the right along with a timestamp. The agent then responds on the left. To exit the conversation, hit ESC or Control+C.

When the session concludes, the command asks if you want to save the API responses and chat transcripts. By default, the files are saved to the "./temp/agent-preview" directory. Specify a new default directory with the --output-dir flag.

### Examples for agent preview

Preview an agent by choosing from the list of available local Agent Script or published agents. If previewing a local Agent Script agent, use simulated mode. Use the org with alias "my-dev-org".

```

```

Preview an agent in live mode by choosing from a list of authoring bundles. Save the conversation transcripts to the "./transcripts/my-preview" directory, enable the Apex debug logs, and use your default org:

```

```

### Flags

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

API name of the activated published agent you want to interact with.

Type: option

\--authoring-bundle AUTHORING-BUNDLE

Optional

API name of the authoring bundle metadata component that contains the agent's Agent Script file.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory where conversation transcripts are saved.

Type: option

\-x | \--apex-debug

Optional

Enable Apex debug logging during the agent preview conversation.

Type: boolean

\--use-live-actions

Optional

Use real actions in the org; if not specified, preview uses AI to simulate (mock) actions.

Type: boolean

## agent preview end (Beta)

End an existing programmatic agent preview session and get trace location.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for agent preview end

You must have previously started a programmatic agent preview session with the "agent preview start" command to then use this command to end it. This command also displays the local directory where the session trace files are stored.

The original "agent preview start" command outputs a session ID which you then use with the --session-id flag of this command to end the session. You don't have to specify the --session-id flag if an agent has only one active preview session. You must also use either the --authoring-bundle or --api-name flag to specify the API name of the authoring bundle or the published agent, respecitvely. To find either API name, navigate to your package directory in your DX project. The API name of an authoring bundle is the same as its directory name under the "aiAuthoringBundles" metadata directory. Similarly, the published agent's API name is the same as its directory name under the "Bots" metadata directory.

### Examples for agent preview end

End a preview session of a published agent by specifying its session ID and API name ; use the default org:

```

```

Similar to previous example, but don't specify a session ID; you get an error if the published agent has more than one active session. Use the org with alias "my-dev-org":

```

```

End a preview session of an agent using its authoring bundle API name; you get an error if the agent has more than one active session.

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

\--session-id SESSION-ID

Optional

Session ID outputted by "agent preview start". Not required when the agent has exactly one active session. Run "agent preview sessions" to see the list of all sessions.

Type: option

\-n | \--api-name API-NAME

Optional

API name of the activated published agent you want to preview.

Type: option

\--authoring-bundle AUTHORING-BUNDLE

Optional

API name of the authoring bundle metadata component that contains the agent's Agent Script file.

Type: option

## agent preview send (Beta)

Send a message to an existing agent preview session.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for agent preview send

You must have previously started a programmatic agent preview session with the "agent preview start" command to then use this command to send the agent a message (utterance). This command then displays the agent's response.

The original "agent preview start" command outputs a session ID which you then use with the --session-id flag of this command to send a message. You don't have to specify the --session-id flag if an agent has only one active preview session. You must also use either the --authoring-bundle or --api-name flag to specify the API name of the authoring bundle or the published agent, respecitvely. To find either API name, navigate to your package directory in your DX project. The API name of an authoring bundle is the same as its directory name under the "aiAuthoringBundles" metadata directory. Similarly, the published agent's API name is the same as its directory name under the "Bots" metadata directory.

### Examples for agent preview send

Send a message to an activated published agent using its API name and session ID; use the default org:

```

```

Similar to previous example, but don't specify a session ID; you get an error if the agent has more than one active session. Use the org with alias "my-dev-org":

```

```

Send a message to an agent using its authoring bundle API name; you get an error if the agent has more than one active session:

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

\--session-id SESSION-ID

Optional

Session ID outputted by "agent preview start". Not required when the agent has exactly one active session. Run "agent preview sessions" to see list of all sessions.

Type: option

\-u | \--utterance UTTERANCE

Required

Utterance to send to the agent, enclosed in double quotes.

Type: option

\-n | \--api-name API-NAME

Optional

API name of the activated published agent you want to preview.

Type: option

\--authoring-bundle AUTHORING-BUNDLE

Optional

API name of the authoring bundle metadata component that contains the agent's Agent Script file.

Type: option

## agent preview sessions (Beta)

List all known programmatic agent preview sessions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for agent preview sessions

This command lists the agent preview sessions that were started with the "agent preview start" command and are still in the local cache. Use this command to discover specific session IDs that you can pass to the "agent preview send" or "agent preview end" commands with the --session-id flag.

Programmatic agent preview sessions can be started for both published activated agents and by using an agent's local authoring bundle, which contains its Agent Script file. In this command's output table, the Agent column contains either the API name of the authoring bundle or the published agent, whichever was used when starting the session. In the table, if the same API name has multiple rows with different session IDs, then it means that you previously started multiple preview sessions with the associated agent.

### Examples for agent preview sessions

List all cached agent preview sessions:

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

## agent preview start (Beta)

Start a programmatic agent preview session.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for agent preview start

This command outputs a session ID that you then use with the "agent preview send" command to send an utterance to the agent. Use the "agent preview sessions" command to list all active sessions and the "agent preview end" command to end a specific session.

Identify the agent you want to start previewing with either the --authoring-bundle flag to specify a local authoring bundle's API name or --api-name to specify an activated published agent's API name. To find either API name, navigate to your package directory in your DX project. The API name of an authoring bundle is the same as its directory name under the "aiAuthoringBundles" metadata directory. Similarly, the published agent's API name is the same as its directory name under the "Bots" metadata directory.

When starting a preview session using the authoring bundle, which contains the agent's Agent Script file, the preview uses mocked actions by default. Specify --use-live-actions for live mode, which uses the real Apex classes, flows, etc, in the org for the actions.

### Examples for agent preview start

Start a programmatic agent preview session by specifying an authoring bundle; uses mocked actions by default. Use the org with alias "my-dev-org":

```

```

Similar to previous example but use live actions and the default org:

```

```

Start a preview session with an activated published agent:

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

API name of the activated published agent you want to preview.

Type: option

\--authoring-bundle AUTHORING-BUNDLE

Optional

API name of the authoring bundle metadata component that contains the agent's Agent Script file.

Type: option

\--use-live-actions

Optional

Use real actions in the org; if not specified, preview uses AI to simulate (mock) actions.

Type: boolean

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

## agent test create

Create an agent test in your org using a local test spec YAML file.

### Description for agent test create

To run this command, you must have an agent test spec file, which is a YAML file that lists the test cases for testing a specific agent. Use the "agent generate test-spec" CLI command to generate a test spec file. Then specify the file to this command with the --spec flag, or run this command with no flags to be prompted.

When this command completes, your org contains the new agent test, which you can view and edit using the Testing Center UI. This command also retrieves the metadata component (AiEvaluationDefinition) associated with the new test to your local Salesforce DX project and displays its filename.

After you've created the test in the org, use the "agent test run" command to run it.

### Examples for agent test create

Create an agent test interactively and be prompted for the test spec and API name of the test in the org; use the default org:

```

```

Create an agent test and use flags to specify all required information; if a test with same API name already exists in the org, overwrite it without confirmation. Use the org with alias "my-org":

```

```

Preview what the agent test metadata (AiEvaluationDefinition) looks like without deploying it to your default org:

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

\--api-name API-NAME

Optional

API name of the new test; the API name must not exist in the org.

Type: option

\--spec SPEC

Optional

Path to the test spec YAML file.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\--preview

Optional

Preview the test metadata file (AiEvaluationDefinition) without deploying to your org.

Type: boolean

\--force-overwrite

Optional

Don't prompt for confirmation when overwriting an existing test (based on API name) in your org.

Type: boolean

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

## agent test results

Get the results of a completed agent test run.

### Description for agent test results

This command requires a job ID, which the original "agent test run" command displays when it completes. You can also use the --use-most-recent flag to see results for the most recently run agent test.

By default, this command outputs test results in human-readable tables for each test case. The tables show whether the test case passed, the expected and actual values, the test score, how long the test took, and more. Use the --result-format to display the test results in JSON or Junit format. Use the --output-dir flag to write the results to a file rather than to the terminal.

### Examples for agent test results

Get the results of an agent test run in your default org using its job ID:

```

```

Get the results of the most recently run agent test in an org with alias "my-org":

```

```

Get the results of the most recently run agent test in your default org, and write the JSON-formatted results into a directory called "test-results":

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

\-i | \--job-id JOB-ID

Required

Job ID of the completed agent test run.

Type: option

\--result-format RESULT-FORMAT

Optional

Format of the agent test run results.

Type: option

Permissible values are: json, human, junit, tap

Default value: human

\-d | \--output-dir OUTPUT-DIR

Optional

Directory to write the agent test results into.

If the agent test run completes, write the results to the specified directory. If the test is still running, the test results aren't written.

Type: option

\--verbose

Optional

Show generated data in the test results output.

When enabled, includes detailed generated data (such as invoked actions) in the human-readable test results output. This is useful for debugging test failures and understanding what actions were actually invoked during the test run.

The generated data is in JSON format and includes the Apex classes or Flows that were invoked, the Salesforce objects that were touched, and so on. Use the JSON structure of this information to build the test case JSONPath expression when using custom evaluations.

Type: boolean

## agent test resume

Resume an agent test that you previously started in your org so you can view the test results.

### Description for agent test resume

This command requires a job ID, which the original "agent test run" command displays when it completes. You can also use the --use-most-recent flag to see results for the most recently run agent test.

Use the --wait flag to specify the number of minutes for this command to wait for the agent test to complete; if the test completes by the end of the wait time, the command displays the test results. If not, the CLI returns control of the terminal to you, and you must run "agent test resume" again.

By default, this command outputs test results in human-readable tables for each test case. The tables show whether the test case passed, the expected and actual values, the test score, how long the test took, and more. Use the --result-format to display the test results in JSON or Junit format. Use the --output-dir flag to write the results to a file rather than to the terminal.

### Examples for agent test resume

Resume an agent test in your default org using a job ID:

```

```

Resume the most recently-run agent test in an org with alias "my-org" org; wait 10 minutes for the tests to finish:

```

```

Resume the most recent agent test in your default org, and write the JSON-formatted results into a directory called "test-results":

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

\-i | \--job-id JOB-ID

Optional

Job ID of the original agent test run.

Type: option

\-r | \--use-most-recent

Optional

Use the job ID of the most recent agent test run.

Type: boolean

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results to the terminal window.

Type: option

\--result-format RESULT-FORMAT

Optional

Format of the agent test run results.

Type: option

Permissible values are: json, human, junit, tap

Default value: human

\-d | \--output-dir OUTPUT-DIR

Optional

Directory to write the agent test results into.

If the agent test run completes, write the results to the specified directory. If the test is still running, the test results aren't written.

Type: option

\--verbose

Optional

Show generated data in the test results output.

When enabled, includes detailed generated data (such as invoked actions) in the human-readable test results output. This is useful for debugging test failures and understanding what actions were actually invoked during the test run.

The generated data is in JSON format and includes the Apex classes or Flows that were invoked, the Salesforce objects that were touched, and so on. Use the JSON structure of this information to build the test case JSONPath expression when using custom evaluations.

Type: boolean

## agent test run

Start an agent test in your org.

### Description for agent test run

Use the --api-name flag to specify the name of the agent test you want to run. Use the output of the "agent test list" command to get the names of all the available agent tests in your org.

By default, this command starts the agent test in your org, but it doesn't wait for the test to finish. Instead, it displays the "agent test resume" command, with a job ID, that you execute to see the results of the test run, and then returns control of the terminal window to you. Use the --wait flag to specify the number of minutes for the command to wait for the agent test to complete; if the test completes by the end of the wait time, the command displays the test results. If not, run "agent test resume".

By default, this command outputs test results in human-readable tables for each test case, if the test completes in time. The tables show whether the test case passed, the expected and actual values, the test score, how long the test took, and more. Use the --result-format to display the test results in JSON or Junit format. Use the --output-dir flag to write the results to a file rather than to the terminal.

### Examples for agent test run

Start an agent test called Resort\_Manager\_Test for an agent in your default org, don't wait for the test to finish:

```

```

Start an agent test for an agent in an org with alias "my-org" and wait for 10 minutes for the test to finish:

```

```

Start an agent test and write the JSON-formatted results into a directory called "test-results":

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

API name of the agent test to run; corresponds to the name of the AiEvaluationDefinition metadata component that implements the agent test.

Type: option

\-w | \--wait WAIT

Optional

Number of minutes to wait for the command to complete and display results to the terminal window.

Type: option

\--result-format RESULT-FORMAT

Optional

Format of the agent test run results.

Type: option

Permissible values are: json, human, junit, tap

Default value: human

\-d | \--output-dir OUTPUT-DIR

Optional

Directory to write the agent test results into.

If the agent test run completes, write the results to the specified directory. If the test is still running, the test results aren't written.

Type: option

\--verbose

Optional

Show generated data in the test results output.

When enabled, includes detailed generated data (such as invoked actions) in the human-readable test results output. This is useful for debugging test failures and understanding what actions were actually invoked during the test run.

The generated data is in JSON format and includes the Apex classes or Flows that were invoked, the Salesforce objects that were touched, and so on. Use the JSON structure of this information to build the test case JSONPath expression when using custom evaluations.

Type: boolean

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

## Code Examples

```
sf agent activate
```

```
sf agent activate --api-name Resort_Manager --target-org my-org
```

```
sf agent create
```

```
sf agent create --name "Resort Manager" --api-name Resort_Manager --spec specs/resortManagerAgent.yaml --target-org my-org
```

```
sf agent create --name "Resort Manager" --spec specs/resortManagerAgent.yaml --preview
```

## Related Topics

- agent activate (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
- agent create (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
- agent deactivate (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
- agent generate agent-spec (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
- agent generate authoring-bundle (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
- agent generate template (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
- agent generate test-spec (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
- agent preview (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
- agent preview end (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
- agent preview send (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm)
