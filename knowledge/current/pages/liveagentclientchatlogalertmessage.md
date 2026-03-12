---
title: "liveAgent:clientChatLogAlertMessage"
domain: pages
topic: liveagentclientchatlogalertmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.712Z
estimatedTokens: 373
keywords: [liveAgent, clientChatLogAlertMessage, area, chat, window, displays, idle, time-out, alert, customer, visitor, Attributes]
---

# liveAgent:clientChatLogAlertMessage

> The area in a chat window that displays the idle time-out alert (customer warning) to a
			visitor.

# liveAgent:clientChatLogAlertMessage

The area in a chat window that displays the idle time-out alert (customer warning) to a visitor.

Must be used within <liveAgent:clientChat\>. Each chat window can have only one idle time-out alert.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| autoResizeElementId | String | Specifies the ID of the sibling HTML element that should be dynamically resized when the chat log alert height changes. |  | 35.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| respondToChatLabel | String | A string specifying the label that appears on the chat window title during the customer time-out warning; the default English label is "Respond to Chat" |  | 35.0 |  |
| respondWithinTimeLabel | String | A string specifying the label that appears as a warning during customer time-out; the default English label is "Are you still there? Please respond within <span id="liveAgentChatLogAlertTimer">{Time}</span> or this chat will time out." {Time} presents a countdown timer to the visitor. |  | 35.0 |  |

#### See Also

-   [liveAgent:clientChat](atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)

## Related Topics

- liveAgent:clientChat (atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)
