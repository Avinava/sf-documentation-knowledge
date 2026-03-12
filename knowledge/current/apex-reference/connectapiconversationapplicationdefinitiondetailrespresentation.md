---
title: "ConnectApi.ConversationApplicationDefinitionDetailRespresentation"
domain: apex-reference
topic: connectapiconversationapplicationdefinitiondetailrespresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.951Z
estimatedTokens: 200
keywords: [conversation, application, definition]
---

# ConnectApi.ConversationApplicationDefinitionDetailRespresentation

> Information about the conversation application
    definition.

# ConnectApi.ConversationApplicationDefinitionDetailRespresentation

Information about the conversation application definition.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| botInfo | ConnectApi.​BotInfo​Representation | Basic information of the bot associated with this conversation application. | 54.0 |
| errorMessage | String | Error message for the failed get operation. | 54.0 |
| integration​​Application | ConnectApi.​Conversation​Application​IntegrationType | Conversation application integration types. Values are:ApiSlack | 54.0 |
| integrationName | String | Name of the conversation application. | 54.0 |
| isSuccess | Boolean | Success indicator of the get operation. | 54.0 |
| runtimeUrl | String | Base URL of the bot runtime API. | 54.0 |

## Related Topics

- ConnectApi.​BotInfo​Representation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_bot_info.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​Conversation​Application​IntegrationType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
