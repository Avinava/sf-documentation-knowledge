---
title: "Group"
domain: chatterapi
topic: group
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.110Z
estimatedTokens: 930
keywords: [Group, Chatter]
---

# Group

> Chatter group.

# Group

Chatter group.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Label | String | An extra label for the group, for example, “Archived,” “Private,” or “Private With Customers.” If there isn’t an extra label, the value is null. | Small, 30.0 | 30.0 |
| announcement | Announcement | An announcement for the group. | Big, 31.0 | 31.0 |
| bannerPhoto | Banner Photo | The banner photo for the group. | Big, 36.0 | 36.0 |
| canHave​ChatterGuests | Boolean | true if this group allows Chatter customers, false otherwise. | Small, 29.0 | 23.0 |
| community | Reference | Information about the Experience Cloud site. Returns null if the group exists in the default site or if digital experiences isn’t enabled. | Medium, 29.0 | 26.0 |
| description | String | Text-only description of the group. | Big, 29.0 | 23.0 |
| emailTo​ChatterAddress | String | Group’s email address for posting to this group by email.Returns null if Chatter emails and posting to Chatter by email aren’t both enabled in your organization. | Medium, 30.0 | 30.0 |
| isArchived | Boolean | Specifies whether the group is archived (true) or not (false). | Big, 29.0 | 29.0 |
| isAutoArchive​Disabled | Boolean | Specifies whether automatic archiving is disabled for the group (true) or not (false). | Big, 29.0 | 29.0 |
| isBroadcast | Boolean | Specifies whether the group is a broadcast group (true) or not (false). In a broadcast group, only group owners and managers can post to the group. | Big, 36.0 | 36.0 |
| fileCount | Integer | Number of files posted to this group. | Big, 29.0 | 24.0–27.0The fileCount property is in the Group Detail response body. |
| id | String | 18-character ID of the group. | Small, 29.0 | 23.0 |
| isArchived | Boolean | Specifies whether the group is archived (true) or not (false). | Big, 29.0 | 29.0 |
| isAutoArchive​Disabled | Boolean | Specifies whether automatic archiving is disabled for the group (true) or not (false). | Big, 29.0 | 29.0 |
| lastFeed​ElementPostDate | String | Date of the most recent feed element posted to the group in ISO 8601 format. | Big, 31.0 | 31.0 |
| lastFeedItem​PostDate | String | Date of the most recent feed item posted to the group in ISO 8601 format.After API version 30.0, use lastFeedElementPostDate. | Big, 29.0 | 24.0–30.0 |
| memberCount | Integer | Total number of group members. | Small, 29.0 | 23.0 |
| motif | Motif | Small, medium, and large icons indicating that the object is a group. The motif can also contain the record type’s base color.The icon is not the group photo. | Small, 29.0 | 27.0 |
| myRole | String | Values are:GroupOwnerGroupManagerNotAMemberNotAMemberPrivateRequestedStandardMember | Small, 29.0 | 23.0 |
| mySubscription | Reference | If the context user is a member of this group, contains information about that subscription, otherwise null. | Medium, 29.0 | 23.0 |
| name | String | Name of the group. | Small, 29.0 | 23.0 |
| owner | User Summary | Information about the owner of the group. | Medium, 29.0 | 24.0 |
| photo | Photo | Information about the group photo. | Small, 29.0 | 23.0 |
| type | String | Value is CollaborationGroup. | Small, 29.0 | 23.0 |
| url | String | Relative URL string to the group. | Small, 29.0 | 23.0 |
| visibility | String | Values are:PrivateAccess—Only members of the group can see posts to this group.PublicAccess—All users within the Experience Cloud site can see posts to this group.Unlisted—Reserved for future use. | Small, 29.0 | 23.0 |

#### See Also

-   [User Group Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_group_page.htm "A paginated collection of groups a user is a member of.")

## Related Topics

- Announcement (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_announcement.htm)
- Banner Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_banner_photo.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Group Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm)
- User Group Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_group_page.htm)
