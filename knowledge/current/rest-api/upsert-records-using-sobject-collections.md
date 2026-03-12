---
title: "Upsert Records Using sObject Collections"
domain: rest-api
topic: upsert-records-using-sobject-collections
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.480Z
estimatedTokens: 740
keywords: [Upsert, Records, sObject, Collections, PATCH, request, either, create, update, upsert, 200, records, based, external, field., list, UpsertResult, objects., choose, whether]
---

# Upsert Records Using sObject Collections

> Use a PATCH request with sObject Collections to either create or update (upsert) up to
      200 records based on an external ID field. This method returns a list of UpsertResult objects.
      You can choose whether to roll back the entire request when an error occurs. This request is
      available in API version 46 and later.

# Upsert Records Using sObject Collections

Use a PATCH request with sObject Collections to either create or update (upsert) up to 200 records based on an external ID field. This method returns a list of UpsertResult objects. You can choose whether to roll back the entire request when an error occurs. This request is available in API version 46 and later.

-   The list can contain up to 200 objects.
-   The list can contain objects only of the type indicated in the request URI.
-   Each object in the request body must contain an attributes map. The map must contain a value for type.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

    #### Note

    Using sObject Collections to insert blob data requires more values in the attributes map. For more information, see [Using sObject Collections to Insert a Collection of Blob Records](atlas.en-us.api_rest.meta/api_rest/dome_sobject_insert_update_blob.htm#sobject_collections).

-   Objects are created or updated in the order they’re listed in the request body. The UpsertResult objects are returned in the same order.
-   Only external ids are supported. Don’t use record ids.

If the request isn’t well formed, the API returns a 400 Bad Request HTTP Status. Fix the syntax of the request and try again. If the request is well formed, the API returns a 200 OK HTTP Status. If an item was processed successfully, the success flag shows for that item. Error information is returned in the errors array.

## Syntax

URI

/services/data/vXX.X/composite/sobjects/SobjectName/ExternalIdFieldName

Formats

JSON, XML

HTTP Method

PATCH

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| allOrNone | Optional. Indicates whether to roll back the entire request when the creation of any object fails (true) or to continue with the independent creation of other objects in the request. The default is false.NoteIf the sObject Collections request is embedded in a Composite request, the Composite request’s allOrNone parameter can also affect the results. See allOrNone Parameters in Composite and Collections Requests. |
| records | Required. A list of sObjects. In a PATCH request using sObject Collections, set the type attribute for each object. Don’t set the id field for any object. Instead, use the external ID field specified in the request URI. |

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

#### See Also

-   [sObject Rows by External ID](atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm "Creates, retrieves, upserts, or deletes records based on the value of a specified external ID field. By using the PATCH method with this resource, you can send upsert requests to Salesforce.")

## Code Examples

```
curl -X PATCH https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/sobjects/Account/MyExtId__c -H "Authorization: Bearer token" -H "Content-Type: application/json" -d "@exampleRequestBody.json"
```

```
{
    "allOrNone" : false,
    "records" : [{
        "attributes" : {"type" : "Account"},
        "Name" : "Company One",
        "MyExtId__c" : "AAA"
    }, {
        "attributes" : {"type" : "Account"},
        "Name" : "Company Two",
        "MyExtId__c" : "BBB"
    }]
}
```

```
HTTP/1.1 200 OK
[
    {
        "id": "001xx0000004GxDAAU",
        "success": true,
        "errors": [],
        "created": true
    },
    {
        "id": "001xx0000004GxEAAU",
        "success": true,
        "errors": [],
        "created": false
    }
]
```

```
HTTP/1.1 200 OK

[
   {
      "id" : "001xx0000004GxDAAU",
      "success" : true,
      "errors" : [ ]
   },
   {
      "success" : false,
      "errors" : [
         {
            "statusCode" : "MALFORMED_ID",
            "message" : "Contact ID: id value of incorrect type: 001xx0000004GxEAAU",
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
      "id" : "001xx0000004GxDAAU",
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
            "message" : "Contact ID: id value of incorrect type: 001xx0000004GxEAAU",
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
- sObject Rows by External ID (atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert.htm)
