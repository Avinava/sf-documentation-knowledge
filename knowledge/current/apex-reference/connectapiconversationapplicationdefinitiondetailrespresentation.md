---
title: "ConnectApi.ConversationApplicationDefinitionDetailRespresentation"
domain: apex-reference
topic: connectapiconversationapplicationdefinitiondetailrespresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.468Z
keywords: [ConnectApi.ConversationApplicationDefinitionDetailRespresentation]
---

# ConnectApi.ConversationApplicationDefinitionDetailRespresentation

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