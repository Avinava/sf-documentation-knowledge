---
title: "OrderManagementSettings"
domain: metadata-api
topic: ordermanagementsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.837Z
keywords: [OrderManagementSettings, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# OrderManagementSettings

# OrderManagementSettings

Represents options for the Salesforce Order Management product. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

OrderManagementSettings values are stored in the OrderManagement.settings file in the settings directory. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

Order Management settings are available in API version 48 and later.

## Special Access Rules

This metadata type is only accessible by developers and customers using Salesforce Order Management.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| deliveryEstimationEnabled | boolean | Specifies whether delivery estimation is active (true) or not (false). The default value is false. Available in API version 62.0 and later. |
| enableB2CIntegration | boolean | Indicates whether Order Management is allowed to accept order data from B2C Commerce (true) or not (false). The default value is false. |
| enableDuplicateManagement | boolean | Indicates whether the Order Management B2C Commerce Integration applies the Salesforce org’s duplicate and matching rules for Accounts, Contacts, and Person Accounts to shopper records (true) or not (false). The default value is false. The Setup toggle label is B2C Integration Data Matching Rules. Available in API version 53.0 and later. |
| enableHighScaleOrders | boolean | Indicates whether the Order Management B2C Commerce Integration uses the High Scale Orders feature (true) or the original order ingestion system (false). The default value is false. Available in API version 56.0 and later. |
| enableOrderManagement | boolean | Indicates whether Order Management features are enabled (true) or not (false). The default value is false. |
| enablePersonAccountsForShoppers | boolean | Indicates whether Order Management represents each shopper with a Person Account (true) or a normal Account and a Contact (false). The default value is false. Available in API version 49.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of an OrderManagementSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").