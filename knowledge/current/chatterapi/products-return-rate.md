---
title: "Products Return Rate"
domain: chatterapi
topic: products-return-rate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.460Z
estimatedTokens: 150
keywords: [Products, Rate, rates]
---

# Products Return Rate

> Get a page of products with return rates.

# Products Return Rate

Get a page of products with return rates.

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
| page | Integer | Number of the page (for example, 2). | Required | 59.0 |
| pageSize | Integer | Number of items per page. Valid values are 0 to 50. | Required | 59.0 |
| products | String[] | List of product IDs for which you want to get return rates. | Optional | 59.0 |

Response body for GET

Product Return Rate List

## Code Examples

```
/commerce/order-management/analytics/insights/products-return-rate
```
