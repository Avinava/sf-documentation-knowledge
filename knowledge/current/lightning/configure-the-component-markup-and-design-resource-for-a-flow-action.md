---
title: "Configure the Component Markup and Design Resource for a Flow Action"
domain: lightning
topic: configure-the-component-markup-and-design-resource-for-a-flow-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.177Z
estimatedTokens: 763
keywords: [Configure, Component, Markup, Design, Resource, Flow, Action, custom, Aura, components, local, actions, implementing, lightning, availableForFlowActions]
---

# Configure the Component Markup and Design Resource for a Flow Action

> Make your custom Aura components available as flow local actions by implementing
  the lightning:availableForFlowActions interface.

# Configure the Component Markup and Design Resource for a Flow Action

Make your custom Aura components available as flow local actions by implementing the lightning:availableForFlowActions interface.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

We recommend that you omit markup from local actions. Local actions tend to execute quickly, and any markup you add to them will likely disappear before the user can make sense of it. If you want to display something to users, check out [Customize Flow Screens Using Aura Components](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_intro.htm "To customize the look and feel of your flow screen, build a custom Aura component. Configure the component and its design resource so that they’re compatible with flow screens. Then in Flow Builder, add a screen component to the screen.") instead.

Here’s sample code for a simple “Hello World” component that sets a couple of attributes.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Mark your resources, such as a component, with access="global" to make the resource usable outside of your own org. For example, you want a component to be usable in an installed package or by a Lightning App Builder user or an Experience Builder user in another org.

To make an attribute’s value customizable in Flow Builder, add it to the component's design resource. That way, flow admins can pass values between that attribute and the flow when they configure the corresponding Core Action element.

With this sample design resource, flow admins can customize the values for the “Hello World” component’s attributes.

```

```

A design resource describes the design-time behavior of a Lightning component—information that visual tools require to allow adding the component to a page or app. Adding this resource is similar to adding it for the Lightning App Builder.

When admins reference this component in a flow, they can pass data between the flow and the Aura component. Use the Set Input Values tab to set an attribute using values from the flow. Use the Store Output Values tab to store an attribute’s value in a flow variable.

#### See Also

-   [*Component Library*: lightning:availableForFlowActions Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowActions/documentation "Component Library: lightning:availableForFlowActions
    Interface - HTML (New Window)")

-   [Configure the Client-Side Controller for a Flow Local Action](atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_controller.htm "When a component is executed as a flow local action, the flow calls the invoke method in the client-side controller. To run the code asynchronously in your client-side controller, such as when you're making an XML HTTP request (XHR), return a Promise. When the method finishes or the Promise is fulfilled, control is returned back to the flow.")

## Code Examples

```apex
<aura:component implements="lightning:availableForFlowActions" access="global">
   <aura:attribute name="greeting" type="String" access="global" />
   <aura:attribute name="subject" type="String" access="global" />
</aura:component>
```

```
<design:component>
   <design:attribute name="greeting" label="Greeting" />
   <design:attribute name="subject" label="Subject" />
</design:component>
```

## Related Topics

- Customize Flow Screens Using Aura Components (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_intro.htm)
- Configure the Client-Side Controller for a Flow Local Action (atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions_controller.htm)
