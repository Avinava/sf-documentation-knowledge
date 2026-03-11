---
title: "Query Record Status Result"
domain: omnistudio
topic: query-record-status-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.750Z
keywords: [Query, Record, Status, Result]
---

# Query Record Status Result

# Query Record Status Result

Output representation of query result status of context data records.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextRecordStatusListId | String | Unique ID associated with the list of context record status required for Lightning Data Service. | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the status retrieval of context data query records was successful (true) or not (false). | Small, 59.0 | 59.0 |
| queryResult | Context Data Record Status[] | List containing the status of the queried context data records. | Small, 59.0 | 59.0 |