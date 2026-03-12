---
title: "EncryptionKeySettings"
domain: metadata-api
topic: encryptionkeysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.959Z
estimatedTokens: 999
keywords: [EncryptionKeySettings, org’s, encryption, key, settings, customer-supplied, keys, options, derivation, extends, Metadata, inherits, fullName, File, Suffix]
---

# EncryptionKeySettings

> Represents an org’s encryption key
         settings, such as customer-supplied keys options and key derivation settings. This
      type extends the Metadata metadata type and inherits its fullName
      field.

# EncryptionKeySettings

Represents an org’s encryption key settings, such as customer-supplied keys options and key derivation settings. This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

EncryptionKeySettings values are stored in the EncryptionKey.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

EncryptionKeySettings is available in API versions 47.0 and later.

## Special Access Rules

To enable EncryptionKeySettings, you need the Customize Application and Manage Encryption Keys permissions.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| canEncryptTransactionalDatabase | boolean | Indicates whether users can encrypt the transactional database (true) or can’t (false). The default value is false. If set to true, transactional database encryption is enabled and a transactional database tenant secret is generated. Available in API version 63.0 and later. |
| canExternalKeyManagement | boolean | Indicates whether External Key Management is available (true) or not (false). The default value is false. If set to true, users can configure connections to external key stores and use keys saved in those key stores to encrypt and decrypt Salesforce data. Available in API version 63.0 and later. |
| canManageDataCloudKeys | boolean | Indicates whether key management for Data 360 is enabled and an initial customer-managed root key is present (true) or not (false). Available in API version 63.0 and later. |
| canOptOutOfDerivationWithBYOK | boolean | Indicates that users can opt out of key derivation processes on a key-by-key basis when they upload key material (true) or can’t (false). The default value is false. |
| enableCacheOnlyKeys | boolean | Indicates whether the Cache-Only Key Service is available (true) or not (false). The default value is false. If set to true, users can configure a cache-only key callout connection and apply key material stored outside of Salesforce to data on demand. |
| enableReplayDetection | boolean | Indicates whether cache-only key callouts are protected from replay attacks by a nonce (true) or not (false). Requires enableCacheOnlyKeys=”true” before setting enableReplayDetection to true. |

## Declarative Metadata Sample Definition

The following is an example of the EncryptionKey.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the encryption key settings metadata for an organization:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EncryptionKeySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <canEncryptTransactionalDatabase>true</canEncryptTransactionalDatabase>
    <canManageDataCloudKeys>true</canManageDataCloudKeys>
    <enableExternalKeyManagement>true</enableExternalKeyManagement>
</EncryptionKeySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>EncryptionKey</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
