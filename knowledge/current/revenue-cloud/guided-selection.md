---
title: "Guided Selection"
domain: revenue-cloud
topic: guided-selection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:02:00.862Z
estimatedTokens: 203
keywords: [Guided, Selection, Output, representation]
---

# Guided Selection

> Output representation of the details of a guided selection.

# Guided Selection

Output representation of the details of a guided selection.

JSON example

```

```

This example shows a sample response with details of eligible promotions.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apiStatus | API Status | Status of the API request. | Small, 62.0 | 62.0 |
| correlation​Id | String | Unique ID of the request. | Small, 62.0 | 62.0 |
| cursor | String | Unique ID to represent the position of each product in the dataset. | Small, 62.0 | 62.0 |
| result | Any response body | Result that contains the list of products as per the requested resource. | Small, 62.0 | 62.0 |
| searchTerms | Guided Selection Search Term[] | Search terms for the guided selection. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "apiStatus": {
    "messages": [],
    "statusCode": "FETCHED_DETAILS_SUCCESSFULLY"
  },
  "correlationId": "corrId",
  "cursor": "MTAwMDAwMDAwNg==",
  "searchTerms": [
    {
      "term": "IPhone"
    },
    {
      "term": "4GB"
    },
    {
      "term": "64GB"
    }
  ],
  "result": [
    {
      "additionalFields": {
        "CustomField1__c": "TextValue",
        "CustomField2__c": "10",
        "StandardField1": "false"
      },
      "description": "IPhone-13",
      "id": "01txx0000006kYwAAI",
      "name": "Sample product 1",
      "prices": [
        {
          "price": 150,
          "priceBookEntryId": "12Axx0000004DF7EAM",
          "priceBookId": "01sxx0000005puLAAQ",
          "pricingModel": {
            "frequency": "Monthly",
            "id": "12Bxx000000CiCDEA0",
            "name": "IPhone-13",
            "occurrence": 6,
            "pricingModelType": "Recurring"
          }
        },
        {
          "price": 400,
          "priceBookEntryId": "12Axx0000004DGjEAM",
          "priceBookId": "01sxx0000005puLAAQ",
          "pricingModel": {
            "id": "12Bxx000000CiCCEA0",
            "name": "IPhone-13",
            "pricingModelType": "OneTime"
          }
        }
      ],
      "qualificationContext": {
        "isQualified": true
      }
    }
  ]
}
```

```
{
  "apiStatus": {
    "messages": [],
    "statusCode": "FETCHED_DETAILS_SUCCESSFULLY"
  },
  "correlationId": "corrId",
  "cursor": "MTAwMDAwMDAwNg==",
  "searchTerms": [
    {
      "term": "IPhone",
      "tags": [
        "deviceType",
        "mobile"
      ]
    },
    {
      "term": "4GB",
      "tags": [
        "RAM"
      ]
    },
    {
      "term": "64GB",
      "tags": [
        "Storage"
      ]
    }
  ],
  "result": [
    {
      "additionalFields": {
        "CustomField1__c": "TextValue",
        "CustomField2__c": "10",
        "StandardField1": "false"
      },
      "description": "IPhone-13",
      "id": "01txx0000006kYwAAI",
      "name": "Sample product 1",
      "prices": [
        {
          "price": 150,
          "priceBookEntryId": "12Axx0000004DF7EAM",
          "priceBookId": "01sxx0000005puLAAQ",
          "pricingModel": {
            "frequency": "Monthly",
            "id": "12Bxx000000CiCDEA0",
            "name": "IPhone-13",
            "occurrence": 6,
            "pricingModelType": "Recurring"
          }
        },
        {
          "price": 400,
          "priceBookEntryId": "12Axx0000004DGjEAM",
          "priceBookId": "01sxx0000005puLAAQ",
          "pricingModel": {
            "id": "12Bxx000000CiCCEA0",
            "name": "IPhone-13",
            "pricingModelType": "OneTime"
          }
        }
      ],
      "qualificationContext": {
        "isQualified": true
      },
      "eligiblePromotions": [
        {
          "id": "0ZPxx0000000001AAA",
          "name": "IPhone_Promotion_2025",
          "displayName": "iPhone Special Offer",
          "description": "Get 15% off on iPhone 13",
          "priority": 100,
          "startDateTime": "2025-03-01T00:00:00Z",
          "endDateTime": "2025-03-31T23:59:59Z",
          "isAutomatic": true,
          "isCategoryPromo": false,
          "isProductPromo": true,
          "couponCode": null,
          "termsAndConditions": "Valid on iPhone 13 models only."
        },
        {
          "id": "0ZPxx0000000002AAA",
          "name": "Memory_Upgrade_Deal",
          "displayName": "Free Memory Upgrade",
          "description": "Upgrade to 128GB for the price of 64GB",
          "priority": 90,
          "startDateTime": "2025-02-01T00:00:00Z",
          "endDateTime": "2025-12-31T23:59:59Z",
          "isAutomatic": false,
          "isCategoryPromo": false,
          "isProductPromo": true,
          "couponCode": "MEMORY128",
          "termsAndConditions": "Applies to select iPhone models."
        }
      ]
    }
  ]
}
```

## Related Topics

- API
                  Status (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_api_status_output.htm)
- Guided Selection Search Term (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_guided_selection_search_term_output.htm)
