---
title: "ForecastingFilter"
domain: object-reference
topic: forecastingfilter
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.645Z
estimatedTokens: 565
keywords: [ForecastingFilter, custom, filter, including, excluding, data, opportunity, forecasts, API, version, 54.0, later, Calls, Special, Access]
---

# ForecastingFilter

> Represents the custom filter for including or excluding data from
			opportunity forecasts. This object is available in API version 54.0 and
		later.

# ForecastingFilter

Represents the custom filter for including or excluding data from opportunity forecasts. This object is available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts permission OR Allow Forecasting permission OR delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the forecast filter. |
| FilterLogic | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe logic that controls the evaluation of conditions. Only AND is supported. For example, 1 AND 2 AND 3. |
| ForecastingTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the forecast type. Can be linked only to forecast types created in Summer ’21 and later. This is a relationship field.Relationship NameForecastingTypeRelationship TypeLookupRefers ToForecastingType |
| ForecastingTypeSourceId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the forecast type source. Can be linked only to forecast type sources created in Summer ’21 or later and with a forecast source definition with source object of 'Opportunity.' This is a relationship field.Relationship NameForecastingTypeSourceRelationship TypeLookupRefers ToForecastingTypeSource |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the forecast filter. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this object, which displays in Setup. The label is in the default language locale for the organization. If there’s no default language locale, the label is in en_US. |
