---
title: "liveAgent:clientChatQueuePosition"
domain: pages
topic: liveagentclientchatqueueposition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.719Z
estimatedTokens: 241
keywords: [liveAgent, clientChatQueuePosition, text, label, indicating, visitor's, position, queue, chat, session, initiated, via, button, uses, push]
---

# liveAgent:clientChatQueuePosition

> A text label indicating a visitor's position within a queue for a chat session initiated via a button that uses push routing. (On buttons that use pull routing, this component has no effect.)

# liveAgent:clientChatQueuePosition

A text label indicating a visitor's position within a queue for a chat session initiated via a button that uses push routing. (On buttons that use pull routing, this component has no effect.)

Must be used within <liveAgent:clientChat\>.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| label | String | A string specifying the label that appears to display the queue position; the default English label is "". |  | 24.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [liveAgent:clientChat](atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)

## Related Topics

- liveAgent:clientChat (atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)
