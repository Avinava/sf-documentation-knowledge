---
title: "sObject Blob Get"
domain: rest-api
topic: sobject-blob-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.972Z
estimatedTokens: 299
keywords: [sObject, Blob, Get, specified, blob, field, individual, record, binary, data., Only, certain, standard, objects, fields, such, Attachment, ContentNote, ContentVersion, Document]
---

# sObject Blob Get

> Gets the specified blob field from an individual record and returns it as binary data.
  Only certain standard objects have blob fields, such as Attachment, ContentNote, ContentVersion,
  Document, Folder, and Note.

# sObject Blob Get

Gets the specified blob field from an individual record and returns it as binary data. Only certain standard objects have blob fields, such as Attachment, ContentNote, ContentVersion, Document, Folder, and Note.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The sObject Blob Get resource isn’t compatible with Composite API requests, because it returns binary data instead of data in JSON or XML formats. Instead, make individual sObject Blob Get requests to retrieve blob data.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/id/blobField

Formats

Binary data

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

none required

## Example

For an example of retrieving blob data from a Document, see [Get Blob Data](atlas.en-us.api_rest.meta/api_rest/dome_sobject_blob_retrieve.htm "Use the sObject Blob Get resource to get blob data for a given record. To get blob data, a record with blob data must exist in Salesforce.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

## Related Topics

- Get Blob Data (atlas.en-us.api_rest.meta/api_rest/dome_sobject_blob_retrieve.htm)
