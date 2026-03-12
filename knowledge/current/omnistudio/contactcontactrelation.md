---
title: "ContactContactRelation"
domain: omnistudio
topic: contactcontactrelation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.337Z
estimatedTokens: 1106
keywords: [ContactContactRelation, relationship, contacts, API, version, 57.0, later, Calls, Associated, Objects]
---

# ContactContactRelation

> Represents a relationship between contacts. This object is
      available in API version 57.0 and later.

# ContactContactRelation

Represents a relationship between contacts. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the account associated with this contact contact relationship.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the relationship ends. |
| HierarchyType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the type of association to determine the hierarchy of relationship between the two parties.Possible values are:ChildParentPeerThe default value is Parent. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the contact is actively involved with the related contact.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (<parmname>LastReferencedDate</parmname>) but not viewed it. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the contact contact relationship. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this object.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyRoleRelationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe relationship between two contacts.This field is a relationship field.Relationship NamePartyRoleRelationRelationship TypeLookupRefers ToPartyRoleRelation |
| RelatedContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe related contact in the relationship.This field is a relationship field.Relationship NameRelatedContactRelationship TypeLookupRefers ToContact |
| RelatedInverseRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record that specifies the inverse relationship between the contacts.This field is a relationship field.Relationship NameRelatedInverseRecordRelationship TypeLookupRefers ToContactContactRelation |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the relationship starts. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactContactRelationChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm) (API Version 63.0)

Change events are available for the object.

[ContactContactRelationFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ContactContactRelationHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ContactContactRelationOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ContactContactRelationShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
