---
title: "ProductItemTransaction"
domain: field-service
topic: productitemtransaction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.744Z
keywords: [ProductItemTransaction, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ProductItemTransaction

# ProductItemTransaction

Represents an action taken on a product item in field service. Product item transactions are auto-generated records that help you track when a product item is replenished, consumed, or adjusted.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), undelete(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Only users with Modify All Data or Modify All Records permissions can delete this object.

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA description of the transaction. The description is blank when the transaction record is created, but can be updated. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe associated product item.This is a relationship field.Relationship NameProductItemRelationship TypeLookupRefers ToProductItem |
| ProductItemTransactionNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescription(Read Only) Auto-generated number identifying the product item transaction. |
| Quantity | TypedoublePropertiesCreate, Filter, SortDescriptionThe quantity of the product item involved in the transaction. If inventory was consumed, the quantity is negative. |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescription(Read Only) The product consumed or product transfer related to the action. If the action wasn’t related to consumption or transfer, the related record is blank.This is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToProductTransfer, Visit |
| TransactionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe action that the transaction tracks.Replenished: When a part is stocked at a location. A Replenished transaction is created when a product item is created.Consumed: When parts are consumed to complete a work order. A Consumed transaction is created when a record is added to the Products Consumed related list on a work order or work order line item.Adjusted: When there’s a discrepancy or a change in consumption. An Adjusted transaction is created when a product item’s Quantity on Hand is edited, a product consumed is updated or delete, or a product transfer is deleted.Transferred: When parts are transferred between locations. |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

ProductItemTransactionChangeEvent

Change events are available for the object.

ProductItemTransactionFeed

Feed tracking is available for the object.

ProductItemTransactionHistory

History is available for tracked fields of the object.