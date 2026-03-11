---
title: "onCurrentCapacityChanged()"
domain: service-cloud
topic: oncurrentcapacitychanged
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.547Z
keywords: [onCurrentCapacityChanged, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onCurrentCapacityChanged()

# onCurrentCapacityChanged()

Registers a function to call when an agent's capacity for accepting chats changes—for example, if an agent accepts a new chat, ends a currently engaged chat, or otherwise changes the number of chats to which they are assigned, or if a chat request is pushed to their chat queue. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when the agent's capacity for accepting chats has changed. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| count | integer | The number of chats in which the agent is currently engaged plus the number of chat requests currently assigned to the agent. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |