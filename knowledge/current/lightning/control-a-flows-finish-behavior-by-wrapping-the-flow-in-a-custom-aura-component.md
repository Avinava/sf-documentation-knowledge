---
title: "Control a Flow’s Finish Behavior by Wrapping the Flow in a
                        Custom Aura Component"
domain: lightning
topic: control-a-flows-finish-behavior-by-wrapping-the-flow-in-a-custom-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.420Z
estimatedTokens: 438
keywords: [Control, Flow’s, Finish, Behavior, Wrapping, Flow, Custom, Aura, Component, user, clicks, new, interview, starts, sees]
---

# Control a Flow’s Finish Behavior by Wrapping the Flow in a
                        Custom Aura Component

> By default, when a flow user clicks Finish, a new
                interview starts and the user sees the first screen of the flow again. By embedding
                a flow in a custom Aura component, you can shape what happens when the flow finishes
                by using the onstatuschange action. To redirect
                to another page, use one of the force:navigateTo* events such as force:navigateToObjectHome or force:navigateToUrl.

# Control a Flow’s Finish Behavior by Wrapping the Flow in a Custom Aura Component

By default, when a flow user clicks **Finish**, a new interview starts and the user sees the first screen of the flow again. By embedding a flow in a custom Aura component, you can shape what happens when the flow finishes by using the onstatuschange action. To redirect to another page, use one of the force:navigateTo\* events such as force:navigateToObjectHome or force:navigateToUrl.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

To control a flow’s finish behavior at design time, make your custom Aura component available as a flow action by using the lightning:availableForFlowActions interface. To control what happens when an autolaunched flow finishes, check for the FINISHED\_SCREEN status.

```

```

```

```

## Example

This function redirects the user to a case created in the flow by using the force:navigateToSObject event.

```

```

#### See Also

-   [*Component Library*: lightning:flow Component](https://developer.salesforce.com/docs/component-library/bundle/lightning:flow/documentation "Component Library: lightning:flow Component - HTML (New Window)")

-   [Create Flow Local Actions Using Aura Components](atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions.htm "To execute client-side logic in your flow, build or modify custom Aura components to use as local actions in flows. For example, get data from third-party systems without going through the Salesforce server, or open a URL in another browser tab. Once you configure the Aura component’s markup, client-side controller, and design resource, it’s available in Flow Builder as a Core Action element.")

## Code Examples

```apex
<aura:component access="global">
    <aura:handler name="init" value="{!this}" action="{!c.init}" />
    <lightning:flow aura:id="flowData" onstatuschange="{!c.handleStatusChange}" />
</aura:component>
```

```
// init function here
handleStatusChange : function (component, event) {
   if(event.getParam("status") === "FINISHED") {
        // Redirect to another page in Salesforce, or
        // Redirect to a page outside of Salesforce, or
        // Show a toast, or...
    }
}
```

```
handleStatusChange : function (component, event) {
   if(event.getParam("status") === "FINISHED") {
      var outputVariables = event.getParam("outputVariables");
      var outputVar;
      for(var i = 0; i < outputVariables.length; i++) {
         outputVar = outputVariables[i];
         if(outputVar.name === "redirect") {
            var urlEvent = $A.get("e.force:navigateToSObject");
            urlEvent.setParams({
               "recordId": outputVar.value,
               "isredirect": "true"
            });
            urlEvent.fire();
         }
      }
   }
}
```

## Related Topics

- Create Flow Local Actions Using Aura Components (atlas.en-us.lightning.meta/lightning/components_config_for_flow_actions.htm)
