---
title: "Update a Batch of Records"
domain: uiapi
topic: update-a-batch-of-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.620Z
estimatedTokens: 613
keywords: [Batch, Records, multiple]
---

# Update a Batch of Records

> Update multiple records. You can create, update, and delete up to 200 records in a
    single request.

# Update a Batch of Records

Update multiple records. You can create, update, and delete up to 200 records in a single request.

Resource

```

```

Available Version

59.0

HTTP Method

POST

Example

This example updates multiple records.

```

```

```

```

Request Body

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordInput | Batch Record Input | The batch of record input. | Required | 59.0 |

Request Parameters

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| useDefaultRule | Boolean | For a Case or Lead, specifies whether to use the default (active) assignment rule. If you specify useDefaultRule, don’t specify an assignmentRuleId.For an Account, specifies whether to apply the default territory assignment rules.The default value is false.See AssignmentRuleHeader in SOAP API Developer Guide. | Optional | 64.0 |

Response Body

[Batch Results](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results.htm#ui_api_responses_batch_results "The results from a request to a batch resource. Results include information for each subrequest in the batch.")

Usage

When updating a batch of records, you must include the Id field. Don’t include the apiName field in [Batch Operation Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_operation_input.htm "Represents the operation type and record data to create, update, and delete in a batch.").

You can’t perform multiple operations on the same record in one request. An update operation using an Id value that’s used in another update or delete operation can’t be processed. Otherwise, a 400 HTTP status code with an INVALID\_BATCH\_REQUEST error is returned.

Receiving a 400 HTTP status code with an INVALID\_INPUT error can be caused by one of these reasons.

-   The operations field is missing or empty.
-   The operation type is missing.
-   The operations field doesn’t contain a records field or the records field is empty.

#### See Also

-   [Create a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_post.htm "Create multiple records. You can create, update, and delete up to 200 records in a single request.")

-   [Delete a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_delete.htm "Delete multiple records. You can create, update, and delete up to 200 records in a single request.")

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
      "type": "Update",
      "records": [
        {
          "fields": {
            "Id": "001xx000003Gaf9AAC",
            "NumberOfEmployees": 1000
          }
        },
        {
          "fields": {
            "Id": "001xx000003GanDAAS",
            "NumberOfEmployees": 5000
          }
        },
      ]
    },
  ]
}
```

## Related Topics

- Batch Record Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_input.htm)
- Batch Results (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_batch_results.htm)
- Batch Operation Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_operation_input.htm)
- Create a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_post.htm)
- Delete a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_delete.htm)
