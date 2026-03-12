---
title: "ForecastingFact"
domain: object-reference
topic: forecastingfact
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.638Z
estimatedTokens: 1466
keywords: [ForecastingFact, read-only, links, ForecastingItem, opportunities, share, owner, forecast, category, closing, date, period, forecasting, item, API]
---

# ForecastingFact

> This object is read-only and links a ForecastingItem with its
   opportunities, such as opportunities that share the same owner or forecast category and have a
   closing date within the period of the forecasting item. Available in API versions 26 and
  greater.

# ForecastingFact

This object is read-only and links a ForecastingItem with its opportunities, such as opportunities that share the same owner or forecast category and have a closing date within the period of the forecasting item. Available in API versions 26 and greater.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only standard users with the View All Forecasts or Allow Forecasting permission or delegated forecast manager status can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| ForecastCategoryName | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionA forecast category is the category within the sales cycle to which an opportunity is assigned based on its opportunity stage. The standard forecast categories are Pipeline, Best Case, Commit, Omitted (not included in forecasts), and Closed. Salesforce admins can customize the forecast category names. |
| ForecastedObjectId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionContains the Split ID of the forecasted OpportunitySplit object if the forecast data source is opportunity splits or the OpportunityLineItem ID of the forecasted opportunity if the data source is product families. If the data source is product families and the opportunity has no line item, this field is null. If the forecast data source is opportunities, this field is null. This field is available in API version 29 and later. Read-only. |
| ForecastedSubObjectId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPossible values:If the forecast data source is OpportunityLineItemSplit, and the opportunity has line items and line item splits, then this field contains the ID of the forecasted OpportunityLineItemSplit object.If the forecast data source is OpportunityLineItemSplit, and the opportunity has line items but no line item splits, this field contains the ID of the forecasted OpportunitySplit object.If the forecast data source is OpportunityLineItemSchedule, this field contains the OpportunityLineItemSchedule ID of the forecasted opportunity.If the forecast data source is OpportunityLineItemSplit and the opportunity has no line item, this field is null.If the forecast data source is OpportunityLineItemSchedule and the opportunity has no line item, this field is null.This field is available in API version 58.0 and later. Read-only. This field is a polymorphic relationship field.Relationship NamenullRelationship TypeLookupRefers ToOpportunityLineItem, OpportunityLineItemSplit |
| ForecastingItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the ForecastingItem. |
| ForecastingTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related ForecastingType. |
| OpportunityId | TypereferencePropertiesFilter, Group, SortDescriptionThe opportunity ID. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the opportunity owner. |
| PeriodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionPeriod ID for the forecast. |
| TargetValue | TypedoublePropertiesFilter, Nillable, SortDescriptionTarget value of the forecast amount. |
| Territory2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the territory to forecast on. Available in API version 43 and later. |

## Usage

Use this object to get information about opportunities linked to forecasting items.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Beginning with API version 30.0, organizations can have more than one forecasting type enabled. The ForecastingQuota, ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingItem, and ForecastingFact objects can all have records with different ForecastingTypeId values. Use the ForecastingType object to determine the ID for each forecast type and then filter ForecastingQuota, ForecastingAdjustment, ForecastingItem, or ForecastingFact records as necessary.

#### See Also

-   [ForecastingAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingadjustment.htm "This object represents an individual forecast manager’s adjustment for a subordinate’s or child territory’s forecast via a ForecastingItem. Available in API versions 26.0 and later. This object is different from the ForecastingOwnerAdjustment object, which represents forecast users’ adjustments of their own forecasts, including territory forecasts they own.")

-   [ForecastingItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingitem.htm "This object is read-only used for individual forecast amounts. Users see amounts based on their perspectives and forecast roles. The amounts users see include one of these values when forecasting in revenue: AmountWithoutAdjustments, AmountWithoutManagerAdjustment, ForecastAmount, OwnerOnlyAmount. The amounts users see include one of these values when forecasting in quantity: QuantityWithoutAdjustments, QuantityWithoutManagerAdjustment, ForecastQuantity, OwnerOnlyQuantity. Available in API version 26.0 and later.")

-   [ForecastingQuota](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingquota.htm "This object represents an individual user’s or territory’s quota for a specified time period. The Managed Quotas user permission is required for creating, updating, or deleting quotas. (Users can only edit their subordinates’ or child territories’ quotas, not their own.) The View All Forecasts permission is required to view any user's forecast, regardless of the forecast hierarchy. Available in API versions 25.0 and later. Forecast managers can view the forecasts of subordinates and territories below them in the forecast hierarchy.")

## Related Topics

- ForecastingAdjustment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingadjustment.htm)
- ForecastingItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingitem.htm)
- ForecastingQuota (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingquota.htm)
