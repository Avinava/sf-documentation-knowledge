---
title: "SalesAgreementProductSchedule"
domain: mfg-api-devguide
topic: salesagreementproductschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.220Z
estimatedTokens: 2042
keywords: [SalesAgreementProductSchedule, quantity, amount, pricing, product, category, particular, schedule, sales, agreement, API, version, 47.0, later, Calls]
---

# SalesAgreementProductSchedule

> Represents the quantity or amount and the pricing information of a product or
      category for a particular schedule of the sales agreement. This object is available in
    API version 47.0 and later.

# SalesAgreementProductSchedule

Represents the quantity or amount and the pricing information of a product or category for a particular schedule of the sales agreement. This object is available in API version 47.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Fields

| Field | Details |
| --- | --- |
| ActualAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionActual amount per product per schedule of a sales agreement. |
| ActualCostAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe cost of manufacturing the actual quantity of a product. |
| ActualMarginAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe difference between the sales price and cost price for the actual quantity of a product. |
| ActualMarginPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe difference between the sales price and cost price for the actual quantity of a product, expressed as a percentage of the sales price. |
| ActualQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionActual quantity per product per schedule of a sales agreement. |
| ActualQuantityValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe actual quantity of a product for a specific schedule in a sales agreement. This field stores the actual quantity in decimals. |
| ActualShipmentQuantity | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe actual quantity of a product being shipped to a partner. |
| ClonedActualQuantity | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe actual quantity copied over from an agreement from which the current sales agreement product schedule was deep cloned. |
| CostPrice | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe cost of manufacturing one unit of a product. |
| DerivedPlannedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPlanned amount per product per schedule of a sales agreement. |
| DiscountPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionPercent of discount per unit of the product for a specific schedule. |
| EndDate | TypedatePropertiesFilter, Group, SortDescriptionDate on which the schedule ends. |
| ForecastedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionForecasted amount per product per schedule of a sales agreement. |
| ForecastedQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionForecasted Quantity per product per schedule of a sales agreement. |
| ForecastedQuantityValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe forecasted quantity of a product for a specific schedule in a sales agreement. This field stores the forecasted quantity in decimals. |
| IsUnderRevision | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicator of whether the sales agreement product schedule is under revision or not. In an under revision state, edits can be made and if approved, the edits are automatically incorporated and the sales agreement is reactivated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which this record was viewed. |
| MaximumOrderQuantity | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe maximum quantity for a product in a single order. |
| MinimumPurchaseQuantity | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe minimum quantity of a product that a partner must purchase for a specific schedule. |
| MinimumPurchaseRevenue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe minimum revenue of a product that must be generated for a specific schedule. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionUser-defined name of the schedule.NoteMake sure you enter a name that correctly captures the month, quarter, or year for the particular schedule. So, if a schedule is from 15 Aug to 15 Sept, the name by default is August. Name it 15 Aug-15Sep so that actuals are reflected correctly for that schedule. |
| PlannedAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionPlanned amount for a product for a specific schedule. |
| PlannedCostAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe cost of manufacturing the planned quantity of a product. |
| PlannedMarginAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe difference between the sales price and cost price for the planned quantity of a product. |
| PlannedMarginPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionThe difference between the sales price and cost price for the planned quantity of a product, expressed as a percentage of the sales price. |
| PlannedQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionPlanned quantity for a product for a specific schedule. |
| PlannedQuantityValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe planned quantity of a product for a specific schedule in a sales agreement. This field stores the planned quantity in decimals. |
| PlannedShipmentQuantity | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe planned quantity of a product to be shipped to a partner. |
| ProposedCostPrice | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe proposed cost for one unit of a product when the sales agreement is under revision. |
| ProposedDerivedPlannedAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPlanned amount for a product for a specific schedule when the sales agreement is under revision. |
| ProposedDiscountPercentage | TypepercentPropertiesFilter, Nillable, SortDescriptionDiscount per unit per schedule of the product at which you want to sell it when the sales agreement is under revision. |
| ProposedPlannedAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionPlanned amount for a product for a specific schedule when the sales agreement is under revision. |
| ProposedPlannedQuantity | TypeintPropertiesFilter, Group, Nillable, SortDescriptionPlanned quantity for a product for a specific schedule when the sales agreement is under revision. |
| ProposedPlannedQtyValue | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe planned quantity of a product for a specific schedule in a sales agreement that's under revision. This field stores the planned quantity in decimals. |
| ProposedSalesPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPrice per unit per schedule of the product at which you want to sell it when the sales agreement is under revision. |
| SalesAgreementProductId | TypereferencePropertiesFilter, Group, SortDescriptionID of the sales agreement product of which the schedule is a part. |
| SalesPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPrice per unit per schedule of the product at which you want to sell it. |
| StartDate | TypedatePropertiesFilter, Group, SortDescriptionDate on which the schedule starts. |
| UnallocatedOrderQuantity | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe ordered quantity of a product that isn't associated with a sales agreement. |
| UnallocatedOrderRevenue | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe revenue generated from an order that isn't associated with a sales agreement. |

## Associated Object

This object has the following associated object. Unless noted, it is available in the same API version as this object.

[SalesAgreementProductScheduleHistory](atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object. This object is available in API version 49.0 and later.

## Related Topics

- SalesAgreementProductScheduleHistory (atlas.en-us.mfg_api_devguide.meta/mfg_api_devguide/sforce_api_associated_objects_history.htm)
