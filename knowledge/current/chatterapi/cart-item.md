---
title: "Cart Item"
domain: chatterapi
topic: cart-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.525Z
estimatedTokens: 1419
keywords: [Cart, Item]
---

# Cart Item

> An item in a cart.

# Cart Item

An item in a cart.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| billing​Frequency | String | Reserved for future use. | Small, 59.0 | 59.0 |
| cartData | Cart Item Collection | Collection of items in the cart. | Small, 64.0 | 64.0 |
| cartDelivery​GroupId | String | ID of the cart delivery group. | Small, 60.0 | 60.0 |
| cartId | String | ID of the cart. | Small, 49.0 | 49.0 |
| cartItemId | String | ID of the item. If asynchronous cart processing is enabled, this value returns null for POST requests. | Small, 49.0 | 49.0 |
| childProduct​Count | Integer | Number of child products in the cart that are associated with the item. A cart item can have child products if the productClass of the item is Bundle. For nested bundles, which include a child product that's also a bundle, childProductCount includes all child products. | Small, 62.0 | 62.0 |
| currencyIsoCode | String | Currency ISO code of the cart. | Small, 57.0 | 57.0 |
| custom​Fields | sObject[] | Array of sObjects and viewable custom fields for the sObjects. Standard fields are ignored. Currently, only the CartItem sObject is supported. Field-level security rules from the shopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. | Small, 61.0 | 61.0 |
| firstPymt​TotalAmount | String | For subscription items, the first payment amount after adjustments and taxes. For non-subscription products, the value is the same as totalAmount. | Small, 60.0 | 60.0 |
| firstPymt​TotalListPrice | String | For subscription items, the total list price of the first payment. For non-subscription items, the value is the same as totalListPrice. | Small, 63.0 | 63.0 |
| firstPymt​TotalPrice | String | For subscription items, the first term price, including adjustments but excluding taxes. For non-subscription items, the total price, including adjustments but excluding taxes. | Small, 60.0 | 60.0 |
| firstPymtTotalTax | String | For subscription items, the tax amount on the first payment. For non-subscription products, the value is the same as totalTax. | Small, 60.0 | 60.0 |
| isShipping​ChargeNot​Applicable | Boolean | Specifies whether the shipping charge for the cart item is waived (true) or not (false). If the value is true, the cart item is classified as a digital product. | Small, 64.0 | 64.0 |
| itemized​Adjustment​Amount | String | Total itemized adjustment amount for the item, including promotions and excluding taxes. | Small, 52.0 | 52.0 |
| listPrice | String | List price for the item. | Small, 49.0 | 49.0 |
| messagesSummary | Cart Messages Summary | Messages summary for the item. | Small, 49.0 | 49.0 |
| name | String | Name of the item. | Small, 49.0 | 49.0 |
| parentCart​ItemId | String | ID of the item’s parent cart item. The value is empty if the item is a top-level cart item. | Small, 62.0 | 62.0 |
| productClass | String | Class of product. Values are:BundleSetSimpleVariationVariationParent | Small, 62.0 | 62.0 |
| productDetails | Cart Item Product | Summary of the product details. | Small, 49.0 | 49.0 |
| productId | String | ID of the product. | Small, 49.0 | 49.0 |
| productSelling​ModelId | String | Reserved for future use. | Small, 59.0 | 59.0 |
| promotion​DisplayName | String | Promotion display name for a bonus product. | Small, 64.0 | 64.0 |
| quantity | String | Quantity of the item. | Small, 49.0 | 49.0 |
| salesPrice | String | Sales price for the item. | Small, 49.0 | 49.0 |
| sellingModel​Type | String | Type of product selling model. Values are:Evergreen—A subscription without an end date. An evergreen subscription continues until the shopper affirmatively cancels it.OneTime—A product that isn’t sold as a subscription.TermDefined—A subscription with a defined end date. The subscription continues for a specified time period. When the term ends, the subscription ends. | Small, 60.0 | 60.0 |
| subscription​Term | Integer | Reserved for future use. | Small, 59.0 | 59.0 |
| subType | String | Subtype of item in a cart. Values are:Bonus—A bonus product.Gift—A gift product. | Small, 64.0 | 64.0 |
| totalAdjustment​Amount | String | Total adjustment amount for the item. | Small, 50.0 | 50.0 |
| totalAmount | String | Total amount for the item. | Small, 49.0 | 49.0 |
| totalListPrice | String | Total list price for the item. | Small, 49.0 | 49.0 |
| totalPrice | String | Total price for the item including adjustments but excluding taxes. | Small, 49.0 | 49.0 |
| totalTax | String | Total tax for the item. | Small, 49.0 | 49.0 |
| type | String | Type of item in a cart. Values are:DeliveryChargeProduct | Small, 49.0 | 49.0 |
| unitAdjusted​Price | String | Unit price, including tier level discounts, for the item. This value is informational only and isn’t used in pricing calculations. | Small, 50.0 | 50.0 |
| unitAdjusted​PriceWith​ItemAdj | String | Unit price, including both tier and item level discounts, for the item. This value is informational only and isn’t used in pricing calculations. | Small, 61.0 | 61.0 |
| unitAdjustment​Amount | String | Tier level adjustments made to the unit price for the item. This value is informational only and isn’t used in pricing calculations. | Small, 50.0 | 50.0 |
| unitItem​Adjustment​Amount | String | Item level adjustments made to the unit price for the item. This value is informational only and isn’t used in pricing calculations. | Small, 61.0 | 61.0 |

#### See Also

-   [Cart Item Result](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_result.htm "Result after requesting a cart item.")

## Related Topics

- Cart Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_collection.htm)
- Cart Messages Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_messages_summary.htm)
- Cart Item Product (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_product_summary.htm)
- Cart Item Result (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_result.htm)
