---
title: "searchConversation(conversationId, q)"
domain: apex-reference
topic: searchconversationconversationid-q
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [searchConversation, conversationId, Get, conversation, matches, search, criteria., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# searchConversation(conversationId, q)

> Get a conversation that matches the search criteria.

### searchConversation(conversationId, q)

Get a conversation that matches the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversation searchConversation(String conversationId, String q)

#### Parameters

conversationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for the conversation.

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​Conversation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversation.htm "Chatter conversation.")