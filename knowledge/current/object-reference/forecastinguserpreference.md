---
title: "ForecastingUserPreference"
domain: object-reference
topic: forecastinguserpreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.764Z
estimatedTokens: 605
keywords: [ForecastingUserPreference, forecasting, selections, user, made, display, options, date, range, currency, Calls, Special, Access, Rules]
---

# ForecastingUserPreference

> Represents the forecasting selections that a user has made, such as
			display options, date range, forecasting type, and currency.

# ForecastingUserPreference

Represents the forecasting selections that a user has made, such as display options, date range, forecasting type, and currency.

## Supported Calls

create(), describeSObjects(), query(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique system-generated numerical identifier for the user. |
| ForecastingDisplayedTypeId | TypereferencePropertiesCreate, Group, Sort, UpdateDescriptionAn identifier for the forecasting type that’s displayed. |
| ForecastingPeriodDuration | TypeintPropertiesCreate, Group, Nillable, Sort, UpdateDescriptionHow long the forecasting period lasts. |
| ForecastingPeriodType | TypepicklistPropertiesCreate, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe forecasting period’s type. Valid values include: Month, Quarter, Week, or Year |
| ForecastingStartPeriod | TypeintPropertiesCreate, Group, Nillable, Sort, UpdateDescriptionThe date when the forecasting period begins. |
| ForecastingViewCurrency | TypestringPropertiesCreate, Group, Nillable, Sort, UpdateDescriptionThe currency shown on the forecasts page. |
| IsForecastingHideZeroRows | TypebooleanPropertiesCreate, Defaulted on create, Group, Sort, UpdateDescriptionWhether the forecasts page shows zero-value rows. |
| IsForecastingShowQuantity | TypebooleanPropertiesCreate, Defaulted on create, Group, Sort, UpdateDescriptionWhether the forecasts page shows forecast quantity. |
| IsHideForecastingGuidedTour | TypebooleanPropertiesCreate, Defaulted on create, Group, Sort, UpdateDescriptionWhether the forecasts page shows the guided tour. |
| IsHideForecastingQuotaColumn | TypebooleanPropertiesCreate, Defaulted on create, Group, Sort, UpdateDescriptionWhether the forecasts page shows a quota column. |
| IsShowForecastingChangeSignals | TypebooleanPropertiesCreate, Defaulted on create, Group, Sort, UpdateDescriptionWhether the forecasts page shows changes in the last 7 days. |
| IsShowForecastingQuotaAttainment | TypebooleanPropertiesCreate, Defaulted on create, Group, Sort, UpdateDescriptionWhether the forecasts page shows quota attainment information. |
