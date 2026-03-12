---
title: "AccountForecastAdjustment"
domain: mfg-api-devguide
topic: accountforecastadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.450Z
estimatedTokens: 542
keywords: [AccountForecastAdjustment, manual, adjustments, made, forecast, particular, account, API, version, 47.0, later, Calls]
---

# AccountForecastAdjustment

> Represents the manual adjustments made to forecast values for a particular
      account. This object is available in API version 47.0 and later.

# AccountForecastAdjustment

Represents the manual adjustments made to forecast values for a particular account. This object is available in API version 47.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| AccountProdPeriodForecastId | TypereferencePropertiesFilter, Group, SortDescriptionLookup to the account product period ID to which adjustments are made for forecast. |
| AdjustedById | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who makes the adjustment. |
| AdjustedByName | TypestringPropertiesFilter, Group, SortDescriptionName of the user who makes the adjustment. |
| AdjustmentComments | TypetextareaPropertiesNillableDescriptionNotes provided by the user stating reason for adjustment.NoteAdjusted comments can be updated along with either AdjustedForecastedQuantity or AdjustedForecastedRevenue. |
| AdjustmentType | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionStates whether adjustment is made to forecast quantity or forecast revenue.Possible values are:QuantityRevenueNoteTo reset the adjusted quantity or adjusted revenue, deduct 999 from the value. This will reset the adjusted forecast quantity or adjusted forecast revenue to the auto-calculated value. |
| FromValue | TypedoublePropertiesFilter, Nillable, SortDescriptionValue before adjustment. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicator of whether the adjustment is recorded as part of the edit history or not. Only last three changes, including the auto-calculated value are recorded. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was viewed. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the record. |
| ToValue | TypedoublePropertiesFilter, Nillable, SortDescriptionValue after adjustment. |
