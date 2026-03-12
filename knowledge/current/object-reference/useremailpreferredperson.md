---
title: "UserEmailPreferredPerson"
domain: object-reference
topic: useremailpreferredperson
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.792Z
estimatedTokens: 681
keywords: [UserEmailPreferredPerson, mapping, user’s, preferred, record, email, address, multiple, records, match, field.This, API, version, 44.0, later]
---

# UserEmailPreferredPerson

> Represents a mapping for a user’s preferred record for an email
         address when multiple records match an email field.This object is available in API version 44.0
					and later.

# UserEmailPreferredPerson

Represents a mapping for a user’s preferred record for an email address when multiple records match an email field.This object is available in API version 44.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

As of Summer ‘20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| Email | TypeemailPropertiesCreate, Filter,Group, idLookup, Sort, UpdateDescriptionRequired. The unique email the mapping applies to. This field is unique for each user. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRead-only. Auto-generated field. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The userId that owns the record. Each record is only accessible to the owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PersonRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The recordId of a contact, lead, or user that represents the preferred record for the email address. Use cascade delete for contact and lead, and delete if the personId is a deactivated user record.This is a polymorphic relationship field.Relationship NamePersonRecordRelationship TypeLookupRefers ToContact, Lead, User |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[UserEmailPreferredPersonChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[UserEmailPreferredPersonShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- UserEmailPreferredPersonChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- UserEmailPreferredPersonShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
