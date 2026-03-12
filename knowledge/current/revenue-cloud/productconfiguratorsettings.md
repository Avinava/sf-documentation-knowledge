---
title: "ProductConfiguratorSettings"
domain: revenue-cloud
topic: productconfiguratorsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.833Z
estimatedTokens: 522
keywords: [ProductConfiguratorSettings, Represents, settings, Product, Configurator., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# ProductConfiguratorSettings

> Represents the settings for Product
			Configurator.

# ProductConfiguratorSettings

Represents the settings for Product Configurator.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)") for more details.

## File Suffix and Directory Location

ProductConfiguratorSettings values are stored in the ProductConfiguratorSettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

ProductConfiguratorSettings components are available in API version 60.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableProductConfigurator | Field TypebooleanDescriptionIndicates whether to enable Product Configurator at run time to customize product components and attributes during the sales process (true) or not (false). The default value is false. |

## Declarative Metadata Sample Definition

Here's an example of a ProductConfiguratorSettings component.

```

```

Here's an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)"). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ProductConfiguratorSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableProductConfigurator>true</enableProductConfigurator>
</ProductConfiguratorSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>ProductConfigurator</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```
