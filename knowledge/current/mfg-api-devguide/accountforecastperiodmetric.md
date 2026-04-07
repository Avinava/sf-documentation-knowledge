---
title: "AccountForecastPeriodMetric"
domain: mfg-api-devguide
topic: accountforecastperiodmetric
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:13.363Z
estimatedTokens: 339
keywords: [AccountForecastPeriodMetric, records, account, metrics, vary, period, specific, product, API, 47.0]
---

> Represents records of account metrics which vary by period but are not specific
      for a product. This object is available in API version 47.0 and later.

# AccountForecastPeriodMetric

Represents records of account metrics which vary by period but are not specific for a product. This object is available in API version 47.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Fields

| Field | Details |
| --- | --- |
| AccountForecastId | TypereferencePropertiesFilter, Group, SortDescriptionID of the account forecast record which the period metrics are part of. |
| AccountGrowthPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionExpected or projected rate of growth for the account, for that particular forecast period. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was viewed. |
| MarketGrowthPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionExpected or projected rate of growth for the market, for that particular forecast period. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the record. |
| PeriodId | TypereferencePropertiesFilter, Group, SortDescriptionID of the period as derived from the Period entity based on the fiscal year. |
