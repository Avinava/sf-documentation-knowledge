---
title: "ExternalAIModel"
domain: metadata-api
topic: externalaimodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.441Z
keywords: [ExternalAIModel, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ExternalAIModel

# ExternalAIModel

Represents the state of a given model for an Einstein for Service feature, such as Einstein Reply Recommendations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExternalAIModel components have the suffix .externalAIModel and are stored in the externalAIModels folder.

## Version

ExternalAIModel components are available in API version 51.0 and later.

## Special Access Rules

This type is available only when an org is configured to access the application in the applicationSourceType field. For example, if applicationSourceType is set to ARTICLE\_RECOMMENDATION, this type is available only if Einstein Article Recommendations is enabled in the org and the Main Services Agreement has been accepted.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| applicationSourceType | ApplicationSourceType (enumeration of type string) | Required. The target application for the configuration. Valid values are:REPLY_RECOMMENDATION— Einstein Reply RecommendationsARTICLE_RECOMMENDATION— Einstein Article RecommendationsUTTERANCE_RECOMMENDATION— Einstein Bot utterancesFAQ— Einstein Bot frequently asked questions |
| externalModelKey | string | Required. Unique key which identifies external model corresponding this applicationType |
| externalModelStatus | ExternalModelStatus (enumeration of type string) | Required. The current state of a given model. Valid values are:DISABLEDENABLEDPAUSED |
| name | string | Required. A reference to the configuration. |
| threshold | double | Threshold override value for this model. Nillable. |
| trainingJobName | string | Training job path corresponding to the given model. Nillable. |

## Declarative Metadata Sample Definition

The following is an example of an ExternalAIModel component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").