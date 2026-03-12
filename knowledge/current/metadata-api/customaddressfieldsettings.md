---
title: "CustomAddressFieldSettings"
domain: metadata-api
topic: customaddressfieldsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:38.158Z
estimatedTokens: 694
keywords: [CustomAddressFieldSettings, Represents, settings, custom, address, fields., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard]
---

# CustomAddressFieldSettings

> Represents the settings for custom address fields.

# CustomAddressFieldSettings

Represents the settings for custom address fields.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

CustomAddressFieldSettings values are stored in the CustomAddressField.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

CustomAddressFieldSettings components are available in API version 55.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCustomAddressField | boolean | Indicates whether the Address Field Type is available for custom fields (true) or not (false). The default value is false.Custom Address Fields can’t be disabled. When enableCustomAddressField is set to true, you can’t change the value to false.NoteBefore you set this field to true, review Custom Address Fields Requirements and Limitations in Salesforce Help. |

## Declarative Metadata Sample Definition

The following is an example of a CustomAddressFieldSettings component.

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
<CustomAddressFieldSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCustomAddressField>true</enableCustomAddressField>
</CustomAddressFieldSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>CustomAddressField</members>
        <name>Settings</name>
    </types>
    <version>55.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Field Type (atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm)
- Deploying and Retrieving Metadata with
					the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
