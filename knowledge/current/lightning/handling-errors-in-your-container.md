---
title: "Handling Errors in Your Container"
domain: lightning
topic: handling-errors-in-your-container
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.511Z
estimatedTokens: 645
keywords: [Handling, Errors, Container, Handle, Lightning, component’s, controller]
---

# Handling Errors in Your Container

> Handle errors in Lightning container with a method in your component’s
    controller.

# Handling Errors in Your Container

Handle errors in Lightning container with a method in your component’s controller.

This example uses the same code as the examples in [Using a Third-Party Framework](atlas.en-us.lightning.meta/lightning/container_js.htm#container_js "lightning:container allows you to use an app developed with a third-party framework, such as AngularJS or React, in an Aura component. Upload the app as a static resource.") and [Sending Messages from the Lightning Container Component](atlas.en-us.lightning.meta/lightning/container_sending_messages.htm#container_sending_messages "Use the onmessage attribute of lightning:container to specify a method for handling messages to and from the contents of the component—that is, the embedded app. The contents of lightning:container are wrapped within an iframe, and this method allows you to communicate across the frame boundary.").

In this component, the onerror attribute of lightning:container specifies handleError as the error handling method. To display the error, the component markup uses a conditional statement, and another attribute, error, for holding an error message.

```

```

This is the component’s controller.

```

```

If the Lightning container application throws an error, the error handling function sets the error attribute. Then, in the component markup, the conditional expression checks if the error attribute is empty. If it isn’t, the component populates a lightning:textarea element with the error message stored in error.

#### See Also

-   [Lightning Container](atlas.en-us.lightning.meta/lightning/container_overview.htm "Upload an app developed with a third-party framework as a static resource, and host the content in an Aura component using lightning:container. Use lightning:container to use third-party frameworks like AngularJS or React within your Lightning pages.")

-   [Using a Third-Party Framework](atlas.en-us.lightning.meta/lightning/container_js.htm "lightning:container allows you to use an app developed with a third-party framework, such as AngularJS or React, in an Aura component. Upload the app as a static resource.")

-   [Sending Messages from the Lightning Container Component](atlas.en-us.lightning.meta/lightning/container_sending_messages.htm "Use the onmessage attribute of lightning:container to specify a method for handling messages to and from the contents of the component—that is, the embedded app. The contents of lightning:container are wrapped within an iframe, and this method allows you to communicate across the frame boundary.")

## Code Examples

```apex
<aura:component access="global" implements="flexipage:availableForAllPageTypes" >
    
    <aura:attribute access="private" name="messageToSend" type="String" default=""/>
    <aura:attribute access="private" name="messageReceived" type="String" default=""/>
    <aura:attribute access="private" name="error" type="String" default=""/>
    
    <div>
        <lightning:input name="messageToSend" value="{!v.messageToSend}" label="Message to send to React app: "/><lightning:button label="Send" onclick="{!c.sendMessage}"/>
        
        <br/>
        
        <lightning:textarea name="messageReceived" value="{!v.messageReceived}" label="Message received from React app: "/>
        
        <br/>
        
        <aura:if isTrue="{! !empty(v.error)}">
            <lightning:textarea name="errorMessage" value="{!v.error}" label="Error: "/>
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
        var description = error.getParams().description;
        component.set("v.error", description);
    }
})
```

## Related Topics

- Using a Third-Party Framework (atlas.en-us.lightning.meta/lightning/container_js.htm)
- Sending Messages from the Lightning Container Component (atlas.en-us.lightning.meta/lightning/container_sending_messages.htm)
- Lightning Container (atlas.en-us.lightning.meta/lightning/container_overview.htm)
