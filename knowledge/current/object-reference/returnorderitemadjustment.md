---
title: "ReturnOrderItemAdjustment"
domain: object-reference
topic: returnorderitemadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.326Z
estimatedTokens: 687
keywords: [ReturnOrderItemAdjustment, price, adjustment, order, line, item, API, version, 50.0, later, Calls, Special, Access, Rules, Associated]
---

# ReturnOrderItemAdjustment

> Represents a price adjustment on a return order line item. This object is
    available in API version 50.0 and later.

# ReturnOrderItemAdjustment

Represents a price adjustment on a return order line item. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Special Access Rules

Order Management must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Amount | TypecurrencyPropertiesCreate, Filter, SortDescriptionAmount, not including tax, of the adjustment. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the adjustment. |
| OrderItemAdjustLineSummaryId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the order item adjustment line summary associated with the adjustment. |
| ReturnOrderId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the return order associated with the return order line item to which the adjustment applies.This is a relationship field.Relationship NameReturnOrderRelationship TypeLookupRefers ToReturnOrder |
| ReturnOrderItemAdjustmentNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionID of the return order item adjustment. |
| ReturnOrderLineItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the return order line item to which this adjustment applies.This is a relationship field.Relationship NameReturnOrderLineItemRelationship TypeLookupRefers ToReturnOrderLineItem |
| TotalAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of the adjustment, inclusive of tax. This amount is equal to Amount + TotalTaxAmount. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the Amount. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ReturnOrderItemAdjustmentChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- ReturnOrderItemAdjustmentChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
