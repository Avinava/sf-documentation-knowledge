---
title: "Update Records Using sObject Collections"
domain: rest-api
topic: update-records-using-sobject-collections
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:44:25.308Z
keywords: [Update, Records, sObject, Collections, Syntax, Example]
---

# Update Records Using sObject Collections

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