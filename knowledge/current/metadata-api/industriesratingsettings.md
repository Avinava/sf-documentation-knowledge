---
title: "IndustriesRatingSettings"
domain: metadata-api
topic: industriesratingsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.030Z
estimatedTokens: 658
keywords: [IndustriesRatingSettings, settings, Rate, Management, Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules, Declarative]
---

# IndustriesRatingSettings

> Represents the settings for Rate
		Management.

# IndustriesRatingSettings

Represents the settings for Rate Management.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)") for more details.

## File Suffix and Directory Location

The IndustriesRatingSettings values are stored in the IndustriesRating.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

IndustriesRatingSettings components are available in API version 62.0 and later.

## Special Access Rules

This metadata type is available with Rate Management.

## Fields

| Field Name | Description |
| --- | --- |
| enableRating | Field TypebooleanDescriptionIndicates whether to enable Rate Management (true) or not (false). The default value is false. |
| enableRatingWaterfall | Field TypebooleanDescriptionIndicates whether to enable Rating Waterfall (true) or not (false). The default value is false. Rating Waterfall provides insights into the rating data, which you can synchronize with your rating lookup tables. |
| enableRatingWaterfallPersistence | Field TypebooleanDescriptionIndicates whether to enable Rating Waterfall Persistence (true) or not (false). The default value is false. Rating Waterfall Persistence stores rating data, which you can use to enhance the internal processes and increase efficiency. |

## Declarative Metadata Sample Definition

The following is an example of an IndustriesRatingSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)"). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<IndustriesRatingSettings xmlns="http://soap.sforce.com/2006/04/metadata">
     <enableRating>true</enableRating>
     <enableRatingWaterfall>true</enableRatingWaterfall> 
     <enableRatingWaterfallPersistence>true</enableRatingWaterfallPersistence>
</IndustriesRatingSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>IndustriesRating</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```
