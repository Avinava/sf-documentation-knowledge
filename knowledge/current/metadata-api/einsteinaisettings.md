---
title: "EinsteinAISettings"
domain: metadata-api
topic: einsteinaisettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.764Z
estimatedTokens: 815
keywords: [EinsteinAISettings, Einstein, settings, including, feedback, integration, Data, PII, masking, trust, features, Parent, Manifest, Access, File]
---

# EinsteinAISettings

> Represents Einstein AI settings, including AI feedback integration with Data 360 and
		PII masking for AI trust features.

# EinsteinAISettings

Represents Einstein AI settings, including AI feedback integration with Data 360 and PII masking for AI trust features.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the "Settings" name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

EinsteinAISettings values are stored in the EinsteinAISettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

EinsteinAISettings is available in API version 60.0 and later. Individual fields may have specific minimum API version requirements as noted in the field descriptions.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| enableAIFeedbackWithDC | Field TypebooleanDescriptionIndicates whether AI feedback integration with Data 360 is enabled (true) or not (false). Available in API version 60.0 and later. |
| enableAITrustInputToxicityDetection | Reserved for internal use. |
| enableAITrustPromptInjectionDetection | Reserved for internal use. |
| enablePBHideScopedNotif | Reserved for internal use. |
| enablePBPromptPerformanceMetrics | Reserved for internal use. |
| enableTrustPIIMasking | Field TypebooleanDescriptionIndicates whether PII (Personally Identifiable Information) masking for AI trust features is enabled (true) or not (false). Available in API version 60.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of an EinsteinAISettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn't apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EinsteinAISettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableAIFeedbackWithDC>true</enableAIFeedbackWithDC>
    <enableTrustPIIMasking>true</enableTrustPIIMasking>
</EinsteinAISettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>EinsteinAI</members>
        <name>Settings</name>
    </types>
    <version>64.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
