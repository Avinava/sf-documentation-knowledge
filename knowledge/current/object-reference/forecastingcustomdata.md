---
title: "ForecastingCustomData"
domain: object-reference
topic: forecastingcustomdata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.627Z
estimatedTokens: 605
keywords: [ForecastingCustomData, forecast, data, external, sources, display, forecasts, risk, year’s, revenue, API, version, 58.0, later, Calls]
---

# ForecastingCustomData

> Represents forecast data from external sources to display in the
         forecasts page. For example, risk or last year’s revenue. This object is available in
      API version 58.0 and later.

# ForecastingCustomData

Represents forecast data from external sources to display in the forecasts page. For example, risk or last year’s revenue. This object is available in API version 58.0 and later.

This object doesn’t support forecast rollups or adjustments. Number and currency columns are supported only.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Available in Enterprise Edition and above, and in Professional Edition with an add-on license. Access to this object requires the Manage Forecasts Custom Data user permission.

## Fields

| Field | Details |
| --- | --- |
| ForecastOwnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the forecast owner. This field is a relationship field.Relationship NameForecastOwnerRelationship TypeLookupRefers ToUser |
| ForecastingGroupItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf a forecast group is assigned to the forecast type, the ID of the group value that the custom data belongs to. This field is a relationship field. Available in API version 60.0 and later.Relationship NameForecastingGroupItemRelationship TypeLookupRefers ToForecastingGroupItem |
| ForecastingTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the forecast type. This field is a relationship field.Relationship NameForecastingTypeRelationship TypeLookupRefers ToForecastingType |
| PeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRead only. Period ID for the custom data. This field is a relationship field.Relationship NamePeriodRelationship TypeLookupRefers ToPeriod |
| ProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe user-defined product family available to forecast on. Each product family is unique. Possible values are:[user-defined]–For example, Electronics or Appliances.None |
| StartDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionThe start of the custom data, expressed as month and year. The date can include any day in a given month. Stored using the first date of the month. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the territory to forecast on. |

## Usage

Each record displays as a custom column on the forecasts summary page.
