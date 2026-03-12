---
title: "Get Records Using sObject Collections"
domain: rest-api
topic: get-records-using-sobject-collections
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.463Z
estimatedTokens: 459
keywords: [Get, Records, sObject, Collections, GET, request, get, records, same, type., list, sObjects, represents, individual, specified, returned., number, returned, matches, IDs]
---

# Get Records Using sObject Collections

> Use a GET request with sObject Collections to get one or more records of the same object
      type. A list of sObjects that represents the individual records of the specified type is
      returned. The number of sObjects returned matches the number of IDs passed in the
      request.

# Get Records Using sObject Collections

Use a GET request with sObject Collections to get one or more records of the same object type. A list of sObjects that represents the individual records of the specified type is returned. The number of sObjects returned matches the number of IDs passed in the request.

You can specify approximately 800 IDs before the URL length causes the HTTP 414 error URI too long.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

The [sObject Blob Retrieve](atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_retrieve.htm "Gets the specified blob field from an individual record and returns it as binary data. Only certain standard objects have blob fields, such as Attachment, ContentNote, ContentVersion, Document, Folder, and Note.") resource isn’t compatible with Composite API requests, because it returns binary data instead of data in JSON or XML formats. Instead, make individual sObject Blob Retrieve requests to retrieve blob data.

-   If you specify an invalid field name or a field name that you don’t have permission to read, HTTP 400 Bad Request is returned.
-   If you don’t have access to an object, or if a passed ID is invalid, the array returns null for that object.

## Syntax

URI

/services/data/vXX.X/composite/sobjects/sObject

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| ids | Required. A list of one or more IDs of the objects to return. All IDs must belong to the same object type. |
| fields | Required. A list of fields to include in the response. The field names you specify must be valid, and you must have read-level permissions to each field. |

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/sobjects/Account?ids=001xx000003DGb1AAG,001xx000003DGb0AAG,001xx000003DGb9AAG&fields=id,name -H "Authorization: Bearer token"
```

```
[
   {
      "attributes" : {
         "type" : "Account",
         "url" : "/services/data/v66.0/sobjects/Account/001xx000003DGb1AAG"
      },
      "Id" : "001xx000003DGb1AAG",
      "Name" : "Acme"
   },
   {
      "attributes" : {
         "type" : "Account",
         "url" : "/services/data/v66.0/sobjects/Account/001xx000003DGb0AAG"
      },
      "Id" : "001xx000003DGb0AAG",
      "Name" : "Global Media"
   },
   null
]
```

## Related Topics

- sObject Blob Retrieve (atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_retrieve.htm)
