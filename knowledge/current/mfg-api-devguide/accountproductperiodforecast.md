---
title: "AccountProductPeriodForecast"
domain: mfg-api-devguide
topic: accountproductperiodforecast
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.476Z
estimatedTokens: 1160
keywords: [AccountProductPeriodForecast, quantity, revenue, opportunities, sales, agreements, orders, resultant, forecasted, quantities, product, particular, time, period, forecast]
---

# AccountProductPeriodForecast

> Represents the quantity and revenue information of opportunities, sales
      agreements, orders, and resultant forecasted quantities for a product in a particular time
      period of the forecast rolling period. Other than the fields AdjustedForecastQuantity and
      AdjustedForecastRevenue, no other fields of this object can be updated.  This object is
    available in API version 47.0 and later.

# AccountProductPeriodForecast

Represents the quantity and revenue information of opportunities, sales agreements, orders, and resultant forecasted quantities for a product in a particular time period of the forecast rolling period. Other than the fields AdjustedForecastQuantity and AdjustedForecastRevenue, no other fields of this object can be updated. This object is available in API version 47.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Fields

| Field | Details |
| --- | --- |
| AccForecastPeriodMetricId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of each account forecast period metric used in forecast formula calculations. |
| AccountProductForecastId | TypereferencePropertiesFilter, Group, SortDescriptionID of a specific product for which forecast is calculated for this period. |
| AdjustedForecastedQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionForecasted quantity which is either auto-calculated or overwritten by a user with edit access. The user-defined value is retained along with the auto-calculated value.NoteAdjustedForecastQuantity cannot be updated for past schedules. |
| AdjustedForecastedRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionForecasted revenue which is either auto-calculated or overwritten by a user with edit access. The user-defined value is retained along with the auto-calculated value.NoteAdjustedForecastRevenue cannot be updated for past schedules. |
| AdjustmentComments | TypetextareaPropertiesNillableDescriptionUser-defined notes stating the reason for a manual adjustment.NoteAdjusted comments can be updated along with either AdjustedForecastedQuantity or AdjustedForecastedRevenue. |
| CurrentOrdersQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionCalculated quantity of all active orders for this account in the current period. |
| CurrentOrdersRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionCalculated revenue of all active orders for this account in the current period. |
| ForecastedQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionAuto-calculated quantity based on forecast formula and configurations. |
| ForecastedRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionAuto-calculated revenue based on forecast formula and configurations. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicator of whether the record is part of the forecast display period or not. |
| LastCalculatedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate when the value was last calculated, either due to rolling over or through recalculation of forecast. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the record. |
| OpportunityQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionCalculated quantity of all active opportunities for this account in the current period. |
| OpportunityRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionCalculated revenue of all active opportunities for this account in the current period. |
| PastOrdersQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionCalculated quantity of all active orders for this account in the last forecast period. |
| PastOrdersRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionCalculated revenue of all active orders for this account in the last forecast period. |
| PeriodId | TypereferencePropertiesFilter, Group, SortDescriptionID of the period as derived from the Period entity based on the fiscal year. |
| SalesAgreementPlannedQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionCalculated quantity for all active sales agreements for this account in the current period. This is calculated on a pro-rata basis if the sales agreement period does not coincide with the forecast display period. |
| SalesAgreementPlannedRevenue | TypedoublePropertiesFilter, Nillable, SortDescriptionCalculated revenue for all active sales agreements for this account in the current period. This is calculated on a pro-rata basis if the sales agreement period does not coincide with the forecast display period. |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate on which the period starts. |
