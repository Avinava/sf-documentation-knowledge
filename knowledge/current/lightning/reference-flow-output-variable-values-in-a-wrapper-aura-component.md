---
title: "Reference Flow Output Variable Values in a Wrapper Aura Component"
domain: lightning
topic: reference-flow-output-variable-values-in-a-wrapper-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.409Z
estimatedTokens: 250
keywords: [Flow, Output, Variable, Wrapper, Aura, Component, embed, display, flow’s, onstatuschange, action, flow's, variables, array]
---

# Reference Flow Output Variable Values in a Wrapper Aura Component

> When you embed a flow in an Aura component, you can display or reference the
                flow’s variable values. Use the onstatuschange
                action to get values from the flow's output variables. Output variables are returned
                as an array.

# Reference Flow Output Variable Values in a Wrapper Aura Component

When you embed a flow in an Aura component, you can display or reference the flow’s variable values. Use the onstatuschange action to get values from the flow's output variables. Output variables are returned as an array.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The variable must allow output access. If you reference a variable that doesn’t allow output access, attempts to get the variable are ignored.

## Example

This example uses the JavaScript controller to pass the flow's accountName and numberOfEmployees variables into attributes on the component. Then, the component displays those values in output components.

```

```

```

```

#### See Also

-   [*Component Library*: lightning:flow Component](https://developer.salesforce.com/docs/component-library/bundle/lightning:flow/documentation "Component Library: lightning:flow Component - HTML (New Window)")

## Code Examples

```
<aura:component>
   <aura:attribute name="accountName" type="String" />
   <aura:attribute name="numberOfEmployees" type="Decimal" />
                            
   <p><lightning:formattedText value="{!v.accountName}" /></p>
   <p><lightning:formattedNumber style="decimal" value="{!v.numberOfEmployees}" /></p>
                                
   <aura:handler name="init" value="{!this}" action="{!c.init}"/>
   <lightning:flow aura:id="flowData" onstatuschange="{!c.handleStatusChange}" />
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
                                
   handleStatusChange : function (component, event) {
      if(event.getParam("status") === "FINISHED") {
         // Get the output variables and iterate over them
         var outputVariables = event.getParam("outputVariables");
         var outputVar;
         for(var i = 0; i < outputVariables.length; i++) {
            outputVar = outputVariables[i];
            // Pass the values to the component's attributes
            if(outputVar.name === "accountName") {
               component.set("v.accountName", outputVar.value);
            } else {
               component.set("v.numberOfEmployees", outputVar.value);
            }
         }
      }
   },
})
```
