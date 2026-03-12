---
title: "liveAgent:clientChatMessages"
domain: pages
topic: liveagentclientchatmessages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.715Z
estimatedTokens: 196
keywords: [liveAgent, clientChatMessages, area, chat, window, displays, system, status, messages, session, disconnected, Attributes]
---

# liveAgent:clientChatMessages

> The area in a chat window that displays system status messages (such as "Chat session has
			been disconnected").

# liveAgent:clientChatMessages

The area in a chat window that displays system status messages (such as "Chat session has been disconnected").

Must be used within <liveAgent:clientChat\>. Each chat window can have only one message area.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [liveAgent:clientChat](atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)

## Related Topics

- liveAgent:clientChat (atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)
