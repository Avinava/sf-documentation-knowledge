---
title: "IndustriesEinsteinFeatureSettings"
domain: metadata-api
topic: industrieseinsteinfeaturesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.253Z
estimatedTokens: 668
keywords: [IndustriesEinsteinFeatureSettings, settings, enabling, Industries, Einstein, feature, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition]
---

# IndustriesEinsteinFeatureSettings

> Represents the settings for enabling the
      Industries Einstein feature.

# IndustriesEinsteinFeatureSettings

Represents the settings for enabling the Industries Einstein feature.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

IndustriesEinsteinFeatureSettings values are stored in a single file named IndustriesEinsteinFeature.settings in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

IndustriesEinsteinFeatureSettings components are available in API version 57.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| documentReaderConfidenceOrgValue | Field TypedoubleDescriptionRequired.Specify the confidence score threshold to indicate the reliability of data in a document. You can enter a number from 0 to 100, with up to two decimal places, where 0 is the least confident and 100 is the most confident. |

## Declarative Metadata Sample Definition

The following is an example of a IndustriesEinsteinFeatureSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesEinsteinFeatureSettings xmlns="http://soap.sforce.com/2006/04/metadata">
   <documentReaderConfidenceOrgValue>61</documentReaderConfidenceOrgValue>
</IndustriesEinsteinFeatureSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>IndustriesEinsteinFeature</members>
    <name>Settings</name>
  </types>
  <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
