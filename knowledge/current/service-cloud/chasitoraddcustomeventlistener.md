---
title: "chasitor.addCustomEventListener()"
domain: service-cloud
topic: chasitoraddcustomeventlistener
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.767Z
keywords: [chasitor.addCustomEventListener, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# chasitor.addCustomEventListener()

# chasitor.addCustomEventListener()

Registers a function to call when a custom event is received in the chat window. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| type | string | The type of custom event you want to listen for. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following methods:

| Name | Type | Description |
| --- | --- | --- |
| getType | method | Accesses the type of the custom event that was sent to this chat window. Returns the type argument of the sforce.console.chat.sendCustomEvent() method used to send this event. |
| getData | method | Accesses the data of the custom event that was sent to this chat window. Returns the data argument of the sforce.console.chat.sendCustomEvent() method used to send this event. |
| getSource | method | Accesses the source of the custom event that was sent to this chat window—for example, agent or chat visitor. |
| getDate | method | Accesses the date of the custom event that was sent to this chat window. Returns the date and time the event was received. |