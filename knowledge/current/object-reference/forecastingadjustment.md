---
title: "ForecastingAdjustment"
domain: object-reference
topic: forecastingadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.578Z
estimatedTokens: 2326
keywords: [ForecastingAdjustment, individual, forecast, manager’s, adjustment, subordinate’s, child, territory’s, via, ForecastingItem, API, versions, 26.0, later, different]
---

# ForecastingAdjustment

> This object represents an individual forecast manager’s
   adjustment for a subordinate’s or child territory’s forecast via a ForecastingItem.
  Available in API versions 26.0 and later. This object is different from the
  ForecastingOwnerAdjustment object, which represents forecast users’ adjustments of their
   own forecasts, including territory forecasts they own.

# ForecastingAdjustment

This object represents an individual forecast manager’s adjustment for a subordinate’s or child territory’s forecast via a ForecastingItem. Available in API versions 26.0 and later. This object is different from the ForecastingOwnerAdjustment object, which represents forecast users’ adjustments of their *own* forecasts, including territory forecasts they own.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AdjustedAmount | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe revenue amount of an individual forecast item, after an adjustment. |
| AdjustedQuantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe quantity amount of an individual forecast item, after an adjustment. This field is available in API version 28.0 and later. |
| AdjustmentNote | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA text note providing information about the adjustment. The maximum length is 255 characters. This field doesn’t appear in reports. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe currency code of the adjustment. If omitted, the default is the user’s personal currency. |
| ForecastCategoryName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category within the sales cycle that an opportunity is assigned to based on its opportunity stage. The standard forecast categories are Pipeline, Best Case, Commit, Omitted, and Closed. You can add a Most Likely category and can customize forecast category names in single category rollups. The forecast categories display information for that specific category; for example, Best Case only reflects amounts in the Best Case category. |
| ForecastingGroupItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf a forecast group is assigned to the forecast type, the ID of the group value that the manager adjustment belongs to. This field is a relationship field. Available in API version 60.0 and later.Relationship NameForecastingGroupItemRelationship TypeLookupRefers ToForecastingGroupItem |
| ForecastingItemCategory | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionThe category the forecast belongs to.For individual forecast category rollups, the possible values are:PipelineOnly—Rollup from Pipeline opportunities only.BestCaseOnly—Rollup from Best Case opportunities only. The value in this category is adjustable.MostLikelyOnly—Rollup from Most Likely opportunities only. The value in this category is adjustable.CommitOnly—Rollup from Commit opportunities only. The value in this category is adjustable.For cumulative forecast rollups, the possible values are:OpenPipeline—Rollup from Pipeline, Best Case, Most Likely, and Commit opportunities.BestCaseForecast—Rollup from Best Case, Most Likely, Commit, and Closed opportunities. The value in this category is adjustable.MostLikelyForecast—Rollup from Most Likely, Commit, and Closed opportunities. The value in this category is adjustable.CommitForecast—Rollup from Commit and Closed opportunities. The value in this category is adjustable.For either cumulative or individual forecast category rollups, the possible values are:ClosedOnly —Rollup from Closed opportunities only. |
| ForecastingItemId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related ForecastingItem. |
| ForecastingTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related ForecastingType. |
| IsAmount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, then the adjustment is made in a revenue amount. If false, then IsQuantity must be true. This field is available in API version 28.0 and later. |
| IsQuantity | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, then the adjustment is made in a quantity amount. If false, then IsAmount must be true. This field is available in API version 28.0 and later. |
| OwnerId | TypereferencePropertiesCreate,Defaulted on create, Filter, Group, SortDescriptionThe ID of the forecast owner. |
| PeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPeriod ID for the adjustment. Read only. |
| ProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe Product Family for the adjustment. Read only. This field is available in API version 29.0 and later. |
| StartDate | TypedatePropertiesCreate, Filter, Group, SortDescriptionThe start of the adjustment, expressed as month and year. The date can include any day in a given month. Stored using the first date of the month. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the territory to forecast on. Available in API version 43.0 and later. |

## Usage

Use this object to obtain a manager’s adjustment detail for a specified ForecastingItem. The ForecastingAdjustment object is visible to all users, but only forecast managers and users above them in the forecast hierarchy can read or write ForecastingAdjustment records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Beginning with API version 30.0, organizations can have more than one forecasting type enabled. The ForecastingQuota, ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingItem, and ForecastingFact objects can all have records with different ForecastingTypeId values. Use the ForecastingType object to determine the ID for each forecast type and then filter ForecastingQuota, ForecastingAdjustment, ForecastingItem, or ForecastingFact records as necessary.

The ForecastingItemCategory field differs from the ForecastCategoryName field.

-   The ForecastCategoryName field represents the forecast category of the *underlying opportunities* rolling up to forecast amounts. In organizations using cumulative forecast rollups, the ForecastCategoryName field can be null because the cumulative forecast amounts include opportunities from multiple forecast categories.
-   The new ForecastingItemCategory field represents the *type of rollup* a forecast amount or adjustment is from. In organizations using individual forecast category columns, it contains the individual forecast rollup categories. In organizations using cumulative forecast rollups, it contains the cumulative rollup categories.

When inserting manager adjustments, the values you insert for ForecastCategoryName and ForecastingItemCategory must be compatible with each other. In organizations using cumulative forecast rollups, the ForecastCategoryName is nillable. The following pairs are valid.

For individual forecast category rollups:

-   ForecastCategoryName: BestCase, ForecastingItemCategory: BestCaseOnly
-   ForecastCategoryName: MostLikely, ForecastingItemCategory: MostLikelyOnly
-   ForecastCategoryName: Commit, ForecastingItemCategory: CommitOnly

For cumulative forecast category rollups:

-   ForecastCategoryName: null, ForecastingItemCategory: BestCaseForecast
-   ForecastCategoryName: null, ForecastingItemCategory: MostLikelyForecast
-   ForecastCategoryName: null, ForecastingItemCategory: CommitForecast

#### See Also

-   [ForecastingFact](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingfact.htm "This object is read-only and links a ForecastingItem with its opportunities, such as opportunities that share the same owner or forecast category and have a closing date within the period of the forecasting item. Available in API versions 26 and greater.")

-   [ForecastingItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingitem.htm "This object is read-only used for individual forecast amounts. Users see amounts based on their perspectives and forecast roles. The amounts users see include one of these values when forecasting in revenue: AmountWithoutAdjustments, AmountWithoutManagerAdjustment, ForecastAmount, OwnerOnlyAmount. The amounts users see include one of these values when forecasting in quantity: QuantityWithoutAdjustments, QuantityWithoutManagerAdjustment, ForecastQuantity, OwnerOnlyQuantity. Available in API version 26.0 and later.")

-   [ForecastingQuota](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingquota.htm "This object represents an individual user’s or territory’s quota for a specified time period. The Managed Quotas user permission is required for creating, updating, or deleting quotas. (Users can only edit their subordinates’ or child territories’ quotas, not their own.) The View All Forecasts permission is required to view any user's forecast, regardless of the forecast hierarchy. Available in API versions 25.0 and later. Forecast managers can view the forecasts of subordinates and territories below them in the forecast hierarchy.")

## Related Topics

- ForecastingFact (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingfact.htm)
- ForecastingItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingitem.htm)
- ForecastingQuota (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingquota.htm)
