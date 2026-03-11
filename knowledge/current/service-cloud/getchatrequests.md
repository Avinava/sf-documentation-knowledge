---
title: "getChatRequests()"
domain: service-cloud
topic: getchatrequests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.973Z
keywords: [getChatRequests, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getChatRequests()

# getChatRequests()

Returns the chat keys of the chat requests that have been assigned to an agent. Available in API version 29.0 or later.

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
| chatKey | Array | Array of chatKey values, one for each of the current chat requests. |
| success | Boolean | true if getting chat requests was successful; false if getting chat requests wasn’t successful. |