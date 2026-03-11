---
title: "ConnectApi.ChatterConversation"
domain: apex-reference
topic: connectapichatterconversation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.659Z
keywords: [ConnectApi.ChatterConversation]
---

# ConnectApi.ChatterConversation

# ConnectApi.ChatterConversation

Chatter conversation.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| conversationId | String | ID for the conversation. | 29.0 |
| conversationUrl | String | Connect REST API URL identifying the conversation. | 29.0 |
| members | List<ConnectApi.​User​Summary> | List of users in the conversation. | 29.0 |
| messages | ConnectApi.​Chatter​MessagePage | Content of the conversation. | 29.0 |
| read | Boolean | Specifies if the conversation is read (true) or not read (false). | 29.0 |