---
title: "Payment Info"
domain: chatterapi
topic: payment-info
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.349Z
estimatedTokens: 205
keywords: [Payment, Info, additional, funds, order]
---

# Payment Info

> Payment information about additional funds required for an order.

# Payment Info

Payment information about additional funds required for an order.

Root XML tag

<paymentInfoInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lastPaymentGatewayLogId | String | Last payment gateway log ID for the new order payment summary. | Optional | 60.0 |
| name | String | Overrides the default name of the order payment summary created. | Optional | 60.0 |
| paymentAuthorizationId | String | Payment authorization ID to be used if needed to fund the exchange order. | Optional | 60.0 |
| paymentIds | String[] | Payment IDs for the new order payment summary. | Optional | 60.0 |
| paymentMethodId | String | Payment method ID for the new order payment summary. | Optional | 60.0 |

## Code Examples

```
[
  {
    "paymentIds": [
      "0aQxx0000000000",
      "0aQxx0000000001"
    ],
    "name": "VISA-1234",
    "paymentMethodId": "0aaxx0000000001",
    "lastPaymentGatewayLogId": "0Xtxx0000000001"
  },
  {
    "paymentAuthorizationId": "0Xcxx0000000002",
    "name": "VISA-4567",
    "paymentMethodId": "0aaxx0000000002",
    "lastPaymentGatewayLogId": "0Xtxx0000000002"
  },
  {
    "paymentIds": [
      "0aQxx0000000003",
      "0aQxx0000000004"
    ],
    "paymentAuthorizationId": "0Xcxx0000000003",
    "name": "VISA-9123",
    "paymentMethodId": "0aaxx0000000003",
    "lastPaymentGatewayLogId": "0Xtxx0000000003"
  }
]
```
