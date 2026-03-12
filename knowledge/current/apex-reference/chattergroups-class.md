---
title: "ChatterGroups Class"
domain: apex-reference
topic: chattergroups-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:17.918Z
estimatedTokens: 20666
namespace: ConnectApi
keywords: [ChatterGroups, Associate, record, group, addMember, communityId, groupId, userId, API, Version, Requires, Chatter, Usage, addMemberWithRole, role]
---

# ChatterGroups Class

> Associate a record with a group.

**Namespace:** `ConnectApi`

# ChatterGroups Class

Information about groups, such as the group’s members, photo, and the groups the specified user is a member of. Add members to a group, remove members, and change the group photo.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ChatterGroups Methods

These methods are for ChatterGroups. All methods are static.

All methods in this class require Chatter and are subject to the per user, per namespace, per hour rate limit.

-   **[addMember(communityId, groupId, userId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_addMember)**
    Add a user to a group as a standard member.
-   **[addMemberWithRole(communityId, groupId, userId, role)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_addMemberWithRole)**
    Add a user with a role to a group.
-   **[addRecord(communityId, groupId, recordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_addRecord)**
    Associate a record with a group.
-   **[createGroup(communityId, groupInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_createGroup)**
    Create a group.
-   **[deleteBannerPhoto(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_deleteBannerPhoto_1)**
    Delete the group banner photo.
-   **[deleteGroup(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_deleteGroup_1)**
    Delete a group.
-   **[deleteMember(communityId, membershipId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_deleteMember)**
    Remove a member from a group.
-   **[deletePhoto(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_deletePhoto)**
    Delete the group photo.
-   **[getAnnouncements(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getAnnouncements)**
    Get the first page of announcements in a group.
-   **[getAnnouncements(communityId, groupId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getAnnouncements_2)**
    Get a page of announcements in a group.
-   **[getBannerPhoto(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getBannerPhoto_2)**
    Get the group banner photo.
-   **[getGroup(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroup)**
    Get information about a group.
-   **[getGroupBatch(communityId, groupIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroupBatch)**
    Get information about a list of groups.
-   **[getGroupMembershipRequest(communityId, requestId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroupMembershipRequest)**
    Get information about a request to join a private group.
-   **[getGroupMembershipRequests(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroupMembershipRequests)**
    Get information about every request to join a private group.
-   **[getGroupMembershipRequests(communityId, groupId, status)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroupMembershipRequests_2)**
    Get information about every request to join a private group that has a specified status.
-   **[getGroups(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroups)**
    Get the first page of groups.
-   **[getGroups(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroups_2)**
    Get a page of groups.
-   **[getGroups(communityId, pageParam, pageSize, archiveStatus)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroups_3)**
    Get a page of groups with an archive status.
-   **[getMember(communityId, membershipId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getMember)**
    Get information about a group member.
-   **[getMembers(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getMembers)**
    Get the first page of information about the members of a group.
-   **[getMembers(communityId, groupId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getMembers_2)**
    Get a page of information about the members of a group.
-   **[getMembershipBatch(communityId, membershipIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getMembershipBatch)**
    Get information about a list of group memberships.
-   **[getMyChatterSettings(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getMyChatterSettings)**
    Get the context user’s Chatter settings for a group.
-   **[getPhoto(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getPhoto)**
    Get the photo for a group.
-   **[getRecord(communityId, groupRecordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getRecord)**
    Get a record associated with a group.
-   **[getRecords(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getRecords)**
    Get the first page of records associated with a group.
-   **[getRecords(communityId, groupId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getRecords_2)**
    Get a page of records associated with a group.
-   **[inviteUsers(groupId, invite)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_inviteUsers_1)**
    Invite internal and external users to join a group.
-   **[postAnnouncement(communityId, groupId, announcement)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_postAnnouncement_2)**
    Post an announcement to a group.
-   **[removeRecord(communityId, groupRecordId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_removeRecord)**
    Remove the association of a record with a group.
-   **[requestGroupMembership(communityId, groupId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_requestGroupMembership)**
    Request membership in a private group.
-   **[searchGroups(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_searchGroups)**
    Get the first page of groups that match the search criteria.
-   **[searchGroups(communityId, q, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_searchGroups_4)**
    Get a page of groups that match the search criteria.
-   **[searchGroups(communityId, q, archiveStatus, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_searchGroups_5)**
    Get a page of groups with the archive status that match the search criteria.
-   **[setBannerPhoto(communityId, groupId, fileId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setBannerPhoto_3)**
    Set an uploaded file as the group banner photo.
-   **[setBannerPhoto(communityId, groupId, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setBannerPhoto_4)**
    Set a file that hasn’t been uploaded as the group banner photo.
-   **[setBannerPhotoWithAttributes(communityId, groupId, bannerPhoto)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setBannerPhotoWithAttributes_5)**
    Set and crop an uploaded file as the group banner photo.
-   **[setBannerPhotoWithAttributes(communityId, groupId, bannerPhoto, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setBannerPhotoWithAttributes_6)**
    Set and crop a file that hasn’t been uploaded as the group banner photo.
-   **[setPhoto(communityId, groupId, fileId, versionNumber)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setPhoto)**
    Set an uploaded file as the group photo.
-   **[setPhoto(communityId, groupId, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setPhoto_2)**
    Set a file that hasn’t been uploaded as the group photo.
-   **[setPhotoWithAttributes(communityId, groupId, photo)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setPhotoWithAttributes)**
    Set and crop an uploaded file as the group photo.
-   **[setPhotoWithAttributes(communityId, groupId, photo, fileUpload)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setPhotoWithAttributes_2)**
    Set and crop a file that hasn’t been uploaded as the group photo.
-   **[updateGroup(communityId, groupId, groupInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_updateGroup)**
    Update the settings of a group.
-   **[updateGroupMember(communityId, membershipId, role)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_updateGroupMember)**
    Update the role of a group member.
-   **[updateMyChatterSettings(communityId, groupId, emailFrequency)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_updateMyChatterSettings)**
    Update the context user’s email frequency for a group.
-   **[updateRequestStatus(communityId, requestId, status)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_updateRequestStatus)**
    Update a request to join a private group.
-   **[updateRequestStatus(communityId, requestId, status, responseMessage)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_updateRequestStatus_1)**
    Update a request to join a private group and optionally provide a message when the request is denied.

### addMember(communityId, groupId, userId)

Add a user to a group as a standard member.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMember addMember(String communityId, String groupId, String userId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

#### Return Value

Type: [ConnectApi.​GroupMember](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Member_Output.htm "Member of a group.")

#### Usage

To execute this method, the context user must be the group owner or moderator.

### addMemberWithRole(communityId, groupId, userId, role)

Add a user with a role to a group.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMember addMemberWithRole(String communityId, String groupId, String userId, ConnectApi.GroupMembershipType role)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

userId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a user.

role

Type: [ConnectApi.GroupMembershipType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupMemType_enum)

The group membership type. One of these values:

-   GroupManager
-   StandardMember

#### Return Value

Type: [ConnectApi.​GroupMember](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Member_Output.htm "Member of a group.")

#### Usage

To execute this method, the context user must be the group owner or moderator.

### addRecord(communityId, groupId, recordId)

Associate a record with a group.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupRecord addRecord(String communityId, String groupId, String recordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group with which to associate the record.

recordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the record to associate with the group.

#### Return Value

Type: [ConnectApi.GroupRecord](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecord.htm#apex_connectapi_output_GroupRecord "A record associated with a group.")

### createGroup(communityId, groupInput)

Create a group.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupDetail createGroup(String, communityId, ConnectApi.ChatterGroupInput groupInput)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),

ID for an Experience Cloud site, internal, or null.

groupInput

Type: [ConnectApi.Chatter​​GroupInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_chattergroupinput.htm "Chatter group input.")

The properties of the group.

#### Return Value

Type: [ConnectApi.​Chatter​Group​Detail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupDetail.htm "Chatter group details.")

### deleteBannerPhoto(communityId, groupId)

Delete the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static Void deleteBannerPhoto(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group.

#### Return Value

Type: Void

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

### deleteGroup(communityId, groupId)

Delete a group.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static Void deleteGroup(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: Void

### deleteMember(communityId, membershipId)

Remove a member from a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static Void deleteMember(String communityId, String membershipId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

membershipId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a membership.

#### Return Value

Type: Void

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

### deletePhoto(communityId, groupId)

Delete the group photo.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static Void deletePhoto(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: Void

#### Usage

This method is only successful when the context user is the group manager or owner, or has Modify All Data permission.

### getAnnouncements(communityId, groupId)

Get the first page of announcements in a group.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.AnnouncementPage getAnnouncements(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.AnnouncementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcementpage.htm "A collection of announcements.")

#### Usage

To post an announcement, get information about an announcement, update the expiration date of an announcement, or delete an announcement, use the methods of the [ConnectApi.Announcements](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_methods "These methods are for Announcements. All methods are static.") class.

### getAnnouncements(communityId, groupId, pageParam, pageSize)

Get a page of announcements in a group.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.AnnouncementPage getAnnouncements(String communityId, String groupId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.AnnouncementPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_announcementpage.htm "A collection of announcements.")

#### Usage

To post an announcement, get information about an announcement, update the expiration date of an announcement, or delete an announcement, use the methods of the [ConnectApi.Announcements](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Announcements_static_methods.htm#apex_ConnectAPI_Announcements_methods "These methods are for Announcements. All methods are static.") class.

### getBannerPhoto(communityId, groupId)

Get the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto getBannerPhoto(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the group.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")

### getGroup(communityId, groupId)

Get information about a group.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupDetail getGroup(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.​Chatter​Group​Detail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupDetail.htm "Chatter group details.")

### getGroupBatch(communityId, groupIds)

Get information about a list of groups.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] getGroupBatch(String communityId, List<String\> groupIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to 500 group IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a ConnectApi.ChatterGroup object and errors embedded in the results for groups that didn’t load.

#### Example

```

```

#### See Also

-   [getMembershipBatch(communityId, membershipIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getMembershipBatch "Get information about a list of group memberships.")


### getGroupMembershipRequest(communityId, requestId)

Get information about a request to join a private group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMembershipRequest getGroupMembershipRequest(String communityId, String requestId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

requestId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of a request to join a private group.

#### Return Value

Type: [ConnectApi.​Group​Membership​Request](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_request.htm "Request to become a group member.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

### getGroupMembershipRequests(communityId, groupId)

Get information about every request to join a private group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMembershipRequests getGroupMembershipRequests(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.Group​​MembershipRequests](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_requests.htm "Requests to become group members.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

### getGroupMembershipRequests(communityId, groupId, status)

Get information about every request to join a private group that has a specified status.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMembershipRequests getGroupMembershipRequests(String communityId, String groupId, ConnectApi.GroupMembershipRequestStatus status)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

status

Type: ConnectApi.​GroupMembership​RequestStatus

status—Status of a request to join a private group.

-   Accepted
-   Declined
-   Pending

#### Return Value

Type: [ConnectApi.Group​​MembershipRequests](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_requests.htm "Requests to become group members.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

### getGroups(communityId)

Get the first page of groups.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupPage getGroups(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

### getGroups(communityId, pageParam, pageSize)

Get a page of groups.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupPage getGroups(String communityId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

### getGroups(communityId, pageParam, pageSize, archiveStatus)

Get a page of groups with an archive status.

#### API Version

29.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupPage getGroups(String communityId, Integer pageParam, Integer pageSize, ConnectApi.GroupArchiveStatus archiveStatus)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

archiveStatus

Type: [ConnectApi.GroupArchiveStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupArchiveStatusEnum)

Archive status of groups.

-   All—All groups, including groups that are archived and groups that aren’t archived.
-   Archived—Groups that are archived.
-   NotArchived—Groups that aren’t archived.

If you pass in null, the default value is All.

#### Return Value

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

### getMember(communityId, membershipId)

Get information about a group member.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMember getMember(String communityId, String membershipId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

membershipId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a membership.

#### Return Value

Type: [ConnectApi.​GroupMember](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Member_Output.htm "Member of a group.")

### getMembers(communityId, groupId)

Get the first page of information about the members of a group.

#### API Version

28.0

#### Available to Guest Users

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMemberPage getMembers(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.Group​​MemberPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_groupMemberPage.htm "Page of group members.")

### getMembers(communityId, groupId, pageParam, pageSize)

Get a page of information about the members of a group.

#### API Version

28.0

#### Available to Guest Users

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMemberPage getMembers(String communityId, String groupId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.Group​​MemberPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_groupMemberPage.htm "Page of group members.")

### getMembershipBatch(communityId, membershipIds)

Get information about a list of group memberships.

#### API Version

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BatchResult\[\] getMembershipBatch(String communityId, List<String\> membershipIds)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

membershipIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of up to 500 group membership IDs.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a ConnectApi.GroupMember object and errors embedded in the results for group memberships that didn’t load.

#### Example

```

```

#### See Also

-   [getGroupBatch(communityId, groupIds)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_getGroupBatch "Get information about a list of groups.")


### getMyChatterSettings(communityId, groupId)

Get the context user’s Chatter settings for a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupChatterSettings getMyChatterSettings(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.Group​​ChatterSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Chatter_Settings.htm "A user’s Chatter settings for a specific group.")

### getPhoto(communityId, groupId)

Get the photo for a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo getPhoto(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

### getRecord(communityId, groupRecordId)

Get a record associated with a group.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupRecord getRecord(String communityId, String groupRecordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group record.

#### Return Value

Type: [ConnectApi.GroupRecord](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecord.htm#apex_connectapi_output_GroupRecord "A record associated with a group.")

### getRecords(communityId, groupId)

Get the first page of records associated with a group.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupRecordPage getRecords(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.​GroupRecordPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecordPage.htm "A paginated list of ConnectApi.GroupRecord objects.")

### getRecords(communityId, groupId, pageParam, pageSize)

Get a page of records associated with a group.

#### API Version

33.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupRecordPage getRecords(String communityId, String groupId, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.​GroupRecordPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupRecordPage.htm "A paginated list of ConnectApi.GroupRecord objects.")

### inviteUsers(groupId, invite)

Invite internal and external users to join a group.

#### API Version

39.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Invitations inviteUsers(String groupId, ConnectApi.InviteInput invite)

#### Parameters

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group.

invite

Type: [ConnectApi.InviteInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_invite_collection.htm#apex_connectapi_input_invite_collection "An invitation.")

A ConnectApi.InviteInput body.

#### Return Value

Type: [ConnectApi.Invitations](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_invite_collection.htm#apex_connectapi_output_invite_collection "A collection of invitations.")

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

### removeRecord(communityId, groupRecordId)

Remove the association of a record with a group.

#### API Version

34.0

#### Requires Chatter

Yes

#### Signature

public static Void removeRecord(String communityId, String groupRecordId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupRecordId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the group record.

#### Return Value

Type: Void

### requestGroupMembership(communityId, groupId)

Request membership in a private group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMembershipRequest requestGroupMembership(String communityId, String groupId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

#### Return Value

Type: [ConnectApi.​Group​Membership​Request](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_request.htm "Request to become a group member.")

#### Sample: Requesting to Join a Private Group

This sample code calls ConnectApi.ChatterGroups.requestGroupMembership to request to join a private group.

```

```

### searchGroups(communityId, q)

Get the first page of groups that match the search criteria.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupPage searchGroups(String communityId, String q)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm). Can be specified as null.

#### Return Value

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchGroups(communityId, q, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setTestSearchGroups "Register a ConnectApi.ChatterGroupPage object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### searchGroups(communityId, q, pageParam, pageSize)

Get a page of groups that match the search criteria.

#### API Version

28.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupPage searchGroups(String communityId, String q, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm). Can be specified as null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchGroups(communityId, q, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setTestSearchGroups_2 "Register a ConnectApi.ChatterGroupPage object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### searchGroups(communityId, q, archiveStatus, pageParam, pageSize)

Get a page of groups with the archive status that match the search criteria.

#### API Version

29.0

#### Available to Guest Users

31.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroupPage searchGroups(String communityId, String q, ConnectApi.GroupArchiveStatus archiveStatus, Integer pageParam, Integer pageSize)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm). Can be specified as null.

archiveStatus

Type: [ConnectApi.GroupArchiveStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupArchiveStatusEnum)

Archive status of groups.

-   All—All groups, including groups that are archived and groups that aren’t archived.
-   Archived—Groups that are archived.
-   NotArchived—Groups that aren’t archived.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestSearchGroups(communityId, q, archiveStatus, pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_setTestSearchGroups_5 "Register a ConnectApi.ChatterGroupPage object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test method with the same parameters or you receive an exception.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setBannerPhoto(communityId, groupId, fileId, versionNumber)

Set an uploaded file as the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto setBannerPhoto(String communityId, String groupId, String fileId, Integer versionNumber)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the group.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the already uploaded file. The key prefix must be 069, and the image must be smaller than 8 MB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the existing file. Specify either an existing version number or, to get the latest version, specify null.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

### setBannerPhoto(communityId, groupId, fileUpload)

Set a file that hasn’t been uploaded as the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto setBannerPhoto(String communityId, String groupId, ConnectApi.BinaryInput fileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the group.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

### setBannerPhotoWithAttributes(communityId, groupId, bannerPhoto)

Set and crop an uploaded file as the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String communityId, String groupId, ConnectApi.BannerPhotoInput bannerPhoto)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the group.

bannerPhoto

Type: [ConnectApi.BannerPhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_banner_photo.htm "A banner photo.")

A ConnectApi.BannerPhotoInput object that specifies the ID and version of the file, and how to crop the file.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

### setBannerPhotoWithAttributes(communityId, groupId, bannerPhoto, fileUpload)

Set and crop a file that hasn’t been uploaded as the group banner photo.

#### API Version

36.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.BannerPhoto setBannerPhotoWithAttributes(String communityId, String groupId, ConnectApi.BannerPhotoInput bannerPhoto, ConnectApi.BinaryInput fileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the group.

bannerPhoto

Type: [ConnectApi.BannerPhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_banner_photo.htm "A banner photo.")

A ConnectApi.BannerPhotoInput object specifying the cropping parameters.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.BannerPhoto](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_banner_photo.htm "A banner photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

### setPhoto(communityId, groupId, fileId, versionNumber)

Set an uploaded file as the group photo.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhoto(String communityId, String groupId, String fileId, Integer versionNumber)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

fileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of a file already uploaded. The key prefix must be 069, and the file must be an image that is smaller than 2 GB.

versionNumber

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Version number of the existing file. Specify either an existing version number or, to get the latest version, specify null.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

#### Sample: Updating a Group Photo with an Existing File

When a group is created, it doesn’t have a group photo. You can set an existing photo that has already been uploaded to Salesforce as the group photo. The key prefix must be 069 and the file size must be less than 2 GB.

```

```

### setPhoto(communityId, groupId, fileUpload)

Set a file that hasn’t been uploaded as the group photo.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhoto(String communityId, String groupId, ConnectApi.BinaryInput fileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

#### Sample: Uploading a New File and Using It as a Group Photo

When a group is created, it doesn’t have a group photo. You can upload a photo and set it as the group photo.

```

```

### setPhotoWithAttributes(communityId, groupId, photo)

Set and crop an uploaded file as the group photo.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhotoWithAttributes(String communityId, String groupId, ConnectApi.PhotoInput photo)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

photo

Type: [ConnectApi.PhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm "Specify how to crop a photo that has already been uploaded.")

A ConnectApi.PhotoInput object that specifies the ID and version of the file, and how to crop the file.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

### setPhotoWithAttributes(communityId, groupId, photo, fileUpload)

Set and crop a file that hasn’t been uploaded as the group photo.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.Photo setPhotoWithAttributes(String communityId, String groupId, ConnectApi.PhotoInput photo, ConnectApi.BinaryInput fileUpload)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

photo

Type: [ConnectApi.PhotoInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_PhotoInput.htm "Specify how to crop a photo that has already been uploaded.")

A ConnectApi.PhotoInput object that specifies how to crop the file specified in fileUpload.

fileUpload

Type: [ConnectApi.Binary​​Input](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

File to use as the photo. The content type must be usable as an image.

#### Return Value

Type: [ConnectApi.Photo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_photo.htm "Profile photo.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

Photos are processed asynchronously and might not be visible right away.

### updateGroup(communityId, groupId, groupInput)

Update the settings of a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroup updateGroup(String communityId, String groupId, ConnectApi.ChatterGroupInput groupInput)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

groupInput

Type: [ConnectApi.Chatter​​GroupInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_chattergroupinput.htm "Chatter group input.")

A ConnectApi.ChatterGroupInput object.

#### Return Value

Type: [ConnectApi.ChatterGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm "Chatter group.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission. Use this method to update any settings in the ConnectApi.ChatterGroupInput class. These settings include the group title and text in the “Information” section, whether the group is public or private, and whether the group is archived.

#### Example

This example archives a group.

```

```

### updateGroupMember(communityId, membershipId, role)

Update the role of a group member.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterGroup updateGroupMember(String communityId, String membershipId, ConnectApi.GroupMembershipType role)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

membershipId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a membership.

role

Type: [ConnectApi.GroupMembershipType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupMemType_enum)

The group membership type. One of these values:

-   GroupManager
-   StandardMember

#### Return Value

Type: [ConnectApi.ChatterGroup](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_chatter_group.htm "Chatter group.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

### updateMyChatterSettings(communityId, groupId, emailFrequency)

Update the context user’s email frequency for a group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupChatterSettings updateMyChatterSettings(String communityId, String groupId, ConnectApi.GroupEmailFrequency emailFrequency)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

groupId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a group.

emailFrequency

Type: [ConnectApi.​GroupEmail​Frequency](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupEmailFreq_enum)

Frequency with which a user receives email.

-   EachPost
-   DailyDigest
-   WeeklyDigest
-   Never
-   UseDefault

The value UseDefault uses the value set in a call to [updateChatterSettings(communityId, userId, defaultGroupEmailFrequency)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterUsers_static_methods.htm#apex_ConnectAPI_ChatterUsers_updateChatterSettings "Update the default Chatter settings for a user.").

#### Return Value

Type: [ConnectApi.Group​​ChatterSettings](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_Group_Chatter_Settings.htm "A user’s Chatter settings for a specific group.")

### updateRequestStatus(communityId, requestId, status)

Update a request to join a private group.

#### API Version

28.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMembershipRequest updateRequestStatus(String communityId, String requestId, ConnectApi.GroupMembershipRequestStatus status)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

requestId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a request to join a private group.

status

Type: [ConnectApi.​GroupMembership​RequestStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupMemRequestStatus_enum)

Status of the request:

-   Accepted
-   Declined

The Pending value of the enum is not valid in this method.

#### Return Value

Type: [ConnectApi.​Group​Membership​Request](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_request.htm "Request to become a group member.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

#### Sample: Accepting or Declining a Request to Join a Private Group

This sample code calls ConnectApi.ChatterGroups.updateRequestStatus and passes it the membership request ID and an ConnectApi.GroupMembershipRequestStatus.Accepted status. You can also pass ConnectApi.GroupMembershipRequestStatus.Declined.

```

```

### updateRequestStatus(communityId, requestId, status, responseMessage)

Update a request to join a private group and optionally provide a message when the request is denied.

#### API Version

35.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.GroupMembershipRequest updateRequestStatus(String communityId, String requestId, ConnectApi.GroupMembershipRequestStatus status, String responseMessage)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

requestId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for a request to join a private group.

status

Type: [ConnectApi.GroupMembershipRequestStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupMemRequestStatus_enum)

Status of the request:

-   Accepted
-   Declined

The Pending value of the enum is not valid in this method.

responseMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Provide a message to the user if their membership request is declined. The value of this property is used only when the value of the status property is Declined.

The maximum length is 756 characters.

#### Return Value

Type: [ConnectApi.​Group​Membership​Request](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_group_membership_request.htm "Request to become a group member.")

#### Usage

This method is successful only when the context user is the group manager or owner, or has Modify All Data permission.

## ChatterGroups Test Methods

These test methods are for ChatterGroups. All methods are static.

For information about using these methods to test your ConnectApi code, see [Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm).

### setTestSearchGroups(communityId, q, result)

Register a ConnectApi.ChatterGroupPage object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestSearchGroups(String communityId, String q, ConnectApi.ChatterGroupPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm). Can be specified as null.

result

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

Test ConnectApi.ChatterGroupPage object.

#### Return Value

Type: Void

#### See Also

-   [searchGroups(communityId, q)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_searchGroups "Get the first page of groups that match the search criteria.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestSearchGroups(communityId, q, pageParam, pageSize, result)

Register a ConnectApi.ChatterGroupPage object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test method with the same parameters or you receive an exception.

#### API Version

28.0

#### Signature

public static Void setTestSearchGroups(String communityId, String q, Integer pageParam, Integer pageSize, ConnectApi.ChatterGroupPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm). Can be specified as null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

result

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

Test ConnectApi.ChatterGroupPage object.

#### Return Value

Type: Void

#### See Also

-   [searchGroups(communityId, q, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_searchGroups_4 "Get a page of groups that match the search criteria.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")


### setTestSearchGroups(communityId, q, archiveStatus, pageParam, pageSize, result)

Register a ConnectApi.ChatterGroupPage object to be returned when the matching ConnectApi.searchGroups method is called in a test context. Use the test method with the same parameters or you receive an exception.

#### API Version

29.0

#### Signature

public static Void setTestSearchGroups(String communityId, String q, ConnectApi.GroupArchiveStatus, archiveStatus, Integer pageParam, Integer pageSize, ConnectApi.ChatterGroupPage result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm). Can be specified as null.

archiveStatus

Type: [ConnectApi.GroupArchiveStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#GroupArchiveStatusEnum)

Archive status of groups.

-   All—All groups, including groups that are archived and groups that aren’t archived.
-   Archived—Groups that are archived.
-   NotArchived—Groups that aren’t archived.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

result

Type: [ConnectApi.Chatter​​​GroupPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_GroupPage.htm "Page of groups.")

Test ConnectApi.ChatterGroupPage object.

#### Return Value

Type: Void

#### See Also

-   [searchGroups(communityId, q, archiveStatus, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm#apex_ConnectAPI_ChatterGroups_searchGroups_5 "Get a page of groups with the archive status that match the search criteria.")

-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")

## Code Examples

```apex
// Create a list of groups.
ConnectApi.ChatterGroupPage groupPage = ConnectApi.ChatterGroups.getGroups(null);

// Create a list of group IDs.
List<String> groupIds = new List<String>();
for (ConnectApi.ChatterGroup aGroup : groupPage.groups){
    groupIds.add(aGroup.id); 
}

// Get info about all the groups in the list.
ConnectApi.BatchResult[] batchResults = ConnectApi.ChatterGroups.getGroupBatch(null, groupIds);
    
for (ConnectApi.BatchResult batchResult : batchResults) {
    if (batchResult.isSuccess()) {
        // Operation was successful. 
        // Print the number of members in each group.
        ConnectApi.ChatterGroup aGroup;
        if(batchResult.getResult() instanceof ConnectApi.ChatterGroup) {
           aGroup = (ConnectApi.ChatterGroup) batchResult.getResult();
        }
        System.debug('SUCCESS');
        System.debug(aGroup.memberCount);
    }
    else {
        // Operation failed. Print errors.
        System.debug('FAILURE');
        System.debug(batchResult.getErrorMessage());
    }
}
```

```apex
// Get members of a group.
ConnectApi.GroupMemberPage membersPage = ConnectApi.ChatterGroups.getMembers(null, '0F9D00000000oOT');

// Create a list of membership IDs.
List<String> membersList = new List<String>();
for (ConnectApi.GroupMember groupMember : membersPage.members){
    membersList.add(groupMember.id); 
}

// Get info about all group memberships in the list.
ConnectApi.BatchResult[] batchResults = ConnectApi.ChatterGroups.getMembershipBatch(null, membersList);

for (ConnectApi.BatchResult batchResult : batchResults) {
    if (batchResult.isSuccess()) {
        // Operation was successful. 
        // Print the first name of each member.
        ConnectApi.GroupMember groupMember;
        if(batchResult.getResult() instanceof ConnectApi.GroupMember) {
            groupMember = (ConnectApi.GroupMember) batchResult.getResult();
        }
        System.debug('SUCCESS');
        System.debug(groupMember.user.firstName);
    }
    else {
        // Operation failed. Print errors.
        System.debug('FAILURE');
        System.debug(batchResult.getErrorMessage());
    }
}
```

```
String communityId = null;
ID groupId = '0F9x00000000hAZ';

ConnectApi.GroupMembershipRequest membershipRequest = ConnectApi.ChatterGroups.requestGroupMembership(communityId, groupId);
```

```
String communityId = null;
ID groupId = '0F9x00000000hAK';
ID fileId = '069x00000001Ion';

// Set photo
ConnectApi.Photo photo = ConnectApi.ChatterGroups.setPhoto(communityId, groupId, fileId, null);
```

```apex
String communityId = null;
ID groupId = '0F9x00000000hAP';
ID photoId = '069x00000001Ioo';

// Set photo
List<ContentVersion> groupPhoto = [Select c.VersionData From ContentVersion c where ContentDocumentId=:photoId];
ConnectApi.BinaryInput binary = new ConnectApi.BinaryInput(groupPhoto.get(0).VersionData, 'image/png', 'image.png');
ConnectApi.Photo photo = ConnectApi.ChatterGroups.setPhoto(communityId, groupId, binary);
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- addMember(communityId, groupId, userId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- addMemberWithRole(communityId, groupId, userId, role) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- addRecord(communityId, groupId, recordId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- createGroup(communityId, groupInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- deleteBannerPhoto(communityId, groupId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- deleteGroup(communityId, groupId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- deleteMember(communityId, membershipId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- deletePhoto(communityId, groupId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
- getAnnouncements(communityId, groupId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ChatterGroups_static_methods.htm)
