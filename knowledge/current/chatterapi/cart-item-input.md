---
title: "Cart Item Input"
domain: chatterapi
topic: cart-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.199Z
estimatedTokens: 455
keywords: [Cart, Item, Input]
---

# Cart Item Input

> An item in a cart.

# Cart Item Input

An item in a cart.

Root XML tag

<cartItem>

JSON example for adding an item to a cart

```

```

JSON example for updating an item in a cart

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| cartDelivery​GroupId | String | ID of the cart delivery group. | Optional | 59.0 |
| custom​Fields | sObject Attributes Input[] | Array of sObjects and custom fields for the sObjects. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, only the CartItem sObject is supported. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. The custom fields can be of type Checkbox, Currency, Date, Email, LongTextArea, Number, Percent, Phone, Text, TextArea, Url, Address, or Location. The customFields property isn't supported in stores built on an Aura template. | Optional | 61.0 |
| productId | String | ID of the product. | Required when adding an item to a cart (POST)Not supported when updating an item in a cart (PATCH) | 49.0 |
| productSelling​ModelId | String | The ID of the product selling model associated with Product2. | Optional | 59.0 |
| quantity | String | Quantity of the cart item. Use a value that can be converted to BigDecimal. | Required | 49.0 |
| subscriptionTerm | Integer | The total number of terms in the subscription period. | Optional | 59.0 |
| subType | String | Subtype of item in a cart.Possible values are:Bonus—A bonus product.Gift—A gift product. | Optional | 64.0 |
| type | String | Type of item in a cart. Value is Product. | Required when adding an item to a cart (POST)Not supported when updating an item in a cart (PATCH) | 49.0 |

## Code Examples

```
{
   "productId":"01t000000000000000",
   "quantity":"5",
   "type":"Product"
}
```

```
{
   "quantity":"7"
}
```

## Related Topics

- sObject Attributes Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sobject_attributes_input.htm)
