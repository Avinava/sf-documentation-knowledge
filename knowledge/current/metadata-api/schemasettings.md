---
title: "SchemaSettings"
domain: metadata-api
topic: schemasettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.590Z
estimatedTokens: 825
keywords: [SchemaSettings, Represents, org’s, schema, settings, which, manage, availability, custom, metadata, values., extends, Metadata, inherits, its, fullName, field., File, Suffix, Directory]
---

# SchemaSettings

> Represents an org’s schema settings, which manage the
      availability of custom settings and custom metadata type values. This type extends the Metadata metadata type and inherits its
                        fullName field.

# SchemaSettings

Represents an org’s schema settings, which manage the availability of custom settings and custom metadata type values. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

SchemaSettings values are stored in the Schema.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

SchemaSettings is available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAdvancedCMTSecurity | boolean | Indicates whether custom metadata type values are available only to Apex, flow, and formula operations (true) or exposed in other contexts such as through the Enterprise WSDL or SOAP API (false). This field has a default value of false. |
| enableAdvancedCSSecurity | boolean | Indicates whether custom settings type values are available only to Apex, flow, and formula operations (true) or exposed in other contexts such as through the Enterprise WSDL or SOAP API (false). This field has a default value of false. |
| enableListCustomSettingCreation | boolean | Indicates whether you can create custom settings when using application-level data definitions (true) or not (false). This field has a default value of false. |
| enableSOSLOnCustomSettings | boolean | Indicates whether custom settings values are returned in Salesforce Object Search language (SOSL) queries (true) or not (false). This field has a default value of false. |

## Declarative Metadata Sample Definition

The following is an example of a SchemaSettings component.

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
<SchemaSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableAdvancedCMTSecurity>true</enableAdvancedCMTSecurity>
    <enableAdvancedCSSecurity>true</enableAdvancedCSSecurity>
    <enableListCustomSettingCreation>false</enableListCustomSettingCreation>
    <enableSOSLOnCustomSettings>true</enableSOSLOnCustomSettings>
</SchemaSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Schema</members>
        <name>Settings</name>
    </types>   
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
