---
title: "BotTemplate"
domain: metadata-api
topic: bottemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.851Z
keywords: [BotTemplate, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# BotTemplate

# BotTemplate

Represents the configuration details for a specific Einstein Bot template, including dialogs and variables.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

BotTemplate components have the suffix .botTemplate and are stored in the botTemplates folder.

## Version

BotTemplate components are available in API version 55.0 and later.

## Special Access Rules

BotTemplate is available only if Chat and Einstein Bots are enabled in your org.

Bot metadata deployment and retrieval are not supported for Lead Nurturing and Sales Coach Agents.

## Fields

| Field Name | Description |
| --- | --- |
| botDialogGroups | Field TypeBotDialogGroup[]DescriptionThe list of dialog groups in this bot template. |
| botDialogs | Field TypeBotDialog[]DescriptionThe list of dialogs in this bot template. |
| conversationLanguages | Field TypestringDescriptionRequired.Specifies the language of the bot template. |
| contextVariables | Field TypeConversationContextVariable[]DescriptionRepresents the context variables that enable your bot to gather customer information regardless of channel. |
| conversationGoals | Field TypeConversationDefinitionGoal[]DescriptionThe list of goals in this bot template. Available in API version 57.0 and later. |
| conversationSystemDialogs | Field TypeConversationSystemDialog[]DescriptionA system function assigned to a dialog. |
| conversationVariables | Field TypeConversationVariable[]DescriptionA container that stores a specific piece of data collected from the customer. You can use variables within dialog actions as both inputs and outputs. |
| description | Field TypestringDescriptionA description of the bot template. |
| entryDialog | Field TypestringDescriptionA reference to the first dialog that the bot presents to your customer. For example, Welcome. |
| icon | Field TypestringDescriptionThe icon used to identify the template. |
| mainMenuDialog | Field TypestringDescriptionA reference to the dialog identified as the main menu dialog. For example, Main Menu. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly label for BotTemplate, which is defined when the BotTemplate is created. |
| mlDomain | Field TypeLocalMlDomainDescriptionRequired.Represents the Einstein Intent Set that groups intents, entities, and variables associated with a template. |
| permissionSet | Field TypestringDescriptionThe permission set associated with the bot template. Available in API version 59.0 and later. |
| richContentEnabled | Field TypebooleanDescriptionIndicates whether the template is available for enhanced bots (true) or for standard bots (false). The default is false. |
| type | Field TypeBotType (enumeration of type string)DescriptionThis field represents the configuration type of the bot. The default value is Bot.Valid values are:Bot—Default Einstein Bot configuration.ExternalCopilot— An external-facing agent. For example, an Agentforce Service agent.InternalCopilot— An internal-facing agent. For example, an Agentforce Employee agent. |

## Declarative Metadata Sample Definition

The following is an example of a BotTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").