---
title: "Get Access to Scratch Orgs That Have Agentforce"
domain: pkg2-dev
topic: get-access-to-scratch-orgs-that-have-agentforce
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:26.097Z
estimatedTokens: 1364
keywords: [Access, Scratch, Orgs, Agentforce, tools, customize, agents, deeply, securely, integrated, customers, data, apps, brings, together]
---

# Get Access to Scratch Orgs That Have Agentforce

> Agentforce is a set of tools to create and customize AI agents that are deeply and
    securely integrated with customers' data and apps. Agentforce brings together humans with agents
    to transform the way work gets done. Start your journey with Agentforce by testing it in a
    scratch org.

# Get Access to Scratch Orgs That Have Agentforce

Agentforce is a set of tools to create and customize AI agents that are deeply and securely integrated with customers' data and apps. Agentforce brings together humans with agents to transform the way work gets done. Start your journey with Agentforce by testing it in a scratch org.

If you don’t already have a Partner Business Org (PBO), join the [Salesforce Partner Community](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/appexchange_partner_join.htm) and [request a PBO](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/appexchange_partner_request_pbo.htm).

If you’re new to creating scratch orgs, follow these steps to complete the one-time Dev Hub setup in your PBO. The Dev Hub is a feature within an org that lets you create and manage scratch orgs, second-generation managed packages (2GP), and namespaces.

-   [Enable the Dev Hub and 2GP](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_pkg_enable_devhub.htm)
-   [Create a Developer Edition](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/environment_hub_manage_create_org.htm) org using Environment Hub
-   [Create a namespace](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/sfdx_dev_dev2gp_create_namespace.htm) in the Developer Edition org
-   [Link that namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_reg_namespace.htm) from your PBO. Linking the namespace lets you create 2GP packages that use that namespace.
-   [Authorize the Dev Hub org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm).
-   [Create a Salesforce DX Project](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm).

To create a scratch org with Agentforce and Prompt Builder enabled, use this sample project-scratch-def.json file (or simply add the feature and setting shown in this sample to your existing scratch org definition file).

```

```

To create a scratch org with the Einstein1AIPlatform feature, the scratch org you create can be a Partner Developer, Partner Enterprise, Developer, or Enterprise edition.

To create a scratch org, run this Salesforce CLI command. Update the definition-file name, alias, and target-dev-hub alias as needed.

```

```

## Scratch Orgs with both Agentforce and Data Cloud

For some use cases such as prompt templates that use RAG, Retrievers, or BYO LLM, a scratch org that has both GenAI and Data Cloud functionality enabled is required.

Only include Data Cloud if it’s required. Specifying Data Cloud in a scratch org significantly increases the time it takes for a scratch org creation to complete.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

Including Data Cloud in a scratch org has a prerequisite. You must first open a case in the Salesforce Partner Community to request for your PBO Dev Hub org to be granted permission to create Data Cloud scratch orgs. This request is only granted to PBO orgs.

```

```

## Set up Agentforce in your Scratch Org

After your scratch org is created, follow these steps to start developing with Agentforce.

-   [Create Agents](https://help.salesforce.com/s/articleView?id=sf.copilot_setup_enable.htm&language=en_US) manually in the scratch org.
-   To use prompt templates with your Agent Actions, [assign prompt template permissions](https://help.salesforce.com/s/articleView?id=ai.prompt_builder_enable.htm&type=5&language=en_US).

#### See Also

-   [Packageable Agentforce Metadata](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/dev2gp_packageable_agentforce_md.htm "Packageable Agentforce Metadata - HTML (New Window)")

-   [*Trailhead*: Quick Start: Build Your First Agent with Agentforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-build-your-first-agent-with-agentforce "Trailhead: Quick Start: Build Your First Agent with Agentforce - HTML (New Window)")

-   [*Salesforce Help*: Agentforce: Agents](https://help.salesforce.com/s/articleView?id=ai.copilot_intro.htm&type=5&language=en_US "Salesforce Help: Agentforce: Agents - HTML (New Window)")

-   [*Agentforce Developer Guide*](https://developer.salesforce.com/docs/einstein/genai/guide/get-started.html "Agentforce Developer Guide - HTML (New Window)")

-   [*Salesforce Help*: The Building Blocks of Agents](https://help.salesforce.com/s/articleView?id=ai.copilot_building_blocks.htm&type=5&language=en_US "Salesforce Help: The Building Blocks of Agents - HTML (New Window)")

-   [*Salesforce Help*: Customize Your Agents with Topics and Actions](https://help.salesforce.com/s/articleView?id=ai.copilot_topics_actions.htm&type=5&language=en_US "Salesforce Help: Customize Your Agents with Topics and Actions - HTML (New Window)")

-   [*Salesforce Help*: Considerations for Agents](https://help.salesforce.com/s/articleView?id=ai.copilot_considerations.htm&type=5&language=en_US "Salesforce Help: Considerations for Agents - HTML (New Window)")

-   [*Salesforce Help*: AI Project Success](https://help.salesforce.com/s/articleView?id=ai.generative_ai_plan_project.htm&type=5&language=en_US "Salesforce Help: AI Project Success - HTML (New Window)")

## Code Examples

```
{
  "orgName": "GenAI Scratch Org",
  "edition": "Partner Developer",
  "features": ["Einstein1AIPlatform"],
  "settings": {
    "einsteinGptSettings" : {
      "enableEinsteinGptPlatform" : true
    }
  }
}
```

```
sf org create scratch --definition-file config/my-agentforce-project-scratch-def.json --alias MyNamespacedScratchOrg --set-default --target-dev-hub MyDevHubOrg
```

```
{
  "orgName": "GenAI & Data Cloud Scratch Org",
  "edition": "Partner Developer",
  "features": ["CustomerDataPlatform", "CustomerDataPlatformLite","Einstein1AIPlatform"],
  "settings": {
    "einsteinGptSettings" : {
      "enableEinsteinGptPlatform" : true
    },
    "customerDataPlatformSettings": {
      "enableCustomerDataPlatform": true
    }
  }
}
```
