---
title: "Get a Batch of Related List Record Counts"
domain: uiapi
topic: get-a-batch-of-related-list-record-counts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.662Z
estimatedTokens: 236
keywords: [Batch, Record, Counts, count]
---

# Get a Batch of Related List Record Counts

> Returns the record count for a batch of related
    lists.

# Get a Batch of Related List Record Counts

Returns the record count for a batch of related lists.

Resource

```

```

-   parentRecordId—The ID of the record you want to get related lists for.
-   relatedListIds—Comma-separated IDs of supported related lists for that object.

Available Version

50.0

HTTP Method

GET

Example

To get the number of records in the Contracts related list for the account 001RM000003UNu6YAG, make this request.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| maxCount | Integer | The maximum number of records to return. The default value is 20. | Optional | 50.0 |

Response Body

[Simplified Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm "The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Code Examples

```
/ui-api/related-list-count/batch/${parentRecordId}/${relatedListIds}
```

```
/services/data/v66.0/ui-api/related-list-count/batch/001RM000003UNu6YAG/Contracts,WorkOrders
```

## Related Topics

- Simplified Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)
