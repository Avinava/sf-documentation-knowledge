---
title: "Delivery Group"
domain: chatterapi
topic: delivery-group
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.257Z
estimatedTokens: 565
keywords: [Delivery, Group, Commerce, store, checkout]
---

# Delivery Group

> Delivery group for a Commerce store checkout.

# Delivery Group

Delivery group for a Commerce store checkout.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| available​Delivery​Methods | Delivery Method[] | List of available delivery methods.When Shipping is disabled for your web store, the delivery methods list is empty. | Medium, 55.0 | 55.0 |
| cartId | String | ID of the cart. | Small, 59.0 | 59.0 |
| cartItems | Cart Item Collection | List of cart items. | Medium, 59.0 | 59.0 |
| delivery​Address | Checkout Address | Delivery address for the checkout. | Big, 55.0 | 55.0 |
| desired​Delivery​Date | String | Date when the customer wants the items delivered. | Small, 55.0 | 55.0 |
| errors | Checkout Error[] | List of any errors. | Small, 63.0 | 63.0 |
| gift​Message | String | Personalized gift message for the delivery group. | Small, 64.0 | 64.0 |
| giftToName | String | The name of the recipient for a gift delivery group. | Small, 64.0 | 64.0 |
| id | String | ID for the delivery group. | Small, 55.0 | 55.0 |
| isAllDigital​CartItems | Boolean | Indicates whether the delivery group contains only digital products. | Small, 64.0 | 64.0 |
| isAllDigitalCartItems | Boolean | Indicates whether the delivery group contains digital goods (true) or not (false). | Small, 64.0 | 64.0 |
| isDefault | Boolean | Indicates whether the delivery group is the default (True) or not (False). The default value is False. | Small, 59.0 | 59.0 |
| isGift | Boolean | Indicates if the delivery group is a gift (true) or not (false). | Small, 64.0 | 64.0 |
| name | String | Name of the delivery group. | Small, 59.0 | 59.0 |
| selected​Delivery​Method | Delivery Method | Selected delivery method.When Shipping is disabled for your web store, the delivery methods aren’t generated during checkout. | Medium, 55.0 | 55.0 |
| shipping​Instructions | String | Special shipping and handling instructions. | Small, 55.0 | 55.0 |
| totalCart​ItemCount | Integer | Number of cart items, including their quantities, of the type Product in the delivery group. | Small, 63.0 | 63.0 |
| totalProduct​Amount | String | The sum of all the cart items’ TotalPrice for cart items of the type Product in the delivery group. | Small, 62.0 | 62.0 |

## Related Topics

- Delivery
                  Method (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_delivery_method.htm)
- Cart Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_collection.htm)
- Checkout Address (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_address.htm)
- Checkout
                  Error (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_checkout_error.htm)
