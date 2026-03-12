---
title: "PlatformEventSettings"
domain: metadata-api
topic: platformeventsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:41.245Z
estimatedTokens: 712
keywords: [PlatformEventSettings, settings, platform, events, change, data, capture, Parent, Manifest, Access, File, Suffix, Directory, Location, Version]
---

# PlatformEventSettings

> Represents settings for platform events and change data
			capture events.

# PlatformEventSettings

Represents settings for platform events and change data capture events.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

PlatformEventSettings values are stored in the PlatformEvent.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

PlatformEventSettings components are available in API version 58.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| enableEnhancedUsageMetrics | Field TypebooleanDescriptionEnables enhanced usage metrics for queries run against PlatformEventUsageMetric. Enhanced usage metrics provide additional fields for the queries and granular time segments. For more information, see Enhanced Usage Metrics in the Platform Events Developer Guide. Default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a PlatformEventSettings component that enables the enhanced usage metrics feature.

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
<PlatformEventSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableEnhancedUsageMetrics>true</enableEnhancedUsageMetrics>
</PlatformEventSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>PlatformEvent</members>
        <name>Settings</name>
    </types>
    <version>58.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with
					the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
