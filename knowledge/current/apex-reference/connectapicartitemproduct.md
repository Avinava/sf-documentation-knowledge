---
title: "ConnectApi.CartItemProduct"
domain: apex-reference
topic: connectapicartitemproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.532Z
estimatedTokens: 314
keywords: [ConnectApi.CartItemProduct, Product, summary, cart, item]
---

# ConnectApi.CartItemProduct

> Product summary for a cart item.

# ConnectApi.CartItemProduct

Product summary for a cart item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fields | Map<String, String> | Map of product fields and values. | 49.0 |
| name | String | Name of the product. | 49.0 |
| productClass | ConnectApi.​ProductClass | Class of product. Values are:BundleSetSimpleVariationVariationParent | 63.0 |
| productId | String | ID of the product. | 49.0 |
| productSubscriptionInformation |  | Reserved for future use. | 59.0 |
| purchaseQuantityRule | ConnectApi.​PurchaseQuantity​Rule | If one exists, purchase quantity rule for the product. | 52.0 |
| productUrlName | String | SEO-friendly URL name for the product. | 64.0 |
| sku | String | SKU of the product. | 49.0 |
| thumbnailImage | ConnectApi.​ProductMedia | Thumbnail image of the product. | 49.0 |
| variationAttributes | Map<String, ConnectApi.​CartProduct​Attribute> | Variation attributes associated with the product. | 50.0 |

#### See Also

-   [ConnectApi.AbstractCartItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_cart_item.htm "A cart item.")

-   [ConnectApi.WishlistItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item.htm "Item in a wishlist.")

## Related Topics

- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ProductClass (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​PurchaseQuantity​Rule (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_purchase_quantity_rule.htm)
- ConnectApi.​ProductMedia (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_media.htm)
- ConnectApi.​CartProduct​Attribute (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_cart_product_attribute.htm)
- ConnectApi.AbstractCartItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_cart_item.htm)
- ConnectApi.WishlistItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_wishlist_item.htm)
