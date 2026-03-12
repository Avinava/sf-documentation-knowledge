---
title: "Find Another Action"
domain: salesforce-guided-engagement
topic: find-another-action
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.887Z
estimatedTokens: 257
keywords: [Another, Action, Sometimes, customer, interaction, requires, step, doesn’t, appear, Actions, Recommendations, component, agent, clicks, Add]
---

# Find Another Action

> Sometimes a customer interaction requires a step that doesn’t appear in the Actions
    & Recommendations component. When an agent clicks Add, they can search for an action and
    start it. You can help users narrow their search by configuring a subset of actions.

# Find Another Action

Sometimes a customer interaction requires a step that doesn’t appear in the Actions & Recommendations component. When an agent clicks Add, they can search for an action and start it. You can help users narrow their search by configuring a subset of actions.

For example, Maria, the Salesforce admin at Awesome Bank, wants her agents to see only the actions that they use for loan processing.![Configure the flows available to your users when they click Add.](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fguided_engagement_add_guided_actions.png&folder=salesforce_guided_engagement)

Maria configures the set of actions available to her agents.

-   When Maria configures an Actions & Recommendations deployment in Setup, she selects which actions her agents see when they click Add.
-   If Maria uses Metadata API to define a deployment, she can define which actions appear for her agents.

When a user adds an action, it starts, and is added to the list above the actions pinned at the bottom.
