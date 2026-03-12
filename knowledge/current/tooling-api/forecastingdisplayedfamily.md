---
title: "ForecastingDisplayedFamily"
domain: tooling-api
topic: forecastingdisplayedfamily
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.728Z
estimatedTokens: 171
keywords: [ForecastingDisplayedFamily, Represents, product, families, admin, chooses, allow, forecasting, Lightning, Experience., Tooling, API, version, 40.0, later., Supported, SOAP, Calls, REST, HTTP]
---

# ForecastingDisplayedFamily

> Represents the
            product families that an admin chooses to allow forecasting on in Lightning Experience. Available in
            Tooling API version 40.0 and
        later.

# ForecastingDisplayedFamily

Represents the product families that an admin chooses to allow forecasting on in Lightning Experience. Available in Tooling API version 40.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve(),

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| DisplayPosition | TypeintPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe order in which product families are displayed on the forecasts page. Each value is unique to a product family. |
| ProductFamily | TypepicklistPropertiesFilter, Group, SortDescriptionThe product family available to forecast on. Each product family is unique. |
