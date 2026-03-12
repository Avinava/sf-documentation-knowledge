---
title: "Configure Components for Flow Screens"
domain: lightning
topic: configure-components-for-flow-screens
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.185Z
estimatedTokens: 624
keywords: [Configure, Components, Flow, Screens, custom, Aura, Builder, implementing, lightning, availableForFlowScreens]
---

# Configure Components for Flow Screens

> Make your custom Aura components available to flow screens in Flow Builder by
    implementing the lightning:availableForFlowScreens
    interface.

# Configure Components for Flow Screens

Make your custom Aura components available to flow screens in Flow Builder by implementing the lightning:availableForFlowScreens interface.

Here’s the sample code for a simple “Hello World” component.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Mark your resources, such as a component, with access="global" to make the resource usable outside of your own org. For example, you want a component to be usable in an installed package or by a Lightning App Builder user or an Experience Builder user in another org.

To make an attribute’s value customizable in Flow Builder, add it to the component's design resource. That way, flow admins can pass values between that attribute and the flow when they configure the screen component.

With this sample design resource, flow admins can customize the values for the “Hello World” component’s attributes.

```

```

A design resource describes the design-time behavior of a Lightning component—information that visual tools require to allow adding the component to a page or app. Adding this resource is similar to adding it for the Lightning App Builder.

When admins reference this component in a flow, they can set each attribute using values from the flow. And they can store each attribute’s output value in a flow variable.

#### See Also

-   [Control Flow Navigation from an Aura Component](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_navigate.htm "By default, users navigate a flow by clicking standard buttons at the bottom of each screen. The lightning:availableForFlowScreens interface provides two attributes to help you fully customize your screen's navigation. To figure out which navigation actions are available for the screen, loop through the availableActions attribute. To programmatically trigger one of those actions, call the navigateFlow action from your JavaScript controller.")

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

-   [*Security for Lightning Components:* Lightning Locker](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/locker_intro.html "Security for Lightning Components: Lightning Locker - HTML (New Window)")

## Code Examples

```apex
<aura:component implements="lightning:availableForFlowScreens" access="global">
    <aura:attribute name="greeting" type="String" access="global" />
    <aura:attribute name="subject" type="String" access="global" />

    <div style="box">
      <span class="greeting">{!v.greeting}</span>, {!v.subject}!
    </div>
</aura:component>
```

```
<design:component label="Hello World">
   <design:attribute name="greeting" label="Greeting" />
   <design:attribute name="subject" label="Subject" />
</design:component>
```

## Related Topics

- Control Flow Navigation from an Aura Component (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_navigate.htm)
