---
title: "ConnectApi.CancelAllOrderItemsInputRepresentation"
domain: apex-reference
topic: connectapicancelallorderitemsinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.711Z
estimatedTokens: 199
keywords: [Cancellation, items, order]
---

# ConnectApi.CancelAllOrderItemsInputRepresentation

> Cancellation of all items in an order.

# ConnectApi.CancelAllOrderItemsInputRepresentation

Cancellation of all items in an order.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeItemFees | List<ConnectApi.ChangeItemFeeWithTaxInputRepresentation> | List of input data for fees, including taxes, associated with the order items being canceled. | Optional | 63.0 |
| excludedItems | List<String> | List of items excluded from cancellation. | Optional | 63.0 |
| reason | String | Reason for the cancellation. The value must match one of the picklist values on the Reason field of the Order Product Summary Change object. | Required | 63.0 |
| reasonText | String | Reason text used for the return insights. The value has a max of 255 characters. | Optional | 63.0 |

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ChangeItemFeeWithTaxInputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_change_item_fee_with_tax.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
