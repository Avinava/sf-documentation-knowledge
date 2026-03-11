---
title: "sendCTIMessage()"
domain: service-cloud
topic: sendctimessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.665Z
keywords: [sendCTIMessage, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# sendCTIMessage()

# sendCTIMessage()

Sends a message to the CTI adapter or Open CTI. This method is for computer-telephony integration (CTI); it’s only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| msg | string | Message to send to the adapter. |
| callback | function | JavaScript method called when the message is sent. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if sending the message was successful; false if sending the message wasn’t successful. |