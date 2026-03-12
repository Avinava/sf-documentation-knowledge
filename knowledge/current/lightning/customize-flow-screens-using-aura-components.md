---
title: "Customize Flow Screens Using Aura Components"
domain: lightning
topic: customize-flow-screens-using-aura-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.188Z
estimatedTokens: 640
keywords: [Customize, Flow, Screens, Aura, Components, look, feel, screen, build, custom, component, Configure, design, resource, they’re]
---

# Customize Flow Screens Using Aura Components

> To customize the look and feel of your flow screen, build a custom Aura component.
  Configure the component and its design resource so that they’re compatible with flow screens. Then
  in Flow Builder, add a screen component to the screen.

# Customize Flow Screens Using Aura Components

To customize the look and feel of your flow screen, build a custom Aura component. Configure the component and its design resource so that they’re compatible with flow screens. Then in Flow Builder, add a screen component to the screen.

-   **[Configure Components for Flow Screens](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens.htm)**
    Make your custom Aura components available to flow screens in Flow Builder by implementing the lightning:availableForFlowScreens interface.
-   **[Control Flow Navigation from an Aura Component](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_navigate.htm)**
    By default, users navigate a flow by clicking standard buttons at the bottom of each screen. The lightning:availableForFlowScreens interface provides two attributes to help you fully customize your screen's navigation. To figure out which navigation actions are available for the screen, loop through the availableActions attribute. To programmatically trigger one of those actions, call the navigateFlow action from your JavaScript controller.
-   **[Customize the Flow Header with an Aura Component](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_header.htm)**
    To replace the flow header with an Aura component, use the screenHelpText parameter from the lightning:availableForFlowScreens interface.
-   **[Dynamically Update a Flow Screen with an Aura Component](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_form.htm)**
    To conditionally display a field on your screen, build an Aura component that uses aura:if to check when parts of the component should appear.

#### See Also

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

-   [Create Flow Local Actions Using Aura Components](atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions.htm "To execute client-side logic in your flow, build or modify custom Aura components to use as local actions in flows. For example, get data from third-party systems without going through the Salesforce server, or open a URL in another browser tab. Once you configure the Aura component’s markup, client-side controller, and design resource, it’s available in Flow Builder as a Core Action element.")

## Related Topics

- Configure Components for Flow Screens (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens.htm)
- Control Flow Navigation from an Aura Component (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_navigate.htm)
- Customize the Flow Header with an Aura Component (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_header.htm)
- Dynamically Update a Flow Screen with an Aura Component (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_form.htm)
- Create Flow Local Actions Using Aura Components (atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions.htm)
