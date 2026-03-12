---
title: "Preview Cart to Exchange Order Input"
domain: chatterapi
topic: preview-cart-to-exchange-order-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.498Z
estimatedTokens: 131
keywords: [Preview, Cart, Exchange, Order, Input]
---

# Preview Cart to Exchange Order Input

> Information required to preview a cart to exchange order.

# Preview Cart to Exchange Order Input

Information required to preview a cart to exchange order.

Root XML tag

<previewCartToExchangeOrderInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| exchangeCartId | String | ID of the cart used for adding items to the exchange order. | Required | 60.0 |
| orderSummaryId | String | Order summary ID. | Required | 60.0 |
| referenceId | String | Return order ID. | Required | 60.0 |

## Code Examples

```
{
  "orderSummaryId": "1Osxx0000000000",
  "exchangeCartId": "0a6xx0000000000",
  "referenceId": "2oNxx0000000000"
}
```
