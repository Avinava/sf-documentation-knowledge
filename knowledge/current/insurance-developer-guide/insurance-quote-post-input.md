---
title: "Insurance Quote Post Input"
domain: insurance-developer-guide
topic: insurance-quote-post-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.887Z
estimatedTokens: 421
keywords: [Insurance, Quote, Post, Input, representation]
---

# Insurance Quote Post Input

> Input representation details to create insurance quote.

# Insurance Quote Post Input

Input representation details to create insurance quote.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | ID of the account associated with the quote that’s being created. | Optional | 63.0 |
| additionalFields | Map<String, Object> | Additional fields that are used to create insurance quote. | Optional | 63.0 |
| configOptions | Insurance Quote Config Options[] | The JSON structure that includes the options for configuration. | Optional | 63.0 |
| contextId | String | ID of the context that’s used for creating the quote. | Optional | 63.0 |
| effectiveDate | String | Date that the quote is effective from. | Required | 63.0 |
| expirationDate | String | Expiration date of the quote. | Optional | 63.0 |
| opportunityId | String | ID of the opportunity associated with the quote. | Optional | 63.0 |
| options | Insurance Quote Options[] | Insurance Quote Options. | Optional | 63.0 |
| priceBookId | String | ID of the pricebook associated with the quote. | Optional | 63.0 |
| pricingProcedure | String | Pricing Procedure for insurance quote. | Optional | 63.0 |
| quoteInputs | Insurance Quote Input Node[] | The JSON structure that contains user inputs for the products for which the quote is being created. | Required | 63.0 |
| quoteName | String | Name of the quote. | Optional | 63.0 |
| ratingDate | String | Date of the rating quote. | Optional | 63.0 |
| salesTransactionTypeId | String | ID of the sales transaction type. | Optional | 63.0 |
| transactionType | String | Type of the transaction. | Optional | 63.0 |

## Code Examples

```
{
  "quoteName": "Auto Insurance Quote",
  "effectiveDate": "2024-06-30T00:00:00.000Z",
  "expirationDate": "2025-07-28T00:00:00.000Z",
  "opportunityId": "006xx000001a2odAAA",
  "transactionType": "AutoTransactionType",
  "salesTransactionTypeId": "1Chxx0000004C92CAE",
  "priceBookId": "01sxx0000005ptpAAA",
  "configOptions": {
    "executePricing": false,
    "validateProductCatalog": false,
    "executeConfigurationRules": false,
    "executeQualificationRules": false
  },
  "options": {
    "saveQuote": true,
    "productSellingModel": "One Time"
  },
  "quoteInputs": [
    {
      "productCode": "autoRoot",
      "instanceKeys": [
        "AutoRoot"
      ],
      "items": [
        {
          "productCode": "autoBundle",
          "instanceKeys": [
            "AutoRoot",
            "AutoBundle1"
          ],
          "attributes": {
            "avMake": "BMW",
            "avValue": "20000",
            "avYear": "2020",
            "AutoValueFactor": 5,
            "AutoAgeFactor": 6
          }
        },
        {
          "productCode": "autoDriver",
          "instanceKeys": [
            "AutoRoot",
            "AutoBundle1",
            "AutoDriver"
          ],
          "relatedRecords": [
            {
              "relatedRecordId": "001xx000003GYiEAAW",
              "relatedRecordObjName": "Account"
            },
            {
              "relatedRecordId": "001xx000003GYiEAAV",
              "relatedRecordObjName": "Contact"
            }
          ]
        },
        {
          "productCode": "autoComp",
          "instanceKeys": [
            "AutoRoot",
            "AutoBundle1",
            "AutoComp"
          ],
          "attributes": {
            "CompBasePremium": "750"
          }
        },
        {
          "productCode": "autoBundle",
          "instanceKeys": [
            "AutoRoot",
            "AutoBundle2"
          ],
          "attributes": {
            "avMake": "Audi",
            "avValue": "20000",
            "avYear": "2020",
            "AutoValueFactor": 5,
            "AutoAgeFactor": 6
          }
        },
        {
          "productCode": "autoDriver",
          "instanceKeys": [
            "AutoRoot",
            "AutoBundle2",
            "AutoDriver"
          ],
          "relatedRecords": [
            {
              "relatedRecordId": "001xx000003GYiEAAW",
              "relatedRecordObjName": "Account"
            },
            {
              "relatedRecordId": "001xx000003GYiEAAV",
              "relatedRecordObjName": "Contact"
            }
          ]
        },
        {
          "productCode": "autoCollision",
          "instanceKeys": [
            "AutoRoot",
            "AutoBundle2",
            "AutoCollision1"
          ],
          "attributes": {
            "CollisionBasePremium": "120"
          }
        }
      ]
    }
  ]
}
```

## Related Topics

- Insurance Quote Config Options (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_ins_quote_config_options.htm)
- Insurance
                        Quote Options (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_ins_quote_options.htm)
- Insurance Quote Input Node (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_quote_input_node.htm)
