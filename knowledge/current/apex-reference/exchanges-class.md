---
title: "Exchanges Class"
domain: apex-reference
topic: exchanges-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:18.826Z
estimatedTokens: 944
namespace: ConnectApi
keywords: [Exchanges, Preview, submit, cart, exchange, orders, previewCartToExchangeOrder, previewCartToExchangeOrderInput, API, Version, Requires, Chatter, submitCartToExchangeOrder, submitCartToExchangeOrderInput]
---

# Exchanges Class

> Preview and submit cart to exchange orders.

**Namespace:** `ConnectApi`

# Exchanges Class

Preview and submit cart to exchange orders.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Exchanges Methods

These methods are for Exchanges. All methods are static.

-   **[previewCartToExchangeOrder(previewCartToExchangeOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Exchanges_static_methods.htm#apex_ConnectAPI_Exchanges_previewCartToExchangeOrder_1)**
    Retrieves a preview of an exchange order, taking into account the order summary balance and the difference between the return order and the cart that represents the exchange order.
-   **[submitCartToExchangeOrder(submitCartToExchangeOrderInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Exchanges_static_methods.htm#apex_ConnectAPI_Exchanges_submitCartToExchangeOrder_1)**
    Creates an exchange order summary, based on the return order and the cart used for exchanges. The new exchange order summary is attached to the original order summary (created before any exchanges occurred). You can also provide optional payment information and optional information about order summary sequences, which affect the newly created exchange order summary.

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- previewCartToExchangeOrder(previewCartToExchangeOrderInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Exchanges_static_methods.htm)
- submitCartToExchangeOrder(submitCartToExchangeOrderInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Exchanges_static_methods.htm)
- ConnectApi.PreviewCartToExchangeOrderInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_preview_cart_to_exchange_order.htm)
- ConnectApi.PreviewCartToExchangeOrderOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preview_cart_to_exchange_order_output.htm)
- ConnectApi.SubmitCartToExchangeOrderInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_submit_cart_to_exchange_order.htm)
- ConnectApi.SubmitCartToExchangeOrderOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_submit_cart_to_exchange_order_output.htm)
