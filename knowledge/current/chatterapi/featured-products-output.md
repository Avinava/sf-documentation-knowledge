---
title: "Featured Products Output"
domain: chatterapi
topic: featured-products-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.627Z
estimatedTokens: 247
keywords: [Featured, Products, Output, product]
---

# Featured Products Output

> Details of featured products for a specified product.

# Featured Products Output

Details of featured products for a specified product.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| featuredProducts​ByRelationship​Type | Map<String, Product Detail[]> | A map of each relationship type to an ordered list of featured products associated with that type. The lists are sorted based on the Sequence field on the junction object. | Small, 64.0 | 64.0 |

#### See Also

-   [Commerce Webstore Product Featured Products](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_products_featured_products.htm "Retrieve a collection of feature products for a specific product. Featured products include complementary items, promotional products, best-sellers, new arrivals, or limited-time offers. For example, if a customer buys a shirt, the featured products list suggests shoes, pants, and accessories to complete the outfit.")

## Code Examples

```
{
  "featuredProductsByRelationshipType": {
    "similarProducts": [
      {
        "defaultImage": null,
        "fields": {
          "LastModifiedDate": "2024-10-31T18:14:13Z",
          "DisplayUrl": null,
          "IsDeleted": "false",
          "Description": "A signature Alpine health and fitness beverage. This post-workout beverage with Tart Cherry flavor is designed to help athletes maximize recovery and gains. 0.5L PET",
          "ProductCode": null,
          "IsActive": "true",
          "ExternalId": null,
          "LastViewedDate": "2024-11-07T00:06:06Z",
          "UserRecordAccessId": null,
          "LastReferencedDate": "2024-11-07T00:06:06Z",
          "StockKeepingUnit": "6010015",
          "CurrencyIsoCode": "USD",
          "Name": "Alpine Energy Drink Tart Cherry Post 0.5L PET - 6 pack",
          "SystemModstamp": "2024-11-04T18:40:55Z",
          "IsArchived": "false",
          "Type": null,
          "CreatedById": "005xx000001X7zp",
          "CloneSourceId": null,
          "QuantityUnitOfMeasure": null,
          "CreatedDate": "2024-10-31T18:14:13Z",
          "Family": "Alpine Energy",
          "ProductClass": "Simple",
          "LastModifiedById": "005xx000001X7zp"
        },
        "id": "01txx0000006iCGAAY",
        "mediaGroups": [
          {
            "developerName": "productListImage",
            "id": "2mgxx000000004sAAA",
            "mediaItems": [
              {
                "alternateText": "",
                "contentVersionId": null,
                "id": "2pmxx000000005AAAQ",
                "mediaType": "Image",
                "sortOrder": 0,
                "thumbnailUrl": null,
                "title": "/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/6Pack-Tart-Cherry-Post-Large.jpg",
                "url": "https://s3.amazonaws.com/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/6Pack-Tart-Cherry-Post-Large.jpg"
              }
            ],
            "name": "Product List Image",
            "usageType": "Listing"
          }
        ],
        "productClass": "Simple",
        "productSellingModels": [
          {
            "id": "0jPxx000000003FEAQ",
            "name": "PSM Evergreen",
            "pricingTerm": 1,
            "pricingTermUnit": "Annual",
            "sellingModelType": "Evergreen"
          }
        ],
        "purchaseQuantityRule": null,
        "urlName": null
      }
    ]
  }
}
```

## Related Topics

- Product Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_detail.htm)
- Commerce Webstore Product Featured Products (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_products_featured_products.htm)
