---
title: "Runtime Considerations for Flows That Include Aura
    Components"
domain: lightning
topic: runtime-considerations-for-flows-that-include-aura-components
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.239Z
estimatedTokens: 504
keywords: [Runtime, Considerations, Flows, Include, Aura, Components, Depending, run, flow, may, look, behave, differently, expected, app]
---

# Runtime Considerations for Flows That Include Aura
    Components

> Depending on where you run your flow, Aura components may look or behave differently
    than expected. The flow runtime app that's used for some distribution methods doesn't include
    all the necessary resources from the Lightning Component framework. When a flow is run from Flow
    Builder or a direct flow URL (https://yourDomain.my.salesforce.com/flow/MyFlowName), force and lightning events
    aren’t handled.

# Runtime Considerations for Flows That Include Aura Components

Depending on where you run your flow, Aura components may look or behave differently than expected. The flow runtime app that's used for some distribution methods doesn't include all the necessary resources from the Lightning Component framework. When a flow is run from Flow Builder or a direct flow URL (https://yourDomain.my.salesforce.com/flow/MyFlowName), force and lightning events aren’t handled.

To verify the behavior of your Aura components, test your flow in a way that handles force and lightning events, such as force:showToast. You can also add the appropriate event handlers directly to your component.

| Distribution Method | Handles force and lightning Events |
| --- | --- |
| Direct flow URL |  |
| Run and Debug buttons in Flow Builder |  |
| Run links on flow detail pages and list views |  |
| Web tab |  |
| Custom button or link |  |
| Lightning page |  |
| Experience Builder site page |  |
| Flow action |  |
| Utility bar |  |
| flow:interview Visualforce component |  |
| lightning:flow Aura component | Depends on where you embed the component or whether your component includes the appropriate event handlers |

#### See Also

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

-   [*Component Library*: lightning:availableForFlowActions Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowActions/documentation "Component Library: lightning:availableForFlowActions
    Interface - HTML (New Window)")

-   [Events Handled in the Salesforce Mobile App and Lightning Experience](atlas.en-us.lightning.meta/lightning/events_one.htm "The Salesforce mobile app and Lightning Experience handle some events, which you can fire in your Aura component.")

## Related Topics

- Events Handled in the Salesforce Mobile App and Lightning Experience (atlas.en-us.lightning.meta/lightning/events_one.htm)
