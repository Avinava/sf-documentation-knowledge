---
title: "Batch Record Input"
domain: uiapi
topic: batch-record-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.164Z
estimatedTokens: 139
keywords: [Batch, Record, Input, multiple, operations, records]
---

# Batch Record Input

> A description of multiple operations for a request to create, update, or delete a batch
    of records.

# Batch Record Input

A description of multiple operations for a request to create, update, or delete a batch of records.

Example

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allOrNone | Boolean | Specifies whether to stop processing the request and rollback any changes when the request encounters an error. The default is true. | Optional | 59.0 |
| operations | Batch Operation Input [] | A description of records and operation types. | Required | 59.0 |

## Code Examples

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
            "Name": "ACCOUNT 1"
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
    },
    {
      "type": "Delete",
      "records": [
        {
          "fields": {
            "Id": "001xx000003GanDAAS"
          }
        }
      ]
    }
  ]
}
```

## Related Topics

- Batch Operation Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_batch_operation_input.htm)
