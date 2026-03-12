---
title: "InventoryReplenishmentSettings"
domain: mfg-api-devguide
topic: inventoryreplenishmentsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.258Z
estimatedTokens: 408
keywords: [InventoryReplenishmentSettings, setting, enabling, Inventory, Replenishment, feature, Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Declarative]
---

# InventoryReplenishmentSettings

> Represents the setting for enabling Inventory
			Replenishment feature.

# InventoryReplenishmentSettings

Represents the setting for enabling Inventory Replenishment feature.

## Parent Type and Manifest Access

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See Settings for more details.

## File Suffix and Directory Location

InventoryReplenishmentSettings values are stored in the InventoryReplenishment.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

InventoryReplenishmentSettings components are available in API version 63.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableInventoryReplenishment | Field TypebooleanDescriptionIndicates whether the Inventory Replenishment feature of Manufacturing cloud is enabled (true) or disabled (false) for your org. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of an InventoryReplenishmentSettings component.

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
<InventoryReplenishmentSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableInventoryReplenishment>true</enableInventoryReplenishment>
</InventoryReplenishmentSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>InventoryReplenishment</members>
        <name>Settings</name>
    </types>
    <version>63.0</version>
</Package>
```
