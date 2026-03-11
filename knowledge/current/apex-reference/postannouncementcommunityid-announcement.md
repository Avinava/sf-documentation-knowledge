---
title: "postAnnouncement(communityId, announcement)"
domain: apex-reference
topic: postannouncementcommunityid-announcement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.966Z
keywords: [postAnnouncement, communityId, announcement, Post, announcement., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# postAnnouncement(communityId, announcement)

> Post an announcement.

### postAnnouncement(communityId, announcement)

Post an announcement.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Announcement postAnnouncement(String communityId, ConnectApi.AnnouncementInput announcement)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

announcement

Type: [ConnectApi.AnnouncementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_announcement.htm#apex_connectapi_input_announcement "An announcement.")

A ConnectApi.AnnouncementInput object.

#### Return Value

Type: [ConnectApi.Announcement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcement.htm "An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement.")