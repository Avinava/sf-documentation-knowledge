---
title: "liveAgent:clientChat"
domain: pages
topic: liveagentclientchat
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:50.013Z
estimatedTokens: 175
keywords: [Attributes, liveAgent, clientChat, main, parent, any, chat, window, order, additional, customization]
---

> The main parent element for any chat window. You must create this element in order to do
			any additional customization of Chat.

# liveAgent:clientChat

The main parent element for any chat window. You must create this element in order to do any additional customization of Chat.

Chat must be enabled for your organization. Note that this component can only be used once in a Chat deployment.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |
