---
title: "Getting Labels in Apex"
domain: lightning
topic: getting-labels-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.204Z
estimatedTokens: 605
keywords: [Getting, Labels, Apex, retrieve, label, code, component, JavaScript, Custom, Passing, Retrieving, System.Label]
---

# Getting Labels in Apex

> You can retrieve label values in Apex code and set them on your
        component using JavaScript.

# Getting Labels in Apex

You can retrieve label values in Apex code and set them on your component using JavaScript.

## Custom Labels

Custom labels have a limit of 1,000 characters and can be accessed from an Apex class. To define custom labels, from Setup, in the Quick Find box, enter Custom Labels, and then select **Custom Labels**.

In your Apex class, reference the label with the syntax System.Label.MyLabelName.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Return label values as plain text strings. You can’t return a label expression using the $Label global value provider.

The component loads the labels by requesting it from the server, such as during initialization. For example, the label is retrieved in JavaScript code.

```

```

Finally, make sure you wire up the Apex class to your component. The label is set on the component during initialization.

```

```

## Passing in Label Values

Pass label values into components using the expression syntax {!v.mylabel}. You must provide a default value to the String attribute. Depending on your use case, the default value might be the label in the default language or, if the specific label can’t be known until runtime, perhaps just a single space.

```

```

You can also retrieve labels in JavaScript code, including dynamically creating labels that are generated during runtime. For more information, see [Getting Labels in JavaScript](atlas.en-us.lightning.meta/lightning/labels_dynamic.htm "You can retrieve labels in JavaScript code. Your code performs optimally if the labels are statically defined and sent to the client when the component is loaded.").

## Retrieving Custom Labels Using System.Label Methods

You can use methods in the System.Label class to check for and retrieve translated labels.

-   To check if translation exists for a label and language in a namespace, use translationExists(namespace, label, language).
-   To retrieve the custom label for a specified namespace and default language setting, use get(namespace, label).
-   To retrieve the custom label for a specified namespace and language, use get(namespace, label, language).

#### See Also

-   [*Apex Reference Guide*: Label Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_Label.htm "Apex Reference Guide: Label Class - HTML (New Window)")

## Code Examples

```apex
public with sharing class LabelController {
    @AuraEnabled
    public static String getLabel() {
        String s1 = 'Hello from Apex Controller, ' ;
        String s2 = System.Label.MyLabelName;
        return s1 + s2;
    }
}
```

```
({
    doInit : function(component, event, helper) {
        var action = component.get("c.getLabel");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.mylabel", response.getReturnValue());
            }
            // error handling when state is "INCOMPLETE" or "ERROR"
         });
         $A.enqueueAction(action);
    }
})
```

```
<aura:component controller="LabelController">
    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />
    <aura:attribute name="mylabel" type="String"/>
    {!v.mylabel}
</aura:component>
```

```
<aura:component controller="LabelController">
    <aura:attribute name="mylabel" type="String" default=" "/>
    <lightning:input name="mytext" label="{!v.mylabel}"/>
</aura:component>
```

## Related Topics

- Getting Labels in JavaScript (atlas.en-us.lightning.meta/lightning/labels_dynamic.htm)
