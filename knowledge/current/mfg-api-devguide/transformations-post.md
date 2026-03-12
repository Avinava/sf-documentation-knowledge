---
title: "Transformations (POST)"
domain: mfg-api-devguide
topic: transformations-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.975Z
estimatedTokens: 465
keywords: [Transformations, POST, Perform, business, transformation, program, component, forecast, data, source, opportunities, target, scenarios, MfgProgramCpntFrcstFact, Opportunity]
---

# Transformations (POST)

> Perform the business transformation of program component forecast
      data (source object) to opportunities (target object). The following are some of the
      transformation scenarios: MfgProgramCpntFrcstFact to
        Opportunity, ManufacturingProgram to Opportunity, MfgProgramCpntFrcstFact to OpportunityLineItem, and Period to OpportunityLineItemSchedule

# Transformations (POST)

Perform the business transformation of program component forecast data (source object) to opportunities (target object). The following are some of the transformation scenarios: MfgProgramCpntFrcstFact to Opportunity, ManufacturingProgram to Opportunity, MfgProgramCpntFrcstFact to OpportunityLineItem, and Period to OpportunityLineItemSchedule.

Resource

```

```

Resource Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

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

Response body for POST

[Transformation Output](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_transformation.htm "Represents the details of the transformation from source object to target object.")

## Code Examples

```
/connect/manufacturing/transformations
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect​/manufacturing/transformations
```

```
{
  "inputObjectIds": [
    "0sTxx000000003FEAQ",
    "0sTxx000000004rEAA",
    "0sTxx0000000001EAA",
    "0sTxx000000001dEAA"
  ],
  "inputObjectName": "MfgProgramCpntFrcstFact",
  "usageType": "TransformationMapping",
  "outputObjectName": "Opportunity",
  "outputObjectDefaultValues": {
    "Opportunity": {
      "Pricebook2Id": "PriceBookID",
      "StageName": "Prospecting",
      "Probability": "20",
      "Name": "SampleFactToOpp",
      "CloseDate" : "2022-12-31"
    },
    "OpportunityLineItem" : {
      "TotalPrice": 1234,
      "CurrencyIsoCode":"USD" // This is required in mutli currenct enabled org.
    },
    "OpportunityLineItemSchedule": {
      "Type": "Both" // It's based on the product schedule enabled on setup.
    }
  }
}
```

## Related Topics

- Transformation Output (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/connect_responses_transformation.htm)
