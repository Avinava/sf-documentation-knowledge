---
title: "SharingRecordCollection"
domain: object-reference
topic: sharingrecordcollection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.011Z
estimatedTokens: 424
keywords: [SharingRecordCollection, collection, records, API, version, 51.0, later, Calls]
---

# SharingRecordCollection

> Represents a collection of records. This object is available in API version 51.0 and later.

# SharingRecordCollection

Represents a collection of records. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

Record collections are limited to 100 items and 100 members for each record collection.

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the record collection. |
| GroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe group ID of the record collection. |
| LastAdded | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when an item was last added to the record collection. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record collection. |
| NumberOfRecords | TypeintPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe number of records in the record collection. The limit is 100. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record collection owner. |
