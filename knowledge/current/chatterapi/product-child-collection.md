---
title: "Product Child Collection"
domain: chatterapi
topic: product-child-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.486Z
estimatedTokens: 409
keywords: [Product, Child, Collection, products, parent]
---

# Product Child Collection

> Collection of child products related to a parent
    product.

# Product Child Collection

Collection of child products related to a parent product.

JSON example

Example response for a product set:

```

```

Example response for a product bundle:

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Number of child products returned on this page. | Small, 57.0 | 57.0 |
| currentPage​Token | String | Current page token, if any. | Small, 57.0 | 57.0 |
| currentPageUrl | String | URL of the current page in the response. | Small, 57.0 | 57.0 |
| items | Product Child[] | Collection of child products related to the parent product. The child products are sorted by their configured sequence values, in ascending order, with null values sorted last. If there are no configured sequence values, the child products are sorted by createdDate, in ascending order. | Small, 57.0 | 57.0 |
| nextPageToken | String | Token for the next page, if any. A value is included in the response only if a value is returned for nextPageUrl. | Small, 57.0 | 57.0 |
| nextPageUrl | String | URL of the next page, if any. | Small, 57.0 | 57.0 |
| previousPage​Token | String | Token for the previous page, if any. A value is included in the response only if a value is returned for previousPageUrl. | Small, 57.0 | 57.0 |
| previousPageUrl | String | URL of the previous page, if any. | Small, 57.0 | 57.0 |
| productClass | String | Class of product. Values are:BundleSetSimpleVariationVariationParent | Small, 62.0 | 62.0 |
| total | Integer | Total number of child products in the collection. | Small, 57.0 | 57.0 |

## Code Examples

```
{
  "count": 2,
  "currentPageToken": "eyJwIjoyMCwibyI6MH0=",
  "currentPageUrl": "/services/data/v63.0/commerce/webstores/0ZExx000000004tGAA/products/01txx0000006iGyAAI/​children?mediaGroups=productListImage&pageToken=eyJwIjoyMCwibyI6MH0%3D",
  "items": [
    {
      "defaultQuantity": "1.0",
      "isEntitled": true,
      "productInfo": {
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
                "title": "/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/​6Pack-Tart-Cherry-Post-Large.jpg",
                "url": "https://s3.amazonaws.com/northerntrailoutfitters.com/nto-alpine-nutrition/​default/images/large/6Pack-Tart-Cherry-Post-Large.jpg"
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
    },
    {
      "defaultQuantity": "1.0",
      "isEntitled": true,
      "productInfo": {
        "defaultImage": null,
        "fields": {
          "LastModifiedDate": "2024-10-31T18:14:13Z",
          "DisplayUrl": null,
          "IsDeleted": "false",
          "Description": "One box of Alpine Energy During Workout single serve, compostable Eco Pods. Chai Flavor.",
          "ProductCode": null,
          "IsActive": "true",
          "ExternalId": null,
          "LastViewedDate": "2024-11-12T19:38:36Z",
          "UserRecordAccessId": null,
          "LastReferencedDate": "2024-11-12T19:38:36Z",
          "StockKeepingUnit": "6010018",
          "CurrencyIsoCode": "USD",
          "Name": "Alpine Energy During Eco Pod, Chai",
          "SystemModstamp": "2024-10-31T18:14:13Z",
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
        "id": "01txx0000006iCBAAY",
        "mediaGroups": [
          {
            "developerName": "productListImage",
            "id": "2mgxx000000004sAAA",
            "mediaItems": [
              {
                "alternateText": "",
                "contentVersionId": null,
                "id": "2pmxx000000004zAAA",
                "mediaType": "Image",
                "sortOrder": 0,
                "thumbnailUrl": null,
                "title": "/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/​alpine_energy_product_ecopod-chai.jpg",
                "url": "https://s3.amazonaws.com/northerntrailoutfitters.com/nto-alpine-nutrition/​default/images/large/alpine_energy_product_ecopod-chai.jpg"
              }
            ],
            "name": "Product List Image",
            "usageType": "Listing"
          }
        ],
        "productClass": "Simple",
        "productSellingModels": [
          {
            "id": "0jPxx000000001dEAA",
            "name": "PSM Term",
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
    }
  ],
  "nextPageToken": null,
  "nextPageUrl": null,
  "previousPageToken": null,
  "previousPageUrl": null,
  "productClass": "Set",
  "total": 2
}
```

```
{
  "count": 1,
  "currentPageToken": "eyJwIjoyMCwibyI6MH0=",
  "currentPageUrl": "/services/data/v65.0/commerce/webstores/0ZExx000000009hGAA/products/01txx0000006j8CAAQ/​children?pageToken=eyJwIjoyMCwibyI6MH0%3D",
  "items": [
    {
      "defaultQuantity": "2.0",
      "isEntitled": true,
      "isPriceIncludedInParent": false,
      "isRequired": false,
      "isDefault": true,
      "componentGroup": {
        "id": "0y7xx000000006T",
        "name": "pcg1"
      },
      "productInfo": {
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
        "fields": {
          "LastModifiedDate": "2025-06-10T09:31:43Z",
          "FulfillmentQtyCalcMethod": null,
          "Description": "testBundleChild1",
          "StockCheckMethod": null,
          "SpecificationType": "Commercial",
          "IsActive": "true",
          "LastReferencedDate": null,
          "StockKeepingUnit": "testBundleChild1",
          "ExternalDataSourceId": null,
          "Name": "testBundleChild1",
          "ShippingWeightUnitOfMeasure": null,
          "CreatedById": "005xx000001X8Er",
          "RecordTypeId": "012xx0000005pnQ",
          "DiscontinuedDate": null,
          "ProductClass": "Simple",
          "CanRamp": "false",
          "DisplayUrl": null,
          "IsDeleted": "false",
          "ConfigureDuringSale": null,
          "IsAssetizable": "false",
          "ProductCode": "testBundleChild1",
          "UsageModelType": null,
          "ExternalId": null,
          "ProductPurpose": "Sell",
          "LastViewedDate": null,
          "UserRecordAccessId": null,
          "HelpText": null,
          "CurrencyIsoCode": "USD",
          "AvailabilityDate": null,
          "BasedOnId": null,
          "SystemModstamp": "2025-06-10T09:35:22Z",
          "IsArchived": "false",
          "DecompositionScope": null,
          "BillingPolicyId": null,
          "Type": null,
          "EndOfLifeDate": null,
          "IsShippingChargeNotApplicable": "false",
          "QuantityUnitOfMeasure": null,
          "CreatedDate": "2025-06-10T09:31:43Z",
          "Family": null,
          "UnitOfMeasureId": null,
          "ShippingWeight": null,
          "LastModifiedById": "005xx000001X8Er",
          "TaxPolicyId": null,
          "IsSoldOnlyWithOtherProds": "false"
        },
        "id": "01txx0000006j9oAAA",
        "mediaGroups": [
          {
            "developerName": "productListImage",
            "id": "2mgxx000000009kAAA",
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
          },
          {
            "developerName": "productDetailImage",
            "id": "2mgxx000000009jAAA",
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
            "name": "Product Detail Images",
            "usageType": "Standard"
          }
        ],
        "productClass": "Simple",
        "purchaseQuantityRule": null,
        "urlName": null
      }
    }
  ],
  "nextPageToken": "eyJwIjoyMCwibyI6MjB9",
  "nextPageUrl": "/services/data/v65.0/commerce/webstores/0ZExx000000009hGAA/products/01txx0000006j8CAAQ/​children?pageToken=eyJwIjoyMCwibyI6MjB9",
  "previousPageToken": null,
  "previousPageUrl": null,
  "productClass": "Bundle",
  "total": 1
}
```

## Related Topics

- Product
                  Child (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_child.htm)
