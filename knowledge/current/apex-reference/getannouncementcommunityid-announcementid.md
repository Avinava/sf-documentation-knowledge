---
title: "getAnnouncement(communityId,
      announcementId)"
domain: apex-reference
topic: getannouncementcommunityid-announcementid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.966Z
keywords: [getAnnouncement, communityId, announcementId, Get, announcement., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getAnnouncement(communityId,
      announcementId)

> Get an announcement.

### getAnnouncement(communityId, announcementId)

Get an announcement.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Announcement getAnnouncement(String communityId, String announcementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

announcementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An announcement ID, which has a prefix of 0BT.

#### Return Value

Type: [ConnectApi.Announcement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcement.htm "An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement.")

#### Usage

To get a list of announcements in a group, call [getAnnouncements(communityId, parentId)](#apex_ConnectAPI_Announcements_getAnnouncements_1 "Get the first page of announcements.") or [getAnnouncements(communityId, parentId, pageParam, pageSize)](#apex_ConnectAPI_Announcements_getAnnouncements_2 "Get a page of announcements.").

To post an announcement to a group, call [postAnnouncement(communityId, announcement)](#apex_ConnectAPI_Announcements_postAnnouncement_3 "Post an announcement.") .