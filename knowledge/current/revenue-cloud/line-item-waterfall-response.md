---
title: "Line Item Waterfall Response"
domain: revenue-cloud
topic: line-item-waterfall-response
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:07.897Z
estimatedTokens: 390
keywords: [Line, Item, Waterfall, Response, Output, representation, line, item, waterfall, response.]
---

# Line Item Waterfall Response

> Output representation of the line item waterfall response.

# Line Item Waterfall Response

Output representation of the line item waterfall response.

JSON example

```

```

This sample response includes diagnostic data if you’ve enabled Advanced Logging settings under Salesforce Pricing from Setup.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| context​Definition​VersionId | String | Context definition version ID of the pricing procedure. | Small, 60.0 | 60.0 |
| context​MappingId | String | Context mapping ID of the record. | Small, 60.0 | 60.0 |
| currency​Code | String | Currency code. For example, USD or INR. | Small, 60.0 | 60.0 |
| error | Pricing Error Response | Details of any errors. | Small, 60.0 | 60.0 |
| execution​End​Timestamp | String | End timestamp of procedure execution. | Small, 60.0 | 60.0 |
| execution​Id | String | Execution ID of a particular execution of a pricing procedure. | Small, 60.0 | 60.0 |
| execution​Start​Timestamp | String | Start timestamp of procedure execution. | Small, 60.0 | 60.0 |
| line​ItemId | String | Line item ID for which the price is being calculated. | Small, 60.0 | 60.0 |
| output | Map<String, Object> | Output of the pricing procedure. | Small, 60.0 | 60.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 60.0 | 60.0 |
| usage​Type | String | Usage type of the waterfall log record. | Small, 62.0 | 62.0 |
| waterfall | Pricing Waterfall Response[] | Details of the price waterfall. | Small, 60.0 | 60.0 |

## Code Examples

```
{
       "currencyCode": "USD",
       "error": null,
       "executionEndTimestamp": "2023-07-31T20:11:29.625Z",
       "executionId": "gdLVwn2x1uats2xWMAjV",
       "executionStartTimestamp": null,
       "lineItemId": "item1",
       "success": true,
       "usageType":"Pricing",
       "output": {
          "quantity": "10",
          "netUnitPrice": "10",
          "subtotal": "100"
        },
        "waterfall": []
}
```

```
{
  "apiExecutionId": "395526033950891",
  "contextDefinitionVersionId": "11OSG000000Eiu12AC",
  "contextMappingId": "11jSG00001YqfHVYAZ",
  "currencyCode": "USD",
  "executionEndTimestamp": "2026-02-17T10:43:46.197Z",
  "executionId": "395527509949481",
  "executionStartTimestamp": "2026-02-17T10:43:44.063Z",
  "id": "0QLSG000001OXv84AG",
  "lineItemId": "0QLSG000001OXv84AG",
  "output": {
    "NetUnitPrice": 20,
    "TotalSubscriptionPrice": 40,
    "Subtotal": 40,
    "diagnosticData": {
      "lineItemId": "0QLSG000001OXv84AG",
      "exceptionDetails": {},
      "inputParams": {
        "ContributingNetUnitPrice": [
          100
        ],
        "ContributingSubTotal": [
          100
        ],
        "DerivedFormula": [
          "PERCENTAGE(ListPrice,10)",
          "PERCENTAGE(ListPrice,10)"
        ],
        "PRODUCT_REFERENCE_IDS": null,
        "Subtotal": 40,
        "Quantity": 2,
        "TransactionalListPrice": 0,
        "ContractId": null,
        "CurrencyIsoCode": "USD",
        "ContributingSource": [
          "Product",
          "Product"
        ],
        "isDerivedProcessed": true,
        "IsDerived": true,
        "NetUnitPrice": 20,
        "ContributingId": [
          "02iSG000001fenKYAQ",
          "0QLSG000001OXv74AG"
        ],
        "HeaderTotal": 100,
        "ContributingScope": [
          "NonTransactional",
          "Transactional"
        ],
        "Non-TransactionalListPrice": [
          100
        ],
        "ContributingProduct": [
          "01tSG00000CC6NhYAL",
          "01tSG00000CC6NhYAL"
        ],
        "LineItemId": "0QLSG000001OXv84AG",
        "hasError": false,
        "lineItemDetailId": "0QLSG000001OXv84AG",
        "lineItemDetailIndex": 1
      },
      "contributorCount": 2,
      "contributingLines": [
        {
          "ContributingNetUnitPrice": 100,
          "DerivedFormula": "PERCENTAGE(ListPrice,10)",
          "ContributingSubTotal": 100,
          "ContributingId": "0QLSG000001OXv84AG",
          "ContributingScope": "NonTransactional",
          "HeaderTotal": 100,
          "isSkipped": false,
          "Non-TransactionalListPrice": 100,
          "ContributingProduct": "01tSG00000CC6NhYAL",
          "TransactionalListPrice": 0,
          "hasError": false,
          "ContributingSource": "Product"
        },
        {
          "ContributingNetUnitPrice": null,
          "DerivedFormula": "PERCENTAGE(ListPrice,10)",
          "ContributingSubTotal": null,
          "ContributingId": "0QLSG000001OXv84AG",
          "ContributingScope": "Transactional",
          "HeaderTotal": 100,
          "isSkipped": false,
          "Non-TransactionalListPrice": null,
          "ContributingProduct": "01tSG00000CC6NhYAL",
          "TransactionalListPrice": 0,
          "hasError": false,
          "ContributingSource": "Product"
        }
      ]
    },
    "isParallelExecution": true,
    "SubscriptionNetUnitPrice": 20,
    "section-1-output": 40,
    "section-0-output": 40
  },
  "success": true,
  "usageType": "Pricing",
  "waterfall": [
    {
      "fieldToTagNameMapping": {
        "ContributingNetUnitPrice": "ContributorUnitPrice",
        "ContributingSubTotal": "ContributorTotalPrice",
        "DerivedFormula": "ContributorFormulaInput",
        "Subtotal": "ItemNetTotalPrice",
        "Quantity": "LineItemQuantity",
        "TransactionalListPrice": "ListPrice",
        "ContractId": "ItemContract",
        "CurrencyIsoCode": "CurrencyIsoCode",
        "PriceWaterfall": "price_water_fall",
        "ContributingSource": "ContributorSource",
        "IsDerived": "DerivedPricingAttribute",
        "NetUnitPrice": "NetUnitPrice",
        "ContributingId": "Contributor",
        "ContributingScope": "ContributorScope",
        "HeaderTotal": "TotalAmount",
        "Non-TransactionalListPrice": "ContributorListPrice",
        "ContributingProduct": "ContributorProduct",
        "LineItemId": "LineItem"
      },
      "hideWaterfall": false,
      "inputParameters": {
        "ContributingNetUnitPrice": [
          100
        ],
        "ContributingSubTotal": [
          100
        ],
        "DerivedFormula": [
          "PERCENTAGE(ListPrice,10)",
          "PERCENTAGE(ListPrice,10)"
        ],
        "Quantity": 2,
        "TransactionalListPrice": 0,
        "ContractId": null,
        "CurrencyIsoCode": "USD",
        "ContributingSource": [
          "Product",
          "Product"
        ],
        "IsDerived": true,
        "ContributingId": [
          "02iSG000001fenKYAQ",
          "0QLSG000001OXv74AG"
        ],
        "HeaderTotal": 100,
        "ContributingScope": [
          "NonTransactional",
          "Transactional"
        ],
        "Non-TransactionalListPrice": [
          100
        ],
        "diagnosticData": {
          "lineItemId": "0QLSG000001OXv84AG",
          "exceptionDetails": {},
          "inputParams": {
            "ContributingNetUnitPrice": [
              100
            ],
            "ContributingSubTotal": [
              100
            ],
            "DerivedFormula": [
              "PERCENTAGE(ListPrice,10)",
              "PERCENTAGE(ListPrice,10)"
            ],
            "PRODUCT_REFERENCE_IDS": null,
            "Subtotal": 40,
            "Quantity": 2,
            "TransactionalListPrice": 0,
            "ContractId": null,
            "CurrencyIsoCode": "USD",
            "ContributingSource": [
              "Product",
              "Product"
            ],
            "isDerivedProcessed": true,
            "IsDerived": true,
            "NetUnitPrice": 20,
            "ContributingId": [
              "02iSG000001fenKYAQ",
              "0QLSG000001OXv74AG"
            ],
            "HeaderTotal": 100,
            "ContributingScope": [
              "NonTransactional",
              "Transactional"
            ],
            "Non-TransactionalListPrice": [
              100
            ],
            "ContributingProduct": [
              "01tSG00000CC6NhYAL",
              "01tSG00000CC6NhYAL"
            ],
            "LineItemId": "0QLSG000001OXv84AG",
            "hasError": false,
            "lineItemDetailId": "0QLSG000001OXv84AG",
            "lineItemDetailIndex": 1
          },
          "contributorCount": 2,
          "contributingLines": [
            {
              "ContributingNetUnitPrice": 100,
              "DerivedFormula": "PERCENTAGE(ListPrice,10)",
              "ContributingSubTotal": 100,
              "ContributingId": "0QLSG000001OXv84AG",
              "ContributingScope": "NonTransactional",
              "HeaderTotal": 100,
              "isSkipped": false,
              "Non-TransactionalListPrice": 100,
              "ContributingProduct": "01tSG00000CC6NhYAL",
              "TransactionalListPrice": 0,
              "hasError": false,
              "ContributingSource": "Product"
            },
            {
              "ContributingNetUnitPrice": null,
              "DerivedFormula": "PERCENTAGE(ListPrice,10)",
              "ContributingSubTotal": null,
              "ContributingId": "0QLSG000001OXv84AG",
              "ContributingScope": "Transactional",
              "HeaderTotal": 100,
              "isSkipped": false,
              "Non-TransactionalListPrice": null,
              "ContributingProduct": "01tSG00000CC6NhYAL",
              "TransactionalListPrice": 0,
              "hasError": false,
              "ContributingSource": "Product"
            }
          ]
        },
        "ContributingProduct": [
          "01tSG00000CC6NhYAL",
          "01tSG00000CC6NhYAL"
        ],
        "LineItemId": "0QLSG000001OXv84AG"
      },
      "outputParameters": {
        "Subtotal": 40,
        "diagnosticData": {
          "lineItemId": "0QLSG000001OXv84AG",
          "exceptionDetails": {},
          "inputParams": {
            "ContributingNetUnitPrice": [
              100
            ],
            "ContributingSubTotal": [
              100
            ],
            "DerivedFormula": [
              "PERCENTAGE(ListPrice,10)",
              "PERCENTAGE(ListPrice,10)"
            ],
            "PRODUCT_REFERENCE_IDS": null,
            "Subtotal": 40,
            "Quantity": 2,
            "TransactionalListPrice": 0,
            "ContractId": null,
            "CurrencyIsoCode": "USD",
            "ContributingSource": [
              "Product",
              "Product"
            ],
            "isDerivedProcessed": true,
            "IsDerived": true,
            "NetUnitPrice": 20,
            "ContributingId": [
              "02iSG000001fenKYAQ",
              "0QLSG000001OXv74AG"
            ],
            "HeaderTotal": 100,
            "ContributingScope": [
              "NonTransactional",
              "Transactional"
            ],
            "Non-TransactionalListPrice": [
              100
            ],
            "ContributingProduct": [
              "01tSG00000CC6NhYAL",
              "01tSG00000CC6NhYAL"
            ],
            "LineItemId": "0QLSG000001OXv84AG",
            "hasError": false,
            "lineItemDetailId": "0QLSG000001OXv84AG",
            "lineItemDetailIndex": 1
          },
          "contributorCount": 2,
          "contributingLines": [
            {
              "ContributingNetUnitPrice": 100,
              "DerivedFormula": "PERCENTAGE(ListPrice,10)",
              "ContributingSubTotal": 100,
              "ContributingId": "0QLSG000001OXv84AG",
              "ContributingScope": "NonTransactional",
              "HeaderTotal": 100,
              "isSkipped": false,
              "Non-TransactionalListPrice": 100,
              "ContributingProduct": "01tSG00000CC6NhYAL",
              "TransactionalListPrice": 0,
              "hasError": false,
              "ContributingSource": "Product"
            },
            {
              "ContributingNetUnitPrice": null,
              "DerivedFormula": "PERCENTAGE(ListPrice,10)",
              "ContributingSubTotal": null,
              "ContributingId": "0QLSG000001OXv84AG",
              "ContributingScope": "Transactional",
              "HeaderTotal": 100,
              "isSkipped": false,
              "Non-TransactionalListPrice": null,
              "ContributingProduct": "01tSG00000CC6NhYAL",
              "TransactionalListPrice": 0,
              "hasError": false,
              "ContributingSource": "Product"
            }
          ]
        },
        "NetUnitPrice": 20
      },
      "pricingElement": {
        "adjustments": [
          {
            "NetUnitPrice": 10,
            "ContributingId": "02iSG000001fenKYAQ",
            "ContributingScope": "NonTransactional",
            "ContributingProduct": "01tSG00000CC6NhYAL",
            "ContributingSource": "Product"
          },
          {
            "NetUnitPrice": 10,
            "ContributingId": "0QLSG000001OXv74AG",
            "ContributingScope": "Transactional",
            "ContributingProduct": "01tSG00000CC6NhYAL",
            "ContributingSource": "Product"
          }
        ],
        "elementType": "DerivedPricing",
        "name": "Derived Price"
      },
      "profileAccess": [],
      "sequence": 3,
      "tasksInfo": [
        {
          "executionEndTimestamp": "2026-02-17T10:43:46.077280883Z",
          "executionStartTimestamp": "2026-02-17T10:43:46.037719198Z",
          "taskName": "DerivedPrice-DerivedCalculate"
        },
        {
          "executionEndTimestamp": "2026-02-17T10:43:45.657762503Z",
          "executionStartTimestamp": "2026-02-17T10:43:45.657283237Z",
          "taskName": "DerivedPrice-UpdateCalculationPayload"
        }
      ]
    }
  ]
}
```

```
{
       "currencyCode": "USD",
       "error": null,
       "executionEndTimestamp": "2023-07-31T20:11:29.625Z",
       "executionId": "gdLVwn2x1uats2xWMAjV",
       "executionStartTimestamp": null,
       "lineItemId": "item1",
       "success": true,
       "usageType":"Rating",
       "output": {
          "quantity": "10",
          "netUnitPrice": "10",
          "subtotal": "100"
        },
        "waterfall": []
}
```

## Related Topics

- Pricing Error
                  Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_error_response.htm)
- Pricing
                  Waterfall Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_water_fall_response.htm)
- Rating Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rating_error_response.htm)
- Rating Waterfall Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rating_waterfall_response.htm)
