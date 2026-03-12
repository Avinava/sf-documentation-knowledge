---
title: "Multiple Fulfillment Order Invoices Input"
domain: chatterapi
topic: multiple-fulfillment-order-invoices-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.148Z
estimatedTokens: 100
keywords: [Multiple, Fulfillment, Order, Invoices, Input, FulfillmentOrders]
---

# Multiple Fulfillment Order Invoices Input

> The FulfillmentOrders to create Invoices for.

# Multiple Fulfillment Order Invoices Input

The FulfillmentOrders to create Invoices for.

Root XML tag

<multipleFulfillmentOrderInvoicesInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fulfillmentOrderIds | String[] | List of IDs of FulfillmentOrders to create Invoices for. | Required | 52.0 |

## Code Examples

```
{
  "fulfillmentOrderIds": ["0a3xx00000000W1", "0a3xx00000000W2", "0a3xx00000000W3"]
}
```
