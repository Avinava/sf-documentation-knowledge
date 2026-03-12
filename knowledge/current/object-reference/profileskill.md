---
title: "ProfileSkill"
domain: object-reference
topic: profileskill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.526Z
estimatedTokens: 895
keywords: [ProfileSkill, profile, skill, user’s, professional, knowledge, record, organization, users, associated, ProfileSkillUser, Calls, Usage, Objects]
---

# ProfileSkill

> Represents a profile skill, which describes a user’s
			professional knowledge. This is a global record for the organization, and users are
			associated through the ProfileSkillUser object.

# ProfileSkill

Represents a profile skill, which describes a user’s professional knowledge. This is a global record for the organization, and users are associated through the ProfileSkillUser object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

For information about Live Agent skills, see the [Skill](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_skill.htm "Represents a category or group of Chat users or service resources in Field Service or Workforce Engagement. This object is available in API version 24.0 and later.") topic.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the profile skill. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when the current user last viewed a record related to this profile skill. Available in API version 29.0 and later. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp indicating when the current user last viewed this profile skill. Available in API version 29.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the profile skill. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the profile skill.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| UserCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of users with the profile skill. |

## Usage

Use the ProfileSkill object to look up the attributes of a skill that can be assigned to a user. This is a global object and is not owned by any specific user.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[ProfileSkillFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 34.0)

Feed tracking is available for the object.

[ProfileSkillHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProfileSkillOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ProfileSkillShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- Skill (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_skill.htm)
- ProfileSkillFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- ProfileSkillHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ProfileSkillOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- ProfileSkillShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
