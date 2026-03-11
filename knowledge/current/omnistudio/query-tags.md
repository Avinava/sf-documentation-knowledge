---
title: "Query Tags"
domain: omnistudio
topic: query-tags
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.752Z
keywords: [Query, Tags]
---

# Query Tags

# Query Tags

Output representation of query tags result.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextDataPathBuilder | Map<String, Object> | Indicates whether the query operation is complete | Small, 59.0 | 59.0 |
| pathTokens | String [] | List of paths indicating the tag data path. | Small, 59.0 | 59.0 |
| dmlStatus | String | DML status of the tag value. | Small, 59.0 | 59.0 |
| nodeLevelTag | Boolean | Indicates if the tag is at the node level true) or not (false. | Small, 59.0 | 59.0 |
| tagPath | Map<String, Object> | The path to the tag containing a list of paths indicating the tag path. | Small, 59.0 | 59.0 |