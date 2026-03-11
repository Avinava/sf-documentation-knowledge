---
title: "OrderSettings"
domain: metadata-api
topic: ordersettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.843Z
keywords: [OrderSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# OrderSettings

# OrderSettings

Represents order settings.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

There is one OrderSettings component in a file named Order.settings in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

OrderSettings components are available in API version 30.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableEnhancedCommerceOrders | boolean | Indicates whether enhanced commerce orders are enabled for the org (true) or not (false). This preference is available only in orgs with the Salesforce Order Management license. Default value is false. Available in API versions 48.0 and later. |
| enableNegativeQuantity | boolean | Indicates whether users in the org can add order products with quantities of less than zero (true) or not (false).To enable this preference, enableOrders must be set to true. |
| enableOptionalPricebook | boolean | Indicates whether users in the org can create orders without price books (true) or not (false). For more information, see Enable Orders Without Price Books in Salesforce Help. |
| enableOrderEvents | boolean | Indicates whether order events are enabled for the org (true) or not (false). For more information, see OrderStatusChangedEvent in the Platform Events Developer Guide. |
| enableOrders | boolean | Indicates whether orders are enabled for the org (true) or not (false). |
| enableOrderWithMultiplePriceBooks | boolean | Indicates whether users in the org can create orders containing order items that refer to multiple price books (true) or not (false). Available in API version 60.0 and later.To enable this preference, enableOrders and enableEnhancedCommerceOrders must be set to true.This field helps to offer different pricing structures for various customer segments, regions, or promotional periods. |
| enableReductionOrders | boolean | Indicates whether reduction orders are enabled for the org (true) or not (false). For more information, see Reduction Orders in Salesforce Help.To enable this preference, enableOrders must be set to true. |
| enableZeroQuantity | boolean | Indicates whether users in the org can add order products with quantities of zero (true) or not (false). Default value is false.To enable this preference, enableOrders must be set to true.Available in API version 42.0 and later. |

## Declarative Metadata Sample Definition

This is a sample OrderSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").