---
title: "Transaction Payment Updates Response"
domain: edu-cloud-dev-guide
topic: transaction-payment-updates-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:25.123Z
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
                  Details[] (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_error_detail.htm)
- Transaction Payment Updates Response Link (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/connect_responses_transaction_payment_updates_response_link.htm)
