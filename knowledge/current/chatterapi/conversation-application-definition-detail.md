---
title: "Conversation Application Definition Detail"
domain: chatterapi
topic: conversation-application-definition-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.033Z
estimatedTokens: 204
keywords: [Conversation, Application, Definition, Detail]
---

# Conversation Application Definition Detail

> Information about conversation application
    definition.

# Conversation Application Definition Detail

Information about conversation application definition.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| botInfo | Bot Info | Basic information of the bot associated with this conversation application. | Small, 54.0 | 54.0 |
| errorMessage | String | Error message for the failed get operation. | Small, 54.0 | 54.0 |
| integration​Application | String | Conversation application integration types. Values are:ApiSlack | Small, 54.0 | 54.0 |
| integration​Name | String | Name of the conversation application. | Small, 54.0 | 54.0 |
| isSuccess | Boolean | Success indicator of the get operation. | Small, 54.0 | 54.0 |
| runtimeUrl | String | Base URL of the bot runtime API. | Small, 54.0 | 54.0 |

## Related Topics

- Bot Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_bot_info.htm)
