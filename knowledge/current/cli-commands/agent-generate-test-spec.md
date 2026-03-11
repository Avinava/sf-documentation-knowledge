---
title: "agent generate test-spec"
domain: cli-commands
topic: agent-generate-test-spec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:30.986Z
keywords: [agent, generate, test-spec, Generate, test, spec, which, YAML, file, lists, cases, testing, specific, agent., Description, Examples, Flags]
---

# agent generate test-spec

> Generate an agent test spec, which is a YAML file that lists the test cases for testing a specific agent.

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