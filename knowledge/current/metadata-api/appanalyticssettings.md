---
title: "AppAnalyticsSettings"
domain: metadata-api
topic: appanalyticssettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.733Z
estimatedTokens: 690
keywords: [AppAnalyticsSettings, settings, retrieve, AppExchange, App, Analytics, usage, data, File, Suffix, Directory, Location, Version, Declarative, Metadata]
---

# AppAnalyticsSettings

> Represents settings to retrieve AppExchange
   App Analytics usage data.

# AppAnalyticsSettings

Represents settings to retrieve AppExchange App Analytics usage data.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

AppAnalyticsSettings values are stored in the AppAnalytics.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

AppAnalyticsSettings is available in API versions 50.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAppAnalyticsOptOut | boolean | Indicates whether the collection of AppExchange App Analytics package usage data from this org is disabled (true) or not (false). Available in API version 60.0 and later. Default is false. |
| enableSimulationMode | boolean | Indicates whether AppExchange App Analytics simulation mode is enabled (true) or disabled (false). Available in API version 50.0 and later. Default is false. |

## Declarative Metadata Sample Definition

The following is an example of the AppAnalytics.settings file:

```

```

## Example Package Manifest

This example package manifest deploys or retrieves AppAnalytics settings metadata.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AppAnalyticsSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableSimulationMode>true</enableSimulationMode>
	<enableAppAnalyticsOptOut>false</enableAppAnalyticsOptOut>
</AppAnalyticsSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>AppAnalytics</members>
		<name>Settings</name>
	</types>
	<version>50.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
