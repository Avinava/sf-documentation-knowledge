---
title: "updateRequestStatus(communityId, requestId, status,
      responseMessage)"
domain: apex-reference
topic: updaterequeststatuscommunityid-requestid-status-responsemessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.353Z
keywords: [updateRequestStatus, communityId, requestId, status, responseMessage, Update, request, join, private, group, optionally, provide, message, denied., API, Version, Requires, Chatter, Signature, Parameters]
---

# updateRequestStatus(communityId, requestId, status,
      responseMessage)

> Update a request to join a private group and optionally provide a
      message when the request is denied.

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