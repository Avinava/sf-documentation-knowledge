---
title: "ForecastingUserPreference"
domain: sfFieldRef
topic: forecastinguserpreference
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.622Z
estimatedTokens: 498
keywords: [ForecastingUserPreference, forecasting, selections, user, made, display, options, date, range, currency]
---

# ForecastingUserPreference

> Represents the forecasting selections that a user has made, such as
			display options, date range, forecasting type, and currency.

# ForecastingUserPreference

Represents the forecasting selections that a user has made, such as display options, date range, forecasting type, and currency.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingUserPreference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastinguserpreference.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ExternalId | External ID | string |  | 255 |  |  |
| ForecastAnythingPeriodDuration | Forecast Anything Period Duration | int | 9 |  |  |  |
| ForecastAnythingPeriodType | Forecast Anything Period Type | picklist |  | 255 |  |  |
| ForecastAnythingStartPeriod | Forecast Anything Start Period | int | 9 |  |  |  |
| ForecastingDisplayedTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| ForecastingPeriodDuration | Period Duration | int | 9 |  |  |  |
| ForecastingPeriodType | Period Type | picklist |  | 255 |  |  |
| ForecastingStartPeriod | Period Start | int | 9 |  |  |  |
| ForecastingViewCurrency | Viewing Currency | string |  | 40 |  |  |
| Id | Forecasting User Preference ID | id |  | 18 |  |  |
| IsForecastAnythingAggrEnabled | Aggregate Forecasting Anything | boolean |  |  |  |  |
| IsForecastingHideZeroRows | Hide Zero Rows | boolean |  |  |  |  |
| IsForecastingShowQuantity | Show Quantity | boolean |  |  |  |  |
| IsHideForecastingGuidedTour | Hide Guided Tour | boolean |  |  |  |  |
| IsHideForecastingQuotaColumn | Hide Quota Column | boolean |  |  |  |  |
| IsShowForecastingChangeSignals | Show Change Signals | boolean |  |  |  |  |
| IsShowForecastingQuotaAttainment | Show Quota Attainment | boolean |  |  |  |  |
| IsShowForecastingRoundedAmounts | Show Rounded Amounts | boolean |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
