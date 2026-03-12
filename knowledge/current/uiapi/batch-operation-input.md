---
title: "Batch Operation Input"
domain: uiapi
topic: batch-operation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.170Z
estimatedTokens: 150
keywords: [Batch, Operation, Input, record, data]
---

# Batch Operation Input

> Represents the operation type and record data to create, update, and delete in a
    batch.

# Batch Operation Input

Represents the operation type and record data to create, update, and delete in a batch.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | String | The type of record operation. Valid values include:CREATE—Create a record or multiple records.UPDATE—Update a record or multiple records.DELETE—Delete a record or multiple records. | Required | 59.0 |
| records | Record Input [] | A description of a record or multiple records to create, update, and delete. | Required | 59.0 |

## Code Examples

```
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
      "type": "UPDATE",
      "records": [
        {
          "fields": {
            "Id": "001xx000003Gaf9AAC",
            "NumberOfEmployees": 1000
          }
        }
      ]
    },
    {
      "type": "DELETE",
      "records": [
        {
          "fields": {
            "Id": "001xx000003GanDAAS"
          }
        }
      ]
    }
  ]
```

## Related Topics

- Create a record or multiple records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_post.htm)
- Update a record or multiple records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_update.htm)
- Delete a record or multiple records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_delete.htm)
- Record
                        Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_record_input.htm)
