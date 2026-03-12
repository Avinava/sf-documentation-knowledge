---
title: "PredictionBuilderSettings"
domain: metadata-api
topic: predictionbuildersettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.821Z
estimatedTokens: 660
keywords: [PredictionBuilderSettings, Represents, settings, determine, how, user, interact, Einstein, Prediction, Builder., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory]
---

# PredictionBuilderSettings

> Represents the settings that determine how a user can
      interact with Einstein Prediction Builder.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# PredictionBuilderSettings

Represents the settings that determine how a user can interact with Einstein Prediction Builder. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

PredictionBuilderSettings values are stored in the PredictionBuilder.settings file in the settings directory. The .settings files are different from other named components in that each settings component has only one settings file.

## Version

PredictionBuilderSettings components are available in API version 47.0 and later.

## Special Access Rules

This type is available only if the CRM Analytics Plus or Einstein Predictions license is enabled in your org.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enablePredictionBuilder | boolean | Indicates whether Einstein Prediction Builder is enabled (true) or not (false). |
| isPredictionBuilderStarted | boolean | Indicates whether to display the predictions list view to the user (true) or not (false). |

## Declarative Metadata Sample Definition

This is a sample Prediction Builder settings file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PredictionBuilderSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <isPredictionBuilderStarted>false</isPredictionBuilderStarted>
    <enablePredictionBuilder>false</enablePredictionBuilder>
</PredictionBuilderSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
