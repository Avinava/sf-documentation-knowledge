---
title: "ConnectApi.CartEvaluateTaxInput"
domain: apex-reference
topic: connectapicartevaluatetaxinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.494Z
estimatedTokens: 213
keywords: [ConnectApi.CartEvaluateTaxInput, Shipping, address, custom, fields, used, calculate, taxes, cart.]
---

# ConnectApi.CartEvaluateTaxInput

> Shipping address and custom fields used to calculate taxes for a cart.

# ConnectApi.CartEvaluateTaxInput

Shipping address and custom fields used to calculate taxes for a cart.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFields | List<SObject> | Array of sObjects and custom fields for the sObjects. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, the WebCart, CartItem, and CartDeliveryGroup sObjects are supported. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. See Create a Cart and Cart Item with Custom Fields in a Commerce Store. | Optional | 63.0 |
| shippingAddress | ConnectApi.CartShippingAddressInputRepresentation | Shipping address for a cart. | Required | 63.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- ConnectApi.CartShippingAddressInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_cart_shipping_address.htm)
