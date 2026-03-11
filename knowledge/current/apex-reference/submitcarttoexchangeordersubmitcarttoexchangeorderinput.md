---
title: "submitCartToExchangeOrder(submitCartToExchangeOrderInput)"
domain: apex-reference
topic: submitcarttoexchangeordersubmitcarttoexchangeorderinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.102Z
keywords: [submitCartToExchangeOrder, submitCartToExchangeOrderInput, Creates, exchange, order, summary, based, return, cart, used, exchanges., new, attached, original, created, before, any, exchanges, occurred, provide]
---

# submitCartToExchangeOrder(submitCartToExchangeOrderInput)

> Creates an exchange order summary, based on the return order and the cart used for
      exchanges. The new exchange order summary is attached to the original order summary (created
      before any exchanges occurred). You can also provide optional payment information and optional
      information about order summary sequences, which affect the newly created exchange order
      summary.

### submitCartToExchangeOrder(submitCartToExchangeOrderInput)

Creates an exchange order summary, based on the return order and the cart used for exchanges. The new exchange order summary is attached to the original order summary (created before any exchanges occurred). You can also provide optional payment information and optional information about order summary sequences, which affect the newly created exchange order summary.

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SubmitCartToExchangeOrderOutputRepresentation submitCartToExchangeOrder(ConnectApi.SubmitCartToExchangeOrderInputRepresentation submitCartToExchangeOrderInput)

#### Parameters

submitCartToExchangeOrderInput

Type: [ConnectApi.SubmitCartToExchangeOrderInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_submit_cart_to_exchange_order.htm "Information required for a submit cart to exchange order action.")

Information required to submit a cart to exchange order.

#### Return Value

Type: [ConnectApi.SubmitCartToExchangeOrderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_submit_cart_to_exchange_order_output.htm "Exhange order summary resulting from a submit cart to exchange order action.")