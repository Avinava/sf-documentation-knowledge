---
title: "onCustomEvent()"
domain: service-cloud
topic: oncustomevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.550Z
keywords: [onCustomEvent, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onCustomEvent()

# onCustomEvent()

Registers a function to call when a custom event takes place during a chat. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat for which to call a function when a custom event takes place. |
| type | String | The name of the custom event you want to listen for. This should match the name of the custom event sent from the chat window. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| type | String | The type of the custom event that was sent to this chat; corresponds to the type argument of the liveagent.chasitor.sendCustomEvent() method used to send this event from the chat window. |
| data | String | The data of the custom event that was sent to this chat; corresponds to the data argument of the liveagent.chasitor.sendCustomEvent() method used to send this event from the chat window. |
| source | String | The source of the custom event that was sent to this chat; corresponds to either the agent or the chat visitor, depending on who triggered the custom event. |
| timestamp | Date/Time | The time and date the event was received. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |