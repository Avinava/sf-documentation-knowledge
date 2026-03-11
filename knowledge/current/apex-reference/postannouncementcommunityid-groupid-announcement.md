---
title: "postAnnouncement(communityId, groupId,
    announcement)"
domain: apex-reference
topic: postannouncementcommunityid-groupid-announcement
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [postAnnouncement, communityId, groupId, announcement, Post, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# postAnnouncement(communityId, groupId,
    announcement)

> Post an announcement to a group.

### postAnnouncement(communityId, groupId, announcement)

Post an announcement to a group.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Announcement postAnnouncement(String communityId, String groupId, ConnectApi.AnnouncementInput announcement)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

announcement

Type: [ConnectApi.AnnouncementInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_announcement.htm "An announcement.")

A ConnectApi.AnnouncementInput object.

#### Return Value

Type: [ConnectApi.Announcement](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcement.htm "An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement.")

#### Usage

Use an announcement to highlight information. Users can discuss, like, and post comments on announcements. Deleting the feed post deletes the announcement.

To post an announcement, get information about an announcement, update the expiration date of an announcement, or delete an announcement, use the methods of the [ConnectApi.Announcements](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_methods "These methods are for Announcements. All methods are static.") class.