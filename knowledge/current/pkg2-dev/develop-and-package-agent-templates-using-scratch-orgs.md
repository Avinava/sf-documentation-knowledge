---
title: "Develop and Package Agent Templates Using Scratch Orgs"
domain: pkg2-dev
topic: develop-and-package-agent-templates-using-scratch-orgs
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:38:55.049Z
estimatedTokens: 1926
keywords: [Develop, Package, Agent, Templates, Scratch, Orgs, high-level, agents, distributed, ISVs, template, test, namespaced, org, retrieve, Salesforce, project, generate, CLI, finally, Metadata, Agentforce]
---

> At a high-level, agents are distributed by ISVs as agent templates. To package an agent
    template, you first create and test an agent in a namespaced scratch org. Then retrieve the
    agent to your Salesforce DX project, generate an agent template from the agent using Salesforce
    CLI, and finally package the agent template.

# Develop and Package Agent Templates Using Scratch Orgs

At a high-level, agents are distributed by ISVs as agent templates. To package an agent template, you first create and test an agent in a namespaced scratch org. Then retrieve the agent to your Salesforce DX project, generate an agent template from the agent using Salesforce CLI, and finally package the agent template.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pkg2_dev)

#### Important

You can't create packageable agent templates from agents that use Agent Script as their blueprint.

Workflow for Agent Template Development

![Six squares of text showing the agent template workflow](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fpkg_agent_template_workflow.png&folder=pkg2_dev)

## Agent and Agent Template Metadata

To package an agent template, it helps to first understand the metadata types that make up an agent and an agent template.

Agents are defined by these major metadata types.

-   Bot
-   BotVersion
-   GenAiPlannerBundle

The GenAiPlannerBundle type in turn defines the agent's actions and subagents. The agent generate template Salesforce CLI command brings together the metadata files for these three types and generates a BotTemplate file for a specific agent (Bot and BotVersion). The command also generates a new GenAiPlannerBundle file, which is different from the original file. Specifically, the new packageable GenAiPlannerBundle file replaces references to the local version of assets (which can't be packaged) with references to their global equivalents.

You then use the BotTemplate file, and the new GenAiPlannerBundle file, to package the agent template in a managed package.

![Compare the MD types for agent MD with the agent template MD types](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fpkg_agent_metadata.png&folder=pkg2_dev)

## Create an Agent

Create and test your agent.

From Setup in your scratch org, enter Agents in the Quick Find box, and select **Agentforce Agents**. Then locate and enable the **Agentforce** setting and refresh the page.

1.  Click **New Agent**, and then select an agent type.
2.  Follow the guided setup steps, and then click **Create**.

For more guidance, see the [documentation](https://help.salesforce.com/s/articleView?id=ai.agent_setup_explore_types.htm&language=en_US) for the agent type you chose. For details about creating an agent, see [Set Up Your Agent](https://help.salesforce.com/s/articleView?id=ai.agent_parent_setup.htm&language=en_US).

Agentforce-enabled scratch orgs have access to the [Agentforce Testing Center](https://help.salesforce.com/s/articleView?id=ai.agent_testing_center.htm&language=en_US). For more detailed information on testing your agents directly in your DX project, see [Test an Agent with Agentforce DX](https://developer.salesforce.com/docs/einstein/genai/guide/agent-dx-test.html) in the Agentforce Developer Guide.

## Set Up Your Salesforce DX Project and Scratch Org

To set up a Salesforce DX project and scratch org, you must already have a namespace and scratch org ready to use.

For guidance on obtaining a namespace or an Agentforce-enabled scratch org, see [Get Access to Scratch Orgs with Agentforce Enabled](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_scratch_orgs_agentforce.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

To package BotTemplate metadata, you must first [enable Einstein Chatbot](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_einstein.htm) in your Dev Hub org. You must also specify this metadata in your project-scratch-def.json file.

1.  If you’re using an existing Salesforce DX project that contains Apex classes, flows, or prompt templates for your agent, deploy them to the scratch org.

    ```

    ```

2.  Open the scratch org.

    ```

    ```


## Develop Your Agentforce Package

After you have built and tested your agent, you're ready to start packaging it.

1.  Retrieve the relevant metadata into your Salesforce DX project.

    ```

    ```

2.  Create an agent template metadata source file.

    In this example, we're generating an agent template from a Bot metadata file in your DX project that corresponds to the My\_Awesome\_Agent agent. A single Bot can have multiple BotVersions. Use the \--agent-version flag to specify the version. Set the required \--source-org flag to your scratch org.

    ```

    ```

    For more details on the agent generate template command, see the [Salesforce CLI Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_agent_commands_unified.htm#cli_reference_agent_generate_template_unified).

3.  Deploy the agent template metadata source file to your scratch org.

    ```

    ```

4.  Test your agent template in your scratch org by creating an agent using the template you just deployed. Ensure that the new agent works as you expect.
5.  When you're satisfied with your agent template, remove the following metadata from your package directory.

    1.  The GenAiPlannerBundle file that was part of your original agent. This file was used to create a new, separate GenAiPlannerBundle file for your agent template and is not necessary to package. Remove the GenAiPlannerBundle file that does not have “Template” in the name.
    2.  The Bot and BotVersion. Removing these metadata types prevents errors during packaging, since agents aren’t packageable.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

    #### Note

    To package prompt templates, you must assign permissions in the sfdx-project.json file. See [Packaging Considerations for Prompt Templates](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_considerations_packaging.htm&type=5&language=en_US).

6.  [Create a new package version](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_pkg_ver.htm) that contains the template and all dependencies. Possible dependencies include: topics, actions, Apex classes, flows, and prompt templates.

    ```

    ```


After a subscriber installs your package in their Agentforce-enabled org, they can use the Agentforce UI to create an agent from your template.

![User interface with ISV Agent Template tile](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmanaged_packaging%2Fimages%2Fpkg2_agent_template_ui.png&folder=pkg2_dev)

#### See Also

-   [Get Access to Scratch Orgs That Have Agentforce](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_scratch_orgs_agentforce.htm "Get Access to Scratch Orgs That Have Agentforce - HTML (New Window)")

-   [Package Agentforce Metadata Components](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_packageable_agentforce_md.htm "Package Agentforce Metadata Components - HTML (New Window)")

-   [*Salesforce Help*: Agentforce: Agents](https://help.salesforce.com/s/articleView?id=ai.copilot_intro.htm&type=5&language=en_US "Salesforce Help: Agentforce: Agents - HTML (New Window)")

-   [*Agentforce Developer Guide*](https://developer.salesforce.com/docs/einstein/genai/guide/get-started.html "Agentforce Developer Guide - HTML (New Window)")

-   [*Salesforce Help*: The Building Blocks of Agents](https://help.salesforce.com/s/articleView?id=ai.copilot_building_blocks.htm&type=5&language=en_US "Salesforce Help: The Building Blocks of Agents - HTML (New Window)")

## Code Examples

```
sf project deploy start --source-dir force-app --target-org MyNamespacedScratchOrg
```

```
sf org open
```

```
sf project retrieve start --metadata Agent:My_Awesome_Agent –-target-org MyNamespacedScratchOrg
```

```
sf agent generate template --agent-file force-app/main/default/bots/My_Awesome_Agent/My_Awesome_Agent.bot-meta.xml --agent-version 1 --source-org MyNamespacedScratchOrg
```

```
sf project deploy start  --source-dir force-app --target-org MyNamespacedScratchOrg
```
