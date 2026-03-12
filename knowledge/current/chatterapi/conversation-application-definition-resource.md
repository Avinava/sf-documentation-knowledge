---
title: "Conversation Application Definition Resource"
domain: chatterapi
topic: conversation-application-definition-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.792Z
estimatedTokens: 172
keywords: [Conversation, Application, Definition, Resource, integration’s, associated, bot]
---

# Conversation Application Definition Resource

> Get information about an integration’s conversation application
      definition and the associated bot.

# Conversation Application Definition Resource

Get information about an integration’s conversation application definition and the associated bot.

Resource

```

```

Available version

54.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| integrationName | String | Name of the conversation application. | Required | 54.0 |

Response body for GET

[Conversation Application Definition Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_application_definition_detail_representation.htm "Information about conversation application definition.")

## Code Examples

```
/connect/conversation-application
```

## Related Topics

- Conversation Application Definition Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_conversation_application_definition_detail_representation.htm)
