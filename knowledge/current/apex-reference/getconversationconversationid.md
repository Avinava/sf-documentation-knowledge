---
title: "getConversation(conversationId)"
domain: apex-reference
topic: getconversationconversationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [getConversation, conversationId, Get, conversation., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getConversation(conversationId)

> Get a conversation.

### getConversation(conversationId)

Get a conversation.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation getConversation(String conversationId)

#### Parameters

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")