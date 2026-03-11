---
title: "updateAnnouncement(communityId, announcementId,
            expirationDate)"
domain: apex-reference
topic: updateannouncementcommunityid-announcementid-expirationdate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.966Z
keywords: [updateAnnouncement, communityId, announcementId, expirationDate, Update, expiration, date, announcement., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# updateAnnouncement(communityId, announcementId,
            expirationDate)

> Update the expiration date of an announcement.

### updateAnnouncement(communityId, announcementId, expirationDate)

Update the expiration date of an announcement.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Announcement updateAnnouncement(String communityId, String announcementId, Datetime expirationDate)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

announcementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An announcement ID, which has a prefix of 0BT.

expirationDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The Salesforce UI displays an announcement until 11:59 p.m. on this date unless another announcement is posted first. The Salesforce UI ignores the time value in the expirationDate. However, you can use the time value to create your own display logic in your own UI.

#### Return Value

Type: [ConnectApi.Announcement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcement.htm "An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement.")

#### Usage

To get a list of announcements in a group, call [getAnnouncements(communityId, parentId)](#apex_ConnectAPI_Announcements_getAnnouncements_1 "Get the first page of announcements.") or [getAnnouncements(communityId, parentId, pageParam, pageSize)](#apex_ConnectAPI_Announcements_getAnnouncements_2 "Get a page of announcements.").

To post an announcement to a group, call [postAnnouncement(communityId, announcement)](#apex_ConnectAPI_Announcements_postAnnouncement_3 "Post an announcement.") .