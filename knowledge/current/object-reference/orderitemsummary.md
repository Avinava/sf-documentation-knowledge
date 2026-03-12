---
title: "OrderItemSummary"
domain: object-reference
topic: orderitemsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.936Z
estimatedTokens: 5445
keywords: [OrderItemSummary, current, state, product, charge, OrderSummary, Corresponds, order, item, objects, consisting, original, any, change, applicable]
---

# OrderItemSummary

> Represents the current properties and state of a product or charge on an
      OrderSummary. Corresponds to one or more order item objects, consisting of an original object
      and any change objects applicable to it. This object is available in API version 48.0 and
    later.

# OrderItemSummary

Represents the current properties and state of a product or charge on an OrderSummary. Corresponds to one or more order item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustedLineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including line adjustments but not order-lever adjustments or tax, of the OrderItemSummary. This is a calculated field. |
| AdjustedLineAmt​WithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal price of the OrderItemSummary, inclusive of adjustments and tax. This amount is equal to AdjustedLineAmount + TotalAdjustedLineTaxAmount.This is a calculated field. This field is available in API version 49.0 and later. |
| AssetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the associated asset. This field is available in API version 60.0 and later.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for orgs with the multicurrency feature enabled. ISO code for the currency of the OrderSummary associated with the OrderItemSummary.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD.This field is available in API version 49.0 and later. |
| DeliveryEstimationReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique reference ID for the delivery estimation. |
| DeliveryEstimationTimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTimezone in which the estimated delivery times are based. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the OrderItemSummary.This field can be edited. |
| EarliestEstimatedDeliveryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEarliest date when the item is estimated to be delivered. |
| EarliestEstimatedDeliveryTime | TypetimeOnlyPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEarliest time of the day when the item is estimated to be delivered. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionEnd date of the OrderItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| GrossUnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionUnit price, including tax, of the OrderItemSummary. This value is equal to UnitPrice + the amount of tax on the UnitPrice.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field.This field is available in API version 49.0 and later. |
| LastEstimatedDeliveryDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLatest date when the item is estimated to be delivered. |
| LastEstimatedDeliveryTime | TypetimeOnlyPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLatest time of the day when the item is estimated to be delivered. |
| LineNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe order line number assigned to this OrderItemSummary. For example, if this object is the third in the displayed list of OrderItemSummaries belonging to the OrderSummary, this value is 3.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| ListPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionList price of the product represented by this OrderItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| MainOrderItemSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe primary order item summary ID of this order item summary.This field is a relationship field.Relationship NameMainOrderItemSummaryRelationship TypeMaster-detailRefers ToOrderItemSummary (the master object) |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the OrderItemSummary. |
| OrderDeliveryGroup​SummaryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the OrderDeliveryGroupSummary to which this object belongs.This field is a relationship field.Relationship NameOrderDeliveryGroupSummaryRelationship TypeLookupRefers ToOrderDeliveryGroupSummary |
| OrderManagementBillingType | TypeenumPropertiesFilter, Restricted Picklist, SortDescriptionThe type of entitlement, either PPO or GMV, that is used to track Order Summary usage. |
| OrderSummaryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the OrderSummary to which this object belongs.This field is a relationship field.Relationship NameOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| OriginalOrderItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the original order item associated with this summary object. Nillable=true only if the associated order summary is unmanaged. For managed order summaries, nillable=false.This field is a relationship field.Relationship NameOriginalOrderItemRelationship TypeLookupRefers ToOrderItem |
| PricebookEntryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the pricebook entry associated with this OrderItemSummary.This field is available in API version 54.0 and later.This field is a relationship field.Relationship NamePricebookEntryRelationship TypeLookupRefers ToPricebookEntry |
| Product2Id | TypereferencePropertiesFilter, Group, SortDescriptionID of the product represented by this OrderItemSummary.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionProduct code of the product represented by this OrderItemSummary. |
| Quantity | TypedoublePropertiesFilter, SortDescriptionCurrent total quantity of products represented by this order item summary. Equal to QuantityOrdered minus (QuantityCanceled and QuantityReturned).If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| QuantityAllocated | TypedoublePropertiesFilter, SortDescriptionAllocated quantity on this order item summary. This quantity is associated with one or more FulfillmentOrderLineItems.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| QuantityAvailable​ToCancel | TypedoublePropertiesFilter, Nillable, SortDescriptionQuantity that can still be canceled on this OrderItemSummary. Equal to QuantityOrdered minus (QuantityCanceled and QuantityAllocated). This value duplicates QuantityAvailableToFulfill. This is a calculated field. |
| QuantityAvailable​ToFulfill | TypedoublePropertiesFilter, Nillable, SortDescriptionQuantity available to be fulfilled on this OrderItemSummary. Equal to QuantityOrdered minus (QuantityCanceled and QuantityAllocated). This value duplicates QuantityAvailableToCancel. This is a calculated field. |
| QuantityAvailable​ToReship | TypedoublePropertiesFilter, Nillable, SortDescriptionQuantity available to be reshipped on this OrderItemSummary. Equal to QuantityFulfilled minus (QuantityReshipped and QuantityReturnInitiated).This field is available in API version 53.0 and later. This is a calculated field. |
| QuantityAvailable​ToReturn | TypedoublePropertiesFilter, Nillable, SortDescriptionQuantity available to be returned on this OrderItemSummary. Equal to QuantityFulfilled minus QuantityReturnInitiated. This is a calculated field. |
| QuantityCanceled | TypedoublePropertiesFilter, SortDescriptionCanceled quantity on this OrderItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| QuantityFulfilled | TypedoublePropertiesFilter, SortDescriptionFulfilled quantity on this OrderItemSummary. This quantity can no longer be canceled.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| QuantityNetOrdered | TypedoublePropertiesFilter, Nillable, SortDescriptionQuantity available to be allocated on this OrderItemSummary. Equal to QuantityOrdered minus QuantityCanceled. |
| QuantityOrdered | TypedoublePropertiesFilter, SortDescriptionOrdered quantity on this OrderItemSummary. It includes the originally ordered quantity plus any quantity added to the order later.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| QuantityReshipped | TypedoublePropertiesFilter, Nillable, SortDescriptionReshipped quantity on this OrderItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field.This field is available in API version 53.0 and later. |
| QuantityReturned | TypedoublePropertiesFilter, SortDescriptionReturned quantity on this OrderItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| QuantityReturnInitiated | TypedoublePropertiesFilter, SortDescriptionQuantity returned or pending return on this OrderItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| QuantityShipped | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionQuantity shipped on this OrderItemSummary.This field is available in API version 52.0 and later. |
| ReferencePrice | TypecurrencyPropertiesCreate, Filter, Nillable, SortDescriptionThe original or reference price of the order product.This field is available in API version 63.0 and later. |
| ReservedAtLocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReserved for future use. |
| ServiceDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionService or start date of the OrderItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionStatus of the OrderItemSummary. The default value is ORDERED. When a quantity value changes, each status formula is evaluated in order. If a formula is true, no more evaluations are performed for that change.Possible values and their formulas, in the order of evaluation, are:RETURNINITIATED—Return Initiated — (Quantity > 0) & (QuantityReturnInitiated = QuantityFulfilled) & (QuantityReturned < QuantityReturnInitiated)RESHIPPED—Reshipped — (QuantityReshipped = QuantityFullfilled) & (QuantityFullfilled > 0) & (QuantityReturnInitiated = 0) & (QuantityFulfilled = QuantityOrdered)RETURNED—Returned — (Quantity = 0) & (QuantityReturned > 0)CANCELED—Canceled — (Quantity = 0) & (QuantityCancelled > 0) & (QuantityReturned = 0)FULFILLED—Fulfilled — (Quantity > 0) & ((QuantityOrdered - QuantityCancelled) <= QuantityFulfilled)PARTIALLYFULFILLED—Partially Fulfilled — (QuantityFulfilled > 0) & (QuantityFulfilled < (QuantityOrdered - QuantityCancelled))ALLOCATED—Allocated — (Quantity > 0) & (Quantity <= QuantityAllocated)PARTIALLYALLOCATED—Partially Allocated — (QuantityAllocated > 0) & (QuantityAllocated < Quantity)ORDERED—Ordered — None of the other formulas applyPAID—Paid — N/A |
| StockKeepingUnit | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe stock keeping unit (SKU) of the Product2 associated with the OrderItemSummary.This field is available in API version 49.0 and later. |
| TaxTreatmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related tax treatment.This field is available in API version 63.0 and later. This field is available with Subscription Management.This field is a relationship field.Relationship NameTaxTreatmentRelationship TypeLookupRefers ToTaxTreatment |
| TotalAdjusted​LineTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the AdjustedLineAmount. This is a calculated field. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all price adjustments applied to this OrderItemSummary. This is a calculated field. |
| TotalAdjustment​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of all price adjustments applied to this OrderItemSummary, inclusive of tax. This amount is equal to TotalAdjustmentAmount + TotalAdjustmentTaxAmount.This field is available in API version 49.0 and later. This is a calculated field. |
| TotalAdjustmentDistAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all order-level price adjustments applied to this OrderItemSummary. This value includes OrderItemAdjustmentLineSummaries that belong to OrderAdjustmentGroupSummaries of type Header. This is a calculated field. |
| TotalAdjustmentDist​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the order-level price adjustments applied to this OrderItemSummary, inclusive of tax. This amount is equal to TotalAdjustmentDistAmount + TotalAdjustmentDistTaxAmount.This field is available in API version 49.0 and later. This is a calculated field. |
| TotalAdjustmentDist​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjustmentDistAmount. This is a calculated field. |
| TotalAdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjustmentAmount. This is a calculated field. |
| TotalAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal price of the OrderItemSummary, inclusive of tax. This amount is equal to TotalPrice + TotalTaxAmount.This field is available in API version 49.0 and later. This is a calculated field. |
| TotalLineAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all non-order-level price adjustments applied to this OrderItemSummary. This value includes OrderItemAdjustmentLineSummaries that don’t belong to an OrderAdjustmentGroupSummary, or that belong to an OrderAdjustmentGroupSummary of type SplitLine. This is a calculated field. |
| TotalLineAdjustment​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all non-order-level price adjustments applied to this OrderItemSummary, inclusive of tax. This amount is equal to TotalLineAdjustmentAmount + TotalLineAdjustmentTaxAmount.This field is available in API version 49.0 and later. This is a calculated field. |
| TotalLineAdjustment​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalLineAdjustmentAmount. This is a calculated field. |
| TotalLineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, not including adjustments or tax, of the OrderItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| TotalLineAmount​WithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal unadjusted amount of the OrderItemSummary, inclusive of tax. This amount is equal to TotalLineAmount + TotalLineTaxAmount.This field is available in API version 49.0 and later. This is a calculated field. |
| TotalLineTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalLineAmount. This is a calculated field. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including line and order-level adjustments but not tax, of the OrderItemSummary. This is a calculated field. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalPrice. This is a calculated field. |
| Type | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of the OrderItemSummary. Delivery Charge indicates that the OrderItemSummary represents a delivery charge. Fee indicates that it represents another type of fee, such as a return fee. Order Product indicates that it represents any other type of product, service, or charge. Each type corresponds to one type code, shown here in parentheses.Possible values are:Delivery Charge (Charge)Fee (Charge) This value is available in API v56.0 and later.Order Product (Product)If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| TypeCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType code of the OrderItemSummary. Charge indicates that the OrderItemSummary represents a charge or fee. Product indicates that it represents any other type of product, service, or charge. A type code can be associated with one or more types.Possible values are:ChargeProductIf the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| UnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionUnit price of the product represented by the OrderItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderItemSummaryChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

#### See Also

-   [FulfillmentOrderLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm "Represents a product or delivery charge belonging to a FulfillmentOrder. Corresponds to an OrderItemSummary. This object is available in API version 48.0 and later.")

-   [OrderItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitem.htm "Represents an order product that your organization sells.")

-   [OrderItemAdjustmentLineSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm "Represents the current properties and state of price adjustments on an OrderItemSummary. Corresponds to one or more order item adjustment line item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

-   [OrderItemTaxLineItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitemsummary.htm "Represents the current tax on an OrderItemSummary or OrderItemAdjustmentLineSummary. Corresponds to one or more order item tax line items, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

-   [OrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm "Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- OrderItemSummaryChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- FulfillmentOrderLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm)
- OrderItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitem.htm)
- OrderItemAdjustmentLineSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm)
- OrderItemTaxLineItemSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitemsummary.htm)
- OrderSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm)
