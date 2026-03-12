---
title: "Transaction Payment Updates Response"
domain: nonprofit-cloud
topic: transaction-payment-updates-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.094Z
estimatedTokens: 142
keywords: [Transaction, Payment, Updates, Output, representation]
---

# Transaction Payment Updates Response

> Output representation of the updates for the transaction payment.

# Transaction Payment Updates Response

Output representation of the updates for the transaction payment.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Details[] | Error message if a process failed. | Small, 60.0 | 60.0 |
| links | Transaction Payment Updates Response Link | Links to the response object. | Small, 60.0 | 60.0 |
| success | Boolean | Indicates whether a request was processed successfully (true) or not (false). | Small, 60.0 | 60.0 |

## Code Examples

```
{
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

- Error
                  Details[] (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_error_detail.htm)
- Transaction Payment Updates Response Link (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_transaction_payment_updates_response_link.htm)
