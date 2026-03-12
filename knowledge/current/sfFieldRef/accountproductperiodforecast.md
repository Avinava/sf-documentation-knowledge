---
title: "AccountProductPeriodForecast"
domain: sfFieldRef
topic: accountproductperiodforecast
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.027Z
estimatedTokens: 644
keywords: [AccountProductPeriodForecast, quantity, revenue, opportunities, sales, agreements, orders, resultant, forecasted, quantities, product, particular, time, period, forecast]
---

# AccountProductPeriodForecast

> Represents the quantity and revenue information of opportunities, sales
      agreements, orders, and resultant forecasted quantities for a product in a particular time
      period of the forecast rolling period. Other than the fields AdjustedForecastQuantity and
      AdjustedForecastRevenue, no o

# AccountProductPeriodForecast

Represents the quantity and revenue information of opportunities, sales agreements, orders, and resultant forecasted quantities for a product in a particular time period of the forecast rolling period. Other than the fields AdjustedForecastQuantity and AdjustedForecastRevenue, no other fields of this object can be updated.

For more information, see AccountProductPeriodForecast in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccForecastPeriodMetricId | Account Forecast Period Metric ID | reference |  | 18 |  |  |
| AccountProductForecastId | Account Product Forecast ID | reference |  | 18 |  |  |
| AdjustedForecastedQuantity | Adjusted Forecasted Quantity | double |  |  | 18 | 0 |
| AdjustedForecastedRevenue | Adjusted Forecasted Revenue | currency |  |  | 18 | 0 |
| AdjustmentComments | Adjustment Comments | textarea |  | 2000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentOrdersQuantity | Current Orders Quantity | double |  |  | 18 | 0 |
| CurrentOrdersRevenue | Current Orders Revenue | currency |  |  | 18 | 0 |
| ForecastedQuantity | Forecasted Quantity | double |  |  | 18 | 0 |
| ForecastedRevenue | Forecasted Revenue | currency |  |  | 18 | 0 |
| Id | Account Product Period Forecast ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastCalculatedDate | Last Calculated Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OpportunityQuantity | Opportunity Quantity | double |  |  | 18 | 0 |
| OpportunityRevenue | Opportunity Revenue | currency |  |  | 18 | 0 |
| PastOrdersQuantity | Last Year's Orders Quantity | double |  |  | 18 | 0 |
| PastOrdersRevenue | Last Year's Orders Revenue | currency |  |  | 18 | 0 |
| PeriodId | Period ID | reference |  | 18 |  |  |
| SalesAgreementPlannedQuantity | Sales Agreement Planned Quantity | double |  |  | 18 | 0 |
| SalesAgreementPlannedRevenue | Sales Agreement Planned Revenue | currency |  |  | 18 | 0 |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
