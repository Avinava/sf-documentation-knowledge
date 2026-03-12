---
title: "Snapshot Index Error (GET)"
domain: revenue-cloud
topic: snapshot-index-error-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.880Z
estimatedTokens: 188
keywords: [Snapshot, Index, Error, GET, Get, count, details, errors, occurred, during, indexing, process.]
---

# Snapshot Index Error (GET)

> Get the count and details of the errors that occurred during the
      indexing process.

# Snapshot Index Error (GET)

Get the count and details of the errors that occurred during the indexing process.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| indexId | String | ID of the index. | Required | 63.0 |
| snapshot​IndexId | String | ID of the snapshot index. | Required | 63.0 |

Response body for GET

[Snapshot Index Error](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_snapshot_index_error_output.htm "Output representation of the error details related to a snapshot index.")

## Code Examples

```
/connect/pcm/index/error
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/pcm/index/error
```

## Related Topics

- Snapshot Index
              Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_snapshot_index_error_output.htm)
