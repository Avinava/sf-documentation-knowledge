---
title: "Record Count Response Body"
domain: rest-api
topic: record-count-response-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.048Z
estimatedTokens: 176
keywords: [Record, Count, result, Results, sObject]
---

# Record Count Response Body

> Describes the result of a Record Count request.

# Record Count Response Body

Describes the result of a Record Count request.

## Record Count Results

Properties

| Name | Type | Description |
| --- | --- | --- |
| sObjects | Record Count sObject Result[] | Collection of sObject record count results. The order of objects in the collection is not guaranteed to match the order of objects in the request. |

JSON example

```

```

## Record Count sObject Result

Properties

| Name | Type | Description |
| --- | --- | --- |
| count | Integer | The number of records for the object in the org. This is an approximate count and does not include soft-deleted or archived records. |
| name | String | The name of the object. |

JSON example

```

```

## Code Examples

```
{
   "sObjects" : [ {
     "count" : 3,
     "name" : "Account"
   }, {
     "count" : 10,
     "name" : "Contact"
   } ]
}
```

```
{
   "count" : 10,
   "name" : "Contact"
}
```
