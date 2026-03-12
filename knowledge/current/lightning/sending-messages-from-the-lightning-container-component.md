---
title: "Sending Messages from the Lightning Container Component"
domain: lightning
topic: sending-messages-from-the-lightning-container-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.562Z
estimatedTokens: 1261
keywords: [Sending, Messages, Lightning, Container, Component, onmessage, attribute, specify, handling, contents, component—that, embedded, app, wrapped, iframe]
---

# Sending Messages from the Lightning Container Component

> Use the onmessage attribute of lightning:container to specify a method for handling messages to and from the
    contents of the component—that is, the embedded app. The contents of lightning:container are wrapped within an iframe, and this method allows you to
    communicate across the frame boundary.

# Sending Messages from the Lightning Container Component

Use the onmessage attribute of lightning:container to specify a method for handling messages to and from the contents of the component—that is, the embedded app. The contents of lightning:container are wrapped within an iframe, and this method allows you to communicate across the frame boundary.

This example shows an Aura component that includes lightning:container and has three attributes, messageToSend, messageReceived, and error.

This example uses the same code as the one in [Using a Third-Party Framework](atlas.en-us.lightning.meta/lightning/container_js.htm#container_js "lightning:container allows you to use an app developed with a third-party framework, such as AngularJS or React, in an Aura component. Upload the app as a static resource.").

```

```

messageToSend represents a message sent from Salesforce to the framed app, while messageReceived represents a message sent by the app to the Aura component. lightning:container includes the required src attribute, an aura:id, and the onmessage attribute. The onmessage attribute specifies the message-handling method in your JavaScript controller, and the aura:id allows that method to reference the component.

This example shows the component’s JavaScript controller.

```

```

This code does a couple of different things. The sendMessage action sends a message from the enclosing Aura component to the embedded app. It creates a variable, msg, that has a JSON definition including a name and a value. This definition of the message is user-defined—the message’s payload can be a value, a structured JSON response, or something else. The messageToSend attribute of the Aura component populates the value of the message. The method then uses the component’s aura:id and the message() function to send the message back to the Aura component.

The handleMessage method receives a message from the embedded app and handles it appropriately. It takes a component, a message, and a helper as arguments. The method uses conditional logic to parse the message. If this is the message with the name and value we’re expecting, the method sets the Aura component’s messageReceived attribute to the value of the message. Although this code only defines one message, the conditional statement allows you to handle different types of message, which are defined in the sendMessage method.

The handler code for sending and receiving messages can be complicated. It helps to understand the flow of a message between the Aura component, its controller, and the app. The process begins when user enters a message as the messageToSend attribute. When the user clicks **Send**, the component calls sendMessage. sendMessage defines the message payload and uses the message() method to send it to the app. Within the static resource that defines the app, the specified message handler function receives the message. Specify the message handling function within your JavaScript code using the lightning-container module’s addMessageHandler() method. See the [lightning:container NPM Module Reference NPM Module Reference](atlas.en-us.lightning.meta/lightning/container_api_reference.htm "Use methods included in the lightning:container NPM module in your JavaScript code to send and receive messages to and from your custom Aura component.") for more information.

When lightning:container receives a message from the framed app, it calls the component controller’s handleMessage method, as set in the onmessage attribute of lightning:container. The handleMessage method takes the message, and sets its value as the messageReceived attribute. Finally, the component displays messageReceived in a lightning:textarea.

This is a simple example of message handling across the container. Because you implement the controller-side code and the functionality of the app, you can use this functionality for any kind of communication between Salesforce and the app embedded in lightning:container.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Don't send cryptographic secrets like an API key in a message. It's important to keep your API key secure.

#### See Also

-   [Lightning Container](atlas.en-us.lightning.meta/lightning/container_overview.htm "Upload an app developed with a third-party framework as a static resource, and host the content in an Aura component using lightning:container. Use lightning:container to use third-party frameworks like AngularJS or React within your Lightning pages.")

-   [Using a Third-Party Framework](atlas.en-us.lightning.meta/lightning/container_js.htm "lightning:container allows you to use an app developed with a third-party framework, such as AngularJS or React, in an Aura component. Upload the app as a static resource.")

-   [Handling Errors in Your Container](atlas.en-us.lightning.meta/lightning/container_handling_errors.htm "Handle errors in Lightning container with a method in your component’s controller.")

## Code Examples

```apex
<aura:component access="global" implements="flexipage:availableForAllPageTypes" >
    <aura:attribute access="private" name="messageToSend" type="String" default=""/>
    <aura:attribute access="private" name="messageReceived" type="String" default=""/>
    <aura:attribute access="private" name="error" type="String" default=""/>
    
    <div>
        <lightning:input name="messageToSend" value="{!v.messageToSend}" label="Message to send to React app: "/>
        <lightning:button label="Send" onclick="{!c.sendMessage}"/>
        <br/>
        <lightning:textarea value="{!v.messageReceived}" label="Message received from React app: "/>
        <br/>
        <aura:if isTrue="{! !empty(v.error)}">
            <lightning:textarea name="errorTextArea" value="{!v.error}" label="Error: "/>
        </aura:if>
    
        <lightning:container aura:id="ReactApp"
                             src="{!$Resource.SendReceiveMessages + '/index.html'}"
                             onmessage="{!c.handleMessage}"
                             onerror="{!c.handleError}"/>
    </div>
</aura:component>
```

```
({    
    sendMessage : function(component, event, helper) {
        
        var msg = {
            name: "General",
            value: component.get("v.messageToSend")
        };
        component.find("ReactApp").message(msg);
    },
    
    handleMessage: function(component, message, helper) {
        var payload = message.getParams().payload;
        var name = payload.name;
        if (name === "General") {
            var value = payload.value;
            component.set("v.messageReceived", value);
        }
        else if (name === "Foo") {
            // A different response
        }
    },
    
    handleError: function(component, error, helper) {
        var e = error;
    }
})
```

## Related Topics

- Using a Third-Party Framework (atlas.en-us.lightning.meta/lightning/container_js.htm)
- lightning:container NPM Module Reference NPM Module Reference (atlas.en-us.lightning.meta/lightning/container_api_reference.htm)
- Lightning Container (atlas.en-us.lightning.meta/lightning/container_overview.htm)
- Handling Errors in Your Container (atlas.en-us.lightning.meta/lightning/container_handling_errors.htm)
