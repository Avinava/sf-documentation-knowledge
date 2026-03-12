---
title: "ConnectApi.AbstractCartItem"
domain: apex-reference
topic: connectapiabstractcartitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.023Z
estimatedTokens: 690
keywords: [ConnectApi.AbstractCartItem, cart, item]
---

# ConnectApi.AbstractCartItem

> A cart item.

# ConnectApi.AbstractCartItem

A cart item.

This class is abstract.

Superclass of:

-   [ConnectApi.CartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item.htm "An item in a cart.")
-   [ConnectApi.CartItemWithoutPrice](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_no_price.htm "An item without price information in a cart.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| billingFrequency | ConnectApi.​BillingFrequency | Reserved for future use. | 59.0 |
| cartDeliveryGroupId | String | ID of the cart delivery group. | 60.0 |
| cartId | String | ID of the cart. | 49.0 |
| cartItemId | String | ID of the item. | 49.0 |
| childProduct​Count | Integer | Number of child products in the cart that are associated with the item. A cart item can have child products if the productClass of the item is Bundle. For nested bundles, which include a child product that's also a bundle, childProductCount includes all child products. | 62.0 |
| customFields | List<SObject> | Array of sObjects and viewable custom fields for the sObjects. Standard fields are ignored. Currently, only the CartItem sObject is supported. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. | 61.0 |
| isShipping​ChargeNot​Applicable | Boolean | Specifies whether the shipping charge for the cart item is waived (true) or not (false). If the value is true, the cart item is classified as a digital product. | 64.0 |
| messagesSummary | ConnectApi.​CartMessagesSummary | Messages summary for the item. | 49.0 |
| name | String | Name of the item. | 49.0 |
| parentCart​ItemId | String | ID of the item’s parent cart item. The value is empty if the item is a top-level cart item. | 62.0 |
| productDetails | ConnectApi.​CartItemProduct | Summary of the product details. | 49.0 |
| productId | String | ID of the product. | 49.0 |
| productSelling​ModelId | String | Reserved for future use. | 59.0 |
| promotion​DisplayName | String | Promotion display name for a bonus product. | 64.0 |
| quantity | String | Quantity of the item. | 49.0 |
| sellingModelType | ConnectApi.​SellingModelType | Reserved for future use. | 60.0 |
| subType | ConnectApi.​CartItemSubType | Subtype of item in a cart. Values are:Bonus—A bonus product.Gift—A gift product. | 64.0 |
| subscriptionTerm | Integer | Reserved for future use. | 59.0 |
| type | ConnectApi.​CartItemType | Type of item in a cart. Values are:DeliveryChargeProduct | 49.0 |

#### See Also

-   [ConnectApi.CartItemResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_result.htm "Result after requesting a cart item.")

## Related Topics

- ConnectApi.CartItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item.htm)
- ConnectApi.CartItemWithoutPrice (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_item_no_price.htm)
- ConnectApi.​BillingFrequency (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​CartMessagesSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_messages_summary.htm)
- ConnectApi.​CartItemProduct (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_product_summary.htm)
