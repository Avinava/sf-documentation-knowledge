---
title: "ForecastingGroup"
domain: object-reference
topic: forecastinggroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.659Z
estimatedTokens: 609
keywords: [ForecastingGroup, groups, roll, forecast, totals, forecasts, group, industry, sales, API, version, 60.0, later, Calls, Special]
---

# ForecastingGroup

> Represents groups used to roll up forecast totals on the forecasts
         page. For example, group forecasts by industry or sales type. This object is available
      in API version 60.0 and later.

# ForecastingGroup

Represents groups used to roll up forecast totals on the forecasts page. For example, group forecasts by industry or sales type. This object is available in API version 60.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Available for forecast types created in Spring ‘24 or later and that are based on the Opportunity and Opportunity Product objects.

You can only add groups to new forecast types.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer (API) name of the forecast group. |
| DisplayPosition | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order in which forecasting dimensions are displayed on the forecasts page. Each value is unique to a dimension. |
| ForecastingTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the forecast type associated with the forecasting group.This field is a relationship field.Relationship NameForecastingTypeRefers ToForecastingType |
| GroupField | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe field name of the custom picklist used as a group. Possible values include custom, single-selection picklists available in SourceObject. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the custom picklist identified as the group. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this object, which displays in Setup. The label is in the default language locale for the organization. If there’s no default language locale, the label is in en_US. |
| SourceObject | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe entity the picklist used for the forecast group is on.Possible values are:OpportunityOpportunityLineItemProduct2 |

## Usage

Each forecast group can apply to only one forecast type.
