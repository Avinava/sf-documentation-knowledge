---
title: "Announcements Class"
domain: apex-reference
topic: announcements-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:15.682Z
estimatedTokens: 2766
namespace: ConnectApi
keywords: [Announcements, Get, first, page, announcements., Usage, deleteAnnouncement, communityId, announcementId, API, Version, Requires, Chatter, getAnnouncement, getAnnouncements, parentId, Guest, Users, pageParam, pageSize]
---

# Announcements Class

> Get the first page of announcements.

**Namespace:** `ConnectApi`

# Announcements Class

Access information about announcements and post announcements.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Usage

Use the ConnectApi.Announcements class to get, create, update, and delete announcements. Use an announcement to highlight information. Users can discuss, like, and post comments on announcements. Deleting the feed post deletes the announcement.

This image shows an announcement displayed in a group. Creating an announcement also creates a feed item with the announcement text.

![Announcement in the Salesforce UI](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fchatter_connect%2Fimages%2Fgroup_announcement.png&folder=apexref)

An announcement displays in a designated location in the Salesforce UI until 11:59 p.m. on its expiration date, unless it’s deleted or replaced by another announcement.

## Announcements Methods

These methods are for Announcements. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

-   **[deleteAnnouncement(communityId, announcementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_deleteAnnouncement)**
    Delete an announcement.
-   **[getAnnouncement(communityId, announcementId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_getAnnouncement)**
    Get an announcement.
-   **[getAnnouncements(communityId, parentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_getAnnouncements_1)**
    Get the first page of announcements.
-   **[getAnnouncements(communityId, parentId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_getAnnouncements_2)**
    Get a page of announcements.
-   **[postAnnouncement(communityId, announcement)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_postAnnouncement_3)**
    Post an announcement.
-   **[updateAnnouncement(communityId, announcementId, expirationDate)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_updateAnnouncement)**
    Update the expiration date of an announcement.

### deleteAnnouncement(communityId, announcementId)

Delete an announcement.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static void deleteAnnouncement(String communityId, String announcementId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

announcementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An announcement ID, which has a prefix of 0BT.

#### Return Value

Type: Void

#### Usage

To get a list of announcements in a group, call [getAnnouncements(communityId, parentId)](#apex_ConnectAPI_Announcements_getAnnouncements_1 "Get the first page of announcements.") or [getAnnouncements(communityId, parentId, pageParam, pageSize)](#apex_ConnectAPI_Announcements_getAnnouncements_2 "Get a page of announcements.").

To post an announcement to a group, call [postAnnouncement(communityId, announcement)](#apex_ConnectAPI_Announcements_postAnnouncement_3 "Post an announcement.") .

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

### getAnnouncements(communityId, parentId, pageParam, pageSize)

Get a page of announcements.

#### API Version

36.0

#### Available to Guest Users

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.AnnouncementPage getAnnouncements(String communityId, String parentId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

parentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the parent entity for the announcement, that is, a group ID when the announcement appears in a group.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of announcements per page.

#### Return Value

Type: [ConnectApi.AnnouncementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcementpage.htm#apex_connectapi_output_announcementpage "A collection of announcements.")

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- deleteAnnouncement(communityId, announcementId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm)
- getAnnouncement(communityId, announcementId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm)
- getAnnouncements(communityId, parentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm)
- getAnnouncements(communityId, parentId, pageParam, pageSize) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm)
- postAnnouncement(communityId, announcement) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm)
- updateAnnouncement(communityId, announcementId, expirationDate) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.Announcement (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcement.htm)
- ConnectApi.AnnouncementPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcementpage.htm)
