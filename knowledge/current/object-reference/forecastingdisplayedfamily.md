---
title: "ForecastingDisplayedFamily"
domain: object-reference
topic: forecastingdisplayedfamily
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.630Z
estimatedTokens: 221
keywords: [ForecastingDisplayedFamily, Forecasts, Settings, admin, selects, product, families, users, forecast, Lightning, Experience, API, version, 40.0, later]
---

# ForecastingDisplayedFamily

> Represents the table in Forecasts Settings where an admin selects the
			product families that users can forecast on in Lightning Experience. This object is
		available in API version 40.0 and later.

# ForecastingDisplayedFamily

Represents the table in Forecasts Settings where an admin selects the product families that users can forecast on in Lightning Experience. This object is available in API version 40.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DisplayPosition | TypeintPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe order in which product families are displayed on the forecasts page. Each value is unique to a product family. |
| ProductFamily | TypepicklistPropertiesFilter, Group, SortDescriptionThe product family available to forecast on. Each product family is unique. |
