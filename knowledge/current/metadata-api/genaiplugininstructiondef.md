---
title: "GenAiPluginInstructionDef"
domain: metadata-api
topic: genaiplugininstructiondef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.952Z
keywords: [GenAiPluginInstructionDef, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition]
---

# GenAiPluginInstructionDef

# GenAiPluginInstructionDef

Represents a topic instruction.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

GenAiPluginInstructionDef components are part of a GenAiPlugin component and aren't used separately.

## Version

GenAiPluginInstructionDef components are available in API version 62.0 and later.

## Special Access Rules

GenAiPluginInstructionDef is available only if Agents is enabled in your org.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionRequired.Description of the topic instruction. |
| developerName | Field TypestringDescriptionRequired.Represents the API name of the topic instruction. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| language | Field TypestringDescriptionRequired.The language of the topic instruction. |
| masterLabel | Field TypestringDescriptionRequired.The master label for the topic instruction. |
| sortOrder | Field TypeintegerDescriptionA numerical value used to determine the order the instructions will be executed in. |

## Declarative Metadata Sample Definition

See [GenAiPlugin](atlas.en-us.api_meta.meta/api_meta/meta_genaiplugin.htm "Represents an agent topic, which is a category of actions related to a particular job to be done by AI agents.").