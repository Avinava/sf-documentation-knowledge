---
title: "setFeedEntityStatus(communityId, feedElementId,
      status)"
domain: apex-reference
topic: setfeedentitystatuscommunityid-feedelementid-status
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [setFeedEntityStatus, communityId, feedElementId, status, Set, feed, post., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# setFeedEntityStatus(communityId, feedElementId,
      status)

> Set the status of a feed post.

### setFeedEntityStatus(communityId, feedElementId, status)

Set the status of a feed post.

#### API Version

37.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.StatusCapability setFeedEntityStatus(String communityId, String feedElementId, ConnectApi.StatusCapabilityInput status)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

status

Type: [ConnectApi.StatusCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_status_capability.htm#apex_connectapi_input_status_capability "Change the status of a feed post or comment.")

A ConnectApi.StatusCapabilityInput object that includes the status you want to set.

#### Return Value

Type: [ConnectApi.StatusCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_status_capability.htm#apex_connectapi_output_status_capability "If a feed post or comment has this capability, it has a status that determines its visibility.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").

#### Usage

Only users with the Can Approve Feed Post and Comment permission can set the status of a feed post or comment.