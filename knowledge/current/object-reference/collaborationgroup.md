---
title: "CollaborationGroup"
domain: object-reference
topic: collaborationgroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.572Z
estimatedTokens: 2908
keywords: [CollaborationGroup, Chatter, group, API, version, 19.0, later, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# CollaborationGroup

> Represents a Chatter group. This
		object is available in API version 19.0 and later.

# CollaborationGroup

Represents a Chatter group. This object is available in API version 19.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

The visibility of information in groups depends on the type of group and the user’s permissions.

-   **Members**: Any user with the Create and Own New Chatter Groups permission can create public, private, and unlisted groups, including in any Experience Cloud sites they belong to.
-   **Owners and managers**: Users can modify group details for any group they own or manage. Owners can also delete groups they own.
-   **Nonmembers**: These user permissions allow group access regardless of group membership.
    -   View All Data—Allows users to view all public and private groups across their org and its Experience Cloud sites. Users with this permission can’t view unlisted group information, unless they have the Modify Unlisted Groups permission as well.
    -   Modify All Data—Allows users to view, modify, and delete all public and private groups across their org and its Experience Cloud sites. Users with this permission can’t view or modify unlisted group information, unless they have the Manage Unlisted Groups permission as well.
    -   Create and Set Up Experiences—Allows users to view, modify, and delete all public and private groups in Experience Cloud sites.
    -   Manage Unlisted Groups—Allows users to search for, access, and modify any unlisted group in an org and its Experience Cloud sites.
    -   Data Export—Allows users to export any data from Salesforce, including private and unlisted group data from an org and its Experience Cloud sites.
-   **Apex and Visualforce**: Apex code runs in system mode, which means that the permissions of the current user aren’t taken into account.
    -   Visualforce pages that display groups might expose unlisted or private group data to users who aren’t members.
    -   Because system mode disregards the user’s permissions, all users who are accessing a Visualforce page that’s showing a group can act as an owner of that group.
    -   AppExchange apps that are written in Apex and that access all groups will expose unlisted groups to users who aren’t members.

To limit and manage access to the unlisted and private groups in your org:

-   Explicitly filter out unlisted and private group information from SOQL queries in all Apex code.
-   Use permission sets, profile-level permissions, and sharing checks in your code to further limit group access.
-   Use Apex triggers on the CollaborationGroup object to monitor and manage the creation of groups. In Setup, enter Group Triggers in the Quick Find box, then select **Group Triggers** to add triggers.

## Fields

| Field | Details |
| --- | --- |
| AnnouncementId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains the ID of the Announcement last associated with the group. This field is available in API version 30.0 and later.This is a relationship field.Relationship NameAnnouncementRelationship TypeLookupRefers ToAnnouncement |
| BannerPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionThe URL for the group's banner photo.The URL is updated every time a photo is uploaded and reflects the most recent photo. If a newer photo has been uploaded, the URL returned for an older photo is not guaranteed to return a photo. Query this field for the URL of the most recent photo.This field is available in API version 36.0 and later. |
| CanHaveGuests | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf set to true, indicates that a group allows customers. Chatter customers are people outside your company's email domains. Customers can see only the groups they're invited to. They can interact only with members of those groups. Customers can’t see any Salesforce information.This field is available starting in API version 23.0, but groups that allow customers are accessible from earlier API versions. However, when accessed from earlier API versions, groups that allow customers aren't distinguishable from private groups. We strongly recommend that you upgrade to the latest API version. If you must use an earlier version, name groups that allow customers to indicate that they include customers. |
| CollaborationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of Chatter group. Available values are:Public—Anyone can see and post updates. Anyone can join a public group.Private—Only members can see the group feed and post updates. Non-members can only see the group name and a few other details in list views, search, and on the group page. The group's owner or managers must add members who request to join the group.Unlisted—Only members and users with the Manage Unlisted Groups permission can see the group and post updates. Other users can’t access the group or see it in lists, search, and feeds. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the group. |
| FullPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionThe URL for the group's profile photo.The URL is updated every time a photo is uploaded and reflects the most recent photo. If a newer photo has been uploaded, the URL returned for an older photo is not guaranteed to return a photo. Query this field for the URL of the most recent photo.This field is available in API version 20.0 and later. |
| GroupEmail | TypeemailPropertiesNillable, SortDescriptionThe email address for posting to the group. For private groups, only visible to members and users with Modify All Data or View All Data permissions.This field is available in API version 29.0 and later. |
| HasPrivateFieldsAccess | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf set to true, indicates that a user can see the InformationBody and InformationTitle fields in a private group. This field is set to true for members of a private group and users with Modify All Data or View All Data permissions. |
| InformationBody | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe text of the Information section. For private groups, only visible to members and users with Modify All Data or View All Data permissions. |
| InformationTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe title of the Information section. For private groups, only visible to members and users with Modify All Data or View All Data permissions. |
| IsArchived | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the group is archived (true) or not (false).This field is available in API version 28.0 and later. |
| IsAutoArchiveDisabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether automatic archiving is disabled for the group (true) or not (false).This field is available in API version 29.0 and later. |
| IsBroadcast | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the group is a broadcast group (true) or not (false).This field is available in API version 36.0 and later. |
| LastFeedModifiedDate | TypedateTimePropertiesFilter, SortDescriptionThe date of the last post or comment on the group. |
| LastReferencedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MediumPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionThe URL for the larger, cropped photo size. |
| MemberCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of members in the group. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the group. Group names must be unique across public and private groups. Unlisted groups don’t require unique names. |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the Experience Cloud site that this group is part of. This field is available only if digital experiences is enabled in your org.You can only add a NetworkId when creating a group. You can’t change or add a NetworkId for an existing group. This field is available in API version 26.0 and later. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of the group. Only the current group owner or people with the Modify All Data permission can update the OwnerId.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| SmallPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionThe URL for a thumbnail of the group's profile photo.The URL is updated every time a photo is uploaded and reflects the most recent photo. If a newer photo has been uploaded, the URL returned for an older photo is not guaranteed to return a photo. Query this field for the URL of the most recent photo.This field is available in API version 20.0 and later. |

## Usage

Use this object to create, edit, or delete groups in an org or Experience Cloud site. Deleting a group permanently deletes all posts and comments to the group. It also deletes all files and links posted to the group and removes the files from other locations where they were shared.

As a Chatter group member, you can post to the group using the CollaborationGroupFeed object. As a Chatter group owner or manager, you can add or remove group members using the CollaborationGroupMember object, post announcements to the group using the Announcement object, and accept or decline requests to join private groups using the CollaborationGroupMemberRequest object. Additionally, the group owner, manager, or your Salesforce system administrator can invite people to join the group using the [CollaborationInvitation](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationinvitation.htm "Represents an invitation to join Chatter, either directly or through a group. This object is available in API version 21.0 and later.") object.

The Salesforce system administrator doesn’t need to be a member of the group in order to send invitations using the API.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[CollaborationGroupFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

#### See Also

-   [CollaborationGroupMember](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmember.htm "Represents a member of a Chatter group. This object is available in API version 19.0 and later.")

-   [CollaborationGroupMemberRequest](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmemberrequest.htm "Represents a request to join a private Chatter group. This object is available in API version 21.0 and later.")

## Related Topics

- CollaborationInvitation (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationinvitation.htm)
- CollaborationGroupFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- CollaborationGroupMember (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmember.htm)
- CollaborationGroupMemberRequest (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_collaborationgroupmemberrequest.htm)
