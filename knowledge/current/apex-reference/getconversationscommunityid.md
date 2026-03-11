---
title: "getConversations(communityId)"
domain: apex-reference
topic: getconversationscommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [getConversations, communityId, Get, most, recent, conversations, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getConversations(communityId)

> Get the most recent conversations from an Experience
      Cloud site.

### getConversations(communityId)

Get the most recent conversations from an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.ChatterConversationPage getConversations(String communityId)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.​Chatter​ConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")