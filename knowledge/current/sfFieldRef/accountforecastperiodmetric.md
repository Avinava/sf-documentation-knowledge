---
title: "AccountForecastPeriodMetric"
domain: sfFieldRef
topic: accountforecastperiodmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.971Z
estimatedTokens: 305
keywords: [AccountForecastPeriodMetric, records, account, metrics, vary, period, specific, product]
---

# AccountForecastPeriodMetric

> Represents records of account metrics which vary by period but are not specific
      for a product.

# AccountForecastPeriodMetric

Represents records of account metrics which vary by period but are not specific for a product.

For more information, see AccountForecastPeriodMetric in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountForecastId | Account Forecast ID | reference |  | 18 |  |  |
| AccountGrowthPercentage | Account Growth Percentage | percent |  |  | 5 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Account Forecast Period Metric ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MarketGrowthPercentage | Market Growth Percentage | percent |  |  | 5 | 2 |
| Name | Name | string |  | 255 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
