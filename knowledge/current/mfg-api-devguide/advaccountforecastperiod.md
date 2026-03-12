---
title: "AdvAccountForecastPeriod"
domain: mfg-api-devguide
topic: advaccountforecastperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.493Z
estimatedTokens: 279
keywords: [AdvAccountForecastPeriod, periods, advanced, account, forecasting, applied, API, version, 53.0, later, Calls]
---

# AdvAccountForecastPeriod

> Represents information about the periods for which advanced account
         forecasting is applied.  This object is available in API version 53.0 and later.

# AdvAccountForecastPeriod

Represents information about the periods for which advanced account forecasting is applied. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisplayDuration | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of periods of the period group for which forecast is generated and displayed. |
| ForecastPeriodGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe forecast period group associated with the forecast period.This is a relationship field.Relationship NameForecastPeriodGroupRelationship TypeLookupRefers ToAdvAcctForecastPeriodGroup |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe sequence number of the period in the associated advanced account forecast period group. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the forecast period.Possible values are:MonthQuarterYear |
