---
title: "MfgProgramCpntFrcstFact"
domain: sfFieldRef
topic: mfgprogramcpntfrcstfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.278Z
estimatedTokens: 628
keywords: [MfgProgramCpntFrcstFact, generated, manufacturing, program, component, forecast, records]
---

# MfgProgramCpntFrcstFact

> Represents information about the generated manufacturing program component
         forecast records.

# MfgProgramCpntFrcstFact

Represents information about the generated manufacturing program component forecast records.

For more information, see MfgProgramCpntFrcstFact in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedForecastedQuantity | Adjusted Forecasted Quantity | double |  |  | 18 | 0 |
| AdjustedForecastedRevenue | Adjusted Forecasted Revenue | currency |  |  | 18 | 0 |
| AdvAcctForecastSetUseId | Advanced Account Forecast Set Use ID | reference |  | 18 |  |  |
| CostUnitOfMeasurementId | Unit of Measure ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpectedProfitPerUnit | Expected Profit Per Unit | currency |  |  | 18 | 0 |
| ExpectedProfitPercent | Expected Profit Percent | percent |  |  | 3 | 0 |
| ExternalReferenceNumber | External Reference Number | string |  | 50 |  |  |
| ForecastedQuantity | Forecasted Quantity | double |  |  | 18 | 0 |
| ForecastedRevenue | Forecasted Revenue | currency |  |  | 18 | 0 |
| Id | Manufacturing Program Component Forecast ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ManufacturingProgramId | Manufacturing Program ID | reference |  | 18 |  |  |
| Name | Manufacturing Program Component Forecast Fact Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| PeriodStartDate | Period Start Date | date |  |  |  |  |
| ProductComponentId | Product ID | reference |  | 18 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| ProductionLocationId | Location ID | reference |  | 18 |  |  |
| ProductionModelId | Product ID | reference |  | 18 |  |  |
| SellingPricePerUnit | Selling Price Per Unit | currency |  |  | 18 | 0 |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalCostPerUnit | Total Cost | currency |  |  | 18 | 0 |
| TotalFixedCostPerUnit | Total Fixed Cost Per Unit | double |  |  | 18 | 0 |
| VariableCostPerUnit | Variable Cost Per Unit | currency |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
