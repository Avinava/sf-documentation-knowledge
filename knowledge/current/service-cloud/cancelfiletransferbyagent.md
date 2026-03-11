---
title: "cancelFileTransferByAgent()"
domain: service-cloud
topic: cancelfiletransferbyagent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.758Z
keywords: [cancelFileTransferByAgent, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# cancelFileTransferByAgent()

# cancelFileTransferByAgent()

Indicates that a file transfer request has been canceled by an agent. Available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat for which the agent canceled the file transfer request. |
| callback | function | JavaScript method that is called when the method is completed. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if canceling the file transfer request was successful; false if canceling the file transfer request wasn’t successful. |