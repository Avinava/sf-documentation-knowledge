---
title: "agent generate template"
domain: cli-commands
topic: agent-generate-template
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:30.986Z
keywords: [agent, generate, template, Generate, existing, project, then, package, managed, package., Description, Examples, Flags]
---

# agent generate template

> Generate an agent template from an existing agent in your DX project so you can then package the template in a managed package.

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