---
title: "Batch Result Item"
domain: uiapi
topic: batch-result-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.746Z
estimatedTokens: 191
keywords: [Batch, Result, Item, results, subrequest]
---

# Batch Result Item

> The results of one subrequest in a batch request.

# Batch Result Item

The results of one subrequest in a batch request.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| result | One of these types:Error MessageIf the result is an error, the type is a collection of error messages.RecordRelated List InfoRelated List Record Count | A response body for a record or related list. | Small, 41.0 | 41.0 |
| statusCode | Integer | An HTTP status code indicating the status of this individual request in the batch. | Small, 41.0 | 41.0 |

#### See Also

-   [Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results.htm "The results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Related Topics

- Error Message (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_error_message.htm)
- Record (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_record.htm)
- Related List Info (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_metadata.htm)
- Related List Record Count (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_related_list_record_count.htm)
- Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results.htm)
