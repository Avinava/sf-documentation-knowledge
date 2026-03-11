---
title: "updateDirectMessage(communityId, feedElementId,
      directMessage)"
domain: apex-reference
topic: updatedirectmessagecommunityid-feedelementid-directmessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.227Z
keywords: [updateDirectMessage, communityId, feedElementId, directMessage, Update, members, direct, message., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# updateDirectMessage(communityId, feedElementId,
      directMessage)

> Update the members of a direct message.

### updateDirectMessage(communityId, feedElementId, directMessage)

Update the members of a direct message.

#### API Version

40.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.DirectMessageCapability updateDirectMessage(String communityId, String feedElementId, ConnectApi.DirectMessageCapabilityInput directMessage)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

feedElementId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the feed element.

directMessage

Type: [ConnectApi.DirectMessageCapabilityInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_direct_message_capability.htm#apex_connectapi_input_direct_message_capability "Create or update the members of a direct message.")

A ConnectApi.DirectMessageCapabilityInput body that includes the members to add and remove.

#### Return Value

Type: [ConnectApi.DirectMessageCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_direct_message_capability.htm#apex_connectapi_output_direct_message_capability "If a feed element has this capability, it’s a direct message.")

If the feed element doesn’t support this capability, the return value is [ConnectApi.NotFoundException](atlas.en-us.apexref.meta/apexref/connectAPI_exceptions.htm#connectAPI_exceptions "The ConnectApi namespace contains exception classes.").