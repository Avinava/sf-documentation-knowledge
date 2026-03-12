---
title: "Passing Data to an Apex Controller"
domain: lightning
topic: passing-data-to-an-apex-controller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.632Z
estimatedTokens: 620
keywords: [Passing, Data, Apex, Controller, action.setParams, JavaScript, pass, Different]
---

# Passing Data to an Apex Controller

> Use action.setParams() in JavaScript to set
        data to pass to an Apex controller.

# Passing Data to an Apex Controller

Use action.setParams() in JavaScript to set data to pass to an Apex controller.

This example sets the value of the firstName argument on an Apex controller’s serverEcho method based on the firstName attribute value.

```

```

The request payload includes the action data serialized into JSON.

Here's the Apex controller method.

```

```

The framework deserializes the action data into the appropriate Apex type. In this example, we have a String parameter called firstName.

## Example with Different Data Types

Let's look at an application that sends data of various types to an Apex controller. Each button starts the sequence of passing data of a different type.

```

```

Here's the application's JavaScript controller. Each action calls the helper's putdatatype method, which queues up the actions to send to the Apex controller. The method has three parameters:

1.  The component
2.  The Apex method name
3.  The data to pass to the Apex method

```

```

The helper has a utility method to send the data to an Apex controller.

```

```

Here's the Apex controller.

```

```

The pcustomclass() Apex method has a parameter that's a custom Apex type, MyCustomApexClass. Each property in the Apex class must have an @AuraEnabled annotation, as well as a getter and setter.

```

```

The MyCustomApexClass Apex class has a property with a type of another custom Apex class, MyOtherCustomApexClass.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

When [Lightning Web Security](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/lws-intro.html "HTML (New Window)") is enabled, you can’t use an Apex inner class as a parameter or return value for an Apex method that's called by an Aura component.

#### See Also

-   [Queuing of Server-Side Actions](atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm "The framework queues up actions before sending them to the server. Actions are grouped together into batches, and then sent to the server together. This process enables the framework to reduce network traffic by batching multiple actions into fewer, more efficient requests.")

-   [Apex Server-Side Controller Overview](atlas.en-us.lightning.meta/lightning/controllers_server_apex.htm "Create a server-side controller in Apex and use the @AuraEnabled annotation to enable access to the controller method.")

## Code Examples

```
var action = cmp.get("c.serverEcho");
action.setParams({ firstName : "Jennifer" });
```

```apex
@AuraEnabled
public static String serverEcho(String firstName) {
    return ('Hello from the server, ' + firstName);
}
```

```
<!-- actionParamTypes.app -->
<aura:application controller="ApexParamTypesController"> 
    <lightning:button label="putboolean" onclick="{!c.putbooleanc}"/> 
    <lightning:button label="putint" onclick="{!c.putintc}"/> 
    <lightning:button label="putlong" onclick="{!c.putlongc}"/> 
    <lightning:button label="putdecimal" onclick="{!c.putdecimalc}"/> 
    <lightning:button label="putdouble" onclick="{!c.putdoublec}"/> 
    <lightning:button label="putstring" onclick="{!c.putstringc}"/>
    <lightning:button label="putobject" onclick="{!c.putobjectc}"/>
    <lightning:button label="putblob" onclick="{!c.putblobc}"/> 
    <lightning:button label="putdate" onclick="{!c.putdatec}"/> 
    <lightning:button label="putdatetime" onclick="{!c.putdatetimec}"/> 
    <lightning:button label="puttime" onclick="{!c.puttimec}"/>
    <lightning:button label="putlistoflistoflistofstring" onclick="{!c.putlistoflistoflistofstringc}"/>
    <lightning:button label="putmapofstring" onclick="{!c.putmapofstringc}"/>
    <lightning:button label="putcustomclass" onclick="{!c.putcustomclassc}"/>
</aura:application>
```

```
// actionParamTypesController.js
({
    putbooleanc : function(component, event, helper) {
        helper.putdatatype(component, "c.pboolean", true);
    },
    putintc : function(component, event, helper) {
        helper.putdatatype(component, "c.pint", 10);
    },
    putlongc : function(component, event, helper) {
        helper.putdatatype(component, "c.plong", 2147483648);
    },      
    putdecimalc : function(component, event, helper) {
        helper.putdatatype(component, "c.pdecimal", 10.80);
    }, 
    putdoublec : function(component, event, helper) {
        helper.putdatatype(component, "c.pdouble", 10.80);
    }, 
    putstringc : function(component, event, helper) {
        helper.putdatatype(component, "c.pstring", "hello!");
    }, 
    putobjectc : function(component, event, helper) {
        helper.putdatatype(component, "c.pobject", true);
    },
    putblobc : function(component, event, helper) {
        helper.putdatatype(component, "c.pblob", "some blob as string");
    },
    // Date value is in ISO 8601 date format
    putdatec : function(component, event, helper) {
        helper.putdatatype(component, "c.pdate", "2020-01-31");
    },
    // Datetime value is in ISO 8601 datetime format
    putdatetimec : function(component, event, helper) {
        helper.putdatatype(component, "c.pdatetime", "2020-01-31T15:08:16.000Z");
    },
    // Set time in milliseconds. 
    // You can use (new Date()).getTime() to set the milliseconds
    puttimec : function(component, event, helper) {
        helper.putdatatype(component, "c.ptime", 3723004);
        //helper.putdatatype(component, "c.ptime", (new Date()).getTime());
    },
    putlistoflistoflistofstringc : function(component, event, helper) {
        helper.putdatatype(component, "c.plistoflistoflistofstring", [[['a','b'],['c','d']],[['e','f']]]);
    },
    putmapofstringc : function(component, event, helper) {
        helper.putdatatype(component, "c.pmapofstring", {k1: 'v1'});
    },
    putcustomclassc : function(component, event, helper) {
        helper.putdatatype(component, "c.pcustomclass", {
            s: 'my string',
            i: 10,
            l: ['list value 1','list value 2'],
            m: {k1: 'map value'},
            os: {b: true}
        });
    },
})
```

```
// actionParamTypesHelper.js
({
    putdatatype : function(component, actionName, val) {
        var action = component.get(actionName);
        action.setParams({ v : val });
        action.setCallback(this, function(response) {
            console.log(response.getReturnValue());
        });
        $A.enqueueAction(action);
    }   
})
```

## Related Topics

- Queuing of Server-Side Actions (atlas.en-us.lightning.meta/lightning/controllers_server_actions_queue.htm)
- Apex Server-Side Controller Overview (atlas.en-us.lightning.meta/lightning/controllers_server_apex.htm)
