---
title: "Query Context Record Result"
domain: omnistudio
topic: query-context-record-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.748Z
keywords: [Query, Context, Record, Result]
---

# Query Context Record Result

# Query Context Record Result

Output representation of query result context record.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID for the context record that is queried. | Small, 59.0 | 59.0 |
| isDone | Boolean | Indicates whether the query operation is complete (true) or not (false). | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the status of query is successful (true) or not (false). | Small, 59.0 | 59.0 |
| queryRecords | Context Query Record[] | List of the retrieved context query records. | Small, 59.0 | 59.0 |