---
title: "ForecastingGroupItem"
domain: object-reference
topic: forecastinggroupitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.663Z
estimatedTokens: 417
keywords: [ForecastingGroupItem, picklist, forecasting, group, forecast, identifies, industry, opportunity, part, that’s, chosen, API, version, 60.0, later]
---

# ForecastingGroupItem

> Represents the value within the picklist that is specified as the
         forecasting group for a forecast type. For example, if you have a forecasting group that
         identifies the industry an opportunity is part of, this object represents the value in the
         the industry picklist that’s chosen to be part of the group. This object is available
      in API version 60.0 and later.

# ForecastingGroupItem

Represents the value within the picklist that is specified as the forecasting group for a forecast type. For example, if you have a forecasting group that identifies the industry an opportunity is part of, this object represents the value in the the industry picklist that’s chosen to be part of the group. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DisplayPosition | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIndicates the order in which the value displays among other values in the group on the forecasts page. |
| ForecastingGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThis field is a relationship field.Relationship NameForecastingGroupRelationship TypeLookupRefers ToForecastingGroup |
| SourceValueApiName | TypestringPropertiesCreate, Filter, Nillable, SortDescriptionThe API name that’s derived from the group value. |
| SourceValueLabel | TypestringPropertiesFilter, Nillable, SortDescriptionThe label that’s derived from the group value. |
| SourceValueTranslatedLabel | TypestringPropertiesFilter, Nillable, SortDescriptionIf one exists, the translated version of the group value. |

## Usage

New forecast types based on opportunities or opportunity products can include a forecasting group. This group is based on a custom, single-selection picklist that’s defined on the Opportunity, OpportunityLineItem, or Product2 objects. The picklist that’s chosen for the group can contain more values than are needed for the type.
