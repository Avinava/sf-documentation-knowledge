---
title: "liveAgent:clientChatInput"
domain: pages
topic: liveagentclientchatinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.702Z
estimatedTokens: 262
keywords: [liveAgent, clientChatInput, text, box, chat, window, visitor, messages, agent, Attributes]
---

# liveAgent:clientChatInput

> The text box in a chat window where a visitor types messages to an agent.

# liveAgent:clientChatInput

The text box in a chat window where a visitor types messages to an agent.

Must be used within <liveAgent:clientChat\>. Each chat window can have only one input box.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| autoResizeElementId | String | Specifies the HTML element that should be dynamically resized when the transcript exceeds a certain length. |  | 24.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| useMultiline | Boolean | Specifies whether a customer chat window supports a multiple-line text input field (true) or not (false). |  | 24.0 |  |

#### See Also

-   [liveAgent:clientChat](atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)

## Related Topics

- liveAgent:clientChat (atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)
