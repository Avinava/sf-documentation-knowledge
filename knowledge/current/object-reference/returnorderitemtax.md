---
title: "ReturnOrderItemTax"
domain: object-reference
topic: returnorderitemtax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.334Z
estimatedTokens: 930
keywords: [ReturnOrderItemTax, tax, order, line, item, adjustment, API, version, 50.0, later, Calls, Special, Access, Rules, Associated]
---

# ReturnOrderItemTax

> Represents the tax on a return order line item or return order item
      adjustment. This object is available in API version 50.0 and later.

# ReturnOrderItemTax

Represents the tax on a return order line item or return order item adjustment. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Order Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionAmount of tax represented by the return order item tax. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the return order item tax. |
| OrderItemTaxLineItemSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the order item tax line item summary associated with the order item summary that corresponds to the return order line item to which the tax applies. |
| Rate | TypepercentPropertiesFilter, Nillable, SortDescriptionTax rate used to calculate the Amount. |
| ReturnOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated return order.This is a relationship field.Relationship NameReturnOrderRelationship TypeLookupRefers ToReturnOrder |
| ReturnOrderItemAdjustmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionIf this object represents a tax on an adjustment, this value is the ID of the return order item adjustment to which the tax applies. If this value is null, the adjustment applies to a return order line item.This is a relationship field.Relationship NameReturnOrderItemAdjustmentRelationship TypeLookupRefers ToReturnOrderItemAdjustment |
| ReturnOrderItemTaxNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the return order item tax. |
| ReturnOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionIf this object represents a tax on a return order line item, this value is the ID of that return order line item. If this object represents a tax on an adjustment, this value is the ID of the return order line item to which the adjustment applies.This is a relationship field.Relationship NameReturnOrderLineItemRelationship TypeLookupRefers ToReturnOrderLineItem |
| TaxEffectiveDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionDate on which the Amount was calculated. Important due to tax rate changes over time. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionShows whether the amount on the tax line is an estimate or the final calculated amount. Doesn’t set a value by default. Users can define automation to set and change the value as needed.Possible values are:ActualEstimated |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ReturnOrderItemTaxChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- ReturnOrderItemTaxChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
