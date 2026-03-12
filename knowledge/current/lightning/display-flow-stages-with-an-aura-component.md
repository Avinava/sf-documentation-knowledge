---
title: "Display Flow Stages with an Aura Component"
domain: lightning
topic: display-flow-stages-with-an-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.428Z
estimatedTokens: 608
keywords: [Display, Flow, Stages, Aura, Component, you’ve, added, users, lightning, progressindicator]
---

# Display Flow Stages with an Aura Component

> If you’ve added stages to your flow, display them to flow users with an Aura
                component, such as lightning:progressindicator.

# Display Flow Stages with an Aura Component

If you’ve added stages to your flow, display them to flow users with an Aura component, such as lightning:progressindicator.

To add a progress indicator component to your flow, you have two options:

-   Wrap the progress indicator with a lightning:flow component in a parent component.

    ```

    ```

-   Add the progress indicator to your flow screen directly, by using a screen component.

-   **[Display Flow Stages by Wrapping a Progress Indicator](atlas.en-us.lightning.meta/lightning/components_using_flow_stages_wrapper.htm)**
    If you’re tracking stages in your flow, display them at runtime by creating a custom component that wraps a progress indicator with the lightning:flow component. Use the progress indicator to display the flow’s active stages and current stage, and use the lightning:flow component to display the flow’s screens. To pass the flow’s active stages and current stage to the progress indicator, use the lightning:flow component's onstatuschange action.
-   **[Display Flow Stages with a Progress Indicator on the Flow Screen](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_stages.htm)**
    If you track stages in your flow, display them at runtime by adding a custom component to the flow’s screens. Create a progress indicator component that displays the flow’s active stages and current stage, and make sure that it’s available for flow screens. When you add the component to each flow screen, pass the $Flow.ActiveStages and $Flow.CurrentStage global variables into the component’s attributes.

#### See Also

-   [*Salesforce Help:* Show Users Progress Through a Flow with Stages](https://help.salesforce.com/articleView?id=flow_build_stages.htm&language=en_US "Salesforce Help: Show Users Progress Through a Flow with
    Stages - HTML (New Window)")

-   [Display Flow Stages with a Progress Indicator on the Flow Screen](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_stages.htm "If you track stages in your flow, display them at runtime by adding a custom component to the flow’s screens. Create a progress indicator component that displays the flow’s active stages and current stage, and make sure that it’s available for flow screens. When you add the component to each flow screen, pass the $Flow.ActiveStages and $Flow.CurrentStage global variables into the component’s attributes.")

## Code Examples

```
<aura:component>
   <lightning:progressindicator/>
   <lightning:flow/>
</aura:component>
```

## Related Topics

- Display Flow Stages by Wrapping a Progress Indicator (atlas.en-us.lightning.meta/lightning/components_using_flow_stages_wrapper.htm)
- Display Flow Stages with a Progress Indicator on the Flow Screen (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_stages.htm)
