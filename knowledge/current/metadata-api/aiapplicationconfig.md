---
title: "AIApplicationConfig"
domain: metadata-api
topic: aiapplicationconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.503Z
estimatedTokens: 609
keywords: [AIApplicationConfig, Additional, prediction, application, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Wildcard, Support]
---

# AIApplicationConfig

> Additional prediction information related to an AI application. This type extends the Metadata metadata type and inherits its
                        fullName field.

# AIApplicationConfig

Additional prediction information related to an AI application. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AIApplicationConfig components have the suffix .aiapplicationconfig and are stored in the aiApplicationConfigs folder.

## Version

AIApplicationConfig is available in API version 50.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| aiApplicationDeveloperName | string | Required. Represents the AIApplication to which AIApplicationConfig belongs. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Available in API version 51.0 and later. |
| applicationId | string | Required. The ID of the parent AI application. |
| developerName | string | Represents the name of the application config. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| insightReasonEnabled | boolean | Required. When true, generates the predictors, or field values, that were used to generate the prediction value. |
| masterLabel | string | Required. Label that identifies the AI application configuration throughout the Salesforce user interface. |
| rank | int | Required. Reserved for future use. |
| scoringMode | AIScoringMode (enumeration of type string) | Required. Frequency with which the prediction scores are written back. Valid values are:BatchOnDemandStreaming |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
