---
title: "EinsteinGptSettings"
domain: metadata-api
topic: einsteingptsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.132Z
keywords: [EinsteinGptSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition]
---

# EinsteinGptSettings

# EinsteinGptSettings

Represents settings for Einstein Generative AI features in an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

EinsteinGptSettings values are stored in the EinsteinGpt.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

EinsteinGptSettings components are available in API version 61.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| disableAIProvAWSBedrock | boolean | Indicates whether AWS Bedrock is turned off and access to its models are blocked. The default value is false. |
| disableAIProvAzureOpenAI | boolean | Indicates whether Azure OpenAI is turned off and access to its models are blocked. The default value is false. |
| disableAIProvOpenAI | boolean | Indicates whether OpenAI is turned off and access to its models are blocked. The default value is false. |
| disableAIProvVertexGemini | boolean | Indicates whether Vertex AI (Google) is turned off and access to its models are blocked. The default value is false. |
| disableAIProviderRegionFallback | boolean | Indicates whether the fallback of Azure OpenAI requests outside the model endpoint region for your org is turned off. The default value is false. |
| enableAIModelBeta | boolean | Indicates whether to turn on beta models for Einstein generative AI features. The default value is false. |
| enableEinsteinGptAllowUnsafePTInputChanges | boolean | Reserved for internal use. |
| enableEinsteinGptGlobalLangSupport | boolean | Indicates whether to turn on global languages with prompt templates. The default value is false. |
| enableEinsteinGptPlatform | boolean | Indicates whether to turn on generative AI features across Salesforce. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of an EinsteinGptSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```