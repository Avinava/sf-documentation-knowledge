---
title: "Get a Batch of Related List Metadata"
domain: uiapi
topic: get-a-batch-of-related-list-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.667Z
estimatedTokens: 296
keywords: [Batch, Metadata, layout]
---

# Get a Batch of Related List Metadata

> Returns metadata for a batch of related lists in a page
            layout.

# Get a Batch of Related List Metadata

Returns metadata for a batch of related lists in a page layout.

Resource

```

```

-   parentObjectApiName—A [supported](atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm#ui_api_get_started_supported_objects "User Interface API supports all custom objects and external objects and many standard objects.") object, such as Account.
-   relatedListNames—Comma-separated IDs of supported related lists for that object.

Available Version

50.0

HTTP Method

GET

Example

To get information about the Contracts and Work Orders related lists for the Account object, make this request.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordTypeId | Id | The ID of the record type (RecordType object) for the record. If not provided, the default record type is used. | Optional | 50.0 |

Response Body

[Simplified Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm "The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Code Examples

```
/ui-api/related-list-info/batch/${parentObjectApiName}/${relatedListNames}
```

```
GET /services/data/v66.0/ui-api/related-list-info/batch/Account/Contracts,WorkOrders
```

## Related Topics

- supported (atlas.en-us.uiapi.meta/uiapi/ui_api_get_started_supported_objects.htm)
- Simplified Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)
