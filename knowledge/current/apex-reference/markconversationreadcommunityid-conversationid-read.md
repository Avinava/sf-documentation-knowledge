---
title: "markConversationRead(communityId, conversationID,
                        read)"
domain: apex-reference
topic: markconversationreadcommunityid-conversationid-read
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [markConversationRead, communityId, conversationID, read, Mark, conversation, unread, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# markConversationRead(communityId, conversationID,
                        read)

> Mark a conversation as read or unread in an
                        Experience Cloud site.

### markConversationRead(communityId, conversationID, read)

Mark a conversation as read or unread in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationSummary markConversationRead(String communityId, String conversationID, Boolean read)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

read

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specify whether the conversation is read (true) or not (false).

#### Return Value

Type: [ConnectApi.​Chatter​ConversationSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationSummary.htm "Chatter conversation summary.")