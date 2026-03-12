---
title: "ConnectApi.ChatterConversationSummary"
domain: apex-reference
topic: connectapichatterconversationsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.868Z
estimatedTokens: 182
keywords: [ConnectApi.ChatterConversationSummary, Chatter, conversation, summary]
---

# ConnectApi.ChatterConversationSummary

> Chatter conversation summary.

# ConnectApi.ChatterConversationSummary

Chatter conversation summary.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | String | ID for the conversation summary. | 29.0 |
| latestMessage | ConnectApi.​Chatter​Message | Contents of the latest message. | 29.0 |
| members | List<ConnectApi.​User​Summary> | List of members in the conversation. | 29.0 |
| read | Boolean | Specifies if the conversation is read (true) or not read (false). | 29.0 |
| url | String | Connect REST API URL to the conversation summary. | 29.0 |

#### See Also

-   [ConnectApi.ChatterConversationPage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm "Chatter conversation page.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​Chatter​Message (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessage.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.ChatterConversationPage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationPage.htm)
