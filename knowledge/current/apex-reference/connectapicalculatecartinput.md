---
title: "ConnectApi.CalculateCartInput"
domain: apex-reference
topic: connectapicalculatecartinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.756Z
estimatedTokens: 174
keywords: [ConnectApi.CalculateCartInput, Custom, cart, calculation]
---

# ConnectApi.CalculateCartInput

> Custom fields for a cart calculation.

# ConnectApi.CalculateCartInput

Custom fields for a cart calculation.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| customFields | List<SObject> | Array of sObjects and custom fields for the sObjects. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, the WebCart, CartItem, and CartDeliveryGroup sObjects are supported. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. See Create a Cart and Cart Item with Custom Fields in a Commerce Store. | Optional | 63.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
