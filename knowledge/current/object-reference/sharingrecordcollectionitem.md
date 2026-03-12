---
title: "SharingRecordCollectionItem"
domain: object-reference
topic: sharingrecordcollectionitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.015Z
estimatedTokens: 230
keywords: [SharingRecordCollectionItem, record, collection, records, API, version, 51.0, later, Calls]
---

# SharingRecordCollectionItem

> Represents a single record in a collection of records. This object is available in API version 51.0 and later.

# SharingRecordCollectionItem

Represents a single record in a collection of records. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

Record collections are limited to 100 items for each record collection.

## Fields

| Field | Details |
| --- | --- |
| CollectionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related record collection. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the record collection item. |
| ItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the record collection item. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the record collection item. |
