---
title: "Use Aura Components with Flows"
domain: lightning
topic: use-aura-components-with-flows
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.402Z
estimatedTokens: 565
keywords: [Aura, Components, Flows, Customize, look-and-feel, functionality, adding, Lightning, wrap, flow, component, configure, runtime, control, how]
---

# Use Aura Components with Flows

> Customize the look-and-feel and functionality of your flows by adding Lightning
                components to them. Or wrap a flow in an Aura component to configure the flow at
                runtime, such as to control how a paused flow is resumed.

# Use Aura Components with Flows

Customize the look-and-feel and functionality of your flows by adding Lightning components to them. Or wrap a flow in an Aura component to configure the flow at runtime, such as to control how a paused flow is resumed.

-   **[Considerations for Configuring Components for Flows](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_tips.htm)**
    Before you configure an Aura component for a flow, determine whether it should be available in flow screens or as flow actions and understand how to map data types between a flow and an Aura component. Then review some considerations for defining attributes and how components behave in flows at runtime.
-   **[Customize Flow Screens Using Aura Components](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_intro.htm)**
    To customize the look and feel of your flow screen, build a custom Aura component. Configure the component and its design resource so that they’re compatible with flow screens. Then in Flow Builder, add a screen component to the screen.
-   **[Create Flow Local Actions Using Aura Components](atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions.htm)**
    To execute client-side logic in your flow, build or modify custom Aura components to use as local actions in flows. For example, get data from third-party systems without going through the Salesforce server, or open a URL in another browser tab. Once you configure the Aura component’s markup, client-side controller, and design resource, it’s available in Flow Builder as a Core Action element.
-   **[Embed a Flow in a Custom Aura Component](atlas.en-us.lightning.meta/lightning/components_using_flow_cmp.htm)**
    Once you embed a flow in an Aura component, use JavaScript and Apex code to configure the flow at run time. For example, pass values into the flow or to control what happens when the flow finishes. lightning:flow supports only screen flows and autolaunched flows.
-   **[Display Flow Stages with an Aura Component](atlas.en-us.lightning.meta/lightning/components_using_flow_stages.htm)**
    If you’ve added stages to your flow, display them to flow users with an Aura component, such as lightning:progressindicator.

## Related Topics

- Considerations for Configuring Components for Flows (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_tips.htm)
- Customize Flow Screens Using Aura Components (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_intro.htm)
- Create Flow Local Actions Using Aura Components (atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions.htm)
- Embed a Flow in a Custom Aura Component (atlas.en-us.lightning.meta/lightning/components_using_flow_cmp.htm)
- Display Flow Stages with an Aura Component (atlas.en-us.lightning.meta/lightning/components_using_flow_stages.htm)
