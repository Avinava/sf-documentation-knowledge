---
title: "Transformation Input"
domain: automotive-cloud
topic: transformation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.789Z
estimatedTokens: 309
keywords: [Transformation, Input, representation, converting, output]
---

# Transformation Input

> Input representation for converting an input object type to an output
   object type.

# Transformation Input

Input representation for converting an input object type to an output object type.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputObjectIds | String[] | The list of record IDs for the input object type containing the mapping definition used to create the business transformation. The list of IDs must all be for the same object type. | Required | 55.0 |
| inputObjectName | String | The name of the input object containing the mapping definition used to create the business transformation. Possible values are:MfgProgramCpntFrcstFactManufacturingProgramMfgProgramCpntFrcstFactPeriodQuoteQuoteLineItem | Required | 55.0 |
| outputObjectDefaultValues | Map<String, String>> | The default values for the output object that are created from the input object IDs. | Optional | 55.0 |
| outputObjectName | String | The name of the output object that is created from the input object IDs. | Required | 55.0 |
| usageType | String | Usage type of the transformation. Possible values are:ConvertToSalesAgreementCLMFieldMappingEligibleProgramRebateTypeMapJournalToMemberAggregateTransformationMapping | Required | 55.0 |

## Code Examples

```
{
  “inputObjectIds”: [
    “0sTxx000000003FEAQ”,
    “0sTxx000000004rEAA”,
    “0sTxx0000000001EAA”,
    “0sTxx000000001dEAA”
  ],
  “inputObjectName”: “LeadLineItem”,
  “usageType”: “TransformationMapping”,
  “outputObjectName”: “OpportunityLineItem”,
  “outputObjectDefaultValues”: {
    “OpportunityLineItem” : {
      “OpportunityId”: "abcd1234",
      “CurrencyIsoCode”:“USD” // This is required in mutli currency enabled org.
    }
  }
}
```
