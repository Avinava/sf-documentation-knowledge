---
title: "Product Child"
domain: chatterapi
topic: product-child
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.478Z
estimatedTokens: 328
keywords: [Product, Child, parent]
---

# Product Child

> Child product related to a parent product.

# Product Child

Child product related to a parent product.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| componentGroup | Product Component Group | Specifies the product component group associated with the child product.This field is returned only for dynamic product bundles. | Small, 65.0 | 65.0 |
| defaultQuantity | String | Default quantity of child products to be ordered. | Small, 57.0 | 57.0 |
| isDefault | Boolean | Indicates whether the child product is a default component (true) or not (false).This field is returned only for dynamic product bundles. | Small, 65.0 | 65.0 |
| isEntitled | Boolean | Specifies whether the child product can be viewed on the product detail page (true) or not (false). | Small, 62.0 | 62.0 |
| isPriceIncluded​InParent | Boolean | Indicates whether the child product's pricing is included in the parent product (true) or not (false).This field is returned only for dynamic product bundles. | Small, 65.0 | 65.0 |
| isRequired | Boolean | Indicates whether the child product is a required component (true) or not (false).This field is returned only for dynamic product bundles. | Small, 65.0 | 65.0 |
| productInfo | Product Detail | Product details of the child product. | Small, 57.0 | 57.0 |

## Related Topics

- Product Component
                  Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_component_group.htm)
- Product
                  Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_detail.htm)
