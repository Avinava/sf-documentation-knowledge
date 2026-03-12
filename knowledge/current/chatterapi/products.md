---
title: "Products"
domain: chatterapi
topic: products
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.591Z
estimatedTokens: 185
keywords: [Products, Capture, reasons, external, sources, product, IDs]
---

# Products

> Capture the return reasons from external sources based on the product IDs.

# Products

Capture the return reasons from external sources based on the product IDs.

Resource

```

```

Available version

59.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| expand | String | Product expand type. Valid value is ReturnReasons. | Required | 59.0 |
| products | String[] | A list of IDs to fetch details for. | Required | 59.0 |
| scope | String | The scope for the extensibility framework. Requires a webstore ID. | Required | 59.0 |

Response body for GET

[Products List](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_list.htm "Products with product data and with expand details.")

## Code Examples

```
commerce/order-management/products
```

## Related Topics

- Products List (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_list.htm)
