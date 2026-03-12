---
title: "Create a Batch of Records"
domain: uiapi
topic: create-a-batch-of-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.614Z
estimatedTokens: 577
keywords: [Batch, Records, multiple]
---

# Create a Batch of Records

> Create multiple records. You can create, update, and delete up to 200 records in a
    single request.

# Create a Batch of Records

Create multiple records. You can create, update, and delete up to 200 records in a single request.

Resource

```

```

Available Version

59.0

HTTP Method

POST

Example

This example creates an account and a contact, and updates a record.

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

When creating a batch of records, you must include the required apiName field in [Batch Operation Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_operation_input.htm "Represents the operation type and record data to create, update, and delete in a batch."). Don’t include the Id field. Otherwise, a 400 HTTP status code with an INVALID\_BATCH\_REQUEST error is returned.

Receiving a 400 HTTP status code with an INVALID\_INPUT error can be caused by one of these reasons.

-   The operations field is missing or empty.
-   The operation type is missing.
-   The operations field doesn’t contain a records field or the records field is empty.

#### See Also

-   [Update a Batch of Records](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_update.htm "Update multiple records. You can create, update, and delete up to 200 records in a single request.")

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
      "type": "CREATE",
      "records": [
        {
          "apiName": "Account",
          "fields": {
            "Name": "Global Media"
          }
        },
        {
          "apiName": "Contact",
          "fields": {
            "LastName": "Smith"
          }
        }
      ]
    },
    {
      "type": "Update",
      "records": [
        {
          "fields": {
            "Id": "001xx000003Gaf9AAC",
            "NumberOfEmployees": 1000
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
- Update a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_update.htm)
- Delete a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_delete.htm)
