---
title: "getUnreadCount(communityId)"
domain: apex-reference
topic: getunreadcountcommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [getUnreadCount, communityId, Get, number, conversations, marked, unread, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getUnreadCount(communityId)

> Get the number of conversations that are marked unread in an Experience Cloud
    site.

### getUnreadCount(communityId)

Get the number of conversations that are marked unread in an Experience Cloud site.

#### API Version

30.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UnreadConversationCount getUnreadCount(String communityId)

#### Parameters

communityId

Type:[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.​​UnreadConversationCount](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_UnreadMessageCount.htm "Unread count for a conversation.")

If there are fewer than 50 unread conversations, ConnectApi.UreadConversationCount returns the exact number of unread conversations and the hasMore property is false. If there are more than 50 unread conversations, ConnectApi.UreadConversationCount returns 50 unread conversations and the hasMore property is true.