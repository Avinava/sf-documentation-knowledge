---
title: "IndustriesEinsteinFeatureSettings"
domain: omnistudio
topic: industrieseinsteinfeaturesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:51.408Z
estimatedTokens: 513
keywords: [IndustriesEinsteinFeatureSettings, Represents, settings, enabling, Industries, Einstein, feature., File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# IndustriesEinsteinFeatureSettings

> Represents the settings for enabling the
      Industries Einstein feature.

# IndustriesEinsteinFeatureSettings

Represents the settings for enabling the Industries Einstein feature.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

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

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

#### See Also

-   [*Extend Your Industries Cloud with Common Features*: Configure Global Content Extraction Settings](https://help.salesforce.com/s/articleView?id=ind.intelligent_document_reader_configure_settings.htm&type=5&language=en_US "Extend Your Industries Cloud with Common Features: Configure Global Content Extraction Settings - HTML (New Window)")

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
