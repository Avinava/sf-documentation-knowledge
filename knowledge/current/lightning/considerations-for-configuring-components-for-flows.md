---
title: "Considerations for Configuring Components for Flows"
domain: lightning
topic: considerations-for-configuring-components-for-flows
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.223Z
estimatedTokens: 782
keywords: [Considerations, Configuring, Components, Flows, configure, Aura, component, flow, determine, whether, screens, actions, understand, how, map]
---

# Considerations for Configuring Components for Flows

> Before you configure an Aura component for a flow, determine whether it should be
  available in flow screens or as flow actions and understand how to map data types between a flow
  and an Aura component. Then review some considerations for defining attributes and how components
  behave in flows at runtime.

# Considerations for Configuring Components for Flows

Before you configure an Aura component for a flow, determine whether it should be available in flow screens or as flow actions and understand how to map data types between a flow and an Aura component. Then review some considerations for defining attributes and how components behave in flows at runtime.

-   Lightning components in flows must comply with [Lightning Locker](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/security_code.htm) restrictions.
-   Flows that include Lightning components are supported only in [Lightning runtime](https://help.salesforce.com/articleView?id=flow_distribute_runtime.htm&language=en_US).

-   **[Flow Screen Components vs. Flow Action Components](atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_compare.htm)**
    You can make your Aura component available in flow screens or as a flow action. When choosing between the flow interfaces, consider what purpose the component serves in the flow.
-   **[Which Custom Lightning Component Attribute Types Are Supported in Flows?](atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_map.htm)**
    Not all custom Lightning component data types are supported in flows. You can map only these types and their associated collection types between flows and custom Lightning components.
-   **[Design Attribute Considerations for Flow Screen Components and Local Actions](atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_attributes.htm)**
    To expose an attribute in Flow Builder, define a corresponding design:attribute in the component bundle's design resource. Keep these guidelines in mind when defining design attributes for flows.
-   **[Runtime Considerations for Flows That Include Aura Components](atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_runtime.htm)**
    Depending on where you run your flow, Aura components may look or behave differently than expected. The flow runtime app that's used for some distribution methods doesn't include all the necessary resources from the Lightning Component framework. When a flow is run from Flow Builder or a direct flow URL (https://yourDomain.my.salesforce.com/flow/MyFlowName), force and lightning events aren’t handled.

#### See Also

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

-   [*Component Library*: lightning:availableForFlowActions Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowActions/documentation "Component Library: lightning:availableForFlowActions
    Interface - HTML (New Window)")

-   [*Security for Lightning Components:* Lightning Locker](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/locker_intro.html "Security for Lightning Components: Lightning Locker - HTML (New Window)")

## Related Topics

- Flow Screen Components vs. Flow Action Components (atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_compare.htm)
- Which Custom Lightning Component Attribute Types Are Supported in Flows? (atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_map.htm)
- Design Attribute Considerations for Flow Screen Components and Local Actions (atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_attributes.htm)
- Runtime Considerations for Flows That Include Aura Components (atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_runtime.htm)
