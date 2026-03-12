---
title: "Sending Messages to the Lightning Container Component"
domain: lightning
topic: sending-messages-to-the-lightning-container-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.526Z
estimatedTokens: 629
keywords: [Sending, Messages, Lightning, Container, Component, lightning-container, NPM, module, send, JavaScript, code, framed]
---

# Sending Messages to the Lightning Container Component

> Use the methods in the lightning-container NPM module to send messages from the
        JavaScript code framed by lightning:container.

# Sending Messages to the Lightning Container Component

Use the methods in the lightning-container NPM module to send messages from the JavaScript code framed by lightning:container.

The Lightning-container NPM module provides methods to send and receive messages between your JavaScript app and the Lightning container component. You can see the lightning-container module on the NPM [website](https://www.npmjs.com/package/lightning-container "HTML (New Window)").

Add the lightning-container module as a dependency in your code to implement the messaging framework in your app.

```

```

lightning-container must also be listed as a dependency in your app’s package.json file.

The code to send a message to lightning:container from the app is simple. This code corresponds to the code samples in [Sending Messages from the Lightning Container Component](atlas.en-us.lightning.meta/lightning/container_sending_messages.htm#container_sending_messages "Use the onmessage attribute of lightning:container to specify a method for handling messages to and from the contents of the component—that is, the embedded app. The contents of lightning:container are wrapped within an iframe, and this method allows you to communicate across the frame boundary.") and [Handling Errors in Your Container](atlas.en-us.lightning.meta/lightning/container_handling_errors.htm#container_handling_errors "Handle errors in Lightning container with a method in your component’s controller.").

```

```

This code, part of the static resource, sends a message as an object containing a name and a value, which is user-defined.

When the app receives a message, it’s handled by the function mounted by the addMessageHandler() method. In a React app, functions must be mounted to be part of the document-object model and rendered in the output.

The lightning-container module provides similar methods for defining a function to handle errors in the messaging framework. For more information, see [lightning:container NPM Module Reference NPM Module Reference](atlas.en-us.lightning.meta/lightning/container_api_reference.htm#container_api_reference "Use methods included in the lightning:container NPM module in your JavaScript code to send and receive messages to and from your custom Aura component.")

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Don't send cryptographic secrets like an API key in a message. It's important to keep your API key secure.

## Code Examples

```
import LCC from 'lightning-container';
```

```
sendMessage() {
  LCC.sendMessage({name: "General", value: this.state.messageToSend});
}
```

## Related Topics

- Sending Messages from the Lightning Container Component (atlas.en-us.lightning.meta/lightning/container_sending_messages.htm)
- Handling Errors in Your Container (atlas.en-us.lightning.meta/lightning/container_handling_errors.htm)
- lightning:container NPM Module Reference NPM Module Reference (atlas.en-us.lightning.meta/lightning/container_api_reference.htm)
