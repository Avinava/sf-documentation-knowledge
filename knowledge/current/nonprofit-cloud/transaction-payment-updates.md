---
title: "Transaction Payment Updates"
domain: nonprofit-cloud
topic: transaction-payment-updates
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.090Z
estimatedTokens: 162
keywords: [Transaction, Payment, Updates, Output, representation]
---

# Transaction Payment Updates

> Output representation of the transaction payment updates.

# Transaction Payment Updates

Output representation of the transaction payment updates.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| details | Transaction Payment Updates Response[] | Payment update response of the transaction. | Small, 60.0 | 60.0 |
| failures | Integer | Number of gift transactions that failed to update. | Small, 60.0 | 60.0 |
| notProcessed | Integer | Number of gift transactions that weren't processed. | Small, 60.0 | 60.0 |
| successes | Integer | Number of gift transactions that were updated. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "successes": 0,
  "failures": 0,
  "notProcessed": 0,
  "details": [
    {
      "success": true,
      "errors": [
        {
          "field": "string",
          "message": "string"
        }
      ],
      "links": {
        "gifttransaction": {
          "href": "/services/data/vXX.X/sobjects/sObject/...",
          "id": "string"
        }
      }
    }
  ]
}
```

## Related Topics

- Transaction Payment Updates Response[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_transaction_payment_updates_respons.htm)
