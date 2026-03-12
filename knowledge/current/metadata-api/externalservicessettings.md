---
title: "ExternalServicesSettings"
domain: metadata-api
topic: externalservicessettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:39.689Z
estimatedTokens: 701
keywords: [ExternalServicesSettings, Represents, settings, External, Services, registration., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard]
---

# ExternalServicesSettings

> Represents settings for an External Services registration.

# ExternalServicesSettings

Represents settings for an External Services registration.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

ExternalServicesSettings values are stored in the externalServicesSettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

ExternalServicesSettings components are available in API version 47.0 to 55.0. This metadata type is removed in version 56.0 and later.

As of Winter ’23, External Services automatically validates the schema and provides detailed messages for any errors in the UI at registration time so that you can make corrections. See [Register an External Service](https://help.salesforce.com/s/articleView?id=platform.external_services_register.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

## Fields

| Field Name | Description |
| --- | --- |
| enableIgnoreUnsupportedOperations | Field TypebooleanDescriptionIndicates whether your registration should ignore and filter out unsupported schema operations rather than fail the entire registration (true), or whether a specification with invalid schema operations can't be registered successfully (false). Detailed schema errors pertaining to unsupported operations are shown only if this flag is false. |

## Declarative Metadata Sample Definition

The following is an example of an ExternalServicesSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExternalServicesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <enableIgnoreUnsupportedOperations>true</enableIgnoreUnsupportedOperations>
</ExternalServicesSettings>
```

```
<types>
    <members>ExternalServices</members>
    <name>Settings</name>
  </types>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving
          Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
