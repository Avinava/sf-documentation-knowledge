---
title: "AdvAcctForecastAdjPeriod"
domain: mfg-api-devguide
topic: advacctforecastadjperiod
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.521Z
estimatedTokens: 333
keywords: [AdvAcctForecastAdjPeriod, adjustment, period, advanced, account, forecast, API, version, 53.0, later, Calls]
---

# AdvAcctForecastAdjPeriod

> Represents details about the adjustment period of the advanced account
         forecast values. This object is available in API version 53.0 and later.

# AdvAcctForecastAdjPeriod

Represents details about the adjustment period of the advanced account forecast values. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AdjustmentDayCount | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number of days during which forecast adjustments can be made. |
| AdvAccountForecastSetId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe forecast set associated with the advanced account forecast adjustment period.This is a relationship field.Relationship NameAdvAccountForecastSetRelationship TypeLookupRefers ToAdvAccountForecastSet |
| Frequency | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates how frequently the adjustment windows will open.Possible values are:MonthQuarterYear |
| ProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe profile with which the forecast set can be adjusted.This is a relationship field.Relationship NameProfileRelationship TypeLookupRefers ToProfile |
| StartDay | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe day when forecast adjustments can begin. |
