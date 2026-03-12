---
title: "ProfileSkillEndorsement"
domain: object-reference
topic: profileskillendorsement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.531Z
estimatedTokens: 727
keywords: [ProfileSkillEndorsement, detail, relationship, ProfileSkillUser, endorsement, profile, skill, approval, support, another, user’s, publicly, declared, Calls, Usage]
---

# ProfileSkillEndorsement

> Represents a detail relationship of ProfileSkillUser. An endorsement of
			a profile skill shows approval and support of another user’s publicly declared
			skill.

# ProfileSkillEndorsement

Represents a detail relationship of ProfileSkillUser. An endorsement of a profile skill shows approval and support of another user’s publicly declared skill.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the profile skill being endorsed. |
| ProfileSkillUserId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ProfileSkillUser record that is being endorsed.This is a relationship field.Relationship NameProfileSkillUserRelationship TypeLookupRefers ToProfileSkillUser |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user ID of the person giving the endorsement.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Usage

Use the ProfileSkillEndorsement object to query about a single endorsement given to a user about a specific skill. Users can’t endorse themselves, they can only be endorsed by others unless they are administrators with the “Modify All Data” permission.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ProfileSkillEndorsementChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[ProfileSkillEndorsementFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 34.0)

Feed tracking is available for the object.

[ProfileSkillEndorsementHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProfileSkillEndorsementChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ProfileSkillEndorsementFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProfileSkillEndorsementHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
