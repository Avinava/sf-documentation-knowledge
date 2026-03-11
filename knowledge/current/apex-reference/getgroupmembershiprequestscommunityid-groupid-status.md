---
title: "getGroupMembershipRequests(communityId, groupId,
   status)"
domain: apex-reference
topic: getgroupmembershiprequestscommunityid-groupid-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getGroupMembershipRequests, communityId, groupId, status, Get, information, every, request, join, private, group, specified, status., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# getGroupMembershipRequests(communityId, groupId,
   status)

> Get information about every request to join a private group that has a specified status.

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