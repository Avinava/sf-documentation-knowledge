---
title: "ConnectApi.CartItemInput"
domain: apex-reference
topic: connectapicartiteminput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.505Z
estimatedTokens: 441
keywords: [ConnectApi.CartItemInput, item, cart.]
---

# ConnectApi.CartItemInput

> An item in a cart.

# ConnectApi.CartItemInput

An item in a cart.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartDeliveryGroupId | String | ID of the cart delivery group. | Optional | 59.0 |
| customFields | List<SObject> | Array of sObjects and custom fields for the sObjects. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, only the CartItem sObject is supported. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. The custom fields can be of type Checkbox, Currency, Date, Email, LongTextArea, Number, Percent, Phone, Text, TextArea, Url, Address, or Location. The customFields property isn't supported in stores built on an Aura template. See Create a Cart and Cart Item with Custom Fields in a Commerce Store. | Optional | 61.0 |
| productId | String | ID of the product. | Required when adding an item to a cartNot supported when updating a cart item | 49.0 |
| productSellingModelId | String | The ID of the product selling model associated with Product2. | Optional | 59.0 |
| quantity | String | Quantity of the cart item. Use a value that can be converted to BigDecimal. | Required | 49.0 |
| subscriptionTerm | Integer | The total number of terms in the subscription period. | Optional | 59.0 |
| subType | ConnectApi.​CartItemSubType | Subtype of item in a cart.Possible values are:Bonus—A bonus product.Gift—A gift product. | Optional | 64.0 |
| type | ConnectApi.​CartItemType | Type of item in a cart. Value is Product.DeliveryChargeProduct | Required when adding an item to a cartNot supported when updating a cart item | 49.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.​CartItemSubType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CartItemType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
