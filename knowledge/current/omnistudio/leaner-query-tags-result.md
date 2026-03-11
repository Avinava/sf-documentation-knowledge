---
title: "Leaner Query Tags Result"
domain: omnistudio
topic: leaner-query-tags-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.579Z
keywords: [Leaner, Query, Tags, Result]
---

# Leaner Query Tags Result

# Leaner Query Tags Result

Output representation of the leaner query tags result. The result includes compact tag data mapped to tag names and a shared list of record IDs.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of context to be queried. | Small, 66.0 | 66.0 |
| errorMessage | String | Error message when isSuccess is false. | Small, 66.0 | 66.0 |
| isSuccess | Boolean | Indicates whether the query was successful (true) or not (true). | Small, 66.0 | 66.0 |
| queryResult​LeanerRepresentation | Context Tag Data Leaner | Map of tag name and list of lean tag data. Each entry contains tag values and compact indexes for record path construction. | Small, 66.0 | 66.0 |
| recordIds | String[] | List of all record IDs present in the context that are included in the tag result. | Small, 66.0 | 66.0 |