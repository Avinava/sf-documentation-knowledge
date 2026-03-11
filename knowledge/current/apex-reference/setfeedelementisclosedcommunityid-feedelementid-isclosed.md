---
title: "setFeedElementIsClosed(communityId, feedElementId,
      isClosed)"
domain: apex-reference
topic: setfeedelementisclosedcommunityid-feedelementid-isclosed
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [setFeedElementIsClosed, communityId, feedElementId, isClosed, Set, feed, element, closed., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setFeedElementIsClosed(communityId, feedElementId,
      isClosed)

> Set a feed element to closed.

### setFeedElementIsClosed(communityId, feedElementId, isClosed)

Set a feed element to closed.

Users can’t edit (specifically the feed item body or title), comment on, or delete a closed feed element. If the closed feed element is a poll, users can’t vote on it. Users can’t edit (specifically the comment body) or delete a comment on a closed feed element or select or remove it as best answer.

Admins and moderators can edit and delete closed feed elements and comments on closed feed elements. Admins and moderators can select or remove the best answer status on comments on closed feed elements.

#### API Version

43.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.CloseCapability setFeedElementIsClosed(String communityId, String feedElementId, Boolean isClosed)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

isClosed

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to set the feed element to closed (true) or not (false).

#### Return Value

Type: [ConnectApi.CloseCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_close_capability.htm#apex_connectapi_output_close_capability "If a feed element has this capability, users with permission can close it.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").