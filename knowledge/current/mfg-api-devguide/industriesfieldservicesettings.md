---
title: "IndustriesFieldServiceSettings"
domain: mfg-api-devguide
topic: industriesfieldservicesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.240Z
estimatedTokens: 399
keywords: [IndustriesFieldServiceSettings, settings, enabling, Manufacturing, cloud, features, Industries, Services, Product, Service, Campaign, Management, File, Suffix, Directory]
---

# IndustriesFieldServiceSettings

> Represents the settings for enabling Manufacturing
			cloud features like Industries Field Services and Product Service Campaign
			Management.

# IndustriesFieldServiceSettings

Represents the settings for enabling Manufacturing cloud features like Industries Field Services and Product Service Campaign Management.

This type extends the Metadata metadata type and inherits its fullName field. In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm) for more details.

## File Suffix and Directory Location

IndustriesFieldServiceSettings values are stored in the IndustriesFieldServiceSettings.settings file in the settings directory.

## Version

IndustriesFieldServiceSettings components are available in API version 60.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAutomotiveServiceCampaignManagement | boolean | Indicates whether the predefined components for Product Service Campaign Management feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. This field is available from API version 65.0 and later. |
| enableIndustriesFieldService | boolean | Indicates whether the predefined components for Industries Field Services feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of an IndustriesFieldServiceSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesFieldServiceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
     <enableAutomotiveServiceCampaignManagement>false</enableAutomotiveServiceCampaignManagement>
     <enableIndustriesFieldService>false</enableIndustriesFieldService>
</IndustriesFieldServiceSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>IndustriesFieldService</members>
        <name>Settings</name>
    </types>
    <version>60.0</version>
</Package>
```
