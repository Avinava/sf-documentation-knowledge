---
title: "JournalSubType"
domain: loyalty
topic: journalsubtype
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:53.037Z
estimatedTokens: 604
keywords: [JournalSubType, subcategory, transaction, journal, API, version, 51.0, later, Calls, Associated, Objects]
---

# JournalSubType

> Represents the subcategory of transaction journal. This object is
    available in API version 51.0 and later.

# JournalSubType

Represents the subcategory of transaction journal. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description of journal subtype. |
| JournalTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the Journal Type.This is a relationship field.Relationship NameJournalTypeRelationship TypeLookupRefers ToJournalType |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the journal subtype. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[JournalSubTypeChangeEvent](atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[JournalSubTypeHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

#### See Also

-   [*Salesforce Help*: Prerequisites for Managing Member Transactions](https://help.salesforce.com/s/articleView?id=xcloud.loyalty_journal_prerequisities.htm&language=en_US)

## Related Topics

- JournalSubTypeChangeEvent (atlas.en-us.loyalty.meta/loyalty/sforce_api_associated_objects_change_event.htm)
