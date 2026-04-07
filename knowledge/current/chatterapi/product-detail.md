---
title: "Product Detail"
domain: chatterapi
topic: product-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:34.951Z
estimatedTokens: 507
keywords: [Product, Detail]
---

# Product Detail

> Details of a product.

# Product Detail

Details of a product.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributeSetInfo | Map<String, Product Attribute Set Info> | Map of the attribute set developer name to its metadata. | Small, 50.0 | 50.0 |
| defaultImage | Product Media | Default image of the product. | Small, 49.0 | 49.0 |
| dynamicAttributeCount | Integer | Count of dynamic attributes associated with the product. This field is supported for both simple products and dynamic product bundles. | Small, 66.0 | 66.0 |
| entitlement | Product Entitlement | Entitlement details for the product.To get pricing information for products in version 57 and later, use Commerce Webstore Pricing Products. | Small, 49.0 | 49.0–56.0 |
| fields | Map<String, String> | List of fields for the product. | Small, 49.0 | 49.0 |
| id | String | ID of the product. | Small, 49.0 | 49.0 |
| mediaGroups | Product Media Group[] | List of media groups of the product. | Small, 49.0 | 49.0 |
| primaryProduct​CategoryPath | Product Category Path | Primary category path of the product. | Small, 49.0 | 49.0 |
| productClass | String | Class of product. Values are:BundleSetSimpleVariationVariationParent | Small, 50.0 | 50.0 |
| productSelling​Models | Product Selling Model[] | List of product selling models for the product. | Small, 56.0 | 56.0 |
| purchaseQuantity​Rule | Purchase Quantity Rule | If one exists, purchase quantity rule for the product. | Small, 52.0 | 52.0 |
| urlName | String | SEO-friendly URL name for the product. | Small, 59.0 | 59.0 |
| variationAttribute​Set | Product Attribute Set | Variation attribute set for the product. | Small, 50.0 | 50.0 |
| variationInfo | Product Variation Info | Available and allowable values for variation attributes and a map to resolve variation product IDs from attribute value combinations. | Small, 50.0 | 50.0 |
| variationParentId | String | ID of the variation parent. | Small, 50.0 | 50.0 |

## Code Examples

```
{
  "products": [
    {
      "defaultImage": {
        "alternateText": "",
        "contentVersionId": null,
        "id": null,
        "mediaType": "Image",
        "sortOrder": 0,
        "thumbnailUrl": null,
        "title": "image",
        "url": "/img/b2b/default-product-image.svg"
      },
      "error": {},
      "fields": {
        "ConfigureDuringSale": "NotAllowed",
        "StockKeepingUnit": null,
        "Name": "KeyBoard"
      },
      "id": "01tSG00000BpCgKYAV",
      "isConfigurationAllowed": false,
      "mediaGroups": [
        {
          "developerName": "productListImage",
          "id": "2mgSG000001u6JwYAI",
          "mediaItems": [
            {
              "alternateText": "",
              "contentVersionId": null,
              "id": null,
              "mediaType": "Image",
              "sortOrder": 0,
              "thumbnailUrl": null,
              "title": "image",
              "url": "/img/b2b/default-product-image.svg"
            }
          ],
          "name": "Product List Image",
          "usageType": "Listing"
        }
      ],
      "name": "KeyBoard",
      "productClass": "Simple",
      "productSellingModels": [
        {
          "id": "0jPSG000000B2he2AC",
          "name": "One Time",
          "pricingTerm": null,
          "pricingTermUnit": null,
          "sellingModelType": "OneTime"
        },
        {
          "id": "0jPSG000000B2hd2AC",
          "name": "Term Based - Monthly",
          "pricingTerm": 1,
          "pricingTermUnit": "Months",
          "sellingModelType": "TermDefined",
          "subscriptionTermRule": {
            "increment": 1,
            "maximum": null,
            "minimum": 1
          }
        },
        {
          "id": "0jPSG000000B2hi2AC",
          "name": "Evergreen - Monthly",
          "pricingTerm": 1,
          "pricingTermUnit": "Months",
          "sellingModelType": "Evergreen"
        }
      ],
      "success": true
    },
    {
      "defaultImage": {
        "alternateText": "",
        "contentVersionId": null,
        "id": null,
        "mediaType": "Image",
        "sortOrder": 0,
        "thumbnailUrl": null,
        "title": "image",
        "url": "/img/b2b/default-product-image.svg"
      },
      "error": {},
      "fields": {
        "ConfigureDuringSale": "NotAllowed",
        "StockKeepingUnit": "M-0002",
        "Name": "Mac Bundle"
      },
      "id": "01tSG00000BpCgJYAV",
      "isConfigurationAllowed": false,
      "mediaGroups": [
        {
          "developerName": "productListImage",
          "id": "2mgSG000001u6JwYAI",
          "mediaItems": [
            {
              "alternateText": "",
              "contentVersionId": null,
              "id": null,
              "mediaType": "Image",
              "sortOrder": 0,
              "thumbnailUrl": null,
              "title": "image",
              "url": "/img/b2b/default-product-image.svg"
            }
          ],
          "name": "Product List Image",
          "usageType": "Listing"
        }
      ],
      "name": "Mac Bundle",
      "productClass": "Bundle",
      "productSellingModels": [
        {
          "id": "0jPSG000000B2he2AC",
          "name": "One Time",
          "pricingTerm": null,
          "pricingTermUnit": null,
          "sellingModelType": "OneTime"
        },
        {
          "id": "0jPSG000000B2hd2AC",
          "name": "Term Based - Monthly",
          "pricingTerm": 1,
          "pricingTermUnit": "Months",
          "sellingModelType": "TermDefined"
        },
        {
          "id": "0jPSG000000B2hi2AC",
          "name": "Evergreen - Monthly",
          "pricingTerm": 1,
          "pricingTermUnit": "Months",
          "sellingModelType": "Evergreen"
        }
      ],
      "sku": "M-0002",
      "success": true
    },
    {
      "defaultImage": {
        "alternateText": "",
        "contentVersionId": null,
        "id": null,
        "mediaType": "Image",
        "sortOrder": 0,
        "thumbnailUrl": null,
        "title": "image",
        "url": "/img/b2b/default-product-image.svg"
      },
      "error": {},
      "fields": {
        "ConfigureDuringSale": null,
        "StockKeepingUnit": null,
        "Name": "subproduct"
      },
      "id": "01tSG00000BpCgFYAV",
      "isConfigurationAllowed": false,
      "mediaGroups": [
        {
          "developerName": "productListImage",
          "id": "2mgSG000001u6JwYAI",
          "mediaItems": [
            {
              "alternateText": "",
              "contentVersionId": null,
              "id": null,
              "mediaType": "Image",
              "sortOrder": 0,
              "thumbnailUrl": null,
              "title": "image",
              "url": "/img/b2b/default-product-image.svg"
            }
          ],
          "name": "Product List Image",
          "usageType": "Listing"
        }
      ],
      "name": "subproduct",
      "productClass": "Simple",
      "productSellingModels": [
        {
          "id": "0jPSG000000B2hd2AC",
          "name": "Term Based - Monthly",
          "pricingTerm": 1,
          "pricingTermUnit": "Months",
          "sellingModelType": "TermDefined"
        },
        {
          "id": "0jPSG000000B2hh2AC",
          "name": "Evergreen - Yearly",
          "pricingTerm": 1,
          "pricingTermUnit": "Annual",
          "sellingModelType": "Evergreen"
        }
      ],
      "success": true
    },
    {
      "defaultImage": {
        "alternateText": "",
        "contentVersionId": null,
        "id": null,
        "mediaType": "Image",
        "sortOrder": 0,
        "thumbnailUrl": null,
        "title": "image",
        "url": "/img/b2b/default-product-image.svg"
      },
      "error": {},
      "fields": {
        "ConfigureDuringSale": null,
        "StockKeepingUnit": null,
        "Name": "testproduct1"
      },
      "id": "01tSG00000BpCgDYAV",
      "isConfigurationAllowed": false,
      "mediaGroups": [
        {
          "developerName": "productListImage",
          "id": "2mgSG000001u6JwYAI",
          "mediaItems": [
            {
              "alternateText": "",
              "contentVersionId": null,
              "id": null,
              "mediaType": "Image",
              "sortOrder": 0,
              "thumbnailUrl": null,
              "title": "image",
              "url": "/img/b2b/default-product-image.svg"
            }
          ],
          "name": "Product List Image",
          "usageType": "Listing"
        }
      ],
      "name": "testproduct1",
      "productClass": "Simple",
      "productSellingModels": [
        {
          "id": "0jPSG000000B2hd2AC",
          "name": "Term Based - Monthly",
          "pricingTerm": 1,
          "pricingTermUnit": "Months",
          "sellingModelType": "TermDefined"
        },
        {
          "id": "0jPSG000000B2hf2AC",
          "name": "Term Based - Yearly",
          "pricingTerm": 1,
          "pricingTermUnit": "Annual",
          "sellingModelType": "TermDefined"
        }
      ],
      "success": true
    },
    {
      "defaultImage": {
        "alternateText": "",
        "contentVersionId": null,
        "id": null,
        "mediaType": "Image",
        "sortOrder": 0,
        "thumbnailUrl": null,
        "title": "image",
        "url": "/img/b2b/default-product-image.svg"
      },
      "error": {},
      "fields": {
        "ConfigureDuringSale": null,
        "StockKeepingUnit": null,
        "Name": "testproduct"
      },
      "id": "01tSG00000BpCgCYAV",
      "isConfigurationAllowed": false,
      "mediaGroups": [
        {
          "developerName": "productListImage",
          "id": "2mgSG000001u6JwYAI",
          "mediaItems": [
            {
              "alternateText": "",
              "contentVersionId": null,
              "id": null,
              "mediaType": "Image",
              "sortOrder": 0,
              "thumbnailUrl": null,
              "title": "image",
              "url": "/img/b2b/default-product-image.svg"
            }
          ],
          "name": "Product List Image",
          "usageType": "Listing"
        }
      ],
      "name": "testproduct",
      "productClass": "Simple",
      "success": true
    }
  ],
  "total": 5
}
```

## Related Topics

- Product Attribute Set Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_set_info.htm)
- Product Media (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media.htm)
- Product
                Entitlement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_entitlement.htm)
- Commerce
                    Webstore Pricing Products (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_pricing_products.htm)
- Product Media
                Group (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_media_group.htm)
- Product Category
                Path (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_category_path.htm)
- Product Selling Model (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_selling_model.htm)
- Purchase Quantity Rule (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_purchase_quantity_rule.htm)
- Product Attribute Set (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_attribute_set.htm)
- Product Variation Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_variation_info.htm)
