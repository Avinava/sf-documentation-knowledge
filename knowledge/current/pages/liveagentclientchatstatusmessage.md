---
title: "liveAgent:clientChatStatusMessage"
domain: pages
topic: liveagentclientchatstatusmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.729Z
estimatedTokens: 264
keywords: [liveAgent, clientChatStatusMessage, area, chat, window, displays, system, status, messages, reconnected, Attributes]
---

# liveAgent:clientChatStatusMessage

> The area in a chat window that displays system status messages (such as "You are being
			reconnected").

# liveAgent:clientChatStatusMessage

The area in a chat window that displays system status messages (such as "You are being reconnected").

Must be used within <liveAgent:clientChat\>. Each chat window can have only one status message area.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| reconnectingLabel | String | A string specifying the label that appears when there is network latency or disruption; the default English label is "You've been disconnected from the agent. Please wait while we attempt to re-establish the connection..." |  | 27.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [liveAgent:clientChat](atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)

## Related Topics

- liveAgent:clientChat (atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)
