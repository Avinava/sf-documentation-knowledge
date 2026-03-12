---
title: "Subscribe to a Message Channel"
domain: lightning
topic: subscribe-to-a-message-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.305Z
estimatedTokens: 405
keywords: [Subscribe, Message, Channel, handler, run, receives]
---

# Subscribe to a Message Channel

> To subscribe to a message channel, create a handler method to run when it receives a
  message.

# Subscribe to a Message Channel

To subscribe to a message channel, create a handler method to run when it receives a message.

## Example

The lmsSubscriberAuraComponent from the [github.com/trailheadapps/lwc-recipes](https://github.com/trailheadapps/lwc-recipes "HTML (New Window)") repo shows how to subscribe and unsubscribe from a message channel.

In this example, we define an Aura component called myNewComponent that contains the custom message channel, SampleMessageChannel\_\_c. The lightning:messageChannel component's onMessage attribute calls the handleChanged method in the client-side controller.

By default, communication over a message channel can occur only between components in an active navigation tab, an active navigation item, or a utility item. Utility items are always active. A navigation tab or item is active when it’s selected. Navigation tabs and items include:

-   Standard navigation tabs
-   Console navigation workspace tabs
-   Console navigations subtabs
-   Console navigation items

To receive messages on a message channel from anywhere in the application, use lightning:messageChannel's optional parameter, scope. Set scope to the value "APPLICATION".

```

```

The component myNewComponent detects a new message and updates the display value.

```

```

```

```

Write the handler in your component's client-side controller. The handleChanged method fires when there is a new message. It checks whether there is a payload in the message, and if so, assigns the new data to the v.recordValue attribute. The lightning:formattedText element updates to display the new value.

## Code Examples

```
<lightning:messageChannel type="messageChannel" onMessage="{!listener}" scope="APPLICATION"/>
```

```
<!-- myNewComponent.cmp -->
<aura:component>
    <aura:attribute name="recordValue" type="String"/>
    <lightning:formattedText value="{!v.recordValue}" />
    <lightning:messageChannel type="SampleMessageChannel__c"
         onMessage="{!c.handleChanged}"/>
</aura:component>
```

```
// myNewComponentController.js
({
    handleChanged: function(cmp, message, helper) { 
     // Read the message argument to get the values in the message payload
    if (message != null && message.getParam("recordData") != null) {
        cmp.set("v.recordValue", message.getParam("recordData").value);
    }
  }
})
```
