---
title: "ConnectApi.AnnouncementInput"
domain: apex-reference
topic: connectapiannouncementinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.298Z
estimatedTokens: 521
keywords: [ConnectApi.AnnouncementInput, announcement.]
---

# ConnectApi.AnnouncementInput

> An announcement.

# ConnectApi.AnnouncementInput

An announcement.

| Property | Type | Description | Required or Optional | Available |
| --- | --- | --- | --- | --- |
| body | ConnectApi.MessageBodyInput | Text of the announcement. | Required for creating an announcement if feedItemId isn’t specifiedDon’t specify for updating an announcement. | 31.0 |
| expirationDate | Datetime | The Salesforce UI displays an announcement until 11:59 p.m. on this date unless another announcement is posted first. The Salesforce UI ignores the time value in the expirationDate. However, you can use the time value to create your own display logic in your own UI. | Required for creating an announcementOptional for updating an announcement | 31.0 |
| feedItemId | String | ID of an AdvancedTextPost feed item that is the body of the announcement. | Required for creating an announcement if body isn’t specifiedDon’t specify for updating an announcement. | 36.0 |
| isArchived | Boolean | Specifies whether the announcement is archived. | Optional | 36.0 |
| parentId | String | ID of the parent entity for the announcement, that is, a group ID when the announcement appears in a group. | Required for creating an announcement if feedItemId isn’t specifiedDon’t specify for updating an announcement. | 36.0 |
| sendEmails | Boolean | Specifies whether the announcement is sent as an email to all group members regardless of their email setting for the group. If Chatter emails aren’t enabled for the organization, announcement emails aren’t sent. Default value is false. | Optional for creating an announcementDon’t specify for updating an announcement | 36.0 |

#### See Also

-   [postAnnouncement(communityId, groupId, announcement)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_postAnnouncement_2 "Post an announcement to a group.")

-   [postAnnouncement(communityId, announcement)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_postAnnouncement_3 "Post an announcement.")

## Related Topics

- ConnectApi.MessageBodyInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_msgBody.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- postAnnouncement(communityId, groupId, announcement) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- postAnnouncement(communityId, announcement) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm)
