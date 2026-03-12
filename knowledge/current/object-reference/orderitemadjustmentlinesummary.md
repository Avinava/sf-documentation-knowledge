---
title: "OrderItemAdjustmentLineSummary"
domain: object-reference
topic: orderitemadjustmentlinesummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.848Z
estimatedTokens: 1170
keywords: [OrderItemAdjustmentLineSummary, current, state, price, adjustments, OrderItemSummary, Corresponds, order, item, adjustment, line, objects, consisting, original, any]
---

# OrderItemAdjustmentLineSummary

> Represents the current properties and state of price adjustments on an
      OrderItemSummary. Corresponds to one or more order item adjustment line item objects,
      consisting of an original object and any change objects applicable to it. This object is
    available in API version 48.0 and later.

# OrderItemAdjustmentLineSummary

Represents the current properties and state of price adjustments on an OrderItemSummary. Corresponds to one or more order item adjustment line item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentBasisReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the specific coupon applied.This is a polymorphic relationship field.Relationship NameAdjustmentBasisReferenceRelationship TypeLookupRefers ToCouponThis field is available in API version 54.0 and later. |
| AdjustmentCauseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the specific promotions applied.This is a polymorphic relationship field.Relationship NameAdjustmentCauseRelationship TypeLookupRefers ToPromotionThis field is available in API version 52.0 and later. |
| Amount | TypecurrencyPropertiesFilter, SortDescriptionAmount, not including tax, of the OrderItemAdjustmentLineSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionISO code for the currency of the OrderItemSummary to which the adjustment applies. The default value is USD.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThis field is available in API version 49.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the OrderItemAdjustmentLineSummary.This field can be edited. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the OrderItemAdjustmentLineSummary. |
| OrderAdjustmentGroup​SummaryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf this object belongs to an OrderAdjustmentGroupSummary, this value is the ID of that OrderAdjustmentGroupSummary. |
| OrderItemSummaryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the OrderItemSummary to which the OrderItemAdjustmentLineSummary applies. |
| OrderSummaryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the OrderSummary associated with the OrderItemSummary to which this OrderItemAdjustmentLineSummary applies. |
| OriginalOrderItem​AdjustmentLineItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the original OrderItemAdjustmentLine associated with this summary object. Nillable=true only if the associated order summary is unmanaged. For managed order summaries, nillable=false. |
| Priority | TypeintegerPropertiesCreate, NillableDescriptionNumerical rank used to apply promotions in the correct order.This field is available in API version 52.0 and later. |
| TotalAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the adjustment, inclusive of tax. This amount is equal to Amount + TotalTaxAmount.This field is available in API version 49.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the Amount. |

#### See Also

-   [OrderItemAdjustmentLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlineitem.htm "An adjustment that has been made to an order item. This object is available in API version 48.0 and later.")

-   [OrderItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm "Represents the current properties and state of a product or charge on an OrderSummary. Corresponds to one or more order item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

-   [OrderItemTaxLineItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitemsummary.htm "Represents the current tax on an OrderItemSummary or OrderItemAdjustmentLineSummary. Corresponds to one or more order item tax line items, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- OrderItemAdjustmentLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlineitem.htm)
- OrderItemSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm)
- OrderItemTaxLineItemSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitemsummary.htm)
