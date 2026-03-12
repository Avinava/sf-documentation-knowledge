---
title: "ProductSettings"
domain: metadata-api
topic: productsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:41.339Z
estimatedTokens: 660
keywords: [ProductSettings, organization, preferences, quantity, schedules, revenue, active, flag, interaction, prices, extends, Metadata, inherits, fullName, File]
---

# ProductSettings

> Represents organization preferences for quantity
            schedules, revenue schedules, and active flag interaction with prices. This type extends the Metadata metadata type and inherits its
                        fullName field.

# ProductSettings

Represents organization preferences for quantity schedules, revenue schedules, and active flag interaction with prices. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ProductSettings values are stored in a single file named Product.settings in the settings directory of the corresponding package directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

ProductSettings is available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCascadeActivateToRelatedPrices | boolean | When changing active flag on a product record, automatically updates active flag on related prices. |
| enableMySettings | boolean | Moves users’ personal settings pages from Setup to a separate My Settings pane (true) or not (false). When set to (true), Salesforce makes a reorganized Setup pane accessible to admins via one click in the header. This setting affects all users in your organization. The default is true. Available in API version 47.0 and later. |
| enableQuantitySchedule | boolean | Enables quantity schedules for products. |
| enableRevenueSchedule | boolean | Enables revenue schedules for products. |

## Declarative Metadata Sample Definition

The following is an example of the package file.

```

```

The package file references the following Product.settings file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Product</members>
        <name>Settings</name>
    </types>
    <version>28.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<ProductSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCascadeActivateToRelatedPrices>true</enableCascadeActivateToRelatedPrices>
    <enableQuantitySchedule>false</enableQuantitySchedule>
    <enableRevenueSchedule>false</enableRevenueSchedule>
</ProductSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
