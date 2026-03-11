---
title: "OmniChannelSettings"
domain: omnistudio
topic: omnichannelsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:10.966Z
keywords: [OmniChannelSettings, Parent, Type, Manifest, Access, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# OmniChannelSettings

# OmniChannelSettings

Represents the Omni-Channel settings for an org.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)") for more details.

## File Suffix and Directory Location

OmniChannelSettings values are stored in the OmniChannel.settings file in the settings folder.

## Version

OmniChannelSettings components are available in API version 44.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableOmniAutoLoginPrompt | boolean | Indicates whether to display a login confirmation upon loading a console with Omni-Channel. The default value is false.When true, the console displays a prompt before logging into Omni-Channel when an agent opens another Omni-Channel console in a different tab or window or refreshes the current tab. The agent is logged out of Omni-Channel on other consoles and any ongoing conversations are ended. Available in API version 47.0 and later. |
| enableOmniChannel | boolean | Indicates whether Omni-Channel is enabled, giving you access to the objects required to set up the feature in your org. The default value is false. |
| enableOmniSecondaryRoutingPriority | boolean | Indicates whether Secondary Routing Priority is enabled in your org. The default value is false. Available in API version 47.0 and later. |
| enableOmniSkillsRouting | boolean | Indicates whether skills-based routing is enabled in your org. The default value is false. |
| enableOmniStatusCapModel | boolean | Indicates whether the status based capacity model for rep work is enabled or not. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a OmniChannelSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)"). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").