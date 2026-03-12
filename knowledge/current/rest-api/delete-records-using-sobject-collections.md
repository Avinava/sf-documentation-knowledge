---
title: "Delete Records Using sObject Collections"
domain: rest-api
topic: delete-records-using-sobject-collections
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.307Z
estimatedTokens: 457
keywords: [Records, sObject, Collections, returning, DeleteResult, objects, choose, roll, back, entire, error, occurs]
---

# Delete Records Using sObject Collections

> Use a DELETE request with sObject Collections to delete up to 200 records, returning a
      list of DeleteResult objects. You can choose to roll back the entire request when an error
      occurs.

# Delete Records Using sObject Collections

Use a DELETE request with sObject Collections to delete up to 200 records, returning a list of DeleteResult objects. You can choose to roll back the entire request when an error occurs.

-   The DeleteResult objects are returned in the order in which the IDs of the deleted objects were specified.
-   You can't delete records for multiple object types in one call when one of those types is related to a feature in the Salesforce Setup area.

If the request isn’t well formed, the API returns a 400 Bad Request HTTP Status. Fix the syntax of the request and try again. If the request is well formed, the API returns a 200 OK HTTP Status. If an item was processed successfully, the success flag shows for that item. Error information is returned in the errors array.

## Syntax

URI

/services/data/vXX.X/composite/sobjects?ids=recordId,recordId

Formats

JSON, XML

HTTP Method

DELETE

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| allOrNone | Optional. Indicates whether to roll back the entire request when the deletion of any object fails (true) or to continue with the independent deletion of other objects in the request. The default is false.NoteIf the sObject Collections request is embedded in a Composite request, the Composite request’s allOrNone parameter can also affect the results. See allOrNone Parameters in Composite and Collections Requests. |
| ids | Required. A list of up to 200 IDs of objects to be deleted. The IDs can belong to different object types, including custom objects. |

## Example

Example Request

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
curl -X DELETE https://MyDomainName.my.salesforce.com/services/data/v66.0/composite/sobjects?ids=001xx000003DGb2AAG,003xx000004TmiQAAS&allOrNone=false -H "Authorization: Bearer token"
```

```
HTTP/1.1 200 OK

[
   {
      "id" : "001RM000003oLrHYAU",
      "success" : true,
      "errors" : [ ]
   },
   {
      "id" : "001RM000003oLraYAE",
      "success" : true,
      "errors" : [ ]
   }
]
```

```
HTTP/1.1 200 OK

[
   {
      "id" : "001RM000003oLrfYAE",
      "success" : true,
      "errors" : [ ]
   },
   {
      "success" : false,
      "errors" : [
         {
            "statusCode" : "MALFORMED_ID",
            "message" : "malformed id 001RM000003oLrB000",
            "fields" : [ ]
         }
      ]
   }
]
```

```
HTTP/1.1 200 OK

[
   {
      "id" : "001RM000003oLruYAE",
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
            "message" : "malformed id 001RM000003oLrB000",
            "fields" : [ ]
         }
      ]
   }
]
```

## Related Topics

- allOrNone Parameters in Composite and Collections Requests (atlas.en-us.api_rest.meta/api_rest/resources_composite_allornone.htm)
