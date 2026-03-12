---
title: "ForecastingOwnerAdjustment"
domain: object-reference
topic: forecastingowneradjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.693Z
estimatedTokens: 1951
keywords: [ForecastingOwnerAdjustment, individual, forecast, user’s, adjustment, their, own, including, territory, forecasts, they, via, ForecastingItem, API, versions]
---

# ForecastingOwnerAdjustment

> This object represents an individual forecast user’s adjustment of
			their own forecast, including territory forecasts they own, via a
			ForecastingItem. Available in API versions 33.0 and
			later. This object is different from the ForecastingAdjustment object, which
		represents managers’ adjustments of subordinates’ and child territories’
		forecasts.

# ForecastingOwnerAdjustment

This object represents an individual forecast user’s adjustment of their *own* forecast, including territory forecasts they own, via a ForecastingItem. Available in API versions 33.0 and later. This object is different from the ForecastingAdjustment object, which represents managers’ adjustments of *subordinates’* and child territories’ forecasts.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency code of the adjustment. If omitted, the default is the importing user’s personal currency. |
| ForecastCategoryName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe category within the sales cycle that an opportunity is assigned to based on its opportunity stage. The standard forecast categories are Pipeline, Best Case, Commit, Omitted, and Closed. You can add a Most Likely category and can customize forecast category names in single category rollups. The forecast categories display information for that specific category; for example, Best Case only reflects amounts in the Best Case category. |
| ForecastOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the forecast owner. |
| ForecastingGroupItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf a forecast group is assigned to the forecast type, the ID of the group value that the owner adjustment belongs to. This field is a relationship field. Available in API version 60.0 and later.Relationship NameForecastingGroupItemRelationship TypeLookupRefers ToForecastingGroupItem |
| ForecastingItemCategory | TypepicklistPropertiesCreate, Filter, Group, SortDescriptionThis field indicates which type of forecast rollup the owner adjustment belongs to. Depending on whether your organization uses individual forecast category rollups or cumulative forecast rollups, you have these possible values for the ForecastingItemCategory field.Individual forecast category rollups:PipelineOnly - Rollup from Pipeline opportunities only.BestCaseOnly - Rollup from Best Case opportunities only. Adjustable.MostLikelyOnly - Rollup from Most Likely opportunities only. Adjustable.CommitOnly - Rollup from Commit opportunities only. Adjustable.Cumulative forecast rollups:OpenPipeline - Rollup from Pipeline + Best Case + Most Likely + Commit opportunities.BestCaseForecast - Rollup from Best Case + Most Likely + Commit + Closed opportunities. Adjustable.MostLikelyForecast - Rollup from Most Likely + Commit + Closed opportunities. Adjustable.CommitForecast - Rollup from Commit + Closed opportunities. Adjustable.Either cumulative or individual forecast category rollups:ClosedOnly - Rollup from Closed opportunities only.The ForecastingItemCategory field differs from the ForecastCategoryName field.The ForecastCategoryName field represents the forecast category of the underlying opportunities rolling up to forecast amounts. In organizations using cumulative forecast rollups, the ForecastCategoryName field can be null because the cumulative forecast amounts include opportunities from multiple forecast categories.The new ForecastingItemCategory field represents the type of rollup a forecast amount or adjustment is from. In organizations using individual forecast category columns, it contains the individual forecast rollup categories. In organizations using cumulative forecast rollups, it contains the cumulative rollup categories.When inserting owner adjustments, the values you insert for ForecastCategoryName and ForecastingItemCategory must be compatible with each other. In organizations using cumulative forecast rollups, the ForecastCategoryName is nillable. These pairs are the valid pairs.Individual forecast category rollups:ForecastCategoryName: BestCase, ForecastingItemCategory: BestCaseOnlyForecastCategoryName: Commit, ForecastingItemCategory: CommitOnlyCumulative forecast category rollups:ForecastCategoryName: null, ForecastingItemCategory: BestCaseForecastForecastCategoryName: null, ForecastingItemCategory: CommitForecast |
| ForecastingItemId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the related ForecastingItem. |
| ForecastingTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the related ForecastingType. |
| IsAmount | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, then the adjustment is made in a revenue amount. If false, then IsQuantity must be true. |
| IsQuantity | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, then the adjustment is made in a quantity amount. If false, then IsAmount must be true. |
| OwnerAdjustedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe revenue amount of an individual forecast item, after an adjustment. |
| OwnerAdjustedQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe quantity amount of an individual forecast item, after an adjustment. |
| OwnerAdjustmentNote | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA text note providing information about the adjustment. The maximum length is 255 characters. This field does not appear in reports. |
| PeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPeriod ID for the adjustment. Read only. |
| ProductFamily | TypepicklistPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe Product Family for the adjustment. Read only. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe start of the adjustment, expressed as month and year. The date can include any day in a given month. Stored using the first date of the month. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the territory to forecast on. Available in API version 43.0 and later. |

## Usage

Use this object to obtain a user’s adjustment details for a specified ForecastingItem in their own forecast.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Beginning with API version 30.0, organizations can have more than one forecasting type enabled. The ForecastingQuota, ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingItem, and ForecastingFact objects can all have records with different ForecastingTypeId values. Use the ForecastingType object to determine the ID for each forecast type and then filter ForecastingQuota, ForecastingAdjustment, ForecastingItem, or ForecastingFact records as necessary.

[ForecastingOwnerAdjustmentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- ForecastingOwnerAdjustmentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
