---
title: "RebateMemberAggregateItem"
domain: channel-revenue-management-dev-guide
topic: rebatememberaggregateitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.657Z
estimatedTokens: 718
keywords: [RebateMemberAggregateItem, junction, rebate, member, product, aggregate, transaction, journal, API, version, 54.0, later, Calls]
---

# RebateMemberAggregateItem

> Represents a junction between a rebate member product aggregate and a
         transaction journal. This object is available in API version 54.0 and later.

# RebateMemberAggregateItem

Represents a junction between a rebate member product aggregate and a transaction journal. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the rebate member aggregate item. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PriorTransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction amount of the associated transaction journal record that contributes to aggregation for the configured prior period. |
| PriorTransactionQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction quantity of the associated transaction journal record that contributes to aggregation for the configured prior period. |
| RebateAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rebate amount for the associated transaction journal record. |
| RebateMemberProductAggregateId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe rebate member product aggregate record associated with the transaction journal record.This is a relationship field.Relationship NameRebateMemberProductAggregateRelationship TypeLookupRefers ToRebateMemberProductAggregate |
| TransactionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction amount for the transaction journal record associated with the aggregate item record. |
| TransactionJournalId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe transaction journal associated with the rebate aggregated transaction journal record.This is a relationship field.Relationship NameTransactionJournalRelationship TypeLookupRefers ToTransactionJournal |
| TransactionQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe transaction quantity of the associated transaction journal record. |
