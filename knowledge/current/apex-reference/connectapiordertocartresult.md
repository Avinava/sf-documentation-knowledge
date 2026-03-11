---
title: "ConnectApi.OrderToCartResult"
domain: apex-reference
topic: connectapiordertocartresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.527Z
keywords: [ConnectApi.OrderToCartResult]
---

# ConnectApi.OrderToCartResult

# ConnectApi.OrderToCartResult

Result of action adding an order to a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cartId | String | ID of the cart. | 57.0 |
| totalFailedProductCount | Integer | Number of products that couldn't be successfully added to the cart from the order. | 57.0 |
| totalSucceededProductCount | Integer | Number of products successfully added to the cart from the order. | 57.0 |
| unaddedProducts | List<ConnectApi.OrderToCartFailedProduct> | List of products not successfully added to the cart. | 57.0 |