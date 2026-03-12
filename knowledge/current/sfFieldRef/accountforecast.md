---
title: "AccountForecast"
domain: sfFieldRef
topic: accountforecast
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.947Z
estimatedTokens: 417
keywords: [AccountForecast, rolling, forecast, record, particular, account, prepared, data, directly, sales, agreements, orders, opportunities]
---

# AccountForecast

> Represents the rolling forecast record of a particular account. The forecast is
      prepared using data directly from sales agreements, orders, and opportunities.

# AccountForecast

Represents the rolling forecast record of a particular account. The forecast is prepared using data directly from sales agreements, orders, and opportunities.

For more information, see AccountForecast in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultAccountGrowthPercentage | Default Account Growth Percentage | percent |  |  | 5 | 2 |
| DefaultMarketGrowthPercentage | Default Market Growth Percentage | percent |  |  | 5 | 2 |
| EndDate | End Date | date |  |  |  |  |
| Id | Account Forecast ID | id |  | 18 |  |  |
| IsCalculationInProgress | Calculation In Progress | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastCalculatedDate | Recalculation Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustedRevenue | Total Adjusted Revenue | currency |  |  | 18 | 0 |
| TotalRevenue | Total Revenue | currency |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
