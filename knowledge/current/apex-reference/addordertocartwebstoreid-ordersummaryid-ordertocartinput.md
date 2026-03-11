---
title: "addOrderToCart(webstoreId, orderSummaryId,
      orderToCartInput)"
domain: apex-reference
topic: addordertocartwebstoreid-ordersummaryid-ordertocartinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [addOrderToCart, webstoreId, orderSummaryId, orderToCartInput, Add, order, cart, webstore, summary., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# addOrderToCart(webstoreId, orderSummaryId,
      orderToCartInput)

> Add an order to a cart using a webstore order
    summary.

### addOrderToCart(webstoreId, orderSummaryId, orderToCartInput)

Add an order to a cart using a webstore order summary.

#### API Version

57.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderToCartResult addOrderToCart(String webstoreId, String orderSummaryId, ConnectApi.OrderToCartInput orderToCartInput)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderToCartInput

Type: [ConnectApi.OrderToCartInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_to_cart.htm "Input for action adding an order to a cart.")

Input value indicating which cart the order should be added to.

#### Return Value

Type: [ConnectApi.OrderToCartResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_to_cart_result.htm "Result of action adding an order to a cart.")