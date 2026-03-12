---
title: "ConnectApi.ChatterMessage"
domain: apex-reference
topic: connectapichattermessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.873Z
estimatedTokens: 313
keywords: [ConnectApi.ChatterMessage, Chatter, message]
---

# ConnectApi.ChatterMessage

> Chatter message.

# ConnectApi.ChatterMessage

Chatter message.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| body | ConnectApi.​Message​Body | Contents of the message. | 29.0 |
| conversationId | String | ID for the conversation. | 29.0 |
| conversationUrl | String | Connect REST API URL identifying the conversation. | 29.0 |
| id | String | ID of the message. | 29.0 |
| recipients | List<ConnectApi.​User​Summary> | List of the recipients of the message. | 29.0 |
| sender | ConnectApi.​User​Summary | Sender of the message. | 29.0 |
| sendingCommunity | ConnectApi.​​Reference | Information about the Experience Cloud site from which the message was sent.Returns null for the default site or if digital experiences isn’t enabled. | 32.0 |
| sentDate | Datetime | The date and time the message was sent. | 29.0 |
| url | String | Connect REST API URL identifying the current page of the conversation. | 29.0 |

#### See Also

-   [ConnectApi.ChatterConversationSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationSummary.htm "Chatter conversation summary.")

-   [ConnectApi.ChatterMessagePage](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm "Chatter message page.")

## Related Topics

- ConnectApi.​Message​Body (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_msg_body.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.​​Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_reference.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- ConnectApi.ChatterConversationSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterConversationSummary.htm)
- ConnectApi.ChatterMessagePage (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ChatterMessagePage.htm)
