---
title: "ActionsSettings"
domain: metadata-api
topic: actionssettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.398Z
estimatedTokens: 713
keywords: [ActionsSettings, org’s, actions, settings, quick, multi-dimensional, publisher, third-party, extends, Metadata, inherits, fullName, File, Suffix, Directory]
---

# ActionsSettings

> Represents an org’s actions settings for default
      quick actions, multi-dimensional publisher, and third-party actions. This type extends the Metadata metadata type and inherits its
                        fullName field.

# ActionsSettings

Represents an org’s actions settings for default quick actions, multi-dimensional publisher, and third-party actions. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

ActionsSettings values are stored in the Actions.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

Components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableDefaultQuickActionsOn | boolean | Indicates whether default quick actions are created in the org (true, the default setting) or not (false). |
| enableMdpEnabled | boolean | Indicates whether multi-dimensional publisher is enabled (true, the default setting) or not (false). |
| enableThirdPartyActions | boolean | Indicates whether third-party actions are displayed in the multi-dimensional publisher (true) or not (false, the default setting). |
| enableOfflineWebLinks | boolean | Indicates whether a button or link is available offline (true), or if it's only available online (false, the default setting). |

## Declarative Metadata Sample Definition

The following is an example of an ActionsSettings component.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ActionsSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<DefaultQuickActionsOn>true</DefaultQuickActionsOn>
	<MdpEnabled>true</MdpEnabled>
	<ThirdPartyActions>true</ThirdPartyActions>
</ActionsSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
