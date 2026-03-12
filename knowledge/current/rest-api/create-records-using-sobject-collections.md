---
title: "Create Records Using sObject Collections"
domain: rest-api
topic: create-records-using-sobject-collections
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.454Z
estimatedTokens: 703
keywords: [Create, Records, sObject, Collections, POST, request, add, 200, records, returning, list, SaveResult, objects., choose, whether, roll, back, entire, error, occurs.]
---

# Create Records Using sObject Collections

> Use a POST request with sObject Collections to add up to 200 records, returning a list
      of SaveResult objects. You can choose whether to roll back the entire request when an error
      occurs.

# Create Records Using sObject Collections

Use a POST request with sObject Collections to add up to 200 records, returning a list of SaveResult objects. You can choose whether to roll back the entire request when an error occurs.

-   The list can contain up to 200 objects.
-   The list can contain objects of different types, including custom objects.
-   Each object must contain an attributes map. The map must contain a value for type.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

    #### Note

    Using sObject Collections to insert blob data requires more values in the attributes map. For more information, see [Using sObject Collections to Insert a Collection of Blob Records](atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm#sobject_collections).

-   Objects are created in the order they’re listed. The SaveResult objects are returned in the order in which the create requests were specified.
-   If the request body includes objects of more than one type, they are processed as chunks. For example, if the incoming objects are {account1, account2, contact1, account3}, the request is processed in three chunks: {{account1, account2}, {contact1}, {account3}}. A single request can process up to 10 chunks.
-   You can’t create records for multiple object types in one call when one of the types is related to a feature in the Salesforce Setup area.

If the request isn’t well formed, the API returns a 400 Bad Request HTTP Status. Fix the syntax of the request and try again. If the request is well formed, the API returns a 200 OK HTTP Status. If an item was processed successfully, the success flag shows for that item. Error information is returned in the errors array.

## Syntax

URI

/services/data/vXX.X/composite/sobjects

Formats

JSON, XML

HTTP Method

POST

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| allOrNone | Optional. Indicates whether to roll back the entire request when the creation of any object fails (true) or to continue with the independent creation of other objects in the request. The default is false.NoteIf the sObject Collections request is embedded in a Composite request, the Composite request’s allOrNone parameter can also affect the results. See allOrNone Parameters in Composite and Collections Requests. |
| records | Required. A list of sObjects. In a POST request using sObject Collections, set the type attribute for each object, but don’t set the id field for any object. |

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
curl -X POST https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/sobjects/ -H "Authorization: Bearer token" -H "Content-Type: application/json" -d "@exampleRequestBody.json"
```

```
{
   "allOrNone" : false,
   "records" : [{
      "attributes" : {"type" : "Account"},
      "Name" : "example.com",
      "BillingCity" : "San Francisco"
   }, {
      "attributes" : {"type" : "Contact"},
      "LastName" : "Johnson",
      "FirstName" : "Erica"
   }]
}
```

```
HTTP/1.1 200 OK

[
   {
      "id" : "001RM000003oLnnYAE",
      "success" : true,
      "errors" : [ ]
   },
   {
      "id" : "003RM0000068xV6YAI",
      "success" : true,
      "errors" : [ ]
   }
]
```

```
HTTP/1.1 200 OK

[
   {
      "success" : false,
      "errors" : [
         {
            "statusCode" : "DUPLICATES_DETECTED",
            "message" : "Use one of these records?",
            "fields" : [ ]
         }
      ]
   },
   {
      "id" : "003RM0000068xVCYAY",
      "success" : true,
      "errors" : [ ]
   }
]
```

```
HTTP/1.1 200 OK

[
   {
      "success" : false,
      "errors" : [
         {
            "statusCode" : "DUPLICATES_DETECTED",
            "message" : "Use one of these records?",
            "fields" : [ ]
         }
      ]
   },
   {
      "success" : false,
      "errors" : [
         {
            "statusCode" : "ALL_OR_NONE_OPERATION_ROLLED_BACK",
            "message" : "Record rolled back because not all records were valid and the request was using AllOrNone header",
            "fields" : [ ]
         }
      ]
   }
]
```

## Related Topics

- Using sObject Collections to Insert a Collection of Blob Records (atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm)
- allOrNone Parameters in Composite and Collections Requests (atlas.en-us.api_rest.meta/api_rest/resources_composite_allornone.htm)
