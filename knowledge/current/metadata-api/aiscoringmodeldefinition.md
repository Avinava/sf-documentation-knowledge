---
title: "AIScoringModelDefinition"
domain: metadata-api
topic: aiscoringmodeldefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:36.548Z
estimatedTokens: 1141
keywords: [AIScoringModelDefinition, machine, learning, model, that’s, Scoring, Framework, Industries, Cloud, Einstein, including, configuration, Parent, File, Suffix]
---

# AIScoringModelDefinition

> Represents information about a machine learning model
			that’s used by the Scoring Framework for Industries Cloud Einstein. The machine learning
			model is used for scoring, including its configuration.

# AIScoringModelDefinition

Represents information about a machine learning model that’s used by the Scoring Framework for Industries Cloud Einstein. The machine learning model is used for scoring, including its configuration.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AIScoringModelDefinition components have the suffix .aiScoringModelDefinition and are stored in the aiScoringModelDefinitions folder.

## Version

AIScoringModelDefinition components are available in API version 58.0 and later.

## Special Access Rules

To access this metadata type, you must have the AI Accelerator User permission set with Scoring Framework enabled for Industries Cloud Einstein from Salesforce Setup. The Salesforce org must have the CRM Plus license and the product’s CRM license.

## Fields

| Field Name | Description |
| --- | --- |
| aiModelConfig | Field TypestringDescriptionRequired.ID of an AI model configuration related to the AI scoring model record. |
| aiScoringModelDefVersions | Field TypeAIScoringModelDefVersion[]DescriptionRepresents information of various versions of a model. |
| description | Field TypestringDescriptionDescription for an AIScoringModelDefinition record. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for the AIScoringModelDefinition metadata component, which is defined when the AIScoringModelDefinition metadata component is created. |

## AIScoringModelDefVersion

Represents information about a version of an AI scoring model.

| Field Name | Description |
| --- | --- |
| aiScoringModelDefinition | Field TypestringDescriptionRequired.Parent AIScoringModelDefinition record that’s related to an AIScoringModelDefVersion record. |
| aiScoringSteps | Field TypeAIScoringStep[]DescriptionRepresents information about a step associated with an AI scoring model version. |
| developerName | Field TypestringDescriptionRequired.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for the AIScoringModelDefVersion component name, which is defined when the AIScoringModelDefVersion component name is created. |
| modelMode | Field TypeAIScoringModelDefVersionMode (enumeration of type string)DescriptionRequired.Mode of an AI scoring model.Values are:DEPLOYTRAINTRAIN_AND_DEPLOY |

## AIScoringStep

Represents information about a step associated with an AI scoring model version. For example, an AI scoring step can include steps, such as propensity to purchase products or prediction scores for accounts.

| Field Name | Description |
| --- | --- |
| aiModelConfigStep | Field TypestringDescriptionRequired.ID of the AI model config step that’s related to the AIScoringStep record. |
| stepDetail | Field TypestringDescriptionScoring step details in JSON format. |

## Declarative Metadata Sample Definition

Here’s an example of an AIScoringModelDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AIScoringModelDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <aiModelConfig>Prediction_Scores_for_Accounts</aiModelConfig>
    <aiScoringModelDefVersions>
        <fullName>V1</fullName>
        <aiScoringModelDefinition>Test</aiScoringModelDefinition>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.GrainSelector</aiModelConfigStep>
            <stepDetail>{label:Account,name:Account}</stepDetail>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.AugmentedDataset</aiModelConfigStep>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.TargetConditionBuilder</aiModelConfigStep>
            <stepDetail>{specificOutcomeDefined:Yes,label:Financial accounts are associated with an account,name:FA_Target}</stepDetail>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.InputVariableSelector</aiModelConfigStep>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.CustomFilter</aiModelConfigStep>
        </aiScoringSteps>
        <aiScoringSteps>
            <aiModelConfigStep>Prediction_Scores_for_Accounts.WriteBackConnector</aiModelConfigStep>
        </aiScoringSteps>
        <developerName>V1</developerName>
        <masterLabel>V1</masterLabel>
        <modelMode>TRAIN_AND_DEPLOY</modelMode>
    </aiScoringModelDefVersions>
    <description>Test for metadata</description>
    <masterLabel>Test</masterLabel>
</AIScoringModelDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>AIScoringModelDefVersion</name>
    </types>
    <types>
        <members>*</members>
        <name>AIScoringModelDefinition</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
