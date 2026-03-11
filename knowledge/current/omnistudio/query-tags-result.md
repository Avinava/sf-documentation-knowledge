---
title: "Query Tags Result"
domain: omnistudio
topic: query-tags-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.754Z
keywords: [Query, Tags, Result]
---

# Query Tags Result

# Query Tags Result

Output representation of the results when querying context tags.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isDone | Boolean | Indicates whether the tag query process is complete (true) or not (false). | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates if the query was successful (true) or not (false). | Small, 59.0 | 59.0 |
| queryResult | Map<String, ContextTagDataRepresentation>> | Contains a mapping of each queried tag to its results. | Small, 59.0 | 59.0 |