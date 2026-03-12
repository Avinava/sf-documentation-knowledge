---
title: "Place Order Response"
domain: revenue-cloud
topic: place-order-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.546Z
estimatedTokens: 206
keywords: [Place, Order, Output, representation]
---

# Place Order Response

> Output representation of the request to create or update an order.

# Place Order Response

Output representation of the request to create or update an order.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Place Order​Error​Response[] | List of errors encountered during the synchronous processing. | Small, 60.0 | 60.0 |
| orderId | String | ID of the order created after a successful request. | Small, 60.0 | 60.0 |
| requestId | String | Request ID of the process to query asynchronous status of the place order API. | Small, 60.0 | 60.0 |
| status​URL | String | Asynchronous status URL of the request, if available. | Small, 60.0 | 60.0 |
| success | Boolean | Indicates whether the synchronous part of the processing is successful (true) or not (false). | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "requestId": "16PRM0000004DBq",
  "orderId": "801S70000001VKgIAM",
  "success": true,
  "errors": [],
  "statusURL": "/services/data/vXX.X/sobjects/AsyncOperationTracker/16PRM0000004DBq"
}
```

## Related Topics

- Place
                  Order​Error​Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_place_order_error_response.htm)
