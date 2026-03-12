---
title: "Commerce Webstore Composite Product Variations, Create"
domain: chatterapi
topic: commerce-webstore-composite-product-variations-create
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.998Z
estimatedTokens: 189
keywords: [Commerce, Webstore, Composite, Product, Variations, variation, products, media, pricing, parent]
---

# Commerce Webstore Composite Product Variations, Create

> Create variation products with media and pricing details for a given
      parent product.

# Commerce Webstore Composite Product Variations, Create

Create variation products with media and pricing details for a given parent product.

Resource

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parentProductId | String | ID of the variation parent product. | Required | 62.0 |
| variations | Product Variation Input[] | List of variation products and their attributes. | Required | 62.0 |

Response body for POST

[Composite Product Variation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_composite_commerce_variation_output.htm "Composite product variation create request response.")

## Code Examples

```
/commerce/management/webstore/${webstoreId}/composite-variations
```

## Related Topics

- Product Variation
                        Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_product_variation_input.htm)
- Composite Product
            Variation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_composite_commerce_variation_output.htm)
