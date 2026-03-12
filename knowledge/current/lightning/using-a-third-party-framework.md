---
title: "Using a Third-Party Framework"
domain: lightning
topic: using-a-third-party-framework
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.516Z
estimatedTokens: 802
keywords: [Third-Party, Framework, lightning, container, app, developed, AngularJS, React, Aura, component, Upload, resource]
---

# Using a Third-Party Framework

> lightning:container allows you to use an app
    developed with a third-party framework, such as AngularJS or React, in an Aura component. Upload
    the app as a static resource.

# Using a Third-Party Framework

lightning:container allows you to use an app developed with a third-party framework, such as AngularJS or React, in an Aura component. Upload the app as a static resource.

Your application must have a launch page, which is specified with the lightning:container src attribute. By convention, the launch page is index.html, but you can specify another launch page by adding a manifest file to your static resource. The following example shows a simple Aura component that references myApp, an app uploaded as a static resource, with a launch page of index.html.

```

```

The contents of the static resource are up to you. It should include the JavaScript that makes up your app, any associated assets, and a launch page.

As in other Aura components, you can specify custom attributes. This example references the same static resource, myApp, and has three attributes, messageToSend, messageReceived, and error. Because this component includes implements="flexipage:availableForAllPageTypes", it can be used in the Lightning App Builder and added to Lightning pages.

```

```

The component includes a lightning:input element, allowing users to enter a value for messageToSend. When a user hits **Send**, the component calls the controller method sendMessage. This component also provides methods for handling messages and errors.

This snippet doesn’t include the component’s controller or other code, but don’t worry. We’ll dive in, break it down, and explain how to implement message and error handling as we go in [Sending Messages from the Lightning Container Component](atlas.en-us.lightning.meta/lightning/container_sending_messages.htm#container_sending_messages "Use the onmessage attribute of lightning:container to specify a method for handling messages to and from the contents of the component—that is, the embedded app. The contents of lightning:container are wrapped within an iframe, and this method allows you to communicate across the frame boundary.") and [Handling Errors in Your Container](atlas.en-us.lightning.meta/lightning/container_handling_errors.htm#container_handling_errors "Handle errors in Lightning container with a method in your component’s controller.").

#### See Also

-   [Lightning Container](atlas.en-us.lightning.meta/lightning/container_overview.htm "Upload an app developed with a third-party framework as a static resource, and host the content in an Aura component using lightning:container. Use lightning:container to use third-party frameworks like AngularJS or React within your Lightning pages.")

-   [Sending Messages from the Lightning Container Component](atlas.en-us.lightning.meta/lightning/container_sending_messages.htm "Use the onmessage attribute of lightning:container to specify a method for handling messages to and from the contents of the component—that is, the embedded app. The contents of lightning:container are wrapped within an iframe, and this method allows you to communicate across the frame boundary.")

-   [Handling Errors in Your Container](atlas.en-us.lightning.meta/lightning/container_handling_errors.htm "Handle errors in Lightning container with a method in your component’s controller.")

## Code Examples

```
<aura:component>
    <lightning:container src="{!$Resource.myApp + '/index.html'}" />
</aura:component>
```

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

## Related Topics

- Sending Messages from the Lightning Container Component (atlas.en-us.lightning.meta/lightning/container_sending_messages.htm)
- Handling Errors in Your Container (atlas.en-us.lightning.meta/lightning/container_handling_errors.htm)
- Lightning Container (atlas.en-us.lightning.meta/lightning/container_overview.htm)
