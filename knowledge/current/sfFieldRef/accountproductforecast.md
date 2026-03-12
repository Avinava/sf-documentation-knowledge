---
title: "AccountProductForecast"
domain: sfFieldRef
topic: accountproductforecast
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.018Z
estimatedTokens: 603
keywords: [AccountProductForecast, cumulative, planned, quantities, opportunities, orders, sales, agreement, product, across, periods, rolling, time, period]
---

# AccountProductForecast

> Represents the cumulative values for planned quantities, opportunities, and
      orders of a sales agreement for a given product across all periods in that rolling time
      period.

# AccountProductForecast

Represents the cumulative values for planned quantities, opportunities, and orders of a sales agreement for a given product across all periods in that rolling time period.

For more information, see AccountProductForecast in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountForecastId | Account Forecast ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Account Product Forecast ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsProductInvalidForAccountForecast | Product Not Valid For Account Forecasting | boolean |  |  |  |  |
| IsSystemGenerated | System Generated | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustedForecastedQuantity | Total Adjusted Forecasted Quantity | double |  |  | 18 | 0 |
| TotalAdjustedForecastedRevenue | Total Adjusted Forecasted Revenue | currency |  |  | 18 | 0 |
| TotalCurrentOrdersQuantity | Total Current Orders Quantity | double |  |  | 18 | 0 |
| TotalCurrentOrdersRevenue | Total Current Orders Revenue | currency |  |  | 18 | 0 |
| TotalForecastedQuantity | Total Forecasted Quantity | double |  |  | 18 | 0 |
| TotalForecastedRevenue | Total Forecasted Revenue | currency |  |  | 18 | 0 |
| TotalOpportunityQuantity | Total Opportunity Quantity | double |  |  | 18 | 0 |
| TotalOpportunityRevenue | Total Opportunity Revenue | currency |  |  | 18 | 0 |
| TotalPastOrdersQuantity | Total Last Year's Orders Quantity | double |  |  | 18 | 0 |
| TotalPastOrdersRevenue | Total Last Year's Orders Revenue | currency |  |  | 18 | 0 |
| TotalSalesAgreementPlannedQuantity | Total Sales Agreement Planned Quantity | double |  |  | 18 | 0 |
| TotalSalesAgreementPlannedRevenue | Total Sales Agreement Planned Revenue | currency |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
