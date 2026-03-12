---
title: "removeMessageHandler()"
domain: lightning
topic: removemessagehandler
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.545Z
estimatedTokens: 138
keywords: [removeMessageHandler, Unmounts, message-handling, function, Sample, Arguments]
---

# removeMessageHandler()

> Unmounts the message-handling function.

# removeMessageHandler()

Unmounts the message-handling function.

When using React, it’s necessary to unmount functions to remove them from the DOM and perform necessary cleanup.

## Sample

Used within a JavaScript app uploaded as a static resource and referenced by lightning:container, this example unmounts a message handling function.

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
componentWillUnmount() {
  LCC.removeMessageHandler(this.onMessage);
}
```
