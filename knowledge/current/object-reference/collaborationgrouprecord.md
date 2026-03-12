---
title: "CollaborationGroupRecord"
domain: object-reference
topic: collaborationgrouprecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.590Z
estimatedTokens: 493
keywords: [CollaborationGroupRecord, records, associated, Chatter, groups, Calls, Objects]
---

# CollaborationGroupRecord

> Represents the records associated
    with Chatter
  groups.

# CollaborationGroupRecord

Represents the records associated with Chatter groups.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CollaborationGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Chatter group.This is a relationship field.Relationship NameCollaborationGroupRelationship TypeLookupRefers ToCollaborationGroup |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionOptional. The ID of the Experience Cloud site that the group belongs to. Available from API version 34.0. |
| RecordId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the record associated with the Chatter group.This is a polymorphic relationship field.Relationship NameRecordRelationship TypeLookupRefers ToAccount, Campaign, Case, Contact, Contract, Lead, Opportunity |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CollaborationGroupRecordChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- CollaborationGroupRecordChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
