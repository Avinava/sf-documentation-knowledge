---
title: "CollaborationGroupMember"
domain: object-reference
topic: collaborationgroupmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.579Z
estimatedTokens: 747
keywords: [CollaborationGroupMember, member, Chatter, group, API, version, 19.0, later, Calls, Usage]
---

# CollaborationGroupMember

> Represents a member of a Chatter group.
   This object is available in API version 19.0 and later.

# CollaborationGroupMember

Represents a member of a Chatter group. This object is available in API version 19.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CollaborationGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the associated CollaborationGroup.This is a relationship field.Relationship NameCollaborationGroupRelationship TypeLookupRefers ToCollaborationGroup |
| CollaborationRole | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe role of a group member. Group owners and managers can change roles for members of their groups. The valid values are:Standard—Indicates that a user is a group member. Members can post and comment in the group.Admin—Indicates that a user is a group manager. Managers can post and comment, change member roles, edit group settings, add and remove members, delete posts and comments, and edit the group information field.NoteTo change the group owner, use the OwnerId field on the CollaborationGroup object. |
| LastFeedAccessDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when a group member last accessed the group’s feed. The value is only updated when a member explicitly consumes the group’s feed, not when the member sees group posts in other feeds, like the profile feed. |
| MemberId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the group member.This is a relationship field.Relationship NameMemberRelationship TypeLookupRefers ToUser |
| NotificationFrequency | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRequired. The frequency at which Salesforce sends Chatter group email digests to this member. Can only be set by the member or users with the “Modify All Data” permission. The valid values are:D—DailyW—WeeklyN—NeverP—On every postThe default value is specified by the member in their Chatter email settings. In communities, the Email on every post option is disabled once more than 10,000 members choose this setting for the group. All members who had this option selected are automatically switched to Daily digests. |

## Usage

Use this object to view, create, and delete Chatter group members. You must be a group owner or manager to create members for private Chatter groups.

#### See Also

-   [CollaborationGroup](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroup.htm "Represents a Chatter group. This object is available in API version 19.0 and later.")

-   [CollaborationGroupMemberRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmemberrequest.htm "Represents a request to join a private Chatter group. This object is available in API version 21.0 and later.")

## Related Topics

- CollaborationGroup (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroup.htm)
- CollaborationGroupMemberRequest (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmemberrequest.htm)
