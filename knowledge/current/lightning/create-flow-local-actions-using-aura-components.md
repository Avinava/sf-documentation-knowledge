---
title: "Create Flow Local Actions Using Aura Components"
domain: lightning
topic: create-flow-local-actions-using-aura-components
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.167Z
estimatedTokens: 830
keywords: [Flow, Local, Actions, Aura, Components, execute, client-side, logic, build, modify, custom, flows, data, third-party, systems]
---

# Create Flow Local Actions Using Aura Components

> To execute client-side logic in your flow, build or modify custom Aura components to use
  as local actions in flows. For example, get data from third-party systems without going through
  the Salesforce server, or open a URL in another browser tab. Once you configure the Aura
  component’s markup, client-side controller, and design resource, it’s available in Flow Builder as
  a Core Action element.

# Create Flow Local Actions Using Aura Components

To execute client-side logic in your flow, build or modify custom Aura components to use as local actions in flows. For example, get data from third-party systems without going through the Salesforce server, or open a URL in another browser tab. Once you configure the Aura component’s markup, client-side controller, and design resource, it’s available in Flow Builder as a Core Action element.

-   Lightning components in flows must comply with [Lightning Locker](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/security_code.htm) restrictions.
-   Flows that include Lightning components are supported only in [Lightning runtime](https://help.salesforce.com/articleView?id=flow_distribute_runtime.htm&language=en_US).
-   Lightning components require a browser context to run, so flow action components are supported only in screen flows.

## Example

Here’s a sample “c:helloWorld” component and its client-side controller, which triggers a JavaScript alert that says Hello, World. In Flow Builder, local actions are available from the Core Action element.

```

```

```

```

-   **[Configure the Component Markup and Design Resource for a Flow Action](atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_markup.htm)**
    Make your custom Aura components available as flow local actions by implementing the lightning:availableForFlowActions interface.
-   **[Configure the Client-Side Controller for a Flow Local Action](atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_controller.htm)**
    When a component is executed as a flow local action, the flow calls the invoke method in the client-side controller. To run the code asynchronously in your client-side controller, such as when you're making an XML HTTP request (XHR), return a Promise. When the method finishes or the Promise is fulfilled, control is returned back to the flow.
-   **[Cancel an Asynchronous Request in a Flow Local Action](atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_abort.htm)**
    If an asynchronous request times out, the flow executes the local action's fault connector and sets $Flow.FaultMessage to the error message. However, the original request isn't automatically canceled. To abort an asynchronous request, use the cancelToken parameter available in the invoke method.

#### See Also

-   [*Component Library*: lightning:availableForFlowActions Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowActions/documentation "Component Library: lightning:availableForFlowActions
    Interface - HTML (New Window)")

-   [*Security for Lightning Components:* Lightning Locker](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/locker_intro.html "Security for Lightning Components: Lightning Locker - HTML (New Window)")

-   [Customize Flow Screens Using Aura Components](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_intro.htm "To customize the look and feel of your flow screen, build a custom Aura component. Configure the component and its design resource so that they’re compatible with flow screens. Then in Flow Builder, add a screen component to the screen.")

## Code Examples

```apex
<aura:component implements="lightning:availableForFlowActions" access="global">
    <aura:attribute name="greeting" type="String" default="Hello" access="global" />
    <aura:attribute name="subject" type="String" default="World" access="global" />
</aura:component>
```

```
({
   // When a flow executes this component, it calls the invoke method
   invoke : function(component, event, helper) {
      alert(component.get("v.greeting") + ", " + component.get("v.subject"));
   }
})
```

## Related Topics

- Configure the Component Markup and Design Resource for a Flow Action (atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_markup.htm)
- Configure the Client-Side Controller for a Flow Local Action (atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_controller.htm)
- Cancel an Asynchronous Request in a Flow Local Action (atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_abort.htm)
- Customize Flow Screens Using Aura Components (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_intro.htm)
