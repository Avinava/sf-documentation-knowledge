---
title: "Transformations"
domain: automotive-cloud
topic: transformations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.795Z
estimatedTokens: 462
keywords: [Transformations, Perform, business, transformation, lead, line, item, preferred, seller, data, source, opportunities, opportunity, target, scenarios]
---

# Transformations

> Perform the business transformation of lead line item or lead
   preferred seller data (source object) to opportunities line item or opportunity preferred seller
   data (target object). The following are some of the transformation scenarios: LeadLineItem to OpportunityLineItem, and LeadPreferredSeller to
    OpportunityPreferredSeller

# Transformations

Perform the business transformation of lead line item or lead preferred seller data (source object) to opportunities line item or opportunity preferred seller data (target object). The following are some of the transformation scenarios: LeadLineItem to OpportunityLineItem, and LeadPreferredSeller to OpportunityPreferredSeller.

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

[Transformation Output](atlas.en-us.automotive_cloud.meta/automotive_cloud/auto_response_body_transformation_output.htm "Represents the details of the transformation from source object to target object.")

## Code Examples

```
/connect/manufacturing/transformations
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect​/manufacturing/transformations
```

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

## Related Topics

- Transformation Output (atlas.en-us.automotive_cloud.meta/automotive_cloud/auto_response_body_transformation_output.htm)
