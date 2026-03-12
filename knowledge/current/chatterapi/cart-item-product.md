---
title: "Cart Item Product"
domain: chatterapi
topic: cart-item-product
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.588Z
estimatedTokens: 467
keywords: [Cart, Item, Product, summary]
---

# Cart Item Product

> Product summary for a cart item.

# Cart Item Product

Product summary for a cart item.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields | Map<String, String> | Map of product fields and values. | Small, 49.0 | 49.0 |
| isConfiguration​Allowed | Boolean | Indicates whether the product supports configuration (true) or not (false). For dynamic bundles, this field is always true, and for static bundles, it is false. When true, buyers can configure the bundle by selecting which child components to include or exclude before adding it to the cart. | Small, 65.0 | 65.0 |
| name | String | Name of the product. | Small, 49.0 | 49.0 |
| productClass | String | Class of product. Values are:BundleSetSimpleVariationVariationParent | Small, 63.0 | 63.0 |
| productId | String | ID of the product. | Small, 49.0 | 49.0 |
| productSubscription​Information |  | Reserved for future use. | Small, 59.0 | 59.0 |
| purchaseQuantity​Rule | Purchase Quantity Rule | If one exists, purchase quantity rule for the product. | Small, 52.0 | 52.0 |
| productUrlName | String | SEO-friendly URL name for the product. | Small, 64.0 | 64.0 |
| sku | String | SKU of the product. | Small, 49.0 | 49.0 |
| thumbnailImage | Product Media | Thumbnail image of the product. | Small, 49.0 | 49.0 |
| variationAttributes | Map<String, Cart Product Attribute> | Variation attributes associated with the product. | Small, 50.0 | 50.0 |

#### See Also

-   [Cart Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm "An item in a cart.")

-   [Cart Item Without Price](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_no_price.htm "An item without pricing information in a cart.")

-   [Wishlist Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_item.htm "Item in a wishlist to create.")

## Related Topics

- Purchase Quantity Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_purchase_quantity_rule.htm)
- Product Media (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media.htm)
- Cart Product Attribute (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_product_attribute.htm)
- Cart Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item.htm)
- Cart Item Without Price (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_cart_item_no_price.htm)
- Wishlist Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_wishlist_item.htm)
