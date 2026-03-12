---
title: "Commerce Webstore Products"
domain: chatterapi
topic: commerce-webstore-products
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.512Z
estimatedTokens: 675
keywords: [Commerce, Webstore, Products, images]
---

# Commerce Webstore Products

> Get fields and default images for a list of
    products.

# Commerce Webstore Products

Get fields and default images for a list of products.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Dynamic bundles are supported only in Commerce B2B stores. The Commerce Webstore Products API doesn't support them in D2C stores.

Resource

```

```

Resource examples

```

```

```

```

Available version

54.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccountId | String | ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context. | Optional | 54.0 |
| excludeMedia | Boolean | Specifies whether default images are returned for the products (false) or not (true). The default is false. | Optional | 54.0 |
| excludePrices | Boolean | Specifies whether prices are returned for the products (false) or not (true). The default is false.In version 58 and later, prices aren’t returned for products regardless of this request parameter. To get pricing information for products in version 58.0 and later, use Commerce Webstore Pricing Products . | Optional | 54.0–57.0 |
| fields | StringList | Comma-separated list of field names to return for each product. If the list is empty or not specified, all fields are returned. You can specify any number of fields. | Optional | 54.0 |
| ids | String | List of product IDs. Specify either a list of product IDs or SKUs, but not both. | Either ids or skus is required, but not both. | 54.0 |
| includeAttribute​SetInfo | Boolean | Indicates whether the attribute set information for the product is returned (true) or not (false). Default value is false. | Optional | 63.0 |
| includeGroupBy​Attribute​VariationInfo | Boolean | Indicates whether the attribute variation information for the product is returned (true) or not (false). Default value is false. | Optional | 63.0 |
| includeProduct​SellingModels | Boolean | Indicates whether product selling model options are returned (true) or not (false). Default value is false. | Optional | 63.0 |
| includeQuantity​Rule | Boolean | Indicates whether the quantity rule information for the product is returned (true) or not (false). Default value is false. | Optional | 63.0 |
| skus | StringList | List of SKUs. Specify either a list of SKUs or product IDs, but not both. | Either skus or ids is required, but not both. | 54.0 |

Response body for GET

[Product Overview Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_overview_collection.htm "A collection of product overviews.")

## Code Examples

```
/commerce/webstores/webstoreId/products
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx000000004rGAA/products
```

```
https://yourInstance.salesforce.com/services/data/66.0/commerce/webstores​/0ZExx000000004rGAA/products?​effectiveAccountId=${accountId}&excludePrices=${true}&​excludeMedia=${true}&ids=${01txx0000006i44AII, 01txx0000006i44ACC, 01txx0000006i44ACC,…., 20th}&fields=${sku,name,productCode}
```

## Related Topics

- Commerce
                          Webstore Pricing Products (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_pricing_products.htm)
- Product Overview
              Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_overview_collection.htm)
