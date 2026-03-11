---
title: "searchConversations(q)"
domain: apex-reference
topic: searchconversationsq
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [searchConversations, Get, conversations, which, member, names, messages, match, search, criteria., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# searchConversations(q)

> Get conversations in which member names and messages match the search criteria.

### searchConversations(q)

Get conversations in which member names and messages match the search criteria.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage searchConversations(String q)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Required and can’t be null. Specifies the string to search. The search string must contain at least two characters, not including wildcards. See [Wildcards](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/intro_wildcards.htm).

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")