---
title: "initFileTransfer()"
domain: service-cloud
topic: initfiletransfer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.065Z
keywords: [initFileTransfer, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# initFileTransfer()

# initFileTransfer()

Initiates the process of transferring a file from a customer to an agent. Available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat the file is transferred from. |
| entityId | String | The ID of the transcript object to attach the transferred file to. |
| callback | function | JavaScript method that is called when the method is completed. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if the request to transfer a file was sent successfully; false if the request wasn’t sent successfully.NoteA value of true doesn’t necessarily mean that the file was successfully transferred to an agent. Rather, it indicates that the request to begin a file transfer was sent successfully. |