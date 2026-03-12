---
title: "liveAgent:clientChatLog"
domain: pages
topic: liveagentclientchatlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.708Z
estimatedTokens: 645
keywords: [liveAgent, clientChatLog, area, chat, window, displays, transcript, visitor, Attributes]
---

# liveAgent:clientChatLog

> The area in a chat window that displays the chat transcript to a visitor.

# liveAgent:clientChatLog

The area in a chat window that displays the chat transcript to a visitor.

Must be used within <liveAgent:clientChat\>. Each chat window can have only one chat log.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| agentTypingLabel | String | A string specifying the label that appears when the agent is typing a message; the default English label is "The agent is typing." |  | 24.0 |  |
| chatEndedByAgentLabel | String | A string specifying the label that appears when the agent has ended the chat; the default English label is "The chat has been ended by the agent." |  | 24.0 |  |
| chatEndedByVisitorIdleTimeoutLabel | String | A string specifying the label that appears when the chat is ended by visitor idle (customer) time-out; the default English label is "Chat session ended by visitor idle time-out." |  | 24.0 |  |
| chatEndedByVisitorLabel | String | A string specifying the label that appears when the visitor has ended the chat; the default English label is "You've ended the chat." |  | 24.0 |  |
| chatTransferredLabel | String | A string specifying the label that appears when the chat has been transferred to a new agent; the default English label is "{OperatorName} is your new agent for the chat session." ({OperatorName} defaults to '[First Name] [Last Initial]' of the Salesforce user or the Custom Agent Name as set in the Chat Configuration.) |  | 24.0 |  |
| combineMessagesText | Boolean | Specifies whether the chat log displayed in the customer chat window should support combined messages based on the user ID (true) or not (false). Note: If you turn this on for existing custom chat windows, it will change your markup and you may need to modify your CSS. |  | 24.0 |  |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
| showTimeStamp | Boolean | Specifies whether the chat log displayed in the customer chat window should display the timestamp text input field (true) or not (false). |  | 24.0 |  |
| visitorNameLabel | String | A string specifying the label that appears next to the messages that the visitor sends; the default English label is "Me". |  | 24.0 |  |

#### See Also

-   [liveAgent:clientChat](atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)

## Related Topics

- liveAgent:clientChat (atlas.en-us.pages.meta/pages/pages_compref_liveAgent_clientChat.htm)
