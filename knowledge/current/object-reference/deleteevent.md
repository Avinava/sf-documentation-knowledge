---
title: "DeleteEvent"
domain: object-reference
topic: deleteevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.137Z
estimatedTokens: 339
keywords: [DeleteEvent, record, soft, deleted, Search, API, version, 48.0, removed, 50.0, Calls]
---

# DeleteEvent

> Represents a record that has been soft deleted. Search on this object was
    available in API version 48.0, then removed in API version 50.0.

# DeleteEvent

Represents a record that has been soft deleted. Search on this object was available in API version 48.0, then removed in API version 50.0.

DeleteEvent is a read-only object. You can't create, update, or delete it directly. To create a DeleteEvent record, soft delete a record of another type, like an Account. To remove a DeleteEvent record, use the [emptyRecycleBin()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_emptyrecyclebin.htm "HTML (New Window)") API or hard delete the corresponding Record.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| DeletedById | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the user who deleted the record.This is a relationship field.Relationship NameDeletedByRelationship TypeLookupRefers ToUser |
| DeletedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was deleted. |
| Record | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the record that was deleted. |
| RecordName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the record that was deleted. |
| SobjectName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of record that was deleted, for example, Account. |
