---
title: "Set Flow Input Variable Values from a Wrapper Aura Component"
domain: lightning
topic: set-flow-input-variable-values-from-a-wrapper-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.416Z
estimatedTokens: 525
keywords: [Flow, Input, Variable, Wrapper, Aura, Component, embed, custom, give, context, initializing, variables, component's, controller, maps]
---

# Set Flow Input Variable Values from a Wrapper Aura Component

> When you embed a flow in a custom Aura component, give the flow more context by
                initializing its variables. In the component's controller, create a list of maps,
                then pass that list to the startFlow method.

# Set Flow Input Variable Values from a Wrapper Aura Component

When you embed a flow in a custom Aura component, give the flow more context by initializing its variables. In the component's controller, create a list of maps, then pass that list to the startFlow method.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=lightning)

#### Tip

We recommend using Lightning web components because they perform better and provide the latest functionality. See [Embed a Flow in a Custom Lightning Web Component](https://developer.salesforce.com/docs/platform/lwc/guide/use-flow-embed-component.html).

You can set variables only at the beginning of an interview, and the variables you set must allow input access. If you reference a variable that doesn’t allow input access, attempts to set the variable are ignored.

For each variable you set, provide the variable's name, type, and value. For type, use the API name for the flow data type. For example, for a record variable use SObject, and for a text variable use String.

```

```

## Example

This JavaScript controller sets values for a number variable, a date collection variable, and a couple of record variables. The Record data type in Flow Builder corresponds to SObject here.

```

```

## Example

Here's an example of a component that retrieves the most recently modified account via an Apex controller. The Apex controller passes the data to the flow's record variable through the JavaScript controller.

```

```

```

```

```

```

#### See Also

-   [*Component Library*: lightning:flow Component](https://developer.salesforce.com/docs/component-library/bundle/lightning:flow/documentation "Component Library: lightning:flow Component - HTML (New Window)")

-   [Which Custom Lightning Component Attribute Types Are Supported in Flows?](atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_map.htm "Not all custom Lightning component data types are supported in flows. You can map only these types and their associated collection types between flows and custom Lightning components.")

## Code Examples

```
{
     name : "varName",
     type : "flowDataType",
     value : valueToSet
},
{
     name : "varName",
     type : "flowDataType",
     value : [ value1, value2] 
}, ...
```

```
({
   init : function (component) {
      // Find the component whose aura:id is "flowData"
      var flow = component.find("flowData");
      var inputVariables = [
         { name : "numVar", type : "Number", value: 30 }, 
         { name : "dateColl", type : "String", value: [ "2016-10-27", "2017-08-01" ] },
         // Sets values for fields in the account record (sObject) variable. Id uses
         // the value of the component's accountId attribute. Rating uses a string.
         { name : "account", type : "SObject", value: {
             "Id" : component.get("v.accountId"),
             "Rating" : "Warm"
             }
          },
          // Set the contact record (sObject) variable to the value of the 
          // component's contact attribute. We're assuming the attribute contains  
          // the entire sObject for a contact record.
          { name : "contact", type : "SObject", value: component.get("v.contact") }
       ];
       flow.startFlow("myFlow", inputVariables);
   }
})
```

```
<aura:component controller="AccountController" >
   <aura:attribute name="account" type="Account" />
   <aura:handler name="init" value="{!this}" action="{!c.init}"/>
   <lightning:flow aura:id="flowData"/>
</aura:component>
```

```apex
public with sharing class AccountController {
    @AuraEnabled
    public static Account getAccount() {
       return [SELECT Id, Name, LastModifiedDate FROM Account 
       ORDER BY LastModifiedDate DESC LIMIT 1];
    }
 }
```

```
({
    init : function (component) {
        // Create action to find an account
        var action = component.get("c.getAccount");

       // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();            if (state === "SUCCESS") {
             // Pass the account data into the component's account attribute 
            component.set("v.account", response.getReturnValue());
             // Find the component whose aura:id is "flowData"
            var flow = component.find("flowData");
             // Set the account record (sObject) variable to the value of  
             // the component's account attribute.
            var inputVariables = [
                {
                    name : "account",
                    type : "SObject",
                    value: component.get("v.account")
                }
            ];

             // In the component whose aura:id is flowData, start your flow
             // and initialize the account record (sObject) variable. 
             // Reference the flow's API name.
            flow.startFlow("myFlow", inputVariables);
        }
            else {
                console.log("Failed to get account date.");
            } 
    });

        // Send action to be executed
        $A.enqueueAction(action);
    }
})
```

## Related Topics

- Which Custom Lightning Component Attribute Types Are Supported in Flows? (atlas.en-us.lightning.meta/lightning/components_config_for_flow_tips_map.htm)
