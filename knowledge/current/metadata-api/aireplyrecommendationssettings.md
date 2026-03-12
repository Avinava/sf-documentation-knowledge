---
title: "AIReplyRecommendationsSettings"
domain: metadata-api
topic: aireplyrecommendationssettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.538Z
estimatedTokens: 763
keywords: [AIReplyRecommendationsSettings, metadata, manage, settings, Einstein, Reply, Recommendations, extends, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# AIReplyRecommendationsSettings

> Represents the metadata used to manage settings
			for Einstein Reply Recommendations.
		This type extends the Metadata metadata type and inherits its
                        fullName field.

# AIReplyRecommendationsSettings

Represents the metadata used to manage settings for Einstein Reply Recommendations. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

Einstein Reply Recommendations settings are stored in a single file named aireplyrecommendations.settings in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

AIReplyRecommendationsSettings is available in API version 49.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAIReplyRecommendations | boolean | If true (default), Einstein Reply Recommendations is enabled. If false, it is disabled. |
| enableGenReplyRecommendations | boolean | If true (default), Einstein Service Replies is enabled. If false, it is disabled. Available in API version 58.0 or later. |
| enableServiceEinsteinGPTGrounding | boolean | If true (default), Service AI Grounding is enabled. If false, it is disabled. Available in API version 58.0 or later. |

## Declarative Metadata Sample Definition

The following is an example aireplyrecommendations.settings metadata file:

```

```

## Example Package Manifest

The following is an example package.xml manifest that references the AIReplyRecommendationsSettings definitions:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Copyright

Rights of ALBERT EINSTEIN are used with permission of The Hebrew University of Jerusalem. Represented exclusively by Greenlight.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AIReplyRecommendationsSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableAIReplyRecommendations>true</enableAIReplyRecommendations>
</AIReplyRecommendationsSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>AIReplyRecommendations</members>
		<name>Settings</name>
	</types>
	<version>49.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
