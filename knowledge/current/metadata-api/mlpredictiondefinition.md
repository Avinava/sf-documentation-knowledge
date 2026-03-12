---
title: "MLPredictionDefinition"
domain: metadata-api
topic: mlpredictiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.215Z
estimatedTokens: 791
keywords: [MLPredictionDefinition, Represents, prediction, definition, specifies, details, prediction., extends, Metadata, metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location, Version]
---

# MLPredictionDefinition

> Represents a prediction definition that specifies details about the prediction. This
      type extends the Metadata metadata type and inherits its fullName field.

# MLPredictionDefinition

Represents a prediction definition that specifies details about the prediction. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

MLPredictionDefinition components have the suffix .mlPrediction and are stored in the mlPredictions folder.

## Version

MLPredictionDefinition is available in API version 50.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| aiApplicationDeveloperName | string | Required. Represents the developer name of the parent AI application. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| description | string | Description of the prediction. |
| developerName | string | Required. Represents the name of the prediction definition. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| masterLabel | string | Label that identifies the ML prediction definition throughout the Salesforce user interface. |
| negativeExpression | MLFilter | Reserved for future use. |
| positiveExpression | MLFilter | Reserved for future use. |
| predictionField | string | Field that the prediction is based on. |
| priority | int | Reflects the priority of the MLPD object when an AIApplication has multiple child MLPDs. Nillable. |
| pushbackField | string | Field that the prediction writes scores to. |
| status | MLPredictionDefinitionStatus (enumeration of type string) | Required. The status of the prediction. Valid values are:EnabledDisabledDraft |
| type | AIPredictionType (enumeration of type string) | Required. The type of model that returns the prediction values. Valid values are:BinaryClassificationDeepLearningIntentClassificationDeepLearningNameEntityRecognitionGlobalDeepLearningIntentClassificationGlobalDeepLearningNameEntityRecognitionLanguageDetectionMulticlassClassificationRegressionScoringSpecificOutcome |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Related Topics

- MLFilter (atlas.en-us.api_meta.meta/api_meta/meta_mldatadefinition.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
