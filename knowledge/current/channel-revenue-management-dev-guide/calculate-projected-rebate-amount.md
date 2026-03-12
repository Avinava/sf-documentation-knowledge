---
title: "Calculate Projected Rebate Amount"
domain: channel-revenue-management-dev-guide
topic: calculate-projected-rebate-amount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.796Z
estimatedTokens: 1115
keywords: [Calculate, Projected, Rebate, Amount, associated, transaction, REST, HTTP, Inputs, Outputs, Usage]
---

# Calculate Projected Rebate Amount

> Calculate the projected rebate amount for rebate types associated with
      a specified transaction reference ID.

# Calculate Projected Rebate Amount

Calculate the projected rebate amount for rebate types associated with a specified transaction reference ID.

This object is available in API version 54.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/calculateProjectedRebateAmount

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| programRebateTypeIds | TypestringDescriptionRequired. The list of program rebate type IDs to calculate the projected rebate amounts for. |
| referenceRecordId | TypestringDescriptionRequired. The transaction reference record ID to calculate the projected rebate amounts for. |

## Outputs

| Output | Details |
| --- | --- |
| calculateProjectedRebateAmount | TypestringDescriptionThe calculated rebate amount details for the program rebate types associated with the transaction reference record.This is an Apex output type that contains nested arrays in JSON format. calculateProjectedRebateAmount contains an array of the CalculateProjectedRebateAmountOutputRepresentation Apex class. This output representation contains an array of the ProjectedRebateAmountCalc fields, while an array of DetailedProjectedRebateAmountCalc is contained in ProjectedRebateAmountCalc. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=channel_revenue_management_dev_guide)

#### Note

The fields aggregateId, benefitQualifierValue, benefitTier, measureFieldValue, qualifiedTiers, rebateTypeBenefit, totalProjectedRebateAmount, payoutPeriod, projectedRebateAmount can appear in the output list. These fields must be ignored because they aren't supported in the flow for this invocable action. These fields will be deprecated in API version 55.0.

## Usage

**JSON Sample Request**

```

```

**JSON Sample Response**

```

```

**Details of the Apex output type**

-   projectedRebateAmountCalc—An array of projected rebate amounts. Each item specifies the projected rebate amount for a passed rebate type and the reference object.
    -   programRebateTypeId—Specifies the program rebate type ID whose projected rebate amounts are calculated in this item.
    -   referenceRecordId—Specifies the transaction reference record ID based on which the projected rebate amounts are calculated.
    -   totalProjectedRebateAmount—Specifies the total projected rebate amount for this program rebate type and reference record.
    -   detailedProjectedRebateAmountCalc—An array with each item corresponding to each aggregate record that is found for a combination of rebate type and reference object. For example, if the rebate is computed differently for every product using a benefit mapping and the reference object (order) has two order lines, this collection has two aggregates, one for each product.
        -   benefitQualifierValue—Specifies the total benefit qualifier value calculated from both the aggregate record and the reference object.
        -   benefitTier—Specifies the benefit tier ID that is determined based on the benefit qualifier value.
        -   rebateTypeBenefit—Specifies the applied benefit that is granted based on the benefit tier identified.
        -   measureFieldValue—Specifies the total measure value calculated from both the aggregate record and the reference object.
        -   payoutPeriod—Specifies the rebate program payout period that is determined based on the mapped member ID and activity date. The mapping between reference object and transaction journal is used here. See [Map Fields Between Target Transaction Object and Transaction Journal](https://help.salesforce.com/s/articleView?id=xcloud.admin_rebates_map_fields_between_transaction_journal_and_target.htm&type=5&language=en_US "HTML (New Window)").
        -   projectedRebateAmount—Specifies the calculated projected rebate amount based on the benefit tier and the measure field value.
        -   qualifiedTiers—List of the eligible benefit tiers that have already been met.

## Usage

You must configure the output parameter for the Calculate Projected Rebate Amount Flow Action in Flow Builder. The following screen illustrates how to use the output parameter in the Flow Builder.![A representation of the Calculated Projected Rebate Amount screen.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Frebates_api%2Fimages%2Fcalc_projected_rebate_amount.png&folder=channel_revenue_management_dev_guide)

## Code Examples

```
{
   "inputs":[ {
      "programRebateTypeIds": ["0hvRM0000004CUt"],
      "referenceRecordId": "801RM00000083TeYAI"
   } ]
}
```

```
{
  "projectedRebateAmountCalc": [
    {
      "programRebateTypeId": "0hvRM0000004CUt",
      "referenceRecordId": "801RM00000083TeYAI",
      "totalProjectedRebateAmount": 1088000,
      "detailedProjectedRebateAmountCalc": [
        {
          "benefitQualifierValue": 500,
          "benefitTier": "0huRM0000004CRC",
          "rebateTypeBenefit": "5",
          "measureFieldValue": 160000,
          "payoutPeriod": "0i7RM0000004CV7",
          "projectedRebateAmount": 800000,
          "qualifiedTiers": [
            "0huRM0000004CRC"
          ]
        },
        {
          "benefitQualifierValue": 240,
          "benefitTier": "0huRM0000004CRC",
          "rebateTypeBenefit": "5",
          "measureFieldValue": 57600,
          "payoutPeriod": "0i7RM0000004CV7",
          "projectedRebateAmount": 288000,
          "qualifiedTiers": [
            "0huRM0000004CRC"
          ]
        }
      ]
    }
  ]
}
```
