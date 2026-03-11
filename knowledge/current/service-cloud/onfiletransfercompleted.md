---
title: "onFileTransferCompleted()"
domain: service-cloud
topic: onfiletransfercompleted
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.553Z
keywords: [onFileTransferCompleted, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onFileTransferCompleted()

# onFileTransferCompleted()

Registers a function to call when a file is transferred from a customer to an agent. Available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat the file was transferred from. |
| callback | function | JavaScript method that is called when the method is complete. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| attachmentId | String | The ID of the object created for the transferred file. |
| success | Boolean | true if firing event was successful; false if firing event was unsuccessful. |