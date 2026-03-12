---
title: "Get a Batch of Related List Records with a Request Body"
domain: uiapi
topic: get-a-batch-of-related-list-records-with-a-request-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.710Z
estimatedTokens: 260
keywords: [Batch, Records, record, data, resource, uses, POST, let, enter, instead, URL]
---

# Get a Batch of Related List Records with a Request Body

> Returns record data for a batch of related lists. This resource uses
   the POST method to let you enter request parameters in the request body instead of the
  URL.

# Get a Batch of Related List Records with a Request Body

Returns record data for a batch of related lists. This resource uses the POST method to let you enter request parameters in the request body instead of the URL.

Resources

```

```

-   parentRecordId—The ID of the record you want to get a batch of related lists for.

Available Version

55.0

HTTP Method

POST

Example

To get record data for the Contacts and Opportunities related lists for the account record 001xx000003GYOpAAO, use the following request.

```

```

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| listRecordsQuery | Related List Records Batch Input | The record data for a batch of related lists. | Required | 55.0 |

Response Body

[Simplified Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm "The simplified results from a request to a batch resource. Results include information for each subrequest in the batch.")

## Code Examples

```
/ui-api/related-list-records/batch/${parentRecordId}
```

```
POST /ui-api/related-list-records/batch/001xx000003GYOpAAO
```

```
{
    "relatedListParameters":
    [
        {
            "relatedListId": "Contacts",
            "fields": ["Name", "Id", "Birthdate"],
            "optionalFields": ["Email"],
            "sortBy": ["CreatedDate"],
            "pageSize": 10,
            "where": "{ Account: { AnnualRevenue: { gt: 10000000 } }}"
        },
        {
            "relatedListId": "Opportunities",
            "fields": ["Name", "Id"],
            "optionalFields": ["Email"],
            "sortBy": ["CreatedDate"],
            "pageSize": 10,
            "where": "{ Account: { AnnualRevenue: { gt: 10000000 } }}"
        }
    ]
}
```

## Related Topics

- Related List Records
            Batch Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_related_list_record_batch_input.htm)
- Simplified Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results_simplified.htm)
