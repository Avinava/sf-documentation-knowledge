---
title: "getAnnouncements(communityId, parentId)"
domain: apex-reference
topic: getannouncementscommunityid-parentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:29.966Z
keywords: [getAnnouncements, communityId, parentId, Get, first, page, announcements., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getAnnouncements(communityId, parentId)

> Get the first page of announcements.

### getAnnouncements(communityId, parentId)

Get the first page of announcements.

#### API Version

36.0

#### Available to Guest Users

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.AnnouncementPage getAnnouncements(String communityId, String parentId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

parentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the parent entity for the announcement, that is, a group ID when the announcement appears in a group.

#### Return Value

Type: [ConnectApi.AnnouncementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcementpage.htm#apex_connectapi_output_announcementpage "A collection of announcements.")