---
title: "OrderAdjustmentGroupSummary"
domain: object-reference
topic: orderadjustmentgroupsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.716Z
estimatedTokens: 1383
keywords: [OrderAdjustmentGroupSummary, current, state, group, price, adjustments, Associated, OrderItemAdjustmentLineSummaries, apply, OrderItemSummaries, belonging, OrderSummary, Corresponds, order, adjustment]
---

# OrderAdjustmentGroupSummary

> Represents the current properties and state of a group of related price
      adjustments. Associated with a set of OrderItemAdjustmentLineSummaries that apply to
      OrderItemSummaries belonging to one OrderSummary. Corresponds to one or more order adjustment
      group objects, consisting of an original object and any change objects applicable to it.
    This object is available in API version 48.0 and later.

# OrderAdjustmentGroupSummary

Represents the current properties and state of a group of related price adjustments. Associated with a set of OrderItemAdjustmentLineSummaries that apply to OrderItemSummaries belonging to one OrderSummary. Corresponds to one or more order adjustment group objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.

An OrderAdjustmentGroupSummary can represent an adjustment to an entire order as a group of adjustments to each of its products. For example, representing “10% off the order” as a set of 10% off adjustments to each product on the order. It can also represent an adjustment that applies to a subset of the products on an order. For example, representing “buy one, get one 50% off” as a 25% off adjustment to each of two products.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentBasisReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the specific coupon applied.This is a polymorphic relationship field.Relationship NameAdjustmentBasisReferenceRelationship TypeLookupRefers ToCouponThis field is available in API version 54.0 and later. |
| AdjustmentCauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the specific promotions applied.This is a polymorphic relationship field.Relationship NameAdjustmentCauseRelationship TypeLookupRefers ToPromotionThis field is available in API version 52.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionISO code for the currency of the OrderSummary associated with the adjustments in the group. The default value is USD.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThis field is available in API version 49.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the OrderAdjustmentGroupSummary.This field can be edited. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including tax, of the associated OrderItemAdjustmentLineSummaries. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the OrderAdjustmentGroupSummary. |
| OrderSummaryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the OrderSummary associated with the OrderAdjustmentGroupSummary. |
| OriginalOrderAdjGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the original OrderAdjustmentGroup associated with this summary object. Nillable=true only if the associated order summary is unmanaged. For managed order summaries, nillable=false. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, not including tax, of the associated OrderItemAdjustmentIineSummaries. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAmount. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionType of the OrderAdjustmentGroupSummary. Header represents an order-level adjustment with an OrderItemAdjustmentLineSummary for each OrderItemSummary on the OrderSummary. SplitLine represents any other related set of OrderItemAdjustmentLineSummaries.Possible values are:HeaderSplitLineIf the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderAdjustmentGroupSummaryChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

#### See Also

-   [OrderAdjustmentGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderadjustmentgroup.htm "Group containing a set of adjustments applied to an order. This object is available in API version 48.0 and later.")

-   [OrderItemAdjustmentLineSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm "Represents the current properties and state of price adjustments on an OrderItemSummary. Corresponds to one or more order item adjustment line item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- OrderAdjustmentGroupSummaryChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- OrderAdjustmentGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderadjustmentgroup.htm)
- OrderItemAdjustmentLineSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm)
