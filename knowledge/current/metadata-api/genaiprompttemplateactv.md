---
title: "GenAiPromptTemplateActv"
domain: metadata-api
topic: genaiprompttemplateactv
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.311Z
estimatedTokens: 640
keywords: [GenAiPromptTemplateActv, Represents, activation, status, Salesforce-provided, prompt, template., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata]
---

# GenAiPromptTemplateActv

> Represents the activation status of a Salesforce-provided
      prompt template.

# GenAiPromptTemplateActv

Represents the activation status of a Salesforce-provided prompt template.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

GenAiPromptTemplateActv components have the suffix .genAiPromptTemplateActivation and are stored in the genAiPromptTemplateActivations folder.

## Version

GenAiPromptTemplateActv components are available in API version 60.0 and later.

## Special Access Rules

GenAiPromptTemplate is available only if Prompt Builder is enabled in your org and you have the Prompt Template Manager permission.

## Fields

| Field Name | Description |
| --- | --- |
| accessLevel | Field TypeGenAiPromptTemplateActvAccessLevel (enumeration of type string)DescriptionIndicates which users can access the Salesforce-provided prompt template. Valid values are:Allowed—Users with access to Prompt Builder can see the prompt template.Blocked—Only admin users with access to Prompt Builder can see the prompt template. |
| developerName | Field TypestringDescriptionName of the activation record. This name can contain only underscores and alphanumeric characters. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| masterLabel | Field TypestringDescriptionA user-friendly name for GenAiPromptTemplateActv, which is defined when the GenAiPromptTemplateActv is created. |
| templateDeveloperName | Field TypestringDescriptionName of the Salesforce-provided prompt template that the activation record is associated with. |

## Declarative Metadata Sample Definition

The following is an example of a GenAiPromptTemplateActv component.

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
<GenAiPromptTemplateActv xmlns="http://soap.sforce.com/2006/04/metadata">
    <MasterLabel> Activation Record for Prompt Template </MasterLabel>
    <PromptTemplateDeveloperName>einstein_gpt__introductionLeadEmail
    </PromptTemplateDeveloperName>
    <DeveloperName>HideIntroductionLeadEmail</DeveloperName>
    <Description>Status of template </Description>
    <AccessLevel>BLOCKED</AccessLevel>
</GenAiPromptTemplateActv>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <name>GenAiPromptTemplateActv</name>
        <members>HideIntroductionLeadEmail.genAiPromptTemplateActivation</members>
    </types>
    <version>60.0</version>
</Package>
```
