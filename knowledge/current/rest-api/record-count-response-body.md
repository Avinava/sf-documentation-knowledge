---
title: "Record Count Response Body"
domain: rest-api
topic: record-count-response-body
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:44:25.818Z
keywords: [Record, Count, Response, Body, Results, sObject, Result]
---

# Record Count Response Body

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