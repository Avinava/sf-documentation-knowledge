---
title: "Commerce Webstore Product Featured Products"
domain: chatterapi
topic: commerce-webstore-product-featured-products
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.520Z
estimatedTokens: 669
keywords: [Commerce, Webstore, Product, Featured, Products, Retrieve, collection, feature, specific]
---

# Commerce Webstore Product Featured Products

> Retrieve a collection of feature products for a specific
      product.

# Commerce Webstore Product Featured Products

Retrieve a collection of feature products for a specific product. Featured products include complementary items, promotional products, best-sellers, new arrivals, or limited-time offers. For example, if a customer buys a shirt, the featured products list suggests shoes, pants, and accessories to complete the outfit.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 64.0 |
| excludeFields | Boolean | Indicates whether the product fields are returned (false) or not (true). If unspecified, defaults to false. | Optional | 64.0 |
| fields | String[] | Comma-separated list of product field names.If this list is empty or unspecified, all fields are returned. There is no limit to the number of fields you can specify. | Optional | 64.0 |
| includeAttribute​SetInfo | Boolean | Indicates whether to include attribute set information for a variation parent product (true) or not (false). Default value is false. | Optional | 64.0 |
| includeMediaGroups | Boolean | Indicates whether media groups are returned (true) or not (false). Default value is false. | Optional | 64.0 |
| includeProduct​SellingModel | Boolean | Indicates whether product selling model options are returned (true) or not (false). Default value is false. | Optional | 64.0 |
| includePurchase​QuantityRules | Boolean | Indicates whether purchase quantity rules are returned (true) or not (false). Default value is false. | Optional | 64.0 |
| mediaGroups | String[] | Comma-separated list of developer names of media group records. Possible media groups are:AttachmentProductDetailImageProductListImageIf this list is empty or unspecified, all media groups are returned. If excludeMedia and mediaGroups are specified, the excludeMedia parameter takes precedence. | Optional | 64.0 |
| relationshipTypes | String[] | Comma-separated list of developer names of relationship type records. This defines how the featured product is related to a product. The field is a dynamic enum.If no relationshipTypes are specified, the API response returns all available relationship types. | Optional | 64.0 |

Response body for GET

[Featured Products Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_featured_products_output.htm "Details of featured products for a specified product.")

## Code Examples

```
/commerce/webstores/webstoreId/products/productId/featured-products
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores/0ZExx000000004tGAA/products/01txx0000006iGyAAI/featured-products
```

## Related Topics

- Featured
              Products Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_featured_products_output.htm)
