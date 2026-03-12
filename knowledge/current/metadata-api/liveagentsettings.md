---
title: "LiveAgentSettings"
domain: metadata-api
topic: liveagentsettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:40.901Z
estimatedTokens: 724
keywords: [LiveAgentSettings, Represents, organization’s, Chat, settings, such, whether, enabled., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location, Version]
---

# LiveAgentSettings

> Represents an organization’s Chat settings,
            such as whether Chat is enabled.
        This type extends the Metadata metadata type and inherits its
                        fullName field.

# LiveAgentSettings

Represents an organization’s Chat settings, such as whether Chat is enabled. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

LiveAgentSettings values are stored in the LiveAgent.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## Version

LiveAgentSettings is available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableChatFindOrCreateEnable | boolean | Indicates whether the findOrCreate method of the Chat API is enabled for agents (true) or not (false). Available in API version 53.0 and later. |
| enableLiveAgent | boolean | Indicates whether Chat is enabled (true) or not (false). |
| enableQuickTextEnabled | boolean | Indicates whether Quick Text is enabled (true) or not (false). |
| priority | integer | Indicates the priority level of a Chat. |

## Declarative Metadata Sample Definition

This is a sample Chat settings file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [*Service Cloud Chat Developer Guide:* findOrCreate](https://developer.salesforce.com/docs/atlas.en-us.260.0.live_agent_dev.meta/live_agent_dev/live_agent_creating_records.htm "Service Cloud Chat Developer Guide:
    findOrCreate - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LiveAgentSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableLiveAgent>true</enableLiveAgent>
</LiveAgentSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
