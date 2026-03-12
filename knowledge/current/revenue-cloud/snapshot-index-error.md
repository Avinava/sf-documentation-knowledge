---
title: "Snapshot Index Error"
domain: revenue-cloud
topic: snapshot-index-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.984Z
estimatedTokens: 145
keywords: [Snapshot, Index, Error, Output, representation]
---

# Snapshot Index Error

> Output representation of the error details related to a snapshot index.

# Snapshot Index Error

Output representation of the error details related to a snapshot index.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Output[] | List of errors encountered during the processing of the API request. | Small, 63.0 | 63.0 |
| indexError​Details | Index Error[] | Count and details of errors that occurred during indexing. | Small, 63.0 | 63.0 |
| status​Code | String | Code that indicates the status of the API request. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "errors": [],
  "indexErrorDetails": {
    "errorFileId": "069xx0000004C92AAE",
    "indexCreatedDate": "2024-10-03T05:24:18.000Z",
    "indexErrorsCount": 1,
    "indexLastUpdatedDate": "2024-10-03T05:27:00.000Z",
    "itemLevelErrorsCount": 1
  },
  "statusCode": "200"
}
```

## Related Topics

- Error
                  Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_epc_error_output.htm)
- Index
                  Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_index_error_output.htm)
