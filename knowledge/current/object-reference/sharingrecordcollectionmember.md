---
title: "SharingRecordCollectionMember"
domain: object-reference
topic: sharingrecordcollectionmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.019Z
estimatedTokens: 197
keywords: [SharingRecordCollectionMember, user, access, collection, records, API, version, 51.0, later, Calls]
---

# SharingRecordCollectionMember

> Represents a user with access to a collection of records. This object is available in API version 51.0 and later.

# SharingRecordCollectionMember

Represents a user with access to a collection of records. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

Record collections are limited to 100 members for each record collection.

## Fields

| Field | Details |
| --- | --- |
| AccessLevel | TypepicklistPropertiesRead, EditDescriptionThe access level on the related record collection. |
| CollectionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the related record collection. |
| UserOrGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the user or group with access to the record collection. |
