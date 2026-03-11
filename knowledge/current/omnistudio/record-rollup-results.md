---
title: "Record Rollup Results"
domain: omnistudio
topic: record-rollup-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.797Z
keywords: [Record, Rollup, Results]
---

# Record Rollup Results

# Record Rollup Results

Output representation of the record rollup results.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columns | Record Rollup Result Column[] | List of fields that represent the columns of a table. | Small, 61.0 | 61.0 |
| definition​DisplayName | String | Name of the record aggregation definition. | Small, 61.0 | 61.0 |
| message | String | Message for the HTTP response code. | Small, 61.0 | 61.0 |
| lastUpdated​Details | Record Rollup Result Last Updated Details[] | The information about the last time the record rollup results were updated for the specified definition and anchor record ID. | Small, 64.0 | 64.0 |
| rows | Record Rollup Result Row[] | List of aggregated records that represent the rows of a table. | Small, 61.0 | 61.0 |
| statusCode | String | HTTP response code for the request. | Small, 61.0 | 61.0 |
| totalResult​Count | Integer | Total number of record aggregation results. | Small, 61.0 | 61.0 |