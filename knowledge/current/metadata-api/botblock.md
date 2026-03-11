---
title: "BotBlock"
domain: metadata-api
topic: botblock
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.835Z
keywords: [BotBlock, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, BotBlockVersion, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# BotBlock

# BotBlock

Represents the configuration details for a specific Einstein Bot block, including dialogs and variables.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

BotBlock components have the suffix .botBlock and are stored in the botBlocks folder.

## Version

BotBlock components are available in API version 58.0 and later.

## Special Access Rules

BotBlock is available only if Chat and Einstein Bots are enabled in your org.

Bot metadata deployment and retrieval are not supported for Lead Nurturing and Sales Coach Agents.

## Fields

| Field Name | Description |
| --- | --- |
| botBlockVersions | Field TypeBotBlockVersion[]DescriptionThe configuration details for specific Einstein Bot block versions, including dialogs and variables. |
| description | Field TypestringDescriptionA description of the bot block. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly label for BotBlock, which is defined when the block is created. |
| richContentEnabled | Field TypebooleanDescriptionIndicates whether the block is available for enhanced bots (true) or for only standard bots (false). The default is false. |

## BotBlockVersion

Represents the configuration details for an Einstein Bot block version, including dialogs and variables.

| Field Name | Description |
| --- | --- |
| botDialogs | Field TypeBotDialog[]DescriptionThe list of dialogs in this bot block. |
| conversationGoals | Field TypeConversationDefinitionGoal[]DescriptionThe list of goals in this bot block. Available in API version 57.0 and later. |
| conversationLanguages | Field TypestringDescriptionRequired.Specifies the language of the bot block. |
| conversationVariables | Field TypeConversationVariable[]DescriptionA container that stores a specific piece of data collected from the customer. You can use variables within dialog actions as both inputs and outputs. Available in API version 44.0 and later. |
| description | Field TypestringDescriptionA description of the bot block. |
| mlDomain | Field TypeLocalMlDomainDescriptionRequired.The Einstein Intent Set that groups intents, entities, and variables associated with a block. |
| permissionSet | Field TypestringDescriptionThe permission set associated with the bot block. Available in API version 59.0 and later. |
| status | Field TypeConvDefBlockVersionStatus (enumeration of type string)DescriptionRequired.Indicates whether a block is published or is a draft.Values are:Published |

## Declarative Metadata Sample Definition

The following is an example of a BotBlock component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").