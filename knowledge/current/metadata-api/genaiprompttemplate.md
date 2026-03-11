---
title: "GenAiPromptTemplate"
domain: metadata-api
topic: genaiprompttemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:45:52.967Z
keywords: [GenAiPromptTemplate, Important, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, GenAiPromptTemplateVersion, GenAiPromptTemplateGenerationConfig, GenAiPromptTemplateInput, GenAiPromptTemplateDataProvider, GenAiPromptTemplateDataProviderParam, Declarative, Metadata]
---

# GenAiPromptTemplate

# GenAiPromptTemplate

Represents the definition of a prompt template, including its related objects and fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

GenAiPromptTemplate components have the suffix .genAiPromptTemplate and are stored in the genAiPromptTemplates folder.

## Version

GenAiPromptTemplate components are available in API version 60.0 and later.

## Special Access Rules

GenAiPromptTemplate is available only if Prompt Builder is enabled in your org and you have the Prompt Template Manager permission.

## Fields

| Field Name | Description |
| --- | --- |
| activeVersion | Field TypeintDescriptionThis tag will be deprecated in 63.0 and will not work in 64.0 and later. Use activeVersionIdentifier instead. |
| activeVersionIdentifier | Field TypestringDescriptionSpecifies the version identifier of the active prompt template version. This tag will use versionIdentifier as the value for the active version. |
| description | Field TypestringDescriptionA description of the prompt template. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for GenAiPromptTemplate, which is defined when the GenAiPromptTemplate is created. |
| relatedEntity | Field TypestringDescriptionThe Salesforce record type that the prompt template is associated with. |
| relatedField | Field TypestringDescriptionThe Salesforce field that the prompt template is associated with. |
| templateVersions | Field TypeGenAiPromptTemplateVersion[]DescriptionRequired. An array of prompt template versions. |
| type | Field TypestringDescriptionRequired. Represents the template type that the prompt template is based on. Valid values are:einstein_gpt__fieldCompletioneinstein_gpt__salesEmaileinstein_gpt__recordSummaryeinstein_gpt__flexeinstein_gpt__caseEmailDraft |
| visibility | Field TypeGenAiPromptTemplateVisibilityType (enumeration of type string)DescriptionIndicates the scope of visibility for the prompt template. Valid values are:APIGlobal |

## GenAiPromptTemplateVersion

Represents a version of a prompt template.

| Field Name | Description |
| --- | --- |
| content | Field TypestringDescriptionRequired. Text of the prompt template version. |
| description | Field TypestringDescriptionDescription of the prompt template version. |
| generationTemplateConfigs | Field TypeGenAiPromptTemplateGenerationConfig[]DescriptionReference to the policies for the prompt template version. |
| inputs | Field TypeGenAiPromptTemplateInput[]DescriptionAn array of prompt template inputs associated with the prompt template version. |
| primaryModel | Field TypestringDescriptionThe model associated with the prompt template version. |
| status | Field TypeGenAiPromptTemplateStatus (enumeration of type string)DescriptionRequired. Indicates the status of the prompt template in Prompt Builder. Valid values are:Published—Published version of a prompt template. The active version of the prompt template must be published.Published prompt templates can't be edited with UI or Metadata API.Draft—Draft version of a prompt template. |
| templateDataProviders | Field TypeGenAiPromptTemplateDataProvider[]DescriptionAn array of prompt template data providers associated with the prompt template version. |
| versionNumber | Field TypeintDescriptionRequired. Version number of the prompt template version. Versions are counted sequentially from 1.This tag will be deprecated in 63.0 and will not work in 64.0 and later. Use versionIdentifier instead. |
| versionIdentifier | Field TypestringDescriptionVersion identifier of the prompt template version identifier. This is generated automatically once a template is deployed and retrieved from an org.If a unique value is not specified then it will be generated for you. It must be unique for each version for a given template. |

## GenAiPromptTemplateGenerationConfig

References the policies for this prompt template version. A policy describes high-level behavior for the prompt template, such as the allowed languages, conversation style, or desired response length. Currently, a policy is defined in a configuration file.

| Field Name | Description |
| --- | --- |
| generationConfigDeveloperName | Field TypestringDescriptionDeveloper name of the policy for this prompt template version. |

## GenAiPromptTemplateInput

Represents an input for a prompt template, such as a Salesforce record, field, or Apex primitive data type.

| Field Name | Description |
| --- | --- |
| apiName | Field TypestringDescriptionRequired. Name of the prompt template input parameter. |
| definition | Field TypestringDescriptionRequired. The URI definition of the input parameter. For example,  SOBJECT://Account and SOBJECT://Account/Description. |
| description | Field TypestringDescriptionDescription of the prompt template input parameter. |
| masterLabel | Field TypestringDescriptionA user-friendly name for GenAiPromptTemplateInput, which is defined when the GenAiPromptTemplateInput is created. |
| referenceName | Field TypestringDescriptionRequired. Name of the prompt template input to use in expressions. For example, Input:Recipient and Input:Sender</referenceName>. |
| required | Field TypebooleanDescriptionRequired. Specifies whether this input parameter is required (true) or optional (false). |

## GenAiPromptTemplateDataProvider

Represents a source of data for a prompt template version, such as an invocable action, flow, or Apex method.

| Field Name | Description |
| --- | --- |
| definition | Field TypestringDescriptionRequired. The URI definition of the data provider, such as flow://ns__CallToActionFlow. |
| parameters | Field TypeGenAiPromptTemplateDataProviderParam[]DescriptionAn array of parameters associated with the data provider. |
| referenceName | Field TypestringDescriptionRequired. Name of the data provider to use in expressions. |

## GenAiPromptTemplateDataProviderParam

Represents a parameter that a data provider uses to retrieve information.

| Field Name | Description |
| --- | --- |
| definition | Field TypestringDescriptionRequired. URI definition of the parameter. For example,  SOBJECT://User</definition>. |
| isRequired | Field TypebooleanDescriptionRequired. Specifies whether the parameter is required (true) or optional (false). |
| parameterName | Field TypestringDescriptionRequired. Name of the parameter. |
| valueExpression | Field TypestringDescriptionValue or expression of the parameter to use in prompt template text. For example, {!$Input:Recipient}. |

## Declarative Metadata Sample Definition

The following is an example of a GenAiPromptTemplate component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).