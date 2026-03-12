---
title: "ConnectApi.ChatterGroup"
domain: apex-reference
topic: connectapichattergroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.753Z
estimatedTokens: 805
keywords: [ConnectApi.ChatterGroup, Chatter, group]
---

# ConnectApi.ChatterGroup

> Chatter group.

# ConnectApi.ChatterGroup

Chatter group.

This class is abstract.

Subclass of [ConnectApi.ActorWithId](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm "Actor with ID.").

Superclass of:

-   [ConnectApi.ChatterGroupDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupDetail.htm "Chatter group details.")
-   [ConnectApi.ChatterGroupSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupSummary.htm "Chatter group summary.")

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| additional​Label | String | An extra label for the group, for example, “Archived,” “Private,” or “Private With Customers.” If there isn’t an extra label, the value is null. | 30.0 |
| announcement | ConnectApi.​Announcement | The current announcement for this group. An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement. | 31.0 |
| bannerPhoto | ConnectApi.BannerPhoto | The banner photo for the group. | 36.0 |
| canHave​ChatterGuests | Boolean | true if this group allows Chatter guests. | 28.0 |
| community | ConnectApi.​​Reference | Information about the Experience Cloud site the group is in. | 28.0 |
| description | String | Group’s description. | 28.0 |
| emailTo​ChatterAddress | String | Group’s email address for posting to this group by email.Returns null if Chatter emails and posting to Chatter by email aren’t both enabled in your organization. | 30.0 |
| isArchived | Boolean | Specifies whether the group is archived (true) or not (false). | 29.0 |
| isAuto​ArchiveDisabled | Boolean | Specifies whether automatic archiving is disabled for the group (true) or not (false). | 29.0 |
| isBroadcast | Boolean | Specifies whether the group is a broadcast group (true) or not (false). In a broadcast group, only group owners and managers can post to the group. | 36.0 |
| lastFeedElement​PostDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z, of the most recent feed element posted to the group. | 31.0 |
| lastFeedItem​PostDate | Datetime | ISO 8601 date string, for example, 2011-02-25T18:24:31.000Z, of the most recent feed item posted to the group.Use lastFeedElementPosted. | 28.0–30.0 |
| memberCount | Integer | Total number of group members. | 28.0 |
| myRole | ConnectApi.​GroupMembershipType | Type of membership the user has with the group.GroupOwnerGroupManagerNotAMemberNotAMemberPrivateRequestedStandardMember | 28.0 |
| mySubscription | ConnectApi.​Reference | If the context user is a member of this group, contains information about that subscription; otherwise, returns null. | 28.0 |
| name | String | Name of the group. | 28.0 |
| owner | ConnectApi.​UserSummary | Information about the owner of the group. | 28.0 |
| photo | ConnectApi.Photo | Information about the group photo. | 28.0 |
| visibility | Connectapi.​GroupVisibility​Type | Group visibility type. Valid values are:PrivateAccess—Only members of the group can see posts to this group.PublicAccess—All users within the Experience Cloud site can see posts to this group.Unlisted—Reserved for future use. | 28.0 |

## Related Topics

- ConnectApi.ActorWithId (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm)
- ConnectApi.ChatterGroupDetail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupDetail.htm)
- ConnectApi.ChatterGroupSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupSummary.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​Announcement (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcement.htm)
- ConnectApi.BannerPhoto (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​​Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
