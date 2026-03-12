---
title: "MacroSettings"
domain: metadata-api
topic: macrosettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.992Z
estimatedTokens: 614
keywords: [MacroSettings, Represents, organization’s, Macro, settings, such, whether, folders, enabled., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location]
---

# MacroSettings

> Represents an organization’s Macro settings, such as whether or not
            folders is enabled.
        This type extends the Metadata metadata type and inherits its
                        fullName field.

# MacroSettings

Represents an organization’s Macro settings, such as whether or not folders is enabled. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MacroSettings values are stored in the Macro.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## Version

MacroSettings is available in API version 39.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAdvancedSearch | boolean | Indicates whether users can search all macro text fields (true) or not (false). |
| macrosInFolders | boolean | Indicates whether users can organize and share macros using folders (true) or not (false). Available in API version 44.0 and later. |

## Declarative Metadata Sample Definition

This is a sample Macro settings file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<MacroSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableAdvancedSearch>true</enableAdvancedSearch>
    <macrosInFolders>true</macrosInFolders>
</MacroSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
