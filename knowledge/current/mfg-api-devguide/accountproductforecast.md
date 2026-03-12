---
title: "AccountProductForecast"
domain: mfg-api-devguide
topic: accountproductforecast
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.465Z
estimatedTokens: 802
keywords: [AccountProductForecast, cumulative, planned, quantities, opportunities, orders, sales, agreement, product, across, periods, rolling, time, period, API]
---

# AccountProductForecast

> Represents the cumulative values for planned quantities, opportunities, and
      orders of a sales agreement for a given product across all periods in that rolling time
      period. This object is available in API version 47.0 and later.

# AccountProductForecast

Represents the cumulative values for planned quantities, opportunities, and orders of a sales agreement for a given product across all periods in that rolling time period. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountForecastId | TypereferencePropertiesFilter, Group, SortDescriptionID of the account forecast record which the account product is part of. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicator of whether the product is active or not. |
| IsSystemGenerated | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicator of whether the record was manually inserted or system-generated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the product. |
| ProductId | TypereferencePropertiesFilter, Group, SortDescriptionID of the product. |
| TotalAdjustedForecastedQuantity | TypedoublePropertiesFilter, Group, Nillable, SortDescriptionTotal forecasted quantity after manual adjustments are made. |
| TotalAdjustedForecastedRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal forecasted revenue after manual adjustments are made. |
| TotalCurrentOrdersQuantity | TypedoublePropertiesFilter, Group, Nillable, SortDescriptionTotal quantity derived from orders in the current period. |
| TotalCurrentOrdersRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal revenue derived from orders in the current period. |
| TotalForecastedQuantity | TypedoublePropertiesFilter, Group, Nillable, SortDescriptionTotal forecasted quantity before manual adjustments are made. |
| TotalForecastedRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal forecasted revenue before a manual adjustment is made. |
| TotalOpportunityQuantity | TypedoublePropertiesFilter, Group, Nillable, SortDescriptionTotal quantity derived from opportunities in the current period. |
| TotalOpportunityRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal revenue derived from opportunities in the current period. |
| TotalPastOrdersQuantity | TypedoublePropertiesFilter, Group, Nillable, SortDescriptionTotal quantity derived from orders in the last forecast period. |
| TotalPastOrdersRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal revenue derived from orders in the last forecast period. |
| TotalSalesAgreementPlannedQuantity | TypedoublePropertiesFilter, Group, Nillable, SortDescriptionTotal planned quantity derived from sales agreements in the current period. |
| TotalSalesAgreementPlannedRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionTotal planned revenue derived from sales agreements in the current period. |
