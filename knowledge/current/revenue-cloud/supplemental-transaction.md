---
title: "Supplemental Transaction"
domain: revenue-cloud
topic: supplemental-transaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.569Z
estimatedTokens: 212
keywords: [Supplemental, Transaction, Output, representation, created, order]
---

# Supplemental Transaction

> Output representation of the details of the created supplemental order.

# Supplemental Transaction

Output representation of the details of the created supplemental order.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Supplemental Transaction Error Response[] | List of errors encountered during synchronous processing. | Small, 64.0 | 64.0 |
| requestId | String | Request ID of the process that can be used to query the async status. | Small, 64.0 | 64.0 |
| statusURL | String | URL to check the status of the async operation, if available. | Small, 64.0 | 64.0 |
| success | Boolean | Indicates whether the synchronous part of the processing is successful (true) or not (false). | Small, 64.0 | 64.0 |
| supplemental​TransactionId | String | ID of the created supplemental transaction. | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "requestId": "16PRM0000004DBq",
  "statusURL": "/services/data/vXX.X/sobjects/AsyncOperationTracker/16PRM0000004DBq",
  "orderId": "801S70000001VKgIAM",
  "success": true,
  "errors": []
}
```

## Related Topics

- Supplemental Transaction Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_supplemental_transaction_error_response.htm)
