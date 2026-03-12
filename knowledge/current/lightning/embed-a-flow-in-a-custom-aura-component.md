---
title: "Embed a Flow in a Custom Aura Component"
domain: lightning
topic: embed-a-flow-in-a-custom-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.406Z
estimatedTokens: 710
keywords: [Embed, Flow, Custom, Aura, Component, Once, JavaScript, Apex, code, configure, run, time, pass, control, happens]
---

# Embed a Flow in a Custom Aura Component

> Once you embed a flow in an Aura component, use JavaScript and Apex code to
                configure the flow at run time. For example, pass values into the flow or to control
                what happens when the flow finishes. lightning:flow supports only screen flows and autolaunched
                flows.

# Embed a Flow in a Custom Aura Component

Once you embed a flow in an Aura component, use JavaScript and Apex code to configure the flow at run time. For example, pass values into the flow or to control what happens when the flow finishes. lightning:flow supports only screen flows and autolaunched flows.

A flow is an application, built with Flow Builder, that collects, updates, edits, and creates Salesforce information.

To embed a flow in your Aura component, add the <lightning:flow> component to it.

```

```

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

When a page loads that includes a flow component, such as Lightning App Builder or an active Lightning page, the flow runs. Make sure that the flow doesn’t perform any actions – such as create or delete records – before the first screen.

-   **[Reference Flow Output Variable Values in a Wrapper Aura Component](atlas.en-us.lightning.meta/lightning/components_using_flow_inputs_get.htm)**
    When you embed a flow in an Aura component, you can display or reference the flow’s variable values. Use the onstatuschange action to get values from the flow's output variables. Output variables are returned as an array.
-   **[Set Flow Input Variable Values from a Wrapper Aura Component](atlas.en-us.lightning.meta/lightning/components_using_flow_inputs_set.htm)**
    When you embed a flow in a custom Aura component, give the flow more context by initializing its variables. In the component's controller, create a list of maps, then pass that list to the startFlow method.
-   **[Control a Flow’s Finish Behavior by Wrapping the Flow in a Custom Aura Component](atlas.en-us.lightning.meta/lightning/components_using_flow_onfinish.htm)**
    By default, when a flow user clicks **Finish**, a new interview starts and the user sees the first screen of the flow again. By embedding a flow in a custom Aura component, you can shape what happens when the flow finishes by using the onstatuschange action. To redirect to another page, use one of the force:navigateTo\* events such as force:navigateToObjectHome or force:navigateToUrl.
-   **[Resume a Flow Interview from an Aura Component](atlas.en-us.lightning.meta/lightning/components_using_flow_resume.htm)**
    By default, users can resume interviews that they paused from the Paused Interviews component on their home page. To customize how and where users can resume their interviews, embed the lightning:flow component in a custom Aura component. In your client-side controller, pass the interview ID into the resumeFlow method.

#### See Also

-   [*Component Library*: lightning:flow Component](https://developer.salesforce.com/docs/component-library/bundle/lightning:flow/documentation "Component Library: lightning:flow Component - HTML (New Window)")

## Code Examples

```
<aura:component>
    <aura:handler name="init" value="{!this}" action="{!c.init}" />
    <lightning:flow aura:id="flowData" />
</aura:component>
```

```
({
    init : function (component) {
        // Find the component whose aura:id is "flowData"
        var flow = component.find("flowData");
        // In that component, start your flow. Reference the flow's API Name.
        flow.startFlow("myFlow");
    },
})
```

## Related Topics

- Reference Flow Output Variable Values in a Wrapper Aura Component (atlas.en-us.lightning.meta/lightning/components_using_flow_inputs_get.htm)
- Set Flow Input Variable Values from a Wrapper Aura Component (atlas.en-us.lightning.meta/lightning/components_using_flow_inputs_set.htm)
- Control a Flow’s Finish Behavior by Wrapping the Flow in a Custom Aura Component (atlas.en-us.lightning.meta/lightning/components_using_flow_onfinish.htm)
- Resume a Flow Interview from an Aura Component (atlas.en-us.lightning.meta/lightning/components_using_flow_resume.htm)
