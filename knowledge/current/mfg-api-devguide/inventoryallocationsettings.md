---
title: "InventoryAllocationSettings"
domain: mfg-api-devguide
topic: inventoryallocationsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.253Z
estimatedTokens: 408
keywords: [InventoryAllocationSettings, settings, enabling, Manufacturing, Cloud, features, Inventory, Allocation, Parent, Manifest, Access, File, Suffix, Directory, Location]
---

# InventoryAllocationSettings

> Represents the settings for enabling Manufacturing
			Cloud features like Inventory Allocation.

# InventoryAllocationSettings

Represents the settings for enabling Manufacturing Cloud features like Inventory Allocation.

## Parent Type and Manifest Access

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See Settings for more details.

## File Suffix and Directory Location

InventoryAllocationSettings values are stored in the InventoryAllocation.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

InventoryAllocationSettings components are available in API version 66.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableInventoryAllocation | Field TypebooleanDescriptionIndicates whether the Inventory Allocation feature of Manufacturing Cloud is enabled (true) or disabled (false) for your org. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of an InventoryAllocationSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<InventoryAllocationSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableInventoryAllocation>true</enableInventoryAllocation>
</InventoryAllocationSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>InventoryAllocation</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```
