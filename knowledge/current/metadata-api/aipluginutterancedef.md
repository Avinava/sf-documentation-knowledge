---
title: "AiPluginUtteranceDef"
domain: metadata-api
topic: aipluginutterancedef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.533Z
estimatedTokens: 384
keywords: [AiPluginUtteranceDef, utterance, pick, topic, runtime, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Declarative]
---

# AiPluginUtteranceDef

> Represents an utterance that can be used to pick a topic
			during runtime.

# AiPluginUtteranceDef

Represents an utterance that can be used to pick a topic during runtime.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AiPluginUtteranceDef components are part of other components, such as GenAiPlugin, and aren't used separately.

## Version

AiPluginUtteranceDef components are available in API version 63.0 and later.

## Special Access Rules

AiPluginUtteranceDef is available only if Agents is enabled in your org.

## Fields

| Field Name | Description |
| --- | --- |
| developerName | Field TypestringDescriptionRequired.Represents the API name of the utterance. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| language | Field TypestringDescriptionRequired.The language of the utterance. |
| masterLabel | Field TypestringDescriptionRequired.The master label for the utterance. |
| utterance | Field TypestringDescriptionRequired.The utterance. |

## Declarative Metadata Sample Definition

See [GenAiPlugin](atlas.en-us.api_meta.meta/api_meta/meta_genaiplugin.htm "Represents an agent topic, which is a category of actions related to a particular job to be done by AI agents.").

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- GenAiPlugin (atlas.en-us.api_meta.meta/api_meta/meta_genaiplugin.htm)
