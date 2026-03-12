---
title: "Integrate Chat with Lightning Flow for Service"
domain: salesforce-guided-engagement
topic: integrate-chat-with-lightning-flow-for-service
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.873Z
estimatedTokens: 518
keywords: [Integrate, Chat, Lightning, Flow, Service, Customers, often, looking, quick, immediate, resolutions, their, problems, helps, agents]
---

# Integrate Chat with Lightning Flow for Service

> Customers who chat with you are often looking for quick and immediate resolutions to
        their problems. Lightning Flow for Service helps your agents provide consistent and
        efficient service. Agents can view your business processes in context of the customer chat
        because actions are presented as subtabs of the Chat Transcript primary tab. Agents see the
        appropriate actions to take right up front, without having to manually search for
        them.

# Integrate Chat with Lightning Flow for Service

Customers who chat with you are often looking for quick and immediate resolutions to their problems. Lightning Flow for Service helps your agents provide consistent and efficient service. Agents can view your business processes in context of the customer chat because actions are presented as subtabs of the Chat Transcript primary tab. Agents see the appropriate actions to take right up front, without having to manually search for them.

Lightning Flow for Service supports Chat in Lightning Experience, which uses Omni-Channel routing.

1.  Set up your actions.

    Use Flow Builder to create individual flows. Create quick actions, and add them to the record page layout so that they can appear in the component.

2.  Create an Actions & Recommendations deployment.

    In the settings for the Chat channel, specify the actions that agents see by default. Specify which actions you want agents to complete first and last, and whether to auto-launch the first flow in the list. Optionally, select the actions that you want agents to see when they click **Add**.

3.  Create a Lightning console record page.
    1.  In Lightning App Builder, create a record page for the Chat Transcript object using the Console: Pinned Left and Right Sidebars page template.
    2.  Add the Actions & Recommendations component to the left column, and specify the deployment name in component properties.
    3.  Place the Chat Body component in the right column.

## Example

This Chat Transcript page displays the Actions & Recommendations and Chat Body components.![Screen shot of the Service Console set up with Lightning Flow for Service and Live Agent.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_engagement_live_agent_runtime.png&folder=salesforce_guided_engagement)

#### See Also

-   [*Salesforce Help*: Set Up Chat in Lightning Experience](https://help.salesforce.com/articleView?id=live_agent_intro_lightning.htm&language=en_US "Salesforce Help: Set Up Chat in Lightning Experience - HTML (New Window)")
