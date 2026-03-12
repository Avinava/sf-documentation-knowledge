---
title: "liveAgent:clientChatSendButton"
domain: pages
topic: liveagentclientchatsendbutton
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.725Z
estimatedTokens: 222
keywords: [liveAgent, clientChatSendButton, button, chat, window, visitor, clicks, send, message, agent, Attributes]
---

# liveAgent:clientChatSendButton

> The button in a chat window a visitor clicks to send a chat message to an agent.

# liveAgent:clientChatSendButton

The button in a chat window a visitor clicks to send a chat message to an agent.

Must be used within <liveAgent:clientChat\>. Each chat window can have multiple send buttons.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| label | String | A string specifying the label that appears on the button; the default English label is "Send". |  | 24.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [liveAgent:clientChat](atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)

## Related Topics

- liveAgent:clientChat (atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)
