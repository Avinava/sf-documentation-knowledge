---
title: "MfgProgramForecastFact"
domain: sfFieldRef
topic: mfgprogramforecastfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.304Z
estimatedTokens: 554
keywords: [MfgProgramForecastFact, generated, manufacturing, program, forecast, records]
---

# MfgProgramForecastFact

> Represents information about the generated manufacturing program forecast
         records.

# MfgProgramForecastFact

Represents information about the generated manufacturing program forecast records.

For more information, see MfgProgramForecastFact in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedForecastedQuantity | Adjusted Forecasted Quantity | double |  |  | 18 | 0 |
| AdjustedForecastedRevenue | Adjusted Forecasted Revenue | currency |  |  | 18 | 0 |
| AdvAcctForecastSetUseId | Advanced Account Forecast Set Use ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpectedRevenuePerUnit | Expected Revenue Per Unit | currency |  |  | 18 | 0 |
| ExternalReferenceNumber | External Reference Number | string |  | 50 |  |  |
| External_Id__c | External_Id | string |  | 255 |  |  |
| ForecastedQuantity | Forecasted Quantity | double |  |  | 18 | 0 |
| ForecastedRevenue | Forecasted Revenue | currency |  |  | 18 | 0 |
| Id | Manufacturing Program Forecast Fact ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ManufacturingProgramId | Manufacturing Program ID | reference |  | 18 |  |  |
| MarketSharePercent | Market Share Percent | percent |  |  | 3 | 0 |
| Name | Manufacturing Program Forecast Fact Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| PeriodStartDate | Period Start Date | date |  |  |  |  |
| PreviousPeriodProgramQuantity | Previous Period Program Quantity | double |  |  | 18 | 0 |
| ProductionLocationId | Location ID | reference |  | 18 |  |  |
| ProductionModelId | Product ID | reference |  | 18 |  |  |
| ProgramQuantity | Program Quantity | double |  |  | 18 | 0 |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
