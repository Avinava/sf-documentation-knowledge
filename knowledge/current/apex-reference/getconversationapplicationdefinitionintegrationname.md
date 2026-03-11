---
title: "getConversationApplicationDefinition(integrationName)"
domain: apex-reference
topic: getconversationapplicationdefinitionintegrationname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.060Z
keywords: [getConversationApplicationDefinition, integrationName, Get, information, integration’s, conversation, application, definition, associated, bot., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getConversationApplicationDefinition(integrationName)

> Get information about an integration’s conversation application definition and the
    associated bot.

### getConversationApplicationDefinition(integrationName)

Get information about an integration’s conversation application definition and the associated bot.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ConversationApplicationDefinitionDetailRespresentation getConversationApplicationDefinition(String integrationName)

#### Parameters

integrationName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the conversation application.

#### Return Value

Type: [ConnectApi.ConversationApplicationDefinitionDetailRespresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_conversation_application_definition_detail_respresentation.htm "Information about the conversation application definition.")

#### Usage

To access this method, enable the bot feature, and the user must be an admin or have the Manage Bots or Manage Bots Training Data user permissions.