---
title: "setIsReadByMe(communityId, feedElementId,
    isReadByMe)"
domain: apex-reference
topic: setisreadbymecommunityid-feedelementid-isreadbyme
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [setIsReadByMe, communityId, feedElementId, isReadByMe, Mark, feed, element, read, context, user., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# setIsReadByMe(communityId, feedElementId,
    isReadByMe)

> Mark a feed element as read for
      the context user.

### setIsReadByMe(communityId, feedElementId, isReadByMe)

Mark a feed element as read for the context user.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ReadByCapability setIsReadByMe(String communityId, String feedElementId, Boolean isReadByMe)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element to mark as read.

isReadByMe

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies to mark the feed element as read (true) for the context user.

#### Return Value

Type: [ConnectApi.ReadByCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_read_by_capability.htm#apex_connectapi_output_read_by_capability "If a feed element has this capability, the context user can mark it as read.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").