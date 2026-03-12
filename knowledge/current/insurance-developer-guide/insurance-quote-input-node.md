---
title: "Insurance Quote Input Node"
domain: insurance-developer-guide
topic: insurance-quote-input-node
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.878Z
estimatedTokens: 250
keywords: [Insurance, Quote, Input, Node, representation, root, line, items, child]
---

# Insurance Quote Input Node

> Input representation of root quote line items and child quote line items of insurance
    quote.

# Insurance Quote Input Node

Input representation of root quote line items and child quote line items of insurance quote.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Map<String, Object> | Insurance quote line items. | Optional | 63.0 |
| attributes | Map<String, Object> | Insurance quote attributes key-value pairs. | Optional | 63.0 |
| instanceKeys | String[] | Product instance identifier of the quote line item. | Required | 63.0 |
| items | String[] | The JSON structure that contains user inputs for the products for which the quote is created. | Optional | 63.0 |
| priceBookEntryId | String | ID of the pricebook associated with the quote. | Optional | 63.0 |
| productCode | String | Product code of the associated product. | Required | 63.0 |
| relatedRecords | Insurance Quote Related Record Input[] | List of the related insurance quote records. | Required | 62.0 |

## Code Examples

```
quoteInputs: [
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
```

## Related Topics

- Insurance Quote Related Record Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_ins_quote_related_record_input.htm)
