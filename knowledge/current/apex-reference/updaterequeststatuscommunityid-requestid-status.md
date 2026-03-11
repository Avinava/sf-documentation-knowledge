---
title: "updateRequestStatus(communityId, requestId,
  status)"
domain: apex-reference
topic: updaterequeststatuscommunityid-requestid-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [updateRequestStatus, communityId, requestId, status, Update, request, join, private, group., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Sample, Accepting]
---

# updateRequestStatus(communityId, requestId,
  status)

> Update a request to join a private group.

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