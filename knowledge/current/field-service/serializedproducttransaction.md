---
title: "SerializedProductTransaction"
domain: field-service
topic: serializedproducttransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:56.503Z
estimatedTokens: 471
keywords: [SerializedProductTransaction, Represents, transactions, performed, serialized, product., API, version, 57.0, later., Supported, Calls, Fields, Associated, Objects]
---

# SerializedProductTransaction

> Represents transactions performed on a serialized product. This
      object is available in API version 57.0 and later.

# SerializedProductTransaction

Represents transactions performed on a serialized product. This object is available in API version 57.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time this record was viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the serialized product record. This is auto-generated. |
| RelatedRecordId | TypereferencePropertiesFilter, Group, SortDescriptionThe serialized product being transferred. This field is a polymorphic relationship field.Relationship NameSerializedProductRelationship TypeLookupRefers ToProductConsumed, ProductTransfer |
| SerializedProductId | TypereferencePropertiesFilter, Group, SortDescriptionThe serialized product being transferred. This field is a relationship field.Relationship NameSerializedProductRelationship TypeLookupRefers ToSerializedProduct |
| TransactionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe action that the transaction tracks. Possible values are:AdjustedConsumedDamagedFoundLostReceivedRepairedReplenishedSentWithdrawn |

## Associated Objects

This object has these associated objects. Unless noted, they’re available in the same API version as this object.

SerializedProductTransactionChangeEvent (API version 64.0)

Change events are available for the object.

SerializedProductTransactionFeed

Feed tracking is available for the object.

SerializedProductTransactionHistory

History is available for tracked fields of the object.
