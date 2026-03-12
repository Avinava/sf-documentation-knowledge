---
title: "Batch Results"
domain: uiapi
topic: batch-results
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.748Z
estimatedTokens: 160
keywords: [Batch, Results, resource, include, subrequest]
---

# Batch Results

> The results from a request to a batch resource. Results include information for each
  subrequest in the batch.

# Batch Results

The results from a request to a batch resource. Results include information for each subrequest in the batch.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| hasErrors | Boolean | true if at least one of the results in the result set is an HTTP status code in the 400 or 500 range; false otherwise | Small, 41.0 | 41.0 |
| results | Batch Result Item[] | Collection of batch result items | Small, 41.0 | 41.0 |

#### See Also

-   [Get a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch.htm "Get data for a batch of records.")

## Related Topics

- Batch Result Item (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_result.htm)
- Get a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch.htm)
