---
title: "Analytics, Product Return Rate"
domain: chatterapi
topic: analytics-product-return-rate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.584Z
estimatedTokens: 228
keywords: [Analytics, Product, Rate, products, product’s]
---

# Analytics, Product Return Rate

> Get products with each product’s return rate.

# Analytics, Product Return Rate

Get products with each product’s return rate.

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
| dataSpacePrefixes | String[] | The data space prefixes that fetch the related products of a data space. | Optional | 65.0 |
| page | integer | The page number for the list of products. Starts at 0. | Required | 59.0 |
| pageSize | integer | The number of products that are returned on each page. | Required | 59.0 |
| products | ID | The specific product IDs that you want paginated return rates for. | Optional | 59.0 |

Response body for GET

[Product Return Rate](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_return_rate_output.htm "Return rate of a product (units returned divided by units sold).")

## Code Examples

```
commerce/order-management/analytics/insights/products-return-rate
```

## Related Topics

- Product Return
              Rate (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_return_rate_output.htm)
