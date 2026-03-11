---
title: "InventorySettings"
domain: metadata-api
topic: inventorysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.179Z
keywords: [InventorySettings, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# InventorySettings

# InventorySettings

Represents options for the Salesforce Omnichannel Inventory product.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

InventorySettings values are stored in the Inventory.settings file in the settings directory. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

Inventory settings are available in API version 51 and later.

## Special Access Rules

This metadata type is only accessible by developers and customers using Salesforce Omnichannel Inventory.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableOCIB2CIntegration | boolean | Indicates whether Omnichannel Inventory is allowed to exchange inventory data with B2C Commerce (true) or not (false). The default value is false. |
| enableOmniChannelInventory | boolean | Indicates whether Omnichannel Inventory features are enabled (true) or not (false). The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of an InventorySettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").