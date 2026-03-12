---
title: "GenAiPromptTemplate"
domain: metadata-api
topic: genaiprompttemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:39.812Z
estimatedTokens: 1880
keywords: [GenAiPromptTemplate, definition, prompt, template, including, objects, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules]
---

# GenAiPromptTemplate

> Represents the definition of a prompt template, including
      its related objects and fields.

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

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<GenAiPromptTemplate xmlns="http://soap.sforce.com/2006/04/metadata">
    <activeVersionIdentifier>a94ACO8feseESrBtllQUNLvKEqlCHiPSDLX5rXUnvPs=_1</activeVersionIdentifier>
    <description>Recommend relevant financial products to client based on their needs and goals</description>
    <masterLabel>Recommend Relevant Products</masterLabel>
    <relatedEntity>Contact</relatedEntity>
    <templateVersions>
        <content>You are a financial advisor at {!$Input:Sender.CompanyName} and your name is {!$Input:Sender.Name}. You are writing an email to a prospective client recommending relevant financial products based on their data and goals. Reference the data below to generate your email, recommending only relevant products for the customer that match our recommendation criteria for each product.
Client name: {!$Input:Recipient.Name}
Client age: {!$Input:Recipient.Age__c}
Client occupation: {!$Input:Recipient.Occupation__c}
Client income: {!$Input:Recipient.Income__c}
Client financial goals: {!$Input:Recipient.Financial_Goals__c}

{!$Flow:Fetch_Products.Prompt}

Generate a subject line that can increase the open rate using words and content that is related to the email body content. It must be no more than 10 words.
Start the opening message of the email with an ice-breaker talking about relevant challenges or opportunities with personal finance and how you can help.
Indirectly allude to a point of common interest, shared background, or relevant experience with {!$Input:Recipient.Name}. You aim to subtly reference or highlight this connection to establish rapport, demonstrate relevance, and foster a sense of familiarity.
Indirectly encourage the lead {!$Input:Recipient.Name} to respond to your email by showing that you are willing to discuss opportunities for working together and answer any questions they may have.
Be concise in your email.</content>
        <inputs>
            <apiName>Sender</apiName>
            <definition>SOBJECT://User</definition>
            <referenceName>Input:Sender</referenceName>
            <required>true</required>
        </inputs>
        <inputs>
            <apiName>Recipient</apiName>
            <definition>SOBJECT://Contact</definition>
            <referenceName>Input:Recipient</referenceName>
            <required>true</required>
        </inputs>
        <primaryModel>sfdc_ai__DefaultOpenAIGPT4</primaryModel>
        <status>Published</status>
        <templateDataProviders>
            <definition>flow://Fetch_Products</definition>
            <parameters>
                <definition>SOBJECT://User</definition>
                <isRequired>true</isRequired>
                <parameterName>Sender</parameterName>
                <valueExpression>{!$Input:Sender}</valueExpression>
            </parameters>
            <parameters>
                <definition>SOBJECT://Contact</definition>
                <isRequired>true</isRequired>
                <parameterName>Recipient</parameterName>
                <valueExpression>{!$Input:Recipient}</valueExpression>
            </parameters>
            <referenceName>Flow:Fetch_Products</referenceName>
        </templateDataProviders>
        <versionIdentifier>a94ACO8feseESrBtllQUNLvKEqlCHiPSDLX5rXUnvPs=_1
</versionIdentifier>
    </templateVersions>
    <type>einstein_gpt__salesEmail</type>
    <visibility>Global</visibility>
</GenAiPromptTemplate>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>GenAiPromptTemplate</name>
    </types>
    <version>60.0</version>
</Package>
```
