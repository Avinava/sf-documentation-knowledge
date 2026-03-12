---
title: "ProfileSkillUser"
domain: object-reference
topic: profileskilluser
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.542Z
estimatedTokens: 578
keywords: [ProfileSkillUser, detail, relationship, User, connects, profile, skills, users, Calls, Usage, Associated, Objects]
---

# ProfileSkillUser

> Represents a detail relationship of User. The object connects
   profile skills with users.

# ProfileSkillUser

Represents a detail relationship of User. The object connects profile skills with users.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| EndorsementCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of endorsements. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the skill user. |
| ProfileSkillId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the ProfileSkill.This is a relationship field.Relationship NameProfileSkillRelationship TypeLookupRefers ToProfileSkill |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the user. This field can’t be changed once it is created.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |

## Usage

Use this object to assign specific skills to specific users. ProfileSkillUser appears on the Overview tab on the Chatter profile page. Users can only create a skill mapping for themselves, they can’t create skill mappings for others unless they are administrators with the “Modify All Data” permission. Additionally, users can only edit this object if they are the context user and are not editing the UserId field.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ProfileSkillUserFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 34.0)

Feed tracking is available for the object.

[ProfileSkillUserHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- ProfileSkillUserFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProfileSkillUserHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
