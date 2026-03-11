---
title: "getUnreadCount()"
domain: apex-reference
topic: getunreadcount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:31.403Z
keywords: [getUnreadCount, Get, number, conversations, marked, unread., API, Version, Requires, Chatter, Signature, Return, Value, Example]
---

# getUnreadCount()

> Get the number of conversations that are marked unread.

### getUnreadCount()

Get the number of conversations that are marked unread.

#### API Version

29.0

#### Requires Chatter

Yes

#### Signature

public static ConnectApi.UnreadConversationCount getUnreadCount()

#### Return Value

Type: [ConnectApi.​​UnreadConversationCount](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_UnreadMessageCount.htm "Unread count for a conversation.")

If there are fewer than 50 unread conversations, ConnectApi.UreadConversationCount returns the exact number of unread conversations and the hasMore property is false. If there are more than 50 unread conversations, ConnectApi.UreadConversationCount returns 50 unread conversations and the hasMore property is true.

#### Example

```

```