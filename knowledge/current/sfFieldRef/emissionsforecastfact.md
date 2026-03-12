---
title: "EmissionsForecastFact"
domain: sfFieldRef
topic: emissionsforecastfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.934Z
estimatedTokens: 1078
keywords: [EmissionsForecastFact, time, periods, measures, dimensions, forecast, emissions, company, generated, business, revenue, employee, count, actual, data]
---

# EmissionsForecastFact

> Represents information about the time periods, measures, and dimensions used to forecast the emissions of a company. The emissions forecast of the company is generated based on its business measures such as revenue or employee count, and the actual emissions data from previous years.

# EmissionsForecastFact

Represents information about the time periods, measures, and dimensions used to forecast the emissions of a company. The emissions forecast of the company is generated based on its business measures such as revenue or employee count, and the actual emissions data from previous years.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EmissionsForecastFact in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActualEmissions | Actual Emissions (tCO2e) | double |  |  | 18 | 2 |
| ActualEmissionsIntensity | Actual Emissions Intensity | double |  |  | 18 | 2 |
| ActualEnergyConsumption | Actual Energy Consumption (kWh) | double |  |  | 18 | 2 |
| ActualLocationBasedEmissions | Actual Location-Based Emissions (tCO2e) | double |  |  | 18 | 2 |
| ActualMarketBasedEmissions | Actual Market-Based Emissions (tCO2e) | double |  |  | 18 | 2 |
| ActualRenewableEnergyCnsmpPct | Actual Renewable Energy Consumption Percentage | double |  |  | 18 | 2 |
| AdvAcctForecastSetPartnerId | Advanced Account Forecast Set Partner ID | reference |  | 18 |  |  |
| CarbonCreditCost | Carbon Credits Cost (USD per tCO2e) | double |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionsActivityId | Emissions Activity ID | reference |  | 18 |  |  |
| FinalForecastedEmissions | Final Forecasted Emissions (tCO2e) | double |  |  | 18 | 2 |
| ForcstEmssnIntensityRdctnPct | Forecasted Emissions Intensity Reduction Percentage | percent |  |  | 18 | 2 |
| ForcstRenewableEnergyCnsmpPct | Forecasted Renewable Energy Consumption Percentage | percent |  |  | 5 | 2 |
| ForecastedEmissions | Forecasted Emissions (tCO2e) | double |  |  | 18 | 2 |
| ForecastedEmissionsIntensity | Forecasted Emissions Intensity | double |  |  | 18 | 2 |
| ForecastedEmissionsOverride | Forecasted Emissions Override (tCO2e) | double |  |  | 18 | 2 |
| ForecastedEnergyConsumption | Forecasted Energy Consumption (kWh) | double |  |  | 18 | 2 |
| ForecastedLocationBasedEmssn | Forecasted Location-Based Emissions (tCO2e) | double |  |  | 18 | 2 |
| ForecastedMarketBasedEmssn | Forecasted Market-Based Emissions (tCO2e) | double |  |  | 18 | 2 |
| Headcount | Headcount | double |  |  | 18 | 2 |
| Id | Emissions Forecast Fact ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| NetEmissionsForecast | Net Emissions Forecast (tCO2e) | double |  |  | 18 | 2 |
| OtherApplnForecastedEmissions | Other Application Forecasted Emissions (tCo2e) | double |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| PlannedCarbonCredits | Planned Carbon Credits (tCO2e) | double |  |  | 18 | 2 |
| PlannedCarbonCreditsInvst | Planned Carbon Credits Investment | currency |  |  | 18 | 2 |
| PlnOperationalEmissionsRdctn | Planned Operational Emissions Reduction (tCO2e) | double |  |  | 18 | 2 |
| PlnSupplierEmissionsRdctn | Planned Supplier Emissions Reduction (tCO2e) | double |  |  | 18 | 2 |
| ProcurementSpend | Procurement Spend | currency |  |  | 18 | 2 |
| RequiredCarbonCredits | Required Carbon Credits (tCO2e) | double |  |  | 18 | 2 |
| RequiredCarbonCreditsInvst | Required Carbon Credits Investment | currency |  |  | 18 | 2 |
| Revenue | Revenue | currency |  |  | 18 | 2 |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetCompensatedEmissions | Target Compensated Emissions (tCO2e) | double |  |  | 18 | 2 |
| TargetEmissions | Target Emissions (tCO2e) | double |  |  | 18 | 2 |
| TargetRenewableEnergyPct | Target Renewable Energy Percentage | double |  |  | 18 | 2 |
| TotalFloorArea | Total Floor Area (sqft) | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
