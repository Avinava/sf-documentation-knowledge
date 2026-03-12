---
title: "Flow Screen Components vs. Flow Action Components"
domain: lightning
topic: flow-screen-components-vs-flow-action-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.230Z
estimatedTokens: 288
keywords: [Flow, Screen, Components, Action, Aura, component, screens, choosing, interfaces, consider, purpose, serves]
---

# Flow Screen Components vs. Flow Action Components

> You can make your Aura component available in flow screens or as a flow action. When
  choosing between the flow interfaces, consider what purpose the component serves in the
  flow.

# Flow Screen Components vs. Flow Action Components

You can make your Aura component available in flow screens or as a flow action. When choosing between the flow interfaces, consider what purpose the component serves in the flow.

| For this use case... | Create a... |
| --- | --- |
| Provide UI for the user to interact with | Flow screen component |
| Update the screen in real time | Flow screen component |
| Prevent the flow from continuing until the component is done | Flow action component |
| Make direct data queries to on-premise or private cloud data | Flow action component |

#### See Also

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

-   [*Component Library*: lightning:availableForFlowActions Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowActions/documentation "Component Library: lightning:availableForFlowActions
    Interface - HTML (New Window)")
