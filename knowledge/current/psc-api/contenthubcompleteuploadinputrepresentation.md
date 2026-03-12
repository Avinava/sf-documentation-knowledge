---
title: "ContentHubCompleteUploadInputRepresentation()"
domain: psc-api
topic: contenthubcompleteuploadinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:29.443Z
estimatedTokens: 154
keywords: [inputRep, instance, below]
---

# ContentHubCompleteUploadInputRepresentation()

> Used to create an inputRep instance with the below parameters.

# ContentHubCompleteUploadInputRepresentation()

Used to create an inputRep instance with the below parameters.

## Signature

ConnectApi.ContentHubCompleteUploadInputRepresentation();

## Parameters

fileId

Type: String

The ID of the file to be uploaded.

fileName

Type: String

The name of the file to be uploaded.

contextId

Type: String

The Salesforce record ID associated with the file.

contentType

Type: String

The Multipurpose Internet Mail Extensions (MIME) type of the file. For example, image/png or application/pdf.

uploadParts

Type: String

uploadId

Type: String

The ID of the upload task.
