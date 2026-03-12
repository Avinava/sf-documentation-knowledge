---
title: "Clone Sales Transaction Input"
domain: revenue-cloud
topic: clone-sales-transaction-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.884Z
estimatedTokens: 208
keywords: [Clone, Sales, Transaction, Input, representation, request, clone, records, within, sales, transaction.]
---

# Clone Sales Transaction Input

> Input representation of the request to clone records within a sales
    transaction.

# Clone Sales Transaction Input

Input representation of the request to clone records within a sales transaction.

JSON example

This is a sample request to clone a record within a sales transaction.

```

```

This is a sample request to clone all line items in a ramped group within a sales transaction.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordIds | String[] | ID of the record to be cloned. You can specify a single record ID only. | Required | 64.0 |
| salesTransactionId | String | ID of the sales transaction related to the record IDs to clone. | Required | 64.0 |
| options | Clone Options Input | Specifies options to clone a ramp segment within a sales transaction. You can clone only the last ramp segment. | Optional | 65.0 |

## Code Examples

```
{
  "recordIds": ["0QLxx0000004CBYGA2"],
  "salesTransactionId": "0Q0xx0000004CE0CAM"
}
```

```
{
  "recordIds": ["0QLxx0000004CBYGA2"],
  "salesTransactionId": "0Q0xx0000004CE0CAM",
  "options": {
    "lineScope": "AllLines"
  }
}
```

## Related Topics

- Clone Options Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_clone_options_input.htm)
