---
title: "NameSettings"
domain: metadata-api
topic: namesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.341Z
estimatedTokens: 770
keywords: [NameSettings, Enables, disables, formal, name, middle, suffix, attributes, person, objects, Contact, Lead, Person, Account, User., extends, Metadata, metadata, inherits, its]
---

# NameSettings

> Enables or disables the formal name, middle name, and
            suffix attributes for these person objects: Contact, Lead, Person Account, and
            User.
        This type extends the Metadata metadata type and inherits its
                        fullName field.

# NameSettings

Enables or disables the formal name, middle name, and suffix attributes for these person objects: Contact, Lead, Person Account, and User. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

You can’t enable local name fields programmatically via the Metadata API. For more information about enabling local fields, see [Local Name Fields](https://help.salesforce.com/s/articleView?id=xcloud.admin_local_name_fields.htm&language=en_US "HTML (New Window)") and [Enable ‘Local Name’ Fields](https://help.salesforce.com/s/articleView?id=000386837&type=1&language=en_US "HTML (New Window)").

## File Suffix and Directory Location

NameSettings values are stored in a single file named Name.settings in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

NameSettings components are available in API version 31.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableInformalName | boolean | Reserved for internal use. Available in API version 48.0 and later. |
| enableMiddleName | boolean | Indicates whether middle names are enabled (true) or disabled (false) for person objects. |
| enableNameSuffix | boolean | Indicates whether suffixes are enabled (true) or disabled (false) for person objects. |

## Declarative Metadata Sample Definition

This example shows a NameSettings component.

```

```

This example package.xml manifest references the NameSettings definitions.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<NameSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableMiddleName>true</enableMiddleName>
    <enableNameSuffix>false</enableNameSuffix>
</NameSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Name</members>
        <name>Settings</name>
    </types>
    <version>31.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
