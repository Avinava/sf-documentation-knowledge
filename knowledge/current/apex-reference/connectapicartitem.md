---
title: "ConnectApi.CartItem"
domain: apex-reference
topic: connectapicartitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.489Z
estimatedTokens: 664
keywords: [ConnectApi.CartItem, item, cart]
---

# ConnectApi.CartItem

> An item in a cart.

# ConnectApi.CartItem

An item in a cart.

Subclass of [ConnectApi.AbstractCartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_cart_item.htm "A cart item.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| currencyIsoCode | String | Currency ISO code of the cart. | 57.0 |
| cartData | ConnectApi.​CartItemCollection | Collection of items in the cart. | 64.0 |
| firstPymt​TotalAmount | String | For subscription items, the first payment amount after adjustments and taxes. For non-subscription products, the value is the same as totalAmount. | 60.0 |
| firstPymt​TotalListPrice | String | For subscription items, the total list price of the first payment. For non-subscription items, the value is the same as totalListPrice. | 63.0 |
| firstPymtTotalPrice | String | For subscription items, the first term price, including adjustments but excluding taxes. For non-subscription items, the total price, including adjustments but excluding taxes. | 60.0 |
| firstPymtTotalTax | String | For subscription items, the tax amount on the first payment. For non-subscription products, the value is the same as totalTax. | 60.0 |
| itemizedAdjustment​Amount | String | Total itemized adjustment amount for the item, including promotions and excluding taxes. | 52.0 |
| listPrice | String | List price for the item. | 49.0 |
| productClass | ConnectApi.​ProductClass | Class of product. Values are:BundleSetSimpleVariationVariationParent | 62.0 |
| salesPrice | String | Sales price for the item. | 49.0 |
| totalAdjustment​Amount | String | Total adjustment amount for the item. | 50.0 |
| totalAmount | String | Total amount for the item. | 49.0 |
| totalListPrice | String | Total list price for the item. | 49.0 |
| totalPrice | String | Total price for the item including adjustments but excluding taxes. | 49.0 |
| totalTax | String | Total tax for the item. | 49.0 |
| unitAdjusted​Price | String | Unit price, including tier level discounts, for the item. This value is informational only and isn’t used in pricing calculations. | 50.0 |
| unitAdjusted​PriceWith​ItemAdj | String | Unit price, including both tier and item level discounts, for the item. This value is informational only and isn’t used in pricing calculations. | 61.0 |
| unitAdjustment​Amount | String | Tier level adjustments made to the unit price for the item. This value is informational only and isn’t used in pricing calculations. | 50.0 |
| unitItem​Adjustment​Amount | String | Item level adjustments made to the unit price for the item. This value is informational only and isn’t used in pricing calculations. | 61.0 |

## Related Topics

- ConnectApi.AbstractCartItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_cart_item.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CartItemCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_collection.htm)
- ConnectApi.​ProductClass (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
