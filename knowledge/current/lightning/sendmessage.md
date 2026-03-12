---
title: "sendMessage()"
domain: lightning
topic: sendmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.548Z
estimatedTokens: 126
keywords: [sendMessage, message, framed, JavaScript, code, Aura, component, Sample, Arguments]
---

# sendMessage()

> Sends a message from the framed JavaScript code to the Aura component.

# sendMessage()

Sends a message from the framed JavaScript code to the Aura component.

## Sample

Used within a JavaScript app uploaded as a static resource and referenced by lightning:container, this example sends a message from the app to lightning:container.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| userMsg | any | While the data sent in the message is entirely under your control, by convention it’s an object with name and value fields. |

## Response

None.

## Code Examples

```
sendMessage() {
  LCC.sendMessage({name: "General", value: this.state.messageToSend});
}
```
