---
title: "GenAiPlugin"
domain: metadata-api
topic: genaiplugin
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.948Z
keywords: [GenAiPlugin, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, GenAiPluginFunctionDef, Usage, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# GenAiPlugin

# GenAiPlugin

Represents an agent topic, which is a category of actions related to a particular job to be done by AI agents.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

GenAiPlugin components have the suffix .genAiPlugin and are stored in the genAiPlugins folder.

## Version

GenAiPlugin components are available in API version 62.0 and later.

## Special Access Rules

GenAiPlugin is available only if Agents is enabled in your org.

## Fields

| Field Name | Description |
| --- | --- |
| aiPluginUtterances | Field TypeAiPluginUtteranceDef[]DescriptionA list of utterances that can be used to pick a topic during runtime. |
| canEscalate | Field TypebooleanDescriptionIndicates whether this topic is eligible for escalation to a rep. |
| description | Field TypestringDescriptionThe description of the topic. |
| developerName | Field TypestringDescriptionRequired.Represents the API name of the topic. This name must be unique across all custom and customized topics. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| genAiFunctions | Field TypeGenAiPluginFunctionDef[]DescriptionA list of functions in the topic. |
| genAiPluginInstructions | Field TypeGenAiPluginInstructionDef[]DescriptionA list of instructions in the topic. |
| language | Field TypestringDescriptionRequired.The language of the topic. |
| masterLabel | Field TypestringDescriptionRequired.The master label for the topic. |
| plannerField | Field TypestringDescriptionRepresents the topic’s parent planner. |
| pluginType | Field TypePluginType (enumeration of type string)DescriptionRequired.Values are:TopicAPICustomTopic |
| scope | Field TypestringDescriptionA specific job description for a topic. |

## GenAiPluginFunctionDef

A function in the topic.

| Field Name | Description |
| --- | --- |
| functionName | Field TypestringDescriptionRequired.The API name of the function. |

## Usage

In Winter '26 orgs and later, use [GenAiPlannerBundle](atlas.en-us.api_meta.meta/api_meta/meta_genaiplannerbundle.htm "Represents a planner for an agent or agent template. It’s a container for all the topics and actions used to interact with a large language model (LLM).") to retrieve topics that are created within a particular agent. To retrieve topics in the asset library, use GenAiPlugin.

When deploying topic or action metadata to a Summer '25 (version 64.0) org, retrieve the metadata using Metadata API version 64.0, even if your source org is Winter '26 or later (version 65.0). For Winter \`26 and later, use Metadata API version 65.0 and later.

## Declarative Metadata Sample Definition

The following is an example of a GenAiPlugin component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").