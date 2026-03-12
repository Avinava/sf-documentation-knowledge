---
title: "Record Rollup Result Input"
domain: nonprofit-cloud
topic: record-rollup-result-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.769Z
estimatedTokens: 128
keywords: [Record, Rollup, Result, Input, representation, sort, fetch, results]
---

# Record Rollup Result Input

> Input representation to sort and fetch the record rollup results.

# Record Rollup Result Input

Input representation to sort and fetch the record rollup results.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isSortOrder​Ascending | Boolean | Indicates whether the sort order is ascending (true) or not (false). The default value is true. | Optional | 61.0 |
| sortBy | String | Criteria to sort the record aggregation results. The default value is CreatedDate. | Optional | 61.0 |

## Code Examples

```
{
  "sortBy": "Name",
  "isSortOrderAscending": true
}
```
