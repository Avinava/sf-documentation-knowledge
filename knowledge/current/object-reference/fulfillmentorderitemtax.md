---
title: "FulfillmentOrderItemTax"
domain: object-reference
topic: fulfillmentorderitemtax
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:10.854Z
estimatedTokens: 1285
keywords: [FulfillmentOrderItemTax, tax, FulfillmentOrderLineItem, FulfillmentOrderItemAdjustment, Corresponds, OrderItemTaxLineItemSummary, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# FulfillmentOrderItemTax

> Represents the tax on a FulfillmentOrderLineItem or
      FulfillmentOrderItemAdjustment. Corresponds to an OrderItemTaxLineItemSummary. This
    object is available in API version 48.0 and later.

# FulfillmentOrderItemTax

Represents the tax on a FulfillmentOrderLineItem or FulfillmentOrderItemAdjustment. Corresponds to an OrderItemTaxLineItemSummary. This object is available in API version 48.0 and later.

This object is used for calculations and doesn’t have a default record page.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionAmount of tax represented by the FulfillmentOrderItemTax. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionISO code for the currency of the FulfillmentOrderLineItem to which the tax applies. The default value is USD.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThis field is available in API version 49.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the FulfillmentOrderItemTax. |
| FulfillmentOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated FulfillmentOrder. |
| FulfillmentOrder​ItemAdjustId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf this object represents tax on an adjustment, this value is the ID of the FulfillmentOrderItemAdjustment to which the tax applies. If this value is null, the adjustment applies to a FulfillmentOrderLineItem. |
| FulfillmentOrderItem​TaxNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the FulfillmentOrderItemTax. |
| FulfillmentOrder​LineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionIf this object represents tax on a FulfillmentOrderLineItem, this value is the ID of that FulfillmentOrderLineItem. If this object represents tax on an adjustment, this value is the ID of the FulfillmentOrderLineItem to which the adjustment applies. |
| OrderItemTaxLineItem​SummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the OrderItemTaxLineItemSummary associated with the OrderItemSummary that corresponds to the FulfillmentOrderLineItem to which the tax applies. |
| Rate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTax rate used to calculate the Amount. |
| TaxEffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate on which the Amount was calculated. Important due to tax rate changes over time. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIndicates whether the Amount is actual or estimated.Possible values are:ActualEstimated |

[FulFillmentOrderItemTaxChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

#### See Also

-   [FulfillmentOrder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm "Represents a group of products, fees, and delivery charges on a single order that share the same fulfillment location, delivery method, and recipient. The FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with OrderItemSummary objects belonging to a single OrderSummary. This object is available in API version 48.0 and later.")

-   [FulfillmentOrderItemAdjustment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemadjustment.htm "Represents a price adjustment on a FulfillmentOrderLineItem. Corresponds to an OrderItemAdjustmentLineSummary associated with the corresponding OrderItemSummary. This object is available in API version 48.0 and later.")

-   [FulfillmentOrderLineItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm "Represents a product or delivery charge belonging to a FulfillmentOrder. Corresponds to an OrderItemSummary. This object is available in API version 48.0 and later.")

-   [OrderItemTaxLineItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitemsummary.htm "Represents the current tax on an OrderItemSummary or OrderItemAdjustmentLineSummary. Corresponds to one or more order item tax line items, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- FulFillmentOrderItemTaxChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- FulfillmentOrder (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm)
- FulfillmentOrderItemAdjustment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderitemadjustment.htm)
- FulfillmentOrderLineItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorderlineitem.htm)
- OrderItemTaxLineItemSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemtaxlineitemsummary.htm)
