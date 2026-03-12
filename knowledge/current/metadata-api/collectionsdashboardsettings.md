---
title: "CollectionsDashboardSettings"
domain: metadata-api
topic: collectionsdashboardsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.513Z
estimatedTokens: 645
keywords: [CollectionsDashboardSettings, org’s, settings, add, Collections, Dashboard, application, org, Parent, Manifest, Access, File, Suffix, Directory, Location]
---

# CollectionsDashboardSettings

> Represents an org’s settings to add the
			Collections Dashboard application to an org.

# CollectionsDashboardSettings

Represents an org’s settings to add the Collections Dashboard application to an org.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

CollectionsDashboardSettings values are stored in the CollectionsDashboard.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

CollectionsDashboardSettings components are available in API version 56.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableCollectionsDashboard | Field TypebooleanDescriptionIndicates whether to add the Collections Dashboard application to an org (true) or not (false). The default value is false. |

## Declarative Metadata Sample Definition

Thisexample shows a sample CollectionsDashboardSettings component.

```

```

Theis example shows a sample package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CollectionsDashboardSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCollectionsDashboard>true</enableCollectionsDashboard>
</CollectionsDashboardSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>CollectionsDashboard</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with
					the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
