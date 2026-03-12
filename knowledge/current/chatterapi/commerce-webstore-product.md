---
title: "Commerce Webstore Product"
domain: chatterapi
topic: commerce-webstore-product
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.466Z
estimatedTokens: 900
keywords: [Commerce, Webstore, Product]
---

# Commerce Webstore Product

> Get a product.

# Commerce Webstore Product

Get a product.

Getting products respects buyer View Product entitlements and only users entitled to view product data can access it.

Resource

```

```

Resource example

```

```

Available version

49.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 49.0 |
| exclude​AttributeSet​Info | Boolean | Specifies whether the attribute set information for the product is returned (false) or not (true). If unspecified, defaults to false. | Optional | 50.0 |
| excludeDynamic​AttributeInfo | Boolean | Specifies whether the dynamic attribute information for the product is returned (false) or not (true). If unspecified, defaults to true. | Optional | 66.0 |
| exclude​Entitlement​Details | Boolean | Specifies whether the entitlement details of the product are returned (false) or not (true). If unspecified, defaults to false. | Optional | 49.0–56.0 |
| excludeFields | Boolean | Specifies whether the fields are returned (false) or not (true). If unspecified, defaults to false. | Optional | 49.0 |
| excludeMedia | Boolean | Specifies whether the media groups and default images of the product are returned (false) or not (true). If unspecified, defaults to false. | Optional | 49.0 |
| excludePrimary​ProductCategory | Boolean | Specifies whether the primary category path of the product is returned (false) or not (true). If unspecified, defaults to false. | Optional | 49.0 |
| excludeProduct​SellingModels | Boolean | Specifies whether product selling models are returned or not. The behavior of this parameter depends on whether you turn on the CommerceSubscription permission. If the permission is on, and if you set the parameter to false (or if you omit the parameter), product selling models are returned. If the permission is on, and if you set the parameter to true, product selling models are not returned. If the permission is off, product selling models are not returned, regardless of whether you omit the parameter or provide a value. | Optional | 56.0 |
| excludeQuantity​Rule | Boolean | Specifies whether the quantity rule information for the product is returned (false) or not (true). If unspecified, defaults to false. | Optional | 52.0 |
| exclude​VariationInfo | Boolean | Specifies whether the variation information for the product is returned (false) or not (true). If unspecified, defaults to false. | Optional | 50.0 |
| fields | String[] | Comma-separated list of field names.If this list is unspecified, all fields are returned. There is no limit to the number of fields you can specify. The number of fields and number of characters in the field name may affect the URL size limit. If excludeFields and fields are specified, the excludeFields parameter takes precedence. | Optional | 49.0 |
| mediaGroups | String[] | Comma-separated list of developer names of media group records.If this list is empty or unspecified, all media groups are returned. If excludeMedia and mediaGroups are specified, the excludeMedia parameter takes precedence. | Optional | 49.0 |
| noCache | String | Specifies whether to ignore cached data and return the latest response (true) or not (false). | Optional | 66.0 |

Response body for GET

[Product Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_detail.htm "Details of a product.")

## Code Examples

```
/commerce/webstores/webstoreId/products/productId
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores/0ZEOK00000008vJ4AQ/products/01tOK000000EUozYAG
```

## Related Topics

- Product Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_detail.htm)
