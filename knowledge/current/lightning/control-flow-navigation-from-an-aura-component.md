---
title: "Control Flow Navigation from an Aura Component"
domain: lightning
topic: control-flow-navigation-from-an-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.190Z
estimatedTokens: 500
keywords: [Control, Flow, Navigation, Aura, Component, users, navigate, clicking, standard, buttons, bottom, screen, lightning, availableForFlowScreens, two]
---

# Control Flow Navigation from an Aura Component

> By default, users navigate a flow by clicking standard buttons at the bottom of
                each screen. The lightning:availableForFlowScreens interface provides two
                attributes to help you fully customize your screen's navigation. To figure out which
                navigation actions are available for the screen, loop through the availableActions attribute. To programmatically
                trigger one of those actions, call the navigateFlow action from your JavaScript controller.

# Control Flow Navigation from an Aura Component

By default, users navigate a flow by clicking standard buttons at the bottom of each screen. The lightning:availableForFlowScreens interface provides two attributes to help you fully customize your screen's navigation. To figure out which navigation actions are available for the screen, loop through the availableActions attribute. To programmatically trigger one of those actions, call the navigateFlow action from your JavaScript controller.

When you override the screen's navigation with an Aura component, remember to hide the footer so that the screen has only one navigation model.

-   **[Flow Navigation Actions](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_navigate_actions.htm)**
    The availableActions attribute lists the valid navigation actions for that screen.
-   **[Customize the Flow Footer with an Aura Component](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_footer.htm)**
    To replace the flow footer with an Aura component, use the parameters that the lightning:availableForFlowScreens interface provides. The availableActions array lists which actions are available for the screen, and the navigateFlow action lets you invoke one of the available actions.
-   **[Build a Custom Navigation Model for Your Flow Screens](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_navigate_custom.htm)**
    Since Aura components have access to a flow screen’s navigation actions, you can fully customize how the user moves between screens. For example, hide the default navigation buttons and have the flow move to the next screen when the user selects a choice.

#### See Also

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

## Related Topics

- Flow Navigation Actions (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_navigate_actions.htm)
- Customize the Flow Footer with an Aura Component (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_footer.htm)
- Build a Custom Navigation Model for Your Flow Screens (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_navigate_custom.htm)
