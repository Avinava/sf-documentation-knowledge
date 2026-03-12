---
title: "OrderItemTaxLineItemSummary"
domain: object-reference
topic: orderitemtaxlineitemsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.977Z
estimatedTokens: 1677
keywords: [OrderItemTaxLineItemSummary, current, tax, OrderItemSummary, OrderItemAdjustmentLineSummary, Corresponds, order, item, line, items, consisting, original, any, change, objects]
---

# OrderItemTaxLineItemSummary

> Represents the current tax on an OrderItemSummary or
      OrderItemAdjustmentLineSummary. Corresponds to one or more order item tax line items,
      consisting of an original object and any change objects applicable to it. This object is
    available in API version 48.0 and later.

# OrderItemTaxLineItemSummary

Represents the current tax on an OrderItemSummary or OrderItemAdjustmentLineSummary. Corresponds to one or more order item tax line items, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesFilter, SortDescriptionAmount of tax represented by the OrderItemTaxLineItemSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| CalculationReferenceNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReference number provided by the tax provider, such as Stripe, in the tax calculation API response. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionISO code for the currency of the OrderSummary associated with the OrderItemTaxLineItemSummary. The default value is USD.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThis field is available in API version 49.0 and later. |
| Description | TypetextareaPropertiesNillable, UpdateDescriptionDescription of the OrderItemTaxLineItemSummary.This field can be edited. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionName of the OrderItemTaxLineItemSummary. |
| OrderItemAdjustmentLine​SummaryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf this object represents tax on an adjustment, this value is the ID of the OrderItemAdjustmentLineSummary to which the tax applies. If this value is null, the adjustment applies to an OrderItemSummary. |
| OrderItemSummaryId | TypereferencePropertiesFilter, Group, SortDescriptionIf this object represents tax on an OrderItemSummary, this value is the ID of that OrderItemSummary. If this object represents tax on an adjustment, this value is the ID of the OrderItemSummary to which the adjustment applies. |
| OrderSummaryId | TypereferencePropertiesFilter, Group, SortDescriptionID of the OrderSummary that the associated OrderItemSummary or OrderItemAdjustmentLineSummary belongs to. |
| OriginalOrderItemTax​LineItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the original order item tax line item associated with this summary object. Nillable=true only if the associated order summary is unmanaged. For managed order summaries, nillable=false. |
| Rate | TypepercentPropertiesFilter, Nillable, SortDescriptionTax rate used to calculate the Amount.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| ReferenceNumber | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReference number provided by the tax provider (like Stripe) for each line item in the tax calculation API call. Use this unique ID to revert taxes during cancellation or return of an order. |
| TaxEffectiveDate | TypedatePropertiesFilter, Group, SortDescriptionDate on which the Amount was calculated. Important due to tax rate changes over time.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| TransactionReferenceNumber | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionReference number provided by the tax provider, such as Stripe, in the tax transaction commit API request. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIndicates whether the Amount is actual or estimated.Possible values are:ActualEstimatedIf the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderItemTaxLineItemSummaryChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

#### See Also

-   [FulfillmentOrderItemTax](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemtax.htm "Represents the tax on a FulfillmentOrderLineItem or FulfillmentOrderItemAdjustment. Corresponds to an OrderItemTaxLineItemSummary. This object is available in API version 48.0 and later.")

-   [OrderItemAdjustmentLineSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm "Represents the current properties and state of price adjustments on an OrderItemSummary. Corresponds to one or more order item adjustment line item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

-   [OrderItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm "Represents the current properties and state of a product or charge on an OrderSummary. Corresponds to one or more order item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

-   [OrderItemTaxLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitem.htm "The tax amount that has been applied to an order item. This object is available in API version 48.0 and later.")

## Related Topics

- OrderItemTaxLineItemSummaryChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- FulfillmentOrderItemTax (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemtax.htm)
- OrderItemAdjustmentLineSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemadjustmentlinesummary.htm)
- OrderItemSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm)
- OrderItemTaxLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitem.htm)
