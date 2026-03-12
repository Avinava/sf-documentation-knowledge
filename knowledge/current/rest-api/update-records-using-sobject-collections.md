---
title: "Update Records Using sObject Collections"
domain: rest-api
topic: update-records-using-sobject-collections
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.321Z
estimatedTokens: 700
keywords: [Records, sObject, Collections, PATCH, returning, SaveResult, objects, choose, whether, roll, back, entire, error, occurs]
---

# Update Records Using sObject Collections

> Use a PATCH request with sObject Collections to update up to 200 records, returning a
      list of SaveResult objects. You can choose whether to roll back the entire request when an
      error occurs.

# Update Records Using sObject Collections

Use a PATCH request with sObject Collections to update up to 200 records, returning a list of SaveResult objects. You can choose whether to roll back the entire request when an error occurs.

-   The list can contain up to 200 objects.
-   The list can contain objects of different types, including custom objects.
-   Each object must contain an attributes map. The map must contain a value for type.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

    #### Note

    Using sObject Collections to update blob data requires more values in the attributes map. For more information, see [Using sObject Collections to Insert a Collection of Blob Records](atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm#sobject_collections).

-   Each object must contain an id field with a valid ID value.
-   Objects are updated in the order they’re listed. The SaveResult objects are returned in the order in which the update requests were specified.
-   If the request body includes objects of more than one type, they are processed as chunks. For example, if the incoming objects are {account1, account2, contact1, account3}, the request is processed in three chunks: {{account1, account2}, {contact1}, {account3}}. A single request can process up to 10 chunks.
-   You can’t update records for multiple object types in one call when one of those types is related to a feature in the Salesforce Setup area.

If the request isn’t well formed, the API returns a 400 Bad Request HTTP Status. Fix the syntax of the request and try again. If the request is well formed, the API returns a 200 OK HTTP Status. If an item was processed successfully, the success flag shows for that item. Error information is returned in the errors array.

## Syntax

URI

/services/data/vXX.X/composite/sobjects/

Formats

JSON, XML

HTTP Method

PATCH

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| allOrNone | Optional. Indicates whether to roll back the entire request when the update of any object fails (true) or to continue with the independent update of other objects in the request. The default is false.NoteIf the sObject Collections request is embedded in a Composite request, the Composite request’s allOrNone parameter can also affect the results. See allOrNone Parameters in Composite and Collections Requests. |
| records | Required. A list of records. Set the id and type attribute for each record. |

## Example

Example Request

```

```

Example Request Body

```

```

Example Response Body

```

```

Example Response Body (Some Items Failed and allOrNone is false)

```

```

Example Response Body (Some Items Failed and allOrNone is true)

```

```

## Code Examples

```
curl -X PATCH https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/sobjects/ -H "Authorization: Bearer token" -H "Content-Type: application/json" -d "@exampleRequestBody.json"
```

```
{
   "allOrNone" : false,
   "records" : [{
      "attributes" : {"type" : "Account"},
      "id" : "001xx000003DGb2AAG",
      "NumberOfEmployees" : 27000
   },{
      "attributes" : {"type" : "Contact"},
      "id" : "003xx000004TmiQAAS",
      "Title" : "Lead Engineer"
   }]
}
```

```
HTTP/1.1 200 OK

[
   {
      "id" : "001RM000003oCprYAE",
      "success" : true,
      "errors" : [ ]
   },
   {
      "id" : "003RM0000068og4YAA",
      "success" : true,
      "errors" : [ ]
   }
]
```

```
HTTP/1.1 200 OK

[
   {
      "id" : "001RM000003oCprYAE",
      "success" : true,
      "errors" : [ ]
   },
   {
      "success" : false,
      "errors" : [
         {
            "statusCode" : "MALFORMED_ID",
            "message" : "Contact ID: id value of incorrect type: 001xx000003DGb2999",
            "fields" : [
               "Id"
            ]
         }
      ]
   }
]
```

```
HTTP/1.1 200 OK

[
   {
      "id" : "001RM000003oCprYAE",
      "success" : false,
      "errors" : [
         {
            "statusCode" : "ALL_OR_NONE_OPERATION_ROLLED_BACK",
            "message" : "Record rolled back because not all records were valid and the request was using AllOrNone header",
            "fields" : [ ]
         }
      ]
   },
   {
      "success" : false,
      "errors" : [
         {
            "statusCode" : "MALFORMED_ID",
            "message" : "Contact ID: id value of incorrect type: 001xx000003DGb2999",
            "fields" : [
               "Id"
            ]
         }
      ]
   }
]
```

## Related Topics

- Using sObject Collections to Insert a Collection of Blob Records (atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm)
- allOrNone Parameters in Composite and Collections Requests (atlas.en-us.api_rest.meta/api_rest/resources_composite_allornone.htm)
