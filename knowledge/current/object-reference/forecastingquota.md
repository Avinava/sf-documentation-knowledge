---
title: "ForecastingQuota"
domain: object-reference
topic: forecastingquota
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.703Z
estimatedTokens: 1386
keywords: [ForecastingQuota, individual, user’s, territory’s, quota, time, period, Managed, Quotas, user, permission, creating, updating, deleting, Users]
---

# ForecastingQuota

> This object represents an individual user’s or territory’s quota for
            a specified time period. The Managed Quotas user permission is required for
        creating, updating, or deleting quotas. (Users can only edit their subordinates’ or child
        territories’ quotas, not their own.) The View All Forecasts permission is required to view
        any user's forecast, regardless of the forecast hierarchy. Available in API versions 25.0
        and later. Forecast managers can view the forecasts of subordinates and territories below
        them in the forecast hierarchy.

# ForecastingQuota

This object represents an individual user’s or territory’s quota for a specified time period. The Managed Quotas user permission is required for creating, updating, or deleting quotas. (Users can only edit their subordinates’ or child territories’ quotas, not their own.) The View All Forecasts permission is required to view any user's forecast, regardless of the forecast hierarchy. Available in API versions 25.0 and later. Forecast managers can view the forecasts of subordinates and territories below them in the forecast hierarchy.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe currency code of the quota. If omitted, the default is the importing user’s personal currency. |
| ForecastingGroupItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf a forecast group is assigned to the forecast type, the ID of the group value that the quota belongs to. This field is a relationship field. Available in API version 60.0 and later.Relationship NameForecastingGroupItemRelationship TypeLookupRefers ToForecastingGroupItem |
| ForecastingTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related ForecastingType. |
| IsAmount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, then the adjustment is made in a revenue amount. If false, then IsQuantity must be true. This field is available in API version 28.0 and later. |
| IsQuantity | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, then the adjustment is made in a quantity amount. If false, then IsAmount must be true. This field is available in API version 28.0 and later. |
| PeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPeriod ID for the quota. Read only. |
| ProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe product family for the quota. This field is available in API version 29.0 and later. |
| QuotaAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe revenue quota amount for an individual user or territory and for a specific period. |
| QuotaOwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID that identifies the quota owner. |
| QuotaQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity quota amount for an individual user and for a specific period. This field is available in API version 28.0 and later. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe start of the quota, expressed as month and year. The date can include any day in a given month. Stored using the first date of the month. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the territory to forecast on. Available in API version 43.0 and later. |
|  |  |

## Usage

Use this object to get an individual user’s or territory’s quota for a specified time period.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Beginning with API version 30.0, organizations can have more than one forecasting type enabled. The ForecastingQuota, ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingItem, and ForecastingFact objects can all have records with different ForecastingTypeId values. Use the ForecastingType object to determine the ID for each forecast type and then filter ForecastingQuota, ForecastingAdjustment, ForecastingItem, or ForecastingFact records as necessary.

#### See Also

-   [ForecastingAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingadjustment.htm "This object represents an individual forecast manager’s adjustment for a subordinate’s or child territory’s forecast via a ForecastingItem. Available in API versions 26.0 and later. This object is different from the ForecastingOwnerAdjustment object, which represents forecast users’ adjustments of their own forecasts, including territory forecasts they own.")

-   [ForecastingFact](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingfact.htm "This object is read-only and links a ForecastingItem with its opportunities, such as opportunities that share the same owner or forecast category and have a closing date within the period of the forecasting item. Available in API versions 26 and greater.")

-   [ForecastingItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingitem.htm "This object is read-only used for individual forecast amounts. Users see amounts based on their perspectives and forecast roles. The amounts users see include one of these values when forecasting in revenue: AmountWithoutAdjustments, AmountWithoutManagerAdjustment, ForecastAmount, OwnerOnlyAmount. The amounts users see include one of these values when forecasting in quantity: QuantityWithoutAdjustments, QuantityWithoutManagerAdjustment, ForecastQuantity, OwnerOnlyQuantity. Available in API version 26.0 and later.")

## Related Topics

- ForecastingAdjustment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingadjustment.htm)
- ForecastingFact (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingfact.htm)
- ForecastingItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingitem.htm)
