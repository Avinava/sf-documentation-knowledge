---
title: "previewCartToExchangeOrder(previewCartToExchangeOrderInput)"
domain: apex-reference
topic: previewcarttoexchangeorderpreviewcarttoexchangeorderinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.102Z
keywords: [previewCartToExchangeOrder, previewCartToExchangeOrderInput, Retrieves, preview, exchange, order, taking, account, summary, balance, difference, between, return, cart, represents, order., API, Version, Requires, Chatter]
---

# previewCartToExchangeOrder(previewCartToExchangeOrderInput)

> Retrieves a preview of an exchange order, taking into account the order summary balance
    and the difference between the return order and the cart that represents the exchange
    order.

### previewCartToExchangeOrder(previewCartToExchangeOrderInput)

Retrieves a preview of an exchange order, taking into account the order summary balance and the difference between the return order and the cart that represents the exchange order.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.PreviewCartToExchangeOrderOutputRepresentation previewCartToExchangeOrder(ConnectApi.PreviewCartToExchangeOrderInputRepresentation previewCartToExchangeOrderInput)

#### Parameters

previewCartToExchangeOrderInput

Type: [ConnectApi.PreviewCartToExchangeOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_preview_cart_to_exchange_order.htm "Information required to preview a cart to exchange order.")

Information required to preview a cart to exchange order.

#### Return Value

Type: [ConnectApi.PreviewCartToExchangeOrderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preview_cart_to_exchange_order_output.htm "Expected change order financial values for the preview cart to exchange order action.")