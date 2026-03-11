---
title: "setFeedCommentStatus(communityId, commentId,
    status)"
domain: apex-reference
topic: setfeedcommentstatuscommunityid-commentid-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [setFeedCommentStatus, communityId, commentId, status, Set, comment., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setFeedCommentStatus(communityId, commentId,
    status)

> Set the status of a comment.

### setFeedCommentStatus(communityId, commentId, status)

Set the status of a comment.

#### API Version

38.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.StatusCapability setFeedCommentStatus(String communityId, String commentId, ConnectApi.StatusCapabilityInput status)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

commentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the comment.

status

Type: [ConnectApi.StatusCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_status_capability.htm#apex_connectapi_input_status_capability "Change the status of a feed post or comment.")

A ConnectApi.StatusCapabilityInput object that includes the status you want to set.

#### Return Value

Type: [ConnectApi.StatusCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_status_capability.htm#apex_connectapi_output_status_capability "If a feed post or comment has this capability, it has a status that determines its visibility.")

If the comment doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

Only users with the Can Approve Feed Post and Comment permission can set the status of a feed post or comment.