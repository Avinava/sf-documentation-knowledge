---
title: "SalesAgreementProduct"
domain: mfg-api-devguide
topic: salesagreementproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.202Z
estimatedTokens: 2646
keywords: [SalesAgreementProduct, total, quantity, amount, pricing, product, category, across, time, period, sales, agreement.This, API, version, 47.0]
---

# SalesAgreementProduct

> Represents the total quantity or amount and the default pricing information of
      a product or category across the total time period of the sales agreement.This object is
    available in API version 47.0 and later.

# SalesAgreementProduct

Represents the total quantity or amount and the default pricing information of a product or category across the total time period of the sales agreement.This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualMarginPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe total actual margin amount as a percentage of total actual amount. |
| AreSchedulesCreatedManually | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether schedules are created automatically or manually. |
| CostPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe cost of manufacturing one unit of a product.This field is a calculated field. |
| DiscountPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionPercent of discount offered on the sales price. |
| DisplayName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescription |
| GuidancePrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe guidance price that's calculated using the core pricing rules. This price is used to determine the sales price. |
| InitialPlannedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of the product or category that you initially plan on selling across the sales agreement term. |
| InitialPlannedQtyValue | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe initial quantity of a product planned for sale across schedules in a sales agreement. This field stores initial product quantity in decimals. |
| InitialPlannedQuantity | TypeintPropertiesFilter, Group, SortDescriptionThe total quantity of the product or category that you initially plan on selling across the sales agreement term. |
| IsActualsCalculationProduct | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this product is used for actuals calculations instead of other products with the same product name.The default value is false. |
| IsAddedAfterActivation | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the sales agreement product or category is added after the sales agreement was activated.The default value is 'false'. |
| IsQuantityInDecimals | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the quantities of the sales agreement product are decimal values (true) or integer values (false).The default value is false. |
| IsUnderRevision | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicator of whether the sales agreement product or category is under revision or not. In an under revision state, edits can be made and if approved, the edits are automatically incorporated and the sales agreement is reactivated. |
| LastPricingExecIdentifier | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique identifier for the last price waterfall information. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was viewed. |
| ListPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPrice of a product as specified in a price book. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the product or category. |
| PlannedMarginPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe total planned margin amount as a percentage of total planned amount. |
| PricebookEntryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the referenced price book. |
| ProductCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe product category associated with the sales agreement.This is a relationship field.Relationship NameProductCategoryRelationship TypeLookupRefers ToProductCategory |
| ProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the product. |
| SalesAgreementId | TypereferencePropertiesFilter, Group, SortDescriptionID of the sales agreement to which the product is added. |
| SalesPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPrice per unit of the unit at which you initially decide to sell the product. |
| TotalActualAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionField displaying the sum of actual amounts across all schedules at a given time. |
| TotalActualCostAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the actual cost amounts across all schedules in a sales agreement.This field is a calculated field. |
| TotalActualMarginAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the actual margin amounts across all schedules in a sales agreement.This field is a calculated field. |
| TotalActualQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionField displaying the sum of actual quantities across all schedules at a given time. |
| TotalActualQuantityValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of actual quantities of a product across all schedules in a sales agreement. This field stores the sum of actual quantities in decimals.This field is a calculated field. |
| TotalActualShipmentQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of the actual shipment quantities of a product across all schedules in a sales agreement.This field is a calculated field. |
| TotalClonedActualQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe rolled up cumulative actual quantity based on the cloned actual quantities for each sales agreement product schedule.This field is a calculated field. |
| TotalForecastedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionField displaying the sum of forecasted amounts across all schedules at a given time. |
| TotalForecastedQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionField displaying the sum of forecasted quantities across all schedules at a given time. |
| TotalForecastedQtyValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of forecasted quantities of a product across all schedules in a sales agreement. This field stores the sum of forecasted quantities in decimals.This field is a calculated field. |
| TotalPlannedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionField displaying the sum of planned amounts across all schedules at a given time. |
| TotalPlannedCostAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the planned cost amounts across all schedules in a sales agreement.This field is a calculated field. |
| TotalPlannedMarginAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the planned margin amounts across all schedules in a sales agreement.This field is a calculated field. |
| TotalPlannedQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionField displaying the sum of planned quantities across all schedules at a given time. |
| TotalPlannedQuantityValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of planned quantities of a product across all schedules in a sales agreement. This field stores the sum of planned quantities in decimals.This field is a calculated field. |
| TotalPlannedShipmentQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of the planned shipment quantities of a product across all schedules in a sales agreement.This field is a calculated field. |
| TotalProposedPlannedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionField displaying the sum of planned amounts across all schedules at a given time when the sales agreement is under revision. |
| TotalProposedPlannedQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionField displaying the sum of planned quantities across all schedules at a given time when the sales agreement is under revision. |
| TotalProposedPlnQtyValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of proposed quantities of a product across all schedules in a sales agreement. This field stores the sum of proposed quantities in decimals.This field is a calculated field. |
| TotalUnallocatedOrderQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe sum of the unallocated order quantities of a product across all schedules in a sales agreement.This field is a calculated field. |
| TotalUnallocatedOrderRevenue | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the unallocated order revenue of a product across all schedules in a sales agreement.This field is a calculated field. |
| TotalUnallocatedPlannedQty | TypedoublePropertiesFilter, Nillable, SortDescriptionThe difference between the initial planned quantity value and total planned quantity value of a product that's distributed manually. |

## Associated Objects

This object has the following associated objects. Unless noted, it is available in the same API version as this object.

[SalesAgreementProductChangeEvent](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[SalesAgreementProductHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object. This object is available in API version 49.0 and later.

## Related Topics

- SalesAgreementProductChangeEvent (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_change_event.htm)
- SalesAgreementProductHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
