---
title: "ForecastingFilterCondition"
domain: tooling-api
topic: forecastingfiltercondition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.889Z
estimatedTokens: 829
keywords: [ForecastingFilterCondition, custom, filter, condition, logic, including, excluding, data, opportunity, forecasts, API, version, 55.0, later, SOAP]
---

# ForecastingFilterCondition

> Represents the custom filter condition logic for including or excluding data
         from opportunity forecasts. This object is available in API version 55.0 and later.

# ForecastingFilterCondition

Represents the custom filter condition logic for including or excluding data from opportunity forecasts. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts OR Allow Forecasting permission OR delegated forecast manager status can access this object.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the forecast filter condition. |
| FieldName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the opportunity field to be filtered. |
| ForecastingFilterId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the forecast filter.This is a relationship field.Relationship NameForecastingFilterRelationship TypeLookupRefers ToForecastingFilter |
| ForecastingSourceDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the forecasting source definition.This is a relationship field.Relationship NameForecastingSourceDefinitionRelationship TypeLookupRefers ToForecastingSourceDefinition |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the forecast filter condition. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the forecast filter condition. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label for this object, which displays in Setup. The label is in the default language locale for the organization. If there’s no default language locale, the label is in en_US. |
| Metadata | TypeForecastingFilterConditionPropertiesCreate, Nillable, UpdateDescriptionThe metadata of the forecast filter condition. |
| Operation | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe operator in the filter condition.Possible values are:equalsgreaterOrEqual—greater than or equal togreaterThanlessOrEqual—less than or equal tolessThannotEqual—not equal to |
| SortOrder | TypeintPropertiesFilter, Group, SortDescriptionThe index value for the condition. This value represents the condition in the FilterLogic field on the ForecastingFilter object. For example, 1. |
| Value | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe value of the filter condition. If multiple values are specified, they must be separated by a comma delimiter.NoteIf you have multiple currencies enabled, and add a custom filter on a currency field as part of your forecast type definition, the corporate currency at the time the filter was created is used. If you have a single currency enabled, the absolute value is used in your filter condition. |

## Usage

A forecast type can contain up to three filter conditions.
