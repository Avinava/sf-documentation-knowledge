---
title: "addMessageHandler()"
domain: lightning
topic: addmessagehandler
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.536Z
estimatedTokens: 155
keywords: [addMessageHandler, Mounts, message, handling, function, handle, messages, sent, Aura, component, framed, JavaScript, app, Sample, Arguments]
---

# addMessageHandler()

> Mounts a message handling function, used to handle messages sent from the Aura component
    to the framed JavaScript app.

# addMessageHandler()

Mounts a message handling function, used to handle messages sent from the Aura component to the framed JavaScript app.

## Sample

Used within a JavaScript app uploaded as a static resource and referenced by lightning:container, this example mounts a message handling function. In a React app, functions must be mounted to be part of the document-object model and rendered in the output.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| handler: (userMsg: any) => void | function | The function that handles messages sent from the Aura component. |

## Response

None.

## Code Examples

```
componentDidMount() {
    LCC.addMessageHandler(this.onMessage);
}

onMessage(msg) {
  let name = msg.name;
  if (name === "General") {
    let value = msg.value;
    this.setState({messageReceived: value});
  }
  else if (name === "Foo") {
    // A different response
  }
}
```
