---
title: "OrderChangeLog"
domain: object-reference
topic: orderchangelog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.725Z
estimatedTokens: 1096
keywords: [OrderChangeLog, log, record, change, requests, made, order, post, activation, always, one-to-one, API, version, 48.0, later]
---

# OrderChangeLog

> Represents a log record of all change requests made to an order post
         activation. A log record is always one-to-one to change an order request. This object
      is available in API version 48.0 and later.

# OrderChangeLog

Represents a log record of all change requests made to an order post activation. A log record is always one-to-one to change an order request. This object is available in API version 48.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

Commerce Cloud standard objects in the inventory data model require at least one of the following licenses: B2B Commerce, D2C Commerce.

## Fields

| Field | Details |
| --- | --- |
| ChangeLineId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the main change line created as a result of the change request. For example, if you change an order item, the ChangeLineId would be the change OrderItem ID, or if you change a shipping address, the ChangeLineId would be the change OrderDeliveryGroup ID.This field is a polymorphic relationship field.Relationship NameChangeLineRelationship TypeLookupRefers ToOrderAdjustmentGroup, OrderDeliveryGroup, OrderItem, OrderItemAdjustmentLineItem, OrderItemTaxLineItem |
| ChangeLineType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe method used to implement the change.Possible values are:DeltaNew |
| ChangeOrderId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the change order.This field is a relationship field.Relationship NameChangeOrderRelationship TypeLookupRefers ToOrder |
| ChangeRequest | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe unique ID of the request of which this change is a part. |
| ChangeSummary | TypetextareaPropertiesDescriptionA human-readable summary of the change details.Here’s an example of a change summary:Reduced quantity by -3. Change adjustment by $15. Added an adjustment of $20. Changed tax by $-0.11, effective 1/1/2020. Added a tax of $1.5, effective 1/1/2020. |
| ChangeType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of the change request.Possible values are:NewAdjustmentGroups—Add a new header level adjustment.NewLineAdjustments—Add a new line level adjustment.NewOrderItems—Add a new order item.QuantityChange—Add or remove quantity from an original order item. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe ISO code for any currency allowed by the organization.Possible value is:USD—U.S. DollarThe default value is USD. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name for the order change log. |
| RelatedLineId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the main line that is changed as a result of this change.This field is a polymorphic relationship field.Relationship NameRelatedLineRelationship TypeLookupRefers ToOrderAdjustmentGroup, OrderDeliveryGroup, OrderItem, OrderItemAdjustmentLineItem, OrderItemTaxLineItem |
| RelatedOrderId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the order that is changed.This field is a relationship field.Relationship NameRelatedOrderRelationship TypeMaster-detailRefers ToOrder (the master object) |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe order status of the change order.Possible values are:ActivatedDraft |

## Usage

Order change log entries are automatically created each time an order is modified.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderChangeLogFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OrderChangeLogHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Code Examples

```
Reduced quantity by -3.
Change adjustment by $15.
Added an adjustment of $20.
Changed tax by $-0.11, effective 1/1/2020.
Added a tax of $1.5, effective 1/1/2020.
```

## Related Topics

- OrderChangeLogFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- OrderChangeLogHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
