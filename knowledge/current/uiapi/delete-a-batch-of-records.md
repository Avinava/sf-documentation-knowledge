---
title: "Delete a Batch of Records"
domain: uiapi
topic: delete-a-batch-of-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.609Z
estimatedTokens: 493
keywords: [Batch, Records, multiple]
---

# Delete a Batch of Records

> Delete multiple records. You can create, update, and delete up to 200 records in a
    single request.

# Delete a Batch of Records

Delete multiple records. You can create, update, and delete up to 200 records in a single request.

Resource

```

```

Available Version

59.0

HTTP Method

POST

Example

This example deletes multiple records.

```

```

```

```

Request Body

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordInput | Batch Record Input | The batch of record input. | Required | 59.0 |

Response Body

[Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results.htm#ui_api_responses_batch_results "The results from a request to a batch resource. Results include information for each subrequest in the batch.")

Usage

When deleting a batch of records, you must include the required Id field. Don’t include the apiName field in [Batch Operation Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_operation_input.htm "Represents the operation type and record data to create, update, and delete in a batch.").

You can’t perform multiple operations on the same record in one request. A delete operation using an Id value that’s used in another update or delete operation can’t be processed. Otherwise, a 400 HTTP status code with an INVALID\_BATCH\_REQUEST error is returned.

Receiving a 400 HTTP status code with an INVALID\_INPUT error can be caused by one of these reasons.

-   The operations field is missing or empty.
-   The operation type is missing.
-   The operations field doesn’t contain a records field or the records field is empty.

#### See Also

-   [Create a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_post.htm "Create multiple records. You can create, update, and delete up to 200 records in a single request.")

-   [Update a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_update.htm "Update multiple records. You can create, update, and delete up to 200 records in a single request.")

## Code Examples

```
/ui-api/records/batch
```

```
POST /ui-api/records/batch
```

```
{
  "allOrNone": false,
  "operations": [
    {
      "type": "Delete",
      "records": [
        {
          "fields": {
            "Id": "001xx000003GanDAAS"
          }
        },
        {
          "fields": {
            "Id": "001xx000003Gaf9AAC"
          }
        }
      ]
    }
  ]
}
```

## Related Topics

- Batch Record Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_input.htm)
- Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results.htm)
- Batch
              Operation Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_operation_input.htm)
- Create a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_post.htm)
- Update a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_update.htm)
