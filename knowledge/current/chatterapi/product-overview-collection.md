---
title: "Product Overview Collection"
domain: chatterapi
topic: product-overview-collection
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:20.548Z
estimatedTokens: 94
keywords: [Product, Collection, overviews]
---

# Product Overview Collection

> A collection of product overviews.

# Product Overview Collection

A collection of product overviews.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| products | Product Overview[] | Collection of product overview. | Medium, 54.0 | 54.0 |
| total | Integer | Total number of products returned. | Small, 54.0 | 54.0 |

## Code Examples

```
{
  "products": [
    {
      "defaultImage": {
        "alternateText": "variations-amazon.png",
        "contentVersionId": null,
        "id": "2pmSG000005olVVYAY",
        "mediaType": "Image",
        "sortOrder": 0,
        "thumbnailUrl": null,
        "title": "variations-amazon.png",
        "url": "/cms/delivery/media/MCVCHRIP72OVFIDPYX4R67HCC66U?oid=00DSG00000EB40D&version=1.1&channelId=0apSG0000010zCk"
      },
      "error": {},
      "fields": {
        "LastModifiedDate": "2025-01-24T18:49:21Z",
        "DisplayUrl": null,
        "IsDeleted": "false",
        "Description": null,
        "ProductCode": null,
        "IsActive": "true",
        "ExternalId": null,
        "LastViewedDate": null,
        "UserRecordAccessId": null,
        "LastReferencedDate": null,
        "StockKeepingUnit": null,
        "CurrencyIsoCode": "USD",
        "Name": "color_size variation",
        "SystemModstamp": "2025-01-24T18:49:22Z",
        "IsArchived": "false",
        "Type": "Base",
        "CreatedById": "005SG00000CCGwX",
        "CloneSourceId": null,
        "QuantityUnitOfMeasure": null,
        "CreatedDate": "2025-01-24T18:49:21Z",
        "Family": null,
        "ProductClass": "VariationParent",
        "LastModifiedById": "005SG00000CCGwX"
      },
      "id": "01tSG000003xbeXYAQ",
      "mediaGroups": [
        {
          "developerName": "productListImage",
          "id": "2mgSG000000oceoYAA",
          "mediaItems": [
            {
              "alternateText": "variations-amazon.png",
              "contentVersionId": null,
              "id": "2pmSG000005olVVYAY",
              "mediaType": "Image",
              "sortOrder": 0,
              "thumbnailUrl": null,
              "title": "variations-amazon.png",
              "url": "/cms/delivery/media/MCVCHRIP72OVFIDPYX4R67HCC66U?oid=00DSG00000EB40D&version=1.1&channelId=0apSG0000010zCk"
            }
          ],
          "name": "Product List Image",
          "usageType": "Listing"
        }
      ],
      "name": "color_size variation",
      "productClass": "VariationParent",
      "isConfigurationAllowed": true,
      "success": true,
      "variationAttributeSet": {
        "apiName": "Color_Size",
        "attributes": [],
        "label": "Color_Size"
      },
      "variationInfo": {
        "attributesToProductMappings": [
          {
            "canonicalKey": "Blue_Large",
            "image": {
              "alternateText": "blue.png",
              "contentVersionId": null,
              "id": "2pmSG000005olX7YAI",
              "mediaType": "Image",
              "sortOrder": 0,
              "thumbnailUrl": null,
              "title": "blue.png",
              "url": "/cms/delivery/media/MCEOJ5CVZPPVEH5GZ7TJ2NUUUML4?oid=00DSG00000EB40D&version=1.1&channelId=0apSG0000010zCk"
            },
            "mediaItems": [
              {
                "alternateText": "blue.png",
                "contentVersionId": null,
                "id": "2pmSG000005olX7YAI",
                "mediaType": "Image",
                "sortOrder": 0,
                "thumbnailUrl": null,
                "title": "blue.png",
                "url": "/cms/delivery/media/MCEOJ5CVZPPVEH5GZ7TJ2NUUUML4?oid=00DSG00000EB40D&version=1.1&channelId=0apSG0000010zCk"
              },
              {
                "alternateText": "Green.png",
                "contentVersionId": null,
                "id": "2pmSG000005olX7YAI",
                "mediaType": "Image",
                "sortOrder": 0,
                "thumbnailUrl": null,
                "title": "blue.png",
                "url": "/cms/delivery/media/MCEOJ5CVZPPVEH5GZ7TJ2NUUUML4?oid=00DSG00000EB40D&version=1.1&channelId=0apSG0000010zCk"
              }
            ],
            "productId": "01tSG000003xbg9YAA",
            "selectedAttributes": [
              {
                "apiName": "Color__c",
                "label": "Color",
                "sequence": 0,
                "value": "Blue"
              },
              {
                "apiName": "Size__c",
                "label": "Size",
                "sequence": 1,
                "value": "Large"
              }
            ],
            "urlName": null
          }
        ],
        "variationAttributeInfo": {
          "Color__c": {
            "allowableValues": [
              "Blue",
              "Green",
              "Red"
            ],
            "apiName": "Color__c",
            "availableValues": [
              "Blue",
              "Green",
              "Red"
            ],
            "fieldEnumOrId": "00NSG00000cFRYf",
            "groupedBy": false,
            "label": "Color",
            "objectName": "ProductAttribute",
            "options": [
              {
                "apiName": "Blue",
                "colorHexCode": "#292FD3",
                "label": "Blue",
                "variantAvailable": true
              },
              {
                "apiName": "Green",
                "colorHexCode": "#28E72C",
                "label": "Green",
                "variantAvailable": true
              },
              {
                "apiName": "Red",
                "colorHexCode": "#ED1111",
                "label": "Red",
                "variantAvailable": true
              }
            ],
            "sequence": 0,
            "viewType": "ColorSwatch"
          },
          "Size__c": {
            "allowableValues": [
              "Large",
              "Medium",
              "Small"
            ],
            "apiName": "Size__c",
            "availableValues": [
              "Large"
            ],
            "fieldEnumOrId": "00NSG00000cFRYg",
            "groupedBy": false,
            "label": "Size",
            "objectName": "ProductAttribute",
            "options": [
              {
                "apiName": "Large",
                "colorHexCode": null,
                "label": "Large",
                "variantAvailable": true
              },
              {
                "apiName": "Medium",
                "colorHexCode": null,
                "label": "Medium",
                "variantAvailable": false
              },
              {
                "apiName": "Small",
                "colorHexCode": null,
                "label": "Small",
                "variantAvailable": false
              }
            ],
            "sequence": 1,
            "viewType": "Dropdown"
          }
        }
      }
    }
  ],
  "total": 1
}
```

## Related Topics

- Product
                Overview (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_product_overview.htm)
