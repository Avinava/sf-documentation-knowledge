---
title: "ConnectApi.ChatterConversation"
domain: apex-reference
topic: connectapichatterconversation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.861Z
estimatedTokens: 138
keywords: [ConnectApi.ChatterConversation, Chatter, conversation]
---

# ConnectApi.ChatterConversation

> Chatter conversation.

# ConnectApi.ChatterConversation

Chatter conversation.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| conversationId | String | ID for the conversation. | 29.0 |
| conversationUrl | String | Connect REST API URL identifying the conversation. | 29.0 |
| members | List<ConnectApi.​User​Summary> | List of users in the conversation. | 29.0 |
| messages | ConnectApi.​Chatter​MessagePage | Content of the conversation. | 29.0 |
| read | Boolean | Specifies if the conversation is read (true) or not read (false). | 29.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.​Chatter​MessagePage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
