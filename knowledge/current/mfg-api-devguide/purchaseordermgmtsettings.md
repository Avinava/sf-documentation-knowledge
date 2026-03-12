---
title: "PurchaseOrderMgmtSettings"
domain: mfg-api-devguide
topic: purchaseordermgmtsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.284Z
estimatedTokens: 369
keywords: [PurchaseOrderMgmtSettings, settings, enabling, Manufacturing, features, Purchase, Order, Management, Parent, File, Suffix, Directory, Location, Version, Declarative]
---

# PurchaseOrderMgmtSettings

> Represents the settings for enabling Manufacturing
			features like Purchase Order Management.

# PurchaseOrderMgmtSettings

Represents the settings for enabling Manufacturing features like Purchase Order Management.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

PurchaseOrderMgmtSettings components have the suffix PurchaseOrderMgmt.settings and are stored in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

PurchaseOrderMgmtSettings components are available in API version 66.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enablePurchaseOrderMgt | Field TypebooleanDescriptionIndicates whether the Purchase Order Management feature of Manufacturing Cloud is enabled (true) or turn off (false) for your org. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a PurchaseOrderMgmtSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about by using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PurchaseOrderMgmtSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enablePurchaseOrderMgt>true</enablePurchaseOrderMgt>
</PurchaseOrderMgmtSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>PurchaseOrderMgmt</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```
