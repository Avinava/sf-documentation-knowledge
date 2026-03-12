---
title: "SerializedProductTransaction"
domain: mfg-api-devguide
topic: serializedproducttransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.266Z
estimatedTokens: 438
keywords: [SerializedProductTransaction, change, state, serialized, product, API, version, 60.0, later, Calls]
---

# SerializedProductTransaction

> Represents a change in the state of a serialized product. This object is
      available in API version 60.0 and later.

# SerializedProductTransaction

Represents a change in the state of a serialized product. This object is available in API version 60.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the serialized product transaction. |
| RelatedRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product consumed or the product transfer record associated with the serialized product transaction.This field is a polymorphic relationship field.Relationship NameRelatedRecordRelationship TypeLookupRefers ToProductConsumed, ProductTransfer |
| SerializedProductId | TypereferencePropertiesFilter, Group, SortDescriptionThe serialized product associated with the serialized product transaction.This field is a relationship field.Relationship NameSerializedProductRelationship TypeLookupRefers ToSerializedProduct |
| TransactionType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of the transaction.Possible values are:AdjustedConsumedDamagedFoundLostReceivedRepairedReplenishedSentWithdrawn |
