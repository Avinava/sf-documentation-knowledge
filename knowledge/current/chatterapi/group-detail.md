---
title: "Group Detail"
domain: chatterapi
topic: group-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.131Z
estimatedTokens: 990
keywords: [Group, Detail, Chatter]
---

# Group Detail

> Chatter group detail.

# Group Detail

Chatter group detail.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Label | String | An extra label for the group, for example, “Archived,” “Private,” or “Private With Customers.” If there isn’t an extra label, the value is null. | Small, 30.0 | 30.0 |
| announcement | Announcement | The current announcement for this group. | Big, 31.0 | 31.0 |
| bannerPhoto | Banner Photo | The banner photo for the group. | Big, 36.0 | 36.0 |
| canHave​ChatterGuests | Boolean | true if this group allows Chatter customers, false otherwise. | Small, 29.0 | 23.0 |
| community | Reference | Information about the Experience Cloud site. Returns null if the group exists in the default site or if digital experiences isn’t enabled. | Medium, 29.0 | 26.0 |
| description | String | Text-only description of the group. | Big, 29.0 | 23.0 |
| emailTo​ChatterAddress | String | Group’s email address for posting to this group by email.Returns null if Chatter emails and posting to Chatter by email aren’t both enabled in your organization. | Medium, 30.0 | 30.0 |
| fileCount | Integer | Number of files posted to this group. | Big, 29.0 | 28.0 |
| id | String | 18-character ID of the group. | Small, 29.0 | 23.0 |
| information | Group Information | The Information section of the group. If the group is private, this section is visible only to members. If the context user is not a member of the group or does not have Modify All Data or View All Data permission, the value is null. | Big, 29.0 | 28.0 |
| isArchived | Boolean | Specifies whether the group is archived (true) or not (false). | Big, 29.0 | 29.0 |
| isAutoArchive​Disabled | Boolean | Specifies whether automatic archiving is disabled for the group (true) or not (false). | Big, 29.0 | 29.0 |
| isBroadcast | Boolean | Specifies whether the group is a broadcast group (true) or not (false). In a broadcast group, only group owners and managers can post to the group. | Big, 36.0 | 36.0 |
| lastFeed​ElementPostDate | String | Date of the most recent feed element posted to the group. | Big, 31.0 | 31.0 |
| lastFeed​ItemPostDate | String | Date of the most recent feed item posted to the group.After API version 30.0, use lastFeedElementPostDate. | Big, 29.0 | 24.0–30.0 |
| memberCount | Integer | Total number of group members. | Small, 29.0 | 23.0 |
| motif | Motif | Small, medium, and large icons indicating that the object is a group. The motif can also contain the record type’s base color.The icon is not the group photo. | Small, 29.0 | 27.0 |
| myRole | String | Values are:GroupOwnerGroupManagerNotAMemberNotAMemberPrivateRequestedStandardMember | Small, 29.0 | 23.0 |
| mySubscription | Reference | If the context user is a member of this group, contains information about that subscription, otherwise null. | Medium, 29.0 | 23.0 |
| name | String | Name of the group. | Small, 29.0 | 23.0 |
| owner | User Summary | Information about the owner of the group. | Medium, 29.0 | 24.0 |
| pendingRequests | Integer | The number of pending requests to join a private group. For public groups, the value is null. | Medium, 29.0 | 29.0 |
| photo | Photo | Information about the group photo. | Small, 29.0 | 23.0 |
| type | String | Value is CollaborationGroup. | Small, 29.0 | 23.0 |
| url | String | Relative URL string to the group. | Small, 29.0 | 23.0 |
| visibility | String | Values are:PrivateAccess—Only members of the group can see posts to this group.PublicAccess—All users within the Experience Cloud site can see posts to this group.Unlisted—Reserved for future use. | Small, 29.0 | 23.0 |

#### See Also

-   [Group Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_page.htm "Page of Chatter groups.")

-   [User Group Detail Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_group_detail_collection.htm "A page of groups that a user is a member of.")

## Related Topics

- Announcement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm)
- Banner Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_photo.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Group Information (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_information.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm)
- Group Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_page.htm)
- User Group Detail Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_group_detail_collection.htm)
