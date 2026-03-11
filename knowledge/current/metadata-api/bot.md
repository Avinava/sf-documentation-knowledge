---
title: "Bot"
domain: metadata-api
topic: bot
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.824Z
keywords: [Bot, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, LocalMlDomain, ConversationContextVariable, ConversationContextVariableMapping, ConversationDefinitionChannelProvider, Note, PageContextVariable, Declarative, Metadata]
---

# Bot

# Bot

Represents a definition of an Einstein Bot configuration that can have one or more versions. Only one version can be active.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

Bot components have the suffix .bot and are stored in the bots folder.

## Version

Bot components are available in API version 43.0 and later.

## Special Access Rules

Bot is available only if Chat and Einstein Bots are enabled in your org.

Bot metadata deployment and retrieval are not supported for Lead Nurturing and Sales Coach Agents.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| agentDSLEnabled | boolean | Reserved for internal use. |
| agentTemplate | string | If this Bot represents an agent, this field represents the name of the agent template used to create it. Available in API version 64.0 and later. |
| agentType | GenAiAgentType (enumeration of type string) | Specifies the agent type for this agent. For example, AgentforceServiceAgent. Available in API version 64.0 and later. |
| botMlDomain | LocalMlDomain | Represents the Einstein intent set that groups intents, entities, and variables associated with a bot. All Einstein Bot versions under the same bot now share an intent set. Available in API version 44.0 and later. |
| botUser | string | Specifies the username of the user account, not the first and last name or the user ID. Available in API version 46.0 and later. |
| botVersions | BotVersion | Represents the configuration details for a specific Einstein Bots version, including dialogs, intents, entities, and variables. |
| contextVariables | ConversationContextVariable | Represents the context variables that enable your bot to gather customer information regardless of channel. Available in API 45.0 and later. |
| conversationChannelProviders | ConversationDefinitionChannelProvider [] | Represents a list of the conversation channels linked to the bot. Available in API version 51.0 and later. |
| defaultOutboundFlow | string | Specifies a fallback escalation behavior if the primary agent escalation behavior is not available. For example, Agentforce Service Agents can route conversations to human service reps. Available in API version 65.0 and later. |
| description | string | A description of the bot. |
| label | string | Label that identifies the bot throughout the Salesforce user interface. |
| logPrivateConversationData | boolean | Specifies whether to log customer inputs as part of conversation data (true) or not (false). Available in API version 48.0 and later. |
| pageContextVariables | PageContextVariable[] | Provides page-level context variables for the bot. Available in API version 64.0 and later. |
| sessionTimeout | int | Represents the maximum amount of minutes that a bot session can be idle. Available in API version 58.0 and later. |
| type | BotType (enumeration of type string) | Required. The default value is Bot. This field represents the configuration type of the bot. Valid values are:Bot— Default Einstein Bot configuration.ExternalCopilot— An external-facing agent. For example, an Agentforce Service agent.InternalCopilot— An internal-facing agent. For example, an Agentforce Employee agent. |

## LocalMlDomain

An Einstein Intent Set local to the current bot version.

| Field Name | Field Type | Description |
| --- | --- | --- |
| label | string | Label that represents an Einstein Intent Set local to the current bot version throughout the Salesforce user interface. |
| mlIntents | MlIntent[] | List of intents associated with this local intent set. |
| mlSlotClasses | MlSlotClass[] | List of entities associated with this local intent set. |
| name | string | Required. This unique name prevents conflicts with other local Einstein Intent Sets. This name can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |

## ConversationContextVariable

A context variable local to the current bot version. Available in API version 45.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| contextVariableMappings | ConversationContextVariableMapping | Represents the mapping between a context variable, channel type, and sObject field. |
| dataType | ConversationDataType (enumeration of type string) | Required. Represents the data type of the context variable. Valid values are:TextNumberBooleanObjectDateDateTimeCurrencyId |
| description | string | A description of this variable. This value may be used by the Agentforce planner service. Available in API version 63.0 and later. |
| developerName | string | Required. Represents the name of the context variable. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| includeInPrompt | boolean | Indicates whether the variable is injected into the prompt sent to the Agentforce model. If true, the variable appears in the Included Fields section of the UI.NoteThe default variables Id, EndUserId, and EndUserLanguage always appear in the Included Fields section of the UI, regardless of their value of includeInPrompt. We recommend that you don't change the value of includeInPrompt for these default variables, as changing the value can prevent your agent from accessing important session data.Available in API version 63.0 and later. |
| label | string | Required. A label that identifies the context variable throughout the Salesforce user interface. |
| SObjectType | string | Valid values are:BotDefinitionQueue |

## ConversationContextVariableMapping

Represents the mapping between a context variable, channel type, and sObject field.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fieldName | string | Required. The API name of an SObject field to be used as part of the mapping. |
| messageType | MessageType (enumeration of type string) | Required. Represents the message channel. Valid values are:AlexaAppleBusinessChat—Messages sent in enhanced Apple Messages for Business channels.EmbeddedMessaging—Messages sent in Messaging for In-App and Web channels. Available in API version 50.0 and later.FacebookGoogleHomeInternalCopilotLineOmegaPhoneTextWeChatWebChatWhatsApp |
| SObjectType | string | Required. SObject type for the field property defined as part of the mapping. Valid values are:LiveChatTranscriptMessagingEndUserMessagingSession |

## ConversationDefinitionChannelProvider

The developer name of a conversation channel linked to the bot. Available in API version 51.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

To add, edit, or remove a messaging channel, you must use the UI. If you deploy a bot with messaging channel providers, those providers aren’t visible in Metadata API.

| Field Name | Field Type | Description |
| --- | --- | --- |
| agentRequired | boolean | Specifies whether an agent must be online for the bot to be active (true) or not (false) The default is false. |
| chatButtonName | string | Required. The developer name of a LiveChatButton metadata component. |

## PageContextVariable

A page-level context variable used by the bot. Available in API version 64.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| SObjectType | string | Specifies the sObject type associated with this page context variable. |
| dataType | ConversationDataType (enumeration of type string) | Required. Represents the data type of the page context variable. Valid values are:TextNumberBooleanObjectDateDateTimeCurrencyId |
| description | string | A description of the page context variable. |
| developerName | string | Required. Represents the unique API name of the page context variable. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| label | string | Required. A label that identifies the page context variable throughout the Salesforce user interface. |

## Declarative Metadata Sample Definition

The following is an example of a Bot. This example has been trimmed to make it easier to read.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").