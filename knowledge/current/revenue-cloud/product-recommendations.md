---
title: "Product Recommendations"
domain: revenue-cloud
topic: product-recommendations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:40.639Z
estimatedTokens: 196
keywords: [Product, Recommendations, fetched]
---

> Output representation of the fetched product recommendations.

# Product Recommendations

Output representation of the fetched product recommendations.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cursor | String | Unique ID to represent the position of each product in the data set. | Small, 67.0 | 67.0 |
| errors | Product Recommendation Errors[] | List of errors encountered during the processing of the API request. | Small, 67.0 | 67.0 |
| products | Recommended Products[] | List of recommended products. | Small, 67.0 | 67.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 67.0 | 67.0 |
| transactionContextId | String | ID of the sales transaction context. | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "cursor": "MTAwMDAwMDAwNQ==",
  "errors": [],
  "products": [
    {
      "additionalFields": {},
      "catalogs": [
        {
          "customFields": {},
          "id": "0ZSSG000001875O4AQ",
          "name": "Hardware Catalog",
          "numberOfCategories": 4
        }
      ],
      "categories": [
        {
          "catalogId": "0ZSSG000001875O4AQ",
          "childCategories": [],
          "customFields": {},
          "eligiblePromotions": [],
          "id": "0ZGSG000001DJtv4AG",
          "name": "Accessories",
          "qualificationContext": {
            "isQualified": true
          }
        }
      ],
      "configurationRules": [
        {
          "details": [
            {
              "message": "recommend Mouse from monitor"
            }
          ],
          "type": "recommend"
        }
      ],
      "configureDuringSale": "Allowed",
      "description": "HeyMicky Mouse compatible comes with choice of USB or Wireless connectivity.",
      "displayUrl": "https://5.imimg.com/data5/IS/JP/MY-58678879/computer-mouse.jpg",
      "eligiblePromotions": [],
      "id": "01tSG00000BiywkYAB",
      "isActive": true,
      "isAssetizable": true,
      "isSoldOnlyWithOtherProds": false,
      "name": "Mouse",
      "nodeType": "simpleProduct",
      "prices": [
        {
          "currencyIsoCode": "USD",
          "isDefault": true,
          "isDerived": false,
          "isSelected": false,
          "price": 7.99,
          "priceBookEntryId": "01uSG000004wTsEYAU",
          "priceBookId": "01sSG00000DQCjhYAH",
          "pricingModel": {
            "id": "0jPSG000000Avcv2AC",
            "name": "One Time",
            "pricingModelType": "OneTime"
          }
        }
      ],
      "productClassification": {
        "id": "11BSG00000UNijx2AD"
      },
      "productCode": "MOU001",
      "productSellingModelOptions": [
        {
          "id": "0iOSG000000J64x2AC",
          "isDefault": true,
          "productId": "01tSG00000BiywkYAB",
          "productSellingModel": {
            "doesAutoRenewByDefault": false,
            "id": "0jPSG000000Avcv2AC",
            "name": "One Time",
            "sellingModelType": "OneTime",
            "status": "Active"
          },
          "productSellingModelId": "0jPSG000000Avcv2AC"
        }
      ],
      "productSpecificationType": {
        "name": "Commercial",
        "productSpecificationRecordType": {}
      },
      "qualificationContext": {
        "isQualified": true
      }
    }
  ],
  "success": true,
  "transactionContextId": "0000000p18dq18g002917732061529307c5e047346664b2f81ff3d4845acf2d0"
}
```

## Related Topics

- Product Recommendation Errors (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_recommendation_errors_output.htm)
- Recommended Products (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_recommended_products_output.htm)
