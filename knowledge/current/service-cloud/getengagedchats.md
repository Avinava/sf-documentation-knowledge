---
title: "getEngagedChats()"
domain: service-cloud
topic: getengagedchats
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.997Z
keywords: [getEngagedChats, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getEngagedChats()

# getEngagedChats()

Returns the chat keys of the chats in which the agent is currently engaged. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | array | Array of chatKey values, one for each of the currently engaged chats. |
| success | boolean | true if getting engaged chats was successful; false if getting engaged chats wasn’t successful. |