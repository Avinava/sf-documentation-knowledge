---
title: "liveAgent:clientChatAlertMessage"
domain: pages
topic: liveagentclientchatalertmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.686Z
estimatedTokens: 645
keywords: [liveAgent, clientChatAlertMessage, area, Live, Agent, chat, window, displays, system, alert, messages, disconnected, Attributes]
---

# liveAgent:clientChatAlertMessage

> The area in a Live Agent chat window that displays system alert messages (such as "You have been disconnected").

# liveAgent:clientChatAlertMessage

The area in a Live Agent chat window that displays system alert messages (such as "You have been disconnected").

Must be used within <liveAgent:clientChat\>. Each chat window can have only one alert message area.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| agentsUnavailableLabel | String | A string specifying the label that appears when all agents become unavailable; the default English label is "Your chat request has been canceled because no agents are available." |  | 27.0 |  |
| chatBlockedLabel | String | Specifies the message that appears to a customer who has been blocked from chatting with an agent. The default message is "You have been blocked from the chat." |  | 27.0 |  |
| connectionErrorLabel | String | A string specifying the label that appears when there is a connection error; the default English label is "Connection Lost: Please check your local connection." |  | 27.0 |  |
| dismissLabel | String | A string specifying the label that appears to dismiss the alert; the default English label is "Close." |  | 27.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| internalFailureLabel | String | A string specifying the label that appears when there is an internal error; the default English label is "Chat isn't available. Please try again later." |  | 27.0 |  |
| noCookiesLabel | String | A string specifying the label that appears when cookies are disabled; the default English label is "Your browser is not currently accepting cookies. Cookies are required to request a chat. Please enable cookies and try again." |  | 27.0 |  |
| noFlashLabel | String | A string specifying the label that appears when Flash is not installed; the default English label is "The Flash Player or an HTML5 compatible web browser is necessary to chat. Please install Flash player or use a different web browser." |  | 27.0 |  |
| noHashLabel | String | A string specifying the label that appears when the chat window is improperly launched; the default English label is "The chat window may only be launched from a button -- you cannot access it directly." |  | 27.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [liveAgent:clientChat](atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)

## Related Topics

- liveAgent:clientChat (atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)
