---
title: "Delete Records Using sObject Collections"
domain: rest-api
topic: delete-records-using-sobject-collections
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.297Z
keywords: [Delete, Records, sObject, Collections, Syntax, Example]
---

# Delete Records Using sObject Collections

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