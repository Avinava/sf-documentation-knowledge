---
title: "ConnectApi.OrderToCartResult"
domain: apex-reference
topic: connectapiordertocartresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:28.309Z
estimatedTokens: 145
keywords: [ConnectApi.OrderToCartResult, Result, action, adding, order, cart.]
---

# ConnectApi.OrderToCartResult

> Result of action adding an order to a cart.

# ConnectApi.OrderToCartResult

Result of action adding an order to a cart.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| cartId | String | ID of the cart. | 57.0 |
| totalFailedProductCount | Integer | Number of products that couldn't be successfully added to the cart from the order. | 57.0 |
| totalSucceededProductCount | Integer | Number of products successfully added to the cart from the order. | 57.0 |
| unaddedProducts | List<ConnectApi.OrderToCartFailedProduct> | List of products not successfully added to the cart. | 57.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.OrderToCartFailedProduct (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_to_cart_failed_product.htm)
