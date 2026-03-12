---
title: "Record Rollup Definitions (POST)"
domain: omnistudio
topic: record-rollup-definitions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:49.441Z
estimatedTokens: 317
keywords: [Record, Rollup, Definitions, POST, Get, rollup, results, specific, record, aggregation, definition., Sort, data, name, arrange, ascending, descending, order.]
---

# Record Rollup Definitions (POST)

> Get rollup results for a specific record aggregation
      definition. Sort the data by name and arrange it in ascending or descending
    order.

# Record Rollup Definitions (POST)

Get rollup results for a specific record aggregation definition. Sort the data by name and arrange it in ascending or descending order.

Resource

```

```

The recordAggregationDefinitionId parameter is the ID of the record aggregation definition.

Resource example

```

```

Available version

61.0

HTTP methods

POST

Query parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| anchorRecordId | String | ID of the record to which the aggregated records are rolled up. | Required | 61.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isSortOrder​Ascending | Boolean | Indicates whether the sort order is ascending (true) or not (false). The default value is true. | Optional | 61.0 |
| sortBy | String | Criteria to sort the record aggregation results. The default value is CreatedDate. | Optional | 61.0 |

Response body for POST

[Record Rollup Results](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_rollup_result_output.htm "Output representation of the record rollup results.")

## Code Examples

```
/connect/record-aggregation/recordAggregationDefinitionId/record-rollup-results
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/record-aggregation/16y0000001/record-rollup-results?anchorRecordId=10s0000001
```

```
{
  "sortBy": "Name",
  "isSortOrderAscending": true
}
```

## Related Topics

- Record Rollup
              Results (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_rollup_result_output.htm)
