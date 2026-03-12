---
title: "ConversationApplicationDefinition Class"
domain: apex-reference
topic: conversationapplicationdefinition-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.122Z
estimatedTokens: 481
namespace: ConnectApi
keywords: [ConversationApplicationDefinition, Access, information, conversation, application, definition., getConversationApplicationDefinition, integrationName, API, Version, Requires, Chatter, Usage]
---

# ConversationApplicationDefinition Class

> Access information about a conversation application definition.

**Namespace:** `ConnectApi`

# ConversationApplicationDefinition Class

Access information about a conversation application definition.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## ConversationApplicationDefinition Methods

These methods are for ConversationApplicationDefinition. All methods are static.

-   **[getConversationApplicationDefinition(integrationName)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ConversationApplicationDefinition_static_methods.htm#apex_ConnectAPI_ConversationApplicationDefinition_getConversationApplicationDefinition_1)**
    Get information about an integration’s conversation application definition and the associated bot.

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getConversationApplicationDefinition(integrationName) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ConversationApplicationDefinition_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.ConversationApplicationDefinitionDetailRespresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_conversation_application_definition_detail_respresentation.htm)
