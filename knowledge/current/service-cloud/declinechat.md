---
title: "declineChat()"
domain: service-cloud
topic: declinechat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.805Z
keywords: [declineChat, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# declineChat()

# declineChat()

Declines a chat request. Available in API version 29.0 or later. This method isn't supported with Omni-Channel in API version 37.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the request you wish to decline. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if declining the event was successful; false if declining the event wasn’t successful. |