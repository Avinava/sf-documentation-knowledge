---
title: "getGroupMembershipRequest(communityId,
  requestId)"
domain: apex-reference
topic: getgroupmembershiprequestcommunityid-requestid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [getGroupMembershipRequest, communityId, requestId, Get, information, request, join, private, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getGroupMembershipRequest(communityId,
  requestId)

> Get information about a request to join a private group.

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