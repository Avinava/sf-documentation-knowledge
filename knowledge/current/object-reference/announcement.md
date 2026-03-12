---
title: "Announcement"
domain: object-reference
topic: announcement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.376Z
estimatedTokens: 789
keywords: [Announcement, Chatter, group, API, version, 30.0, later, Calls, Usage]
---

# Announcement

> Represents a Chatter group announcement. This object is available
  in API version 30.0 and later.

# Announcement

Represents a Chatter group announcement. This object is available in API version 30.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The date on which the announcement expires. Announcements display on the group UI until 11:59 p.m. local time on the selected date. |
| FeedItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the FeedItem that contains the content of the announcement. Announcements are stored as text posts.This is a relationship field.Relationship NameFeedItemRelationship TypeLookupRefers ToFeedItem |
| ParentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the parent CollaborationGroup that the announcement belongs to. An announcement can belong only to a single Chatter group.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToCollaborationGroup |
| SendEmails | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSet to true to email all group members when an announcement is posted to the group. The default is false. This requires the user to have the “Send announcement on email” permission.This field is available in API version 36.0 and later.NoteThis field is currently available to select customers through a pilot program. To be nominated to join this pilot program, contact Salesforce. Additional terms and conditions may apply to participate in the pilot program. Please note that pilot programs are subject to change, and as such, we cannot guarantee acceptance into this pilot program or a particular time frame in which this feature can be enabled. Any unreleased services or features referenced in this document, press releases, or public statements are not currently available and may not be delivered on time or at all. Customers who purchase our services should make their purchase decisions based upon features that are currently available. |

## Usage

Group owners, managers, and users with the “Modify All Data” permission can use the Announcement object to create, edit, and delete group announcements. Creating a group announcement is a three-step process.

1.  Use the FeedItem object to create a text post with the announcement’s content. Use the CollaborationGroup record you want to post the announcement to as the parent of this feed item.
2.  Next, use the feed item ID and an expiration date to create the announcement record.
3.  Finally, update the AnnouncementId field in the CollaborationGroup record with the ID of the announcement you created.

To delete the group announcement, simply delete the AnnouncementId value in the CollaborationGroup record. To restore a group announcement, update the AnnouncementId field for a group with the announcement’s ID. The expiration date for the announcement should be in the future and the feed item used to create the announcement should be parented by the same group.
