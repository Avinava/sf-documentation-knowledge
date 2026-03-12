---
title: "FilesConnectSettings"
domain: metadata-api
topic: filesconnectsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.877Z
estimatedTokens: 688
keywords: [FilesConnectSettings, Represents, settings, modify, Files, Connect, feature.This, extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location, Version, Fields]
---

# FilesConnectSettings

> Represents the settings that modify the Files Connect
      feature.This type extends the Metadata metadata type and inherits its
                        fullName field.

# FilesConnectSettings

Represents the settings that modify the Files Connect feature.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

FilesConnectSettings values are stored in the FilesConnect.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

FilesConnectSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableContentHubAllowed | boolean | Indicates whether Files Connect is enabled (true) or not (false). |
| enableContentHubCvtLinksAllowed | boolean | Indicates whether the ability to link conversions in the feed publisher is enabled (true) or not (false) for Google Drive and Quip links. |
| enableContentHubEOSearchLayout | boolean | Indicates whether the external object’s search layout can be used in Global Search (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of a FilesConnectSettings component.

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
<FilesConnectSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableContentHubAllowed>false</enableCurrencyEffectiveDates>
    <enableContentHubCvtLinksAllowed>false</enableCurrencySymbolWithMultiCurrency>
    <enableContentHubEOSearchLayout>false</enableMultiCurrency>
</FilesConnectSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>FilesConnect</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
