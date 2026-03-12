---
title: "OpportunityHistory"
domain: sfFieldRef
topic: opportunityhistory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.526Z
estimatedTokens: 350
keywords: [OpportunityHistory, stage, history, opportunity]
---

# OpportunityHistory

> Represents the stage history of an
   opportunity.

# OpportunityHistory

Represents the stage history of an opportunity.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OpportunityHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunityhistory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| CloseDate | Close Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ExpectedRevenue | Expected Revenue | currency |  |  | 18 | 2 |
| ForecastCategory | To Forecast Category | picklist |  | 40 |  |  |
| Id | Opportunity History ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| OpportunityId | Opportunity ID | reference |  | 18 |  |  |
| PrevAmount | Previous Amount | currency |  |  | 18 | 2 |
| PrevCloseDate | Previous Close Date | date |  |  |  |  |
| Probability | Probability | percent |  |  | 3 | 0 |
| StageName | Stage Name | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
