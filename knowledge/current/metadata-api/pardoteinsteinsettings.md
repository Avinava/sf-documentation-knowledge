---
title: "PardotEinsteinSettings"
domain: metadata-api
topic: pardoteinsteinsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.633Z
estimatedTokens: 749
keywords: [PardotEinsteinSettings, Represents, PardotEinsteinSettings., settings, factors, drive, campaign, performance, get, best, possible, engagement, score, prospects., extends, Metadata, metadata, inherits, its, fullName]
---

# PardotEinsteinSettings

> Represents PardotEinsteinSettings. Use
		these settings to learn what factors drive your campaign performance, and get the best
		possible engagement score for your prospects. This type extends the Metadata metadata type and inherits its
                        fullName field.

# PardotEinsteinSettings

Represents PardotEinsteinSettings. Use these settings to learn what factors drive your campaign performance, and get the best possible engagement score for your prospects. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

PardotEinsteinSettings values are stored in the PardotEinstein.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

PardotEinsteinSettings is available in API versions 48.0 and later.

Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCampaignInsight | boolean | Indicates whether Einstein Campaign Insights is enabled (true) or not (false). Einstein Campaign Insights helps you understand what factors drive campaign performance.The default value is false. |
| enableEngagementScore | boolean | Indicates whether Einstein Behavior Scoring is enabled (true) or not (false). Einstein Behavior Scoring identifies prospects whose behavior suggests that they are ready to buy, and scores them based on Einstein’s engagement model.The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of the PardotEinstein.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the PardotEinstein settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PardotEinsteinSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableCampaignInsight>true</enableCampaignInsight>
	<enableEngagementScore>true</enableEngagementScore>
</PardotEinsteinSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>PardotEinstein</members>
		<name>Settings</name>
	</types>
	<version>29.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
