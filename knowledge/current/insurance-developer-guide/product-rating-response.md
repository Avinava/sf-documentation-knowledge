---
title: "Product Rating Response"
domain: insurance-developer-guide
topic: product-rating-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.743Z
estimatedTokens: 276
keywords: [Product, Rating, Output, representation, Connect, API]
---

# Product Rating Response

> Output representation for the Product Rating Connect API.

# Product Rating Response

Output representation for the Product Rating Connect API.

JSON example

This example shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| configMessages | Insurance Config Message[] | List of configurator messages. | Small, 63.0 | 63.0 |
| contextId | String | ID of the context. | Small, 61.0 | 61.0 |
| contextJSON | Context JSON[] | Serialized JSON representation of the context. | Small, 66.0 | 66.0 |
| errors |  | List of errors that are encountered during the processing of the API request. | Small, 61.0 | 61.0 |
| pricingResult | Map<String, Object> | Details of the pricing result. | Small, 61.0 | 61.0 |
| productDetails | Product[] | Details of the list of products that are included in the context JSON. | Small, 66.0 | 66.0 |
| ratingResult | Rating Result[] | Rating results after executing pricing with the context. | Small, 66.0 | 66.0 |
| uiTreatments | Insurance UI Treatments[] | Details of the insurance UI configuration. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "contextId": "11jxx0000006i5gAAA",
  "pricingResult": {
    "Economy Renter 1": {
      "NetUnitPrice": 1000,
      "childNodes": []
    },
    "Economy Renter 2": {
      "NetUnitPrice": 2000,
      "childNodes": []
    }
  },
  "contextJSON": {
    "SalesTransaction": [
      {
        "Account": null,
        "businessObjectType": "Quote",
        "SalesTransactionName": "Test Quote",
        "ProratedAmount": 112.25,
        "StartDate": "2025-07-01",
        "CurrencyIsoCode__std": "USD",
        "InsuranceQuoteType": "New Business",
        "TransactionType": "AutoTransactionType",
        "TotalProratedAmount": 132.25,
        "Pricebook": "01sSG000009SJvNYAW",
        "Opportunity": null,
        "TotalAmount": 277.15,
        "EndDate": "2025-08-31",
        "SalesTransactionItem": [
          {
            "businessObjectType": "QuoteLineItem",
            "Product": "01tSG000008KnvSYAS",
            "id": "0QLSG000000dIxz4AE",
            "ProductCode": "Auto Silver",
            "SalesTransactionItemAttribute": [
              {
                "AttributeKey": "0tjSG0000006q8GYAQ",
                "AttributeValue": "6.0",
                "ParentReference": "0QLSG000000dIxy4AE",
                "hasObjectRef": null,
                "AttributePicklistValue": null,
                "IsPriceImpacting": null,
                "businessObjectType": "QuoteLineItemAttribute",
                "AttributeName": "Driver MVR Points",
                "id": "0zuSG000002IfoSYAS",
                "AttributeDefinitionCode": "DriverMVRPoints",
                "SalesTransactionItemAttrParent": "0QLSG000000dIxy4AE",
                "AttributeDeveloperName": "Driver_MVR_Points"
              }
            ],
            "LineItemPath": "0QLSG000000dIy04AE/0QLSG000000dIxz4AE",
            "PricebookEntry": "01uSG000003chfXYAQ",
            "NetUnitPrice": 79.77,
            "ParentReference": "0Q0SG000000P3XN0A0",
            "UnitPrice": 469.6,
            "InstanceKey": "673ec36c-7d4a-4e8a-999a-6cf16a299f4a",
            "childNodes": [
              {
                "businessObjectType": "QuoteLineItem",
                "Product": "01tSG000008KnvSYAS",
                "id": "0QLSG000000dIxz4AE",
                "ProductCode": "medPay",
                "SalesTransactionItemAttribute": [],
                "childNodes": []
              }
            ]
          }
        ],
        "TotalStandardAmount": 680.8
      }
    ]
  },
  "productDetails": {
    "auto": {
      "attributeCategories": [
        {
          "attributes": [
            {
              "attributeCategoryId": "0v3SG0000001ZToYAM",
              "attributeNameOverride": "Bodily Injury Per Person Limit",
              "attributePicklist": {
                "id": "0v5SG0000004YXzYAM",
                "values": [
                  {
                    "code": "BIPD500",
                    "displayValue": "$500",
                    "id": "0v6SG0000006Vl2YAE",
                    "name": "BIPD500",
                    "sequence": 1,
                    "status": "Active",
                    "textValue": "500.0"
                  }
                ]
              },
              "code": "BodilyInjuryPerPersonLimit",
              "dataType": "PICKLIST",
              "developerName": "Bodily_Injury_Per_Person_Limit",
              "id": "0tjSG0000006q7RYAQ",
              "isCloneable": false,
              "isConfigurable": false,
              "isHidden": true,
              "isPriceImpacting": false,
              "isReadOnly": false,
              "isRequired": false,
              "label": "Bodily Injury Per Person Limit",
              "name": "Bodily Injury Per Person Limit",
              "status": "Active"
            }
          ],
          "code": "Auto Term",
          "name": "Auto Term"
        }
      ],
      "id": "01tSG000008KnvBYAS",
      "isActive": true,
      "isAssetizable": true,
      "isConfigurable": true,
      "isSoldOnlyWithOtherProds": false,
      "name": "Auto",
      "nodeType": "bundleProduct",
      "productClassification": {
        "id": "11BSG00000LARcM2AX"
      },
      "productCode": "auto"
    }
  },
  "uiTreatments": [
    {
      "details": {
        "attributeId": "0tjxx0000000007AAA",
        "stiId": "0QLxx0000004CU0GAM",
        "attributePicklistValueId": "0v6xx0000000005AAA"
      },
      "uiTreatmentTarget": "Attribute_Picklist_Value",
      "uiTreatmentType": "Hide"
    },
    {
      "details": {
        "stiId": "ref_f0f2da7b_c431_482d_bf4b_599052f3a2e1"
      },
      "uiTreatmentTarget": "Component",
      "uiTreatmentType": "Disable"
    }
  ],
  "ratingResult": {
    "childNodes": [
      {
        "childNodes": [
          {
            "childNodes": [],
            "details": {
              "NetUnitPrice": 590.4,
              "InstanceKey": "bipd1",
              "ProductCode": "bipd",
              "NetTotalPrice": 590.4,
              "ProratedQLITaxAmount": 0
            }
          }
        ],
        "details": {
          "NetUnitPrice": 1485.84,
          "InstanceKey": "AutoSilver",
          "ProductCode": "autoSilver",
          "NetTotalPrice": 1485.84,
          "ProratedQLITaxAmount": 0
        }
      }
    ]
  }
}
```

## Related Topics

- Insurance Config Message (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_config_message_output.htm)
- Context JSON (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_context_j_s_o_n_output.htm)
- Rating Result (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_rating_result_output.htm)
- Insurance UI Treatments (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_u_i_treatment_output.htm)
