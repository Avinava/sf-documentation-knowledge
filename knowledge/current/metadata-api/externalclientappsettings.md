---
title: "ExternalClientAppSettings"
domain: metadata-api
topic: externalclientappsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:39.604Z
estimatedTokens: 759
keywords: [ExternalClientAppSettings, Represents, settings, enable, External, Client, App, feature, provide, access, OAuth, consumer, secret., Parent, Manifest, Access, File, Suffix, Directory, Location]
---

# ExternalClientAppSettings

> Represents settings to enable the External Client App
      feature and provide access to the OAuth consumer secret.

# ExternalClientAppSettings

Represents settings to enable the External Client App feature and provide access to the OAuth consumer secret.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

ExternalClientAppSettings values are stored in the .settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

ExternalClientAppSettings components are available in API version 58.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableClientSecretInRestApiAccess | boolean | Indicates whether OAuth consumer secrets can be accessed through the credentials REST API (true) or not (false). This field is available in API version 62.0 and later. |
| enableConsumerSecretApiAccess | boolean | Indicates whether OAuth consumer secrets can be accessed through Metadata API (true) or not (false). |
| enablePackageEcaOauthFromDevOrg | boolean | Indicates whether you can package an external client app that is owned by an org, that isn't a Dev Hub org, (true) or not (false). It’s recommended that you only package OAuth-enabled external client apps that are owned by a Dev Hub org. This practice maintains the integrity of the OAuth client credentials by storing them on an org that won't be deleted. If you have other ways to maintain the OAuth client credentials, you can enable this field and package an external client app form a different type of org. External client apps built on ephemeral orgs, like Scratch orgs or sandboxes, can't be packaged even with this field set to true. This field is available in API version 62.0 and later. |

## Declarative Metadata Sample Definition

The example shows a settings file component.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ExternalClientAppSettings xmlns="http://soap.sforce.com/2006/04/metadata">
        <enableClientSecretInRestApiAccess>true</enableClientSecretInRestApiAccess>
        <enableConsumerSecretApiAccess>true</enableConsumerSecretApiAccess>
        <enablePackageEcaOauthFromDevOrg>false</enablePackageEcaOauthFromDevOrg>
</ExternalClientAppSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
