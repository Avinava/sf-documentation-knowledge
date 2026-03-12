---
title: "ForecastingItem"
domain: object-reference
topic: forecastingitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.680Z
estimatedTokens: 3154
keywords: [ForecastingItem, read-only, individual, forecast, amounts, Users, their, perspectives, roles, include, forecasting, revenue, AmountWithoutAdjustments, AmountWithoutManagerAdjustment, ForecastAmount]
---

# ForecastingItem

> This object is read-only used for individual forecast amounts. Users
   see amounts based on their perspectives and forecast roles. The amounts users see include
  one of these values when forecasting in revenue: AmountWithoutAdjustments,
   AmountWithoutManagerAdjustment, ForecastAmount,
   OwnerOnlyAmount. The amounts users see include one of these values when
  forecasting in quantity: QuantityWithoutAdjustments,
   QuantityWithoutManagerAdjustment, ForecastQuantity,
   OwnerOnlyQuantity. Available in API version 26.0 and later.

# ForecastingItem

This object is read-only used for individual forecast amounts. Users see amounts based on their perspectives and forecast roles. The amounts users see include one of these values when forecasting in revenue: AmountWithoutAdjustments, AmountWithoutManagerAdjustment, ForecastAmount, OwnerOnlyAmount. The amounts users see include one of these values when forecasting in quantity: QuantityWithoutAdjustments, QuantityWithoutManagerAdjustment, ForecastQuantity, OwnerOnlyQuantity. Available in API version 26.0 and later.

Other users can see the ForecastingItem object, but not its records. See these access guidelines.

-   Users with the “View All Forecasts” permission have access to all ForecastingItem fields.
-   Users without the “View All Forecasts” permission have access to all fields for their own subordinates and child territories.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AmountWithoutAdjustments | TypedoublePropertiesFilter, Sort, NillableDescriptionThe sum of a person’s owned revenue opportunities and the person's subordinates’ and child territories’ opportunities, without adjustments. Subordinates include everyone reporting up to a person in the role-based forecast hierarchy. This amount is visible only on reports. |
| AmountWithoutManagerAdjustment | TypedoublePropertiesFilter, Sort, NillableDescriptionThe forecast number as seen by the forecast owner. This number is the sum of the owner’s revenue opportunities and the owner’s subordinates’ and child territories’ opportunities, including adjustments made by the forecast owner on the owner's or subordinates’ and child territories’ forecasts. It doesn’t include adjustments made by forecast managers above the owner in the forecast hierarchy. |
| AmountWithoutOwnerAdjustment | TypedoublePropertiesFilter, Sort, NillableDescriptionThe forecast amount as seen by the forecast owner without the owner's adjustment. This amount is the sum of the subordinate's and child territories’ opportunities, including adjustments made by their manager or by the subordinate themselves, plus the rollup of the owner's own opportunities. It doesn’t include adjustments made by the forecast owner. |
| ForecastAmount | TypedoublePropertiesFilter, Sort, NillableDescriptionThe revenue forecast from the forecast manager’s perspective and the sum of the owner’s and subordinates’ and child territories’ opportunities, including all forecast adjustments. |
| ForecastCategoryName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionA forecast category is the category within the sales cycle to which an opportunity is assigned based on its opportunity stage. The standard forecast categories are Pipeline, Best Case, Commit, Omitted (not included in forecasts), and Closed. Salesforce admins can add a Most Likely category and can customize the forecast category names in single category rollups. Change the forecast category name only. Changing a forecast category’s API name can have unintended results. |
| ForecastQuantity | TypedoublePropertiesFilter, Sort, NillableDescriptionThe quantity forecast from the forecast manager’s perspective and the sum of the owner’s and subordinates’ opportunities, including all forecast adjustments. This field is available in API version 28 and later. |
| ForecastingGroupItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf a forecast group is assigned to the forecast type, the ID of the group value that the forecast total belongs to. This field is a relationship field. Available in API version 60.0 and later.Relationship NameForecastingGroupItemRelationship TypeLookupRefers ToForecastingGroupItem |
| ForecastingItemCategory | TypepicklistPropertiesFilter, Group, SortDescriptionThis field indicates which type of forecast rollup the forecasting item belongs to. Depending on whether your organization uses individual forecast category rollups or cumulative forecast rollups, you have these possible values for the ForecastingItemCategory field.Individual forecast category rollups:PipelineOnly - Rollup from Pipeline opportunities only.BestCaseOnly - Rollup from Best Case opportunities only. Adjustable.MostLikelyOnly - Rollup from Most Likely opportunities only. Adjustable.CommitOnly - Rollup from Commit opportunities only. Adjustable.Cumulative forecast rollups:OpenPipeline - Rollup from Pipeline + Best Case + Most Likely + Commit opportunities.BestCaseForecast - Rollup from Best Case + Most Likely + Commit + Closed opportunities. Adjustable.MostLikelyForecast - Rollup from Most Likely + Commit + Closed opportunities. Adjustable.CommitForecast - Rollup from Commit + Closed opportunities. Adjustable.Either cumulative or individual forecast category rollups:ClosedOnly - Rollup from Closed opportunities only.The ForecastingItemCategory field differs from the ForecastCategoryName field.The ForecastCategoryName field represents the forecast category of the underlying opportunities rolling up to forecast amounts. In organizations using cumulative forecast rollups, the ForecastCategoryName field can be null because the cumulative forecast amounts include opportunities from multiple forecast categories.The new ForecastingItemCategory field represents the type of rollup a forecast amount or adjustment is from. In organizations using individual forecast category columns, it contains the individual forecast rollup categories. In organizations using cumulative forecast rollups, it contains the cumulative rollup categories. |
| ForecastingTypeId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related ForecastingType. |
| HasAdjustment | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionA flag that indicates the forecasting item includes a manager adjustment. This flag is true only when the item includes an adjustment and the user performing the query has read access to the adjustment. |
| HasOwnerAdjustment | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionA flag that indicates the forecasting item includes an owner adjustment. This flag is true only when the item includes an adjustment and the user performing the query has read access to the adjustment. Available in API version 33.0 and later. |
| IsAmount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionTrue indicates that the adjustment is made in a revenue amount. If false, then IsQuantity must be true. This field is available in API version 28.0 and later. |
| IsQuantity | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionTrue indicates that the adjustment is made in a quantity amount. If false, then IsAmount must be true. This field is available in API version 28.0 and later. |
| IsUpToDate | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionA flag indicating whether a specific forecasting item reflects current information. For example, if users are making adjustments that are in process, the item isn’t up to date. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the forecast owner. |
| OwnerOnlyAmount | TypedoublePropertiesFilter, Sort, NillableDescriptionThe sum of a person’s revenue opportunities, without adjustments. |
| OwnerOnlyQuantity | TypedoublePropertiesFilter, Sort, NillableDescriptionThe sum of a person’s quantity opportunities, without adjustments. This field is available in API version 28.0 and later. |
| ParentForecastingItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the ForecastingItem that the current item rolls up to. |
| PeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPeriod ID for the forecast. |
| ProductFamily | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe product family of the forecast item. This field is available in API version 29.0 and later. Read only. |
| QuantityWithoutAdjustments | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of a person’s owned quantity opportunities and also his or her subordinates’ opportunities, without adjustments. Subordinates include everyone reporting up to a person in the forecast hierarchy. This field is available in API version 28.0 and later. |
| QuantityWithoutManagerAdjustment | TypedoublePropertiesFilter, Nillable, SortDescriptionThe forecast number as seen by the forecast owner. This number is the sum of the owner’s quantity opportunities and subordinates’ opportunities, including adjustments made on the subordinates’ forecasts. It doesn’t include adjustments made by forecast managers above the owner in the forecast hierarchy. This field is available in API version 28 and later. |
| QuantityWithoutOwnerAdjustment | TypedoublePropertiesFilter, Nillable, SortDescriptionThe forecast quantity as seen by the forecast owner without the owner's adjustment. This number is the sum of the subordinate's opportunities, including adjustments made by their manager or by the subordinate themselves, plus the rollup of the owner's own opportunities. It doesn’t include adjustments made by the forecast owner. This field is available in API version 38.0 and later. |
| SubordinateOverrides | TypeintPropertiesFilter, Group, SortDescriptionThe total number of adjustments made to a forecast down the hierarchical chain. For example, User A has a forecast without adjustments. If User A adjusts User B’s forecast, User A’s SubordinateOverrides value is 1. Then if User B adjusts User C’s forecast, User A’s SubordinateOverrides value is 2. If User A removes his adjustment from User B’s forecast, User A’s SubordinateOverrides value is 1.This field is available in API version 38.0 and later. |
| Territory2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the territory to forecast on. Available in API version 43.0 and later. |

## Usage

Use this object to obtain individual forecast amounts, either with or without adjustments, based on a user’s perspective and forecast role. The ForecastingItem object is visible to all users, but only forecast managers and users above them in the forecast hierarchy can read or write ForecastingAdjustment records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Beginning with API version 30.0, organizations can have more than one forecasting type enabled. The ForecastingQuota, ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingItem, and ForecastingFact objects can all have records with different ForecastingTypeId values. Use the ForecastingType object to determine the ID for each forecast type and then filter ForecastingQuota, ForecastingAdjustment, ForecastingItem, or ForecastingFact records as necessary.

#### See Also

-   [ForecastingAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingadjustment.htm "This object represents an individual forecast manager’s adjustment for a subordinate’s or child territory’s forecast via a ForecastingItem. Available in API versions 26.0 and later. This object is different from the ForecastingOwnerAdjustment object, which represents forecast users’ adjustments of their own forecasts, including territory forecasts they own.")

-   [ForecastingFact](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingfact.htm "This object is read-only and links a ForecastingItem with its opportunities, such as opportunities that share the same owner or forecast category and have a closing date within the period of the forecasting item. Available in API versions 26 and greater.")

-   [ForecastingQuota](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingquota.htm "This object represents an individual user’s or territory’s quota for a specified time period. The Managed Quotas user permission is required for creating, updating, or deleting quotas. (Users can only edit their subordinates’ or child territories’ quotas, not their own.) The View All Forecasts permission is required to view any user's forecast, regardless of the forecast hierarchy. Available in API versions 25.0 and later. Forecast managers can view the forecasts of subordinates and territories below them in the forecast hierarchy.")

## Related Topics

- ForecastingAdjustment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingadjustment.htm)
- ForecastingFact (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingfact.htm)
- ForecastingQuota (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingquota.htm)
