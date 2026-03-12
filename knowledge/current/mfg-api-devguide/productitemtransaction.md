---
title: "ProductItemTransaction"
domain: mfg-api-devguide
topic: productitemtransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.978Z
estimatedTokens: 588
keywords: [ProductItemTransaction, action, taken, product, item, transactions, track, consumed, replenished, adjusted, transferred, auto-generated, records, specify, quantity]
---

# ProductItemTransaction

> Represents an action taken on a product item. Product item transactions track
         when a product is consumed, replenished, adjusted, or transferred. Product item
         transactions are auto-generated records that specify the quantity of products impacted by
         the action. This object is available in API version 60.0 and later.

# ProductItemTransaction

Represents an action taken on a product item. Product item transactions track when a product is consumed, replenished, adjusted, or transferred. Product item transactions are auto-generated records that specify the quantity of products impacted by the action. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the product item transaction. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate isn’t null, the user accessed this record or list view indirectly. |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product item associated with the product item transaction.This field is a relationship field.Relationship NameProductItemRelationship TypeLookupRefers ToProductItem |
| ProductItemTransactionNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated number identifying the product item transaction. |
| Quantity | TypedoublePropertiesCreate, Filter, SortDescriptionThe quantity of the product item involved in the transaction. If inventory was consumed, the quantity is negative. |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product consumed, product transfer, or visit related to the action. If the action wasn’t related to consumption or transfer, the related record is blank.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToProductConsumed, ProductTransfer, Visit |
| TransactionType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe action that the transaction tracks.Possible values are:AdjustedConsumedReplenishedTransferred |
