---
title: "PlatformEncryptionSettings"
domain: metadata-api
topic: platformencryptionsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.969Z
keywords: [PlatformEncryptionSettings, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Example, Package, Manifest, Wildcard, Support]
---

# PlatformEncryptionSettings

# PlatformEncryptionSettings

Represents an org’s Platform Encryption settings, such as settings for available encryption schemes, permissions, encryption policy access, and which fields can be encrypted. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

PlatformEncryptionSettings values are stored in the PlatformEncryption.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

PlatformEncryptionSettings is available in API versions 47.0 and later.

## Special Access Rules

To enable and disable PlatformEncryptionSettings attributes, you need the Customize Application permission. Attributes that allow key management tasks require the Manage Encryption Keys permission. For a complete list of required permissions, read [Which User Permissions Does Shield Platform Encryption Require?](https://developer.salesforce.com/docs/atlas.en-us.260.0.securityImplGuide.meta/securityImplGuide/security_pe_permissions.htm#! "HTML (New Window)").

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| canEncryptManagedPackageFields | boolean | Indicates whether users can enable encryption on custom fields in installed managed packages (true) or not (false). |
| isUseHighAssuranceKeysRequired | boolean | This field is for internal use. |
| isMEKForEncryptionRequired | boolean | Indicates whether encryption policy tasks, such as enabling encryption on fields, also require the Manage Encryption Keys permission (true) or not (false), in addition to those tasks’ baseline permissions. |
| enableDeterministEncryption | boolean | Indicates whether customers apply the deterministic encryption scheme to supported fields (true) or not (false). The deterministic encryption scheme lets customers filter on encrypted data.. |
| enableEncryptFieldHistory | boolean | Indicates whether the background encryption process applies the customer's active key material to field history and feed tracking values (true) or not (false). The default value is false. If false, background encryption processes apply active key material to all encrypted data except duplicates of that data stored in field history or feed tracking. |
| enableEventBusEncryption | boolean | This field is for internal use. |

## Declarative Metadata Sample Definition

The following is an example of the PlatformEncryption.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the Platform Encryption settings metadata for an organization:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").