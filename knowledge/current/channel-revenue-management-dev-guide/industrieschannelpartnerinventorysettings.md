---
title: "IndustriesChannelPartnerInventorySettings"
domain: channel-revenue-management-dev-guide
topic: industrieschannelpartnerinventorysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.870Z
estimatedTokens: 441
keywords: [setting, enabling, Channel, Revenue, Management, feature, Partner, Inventory, Tracking, Parent, Manifest, Access, File, Suffix, Directory]
---

# IndustriesChannelPartnerInventorySettings

> Represents the setting for enabling
			Channel Revenue Management feature like Channel Partner Inventory Tracking.

# IndustriesChannelPartnerInventorySettings

Represents the setting for enabling Channel Revenue Management feature like Channel Partner Inventory Tracking.

## Parent Type and Manifest Access

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See Settings for more details.

## File Suffix and Directory Location

IndustriesChannelPartnerInventorySettings values are stored in the IndustriesChannelPartnerInventorySettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

IndustriesChannelPartnerInventorySettings components are available in API version 63.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableChannelPartnerInventoryTracking | Field TypebooleanDescriptionIndicates whether the Channel Partner Inventory Tracking feature of Channel Revenue Management is enabled (true) or disabled (false) for your org. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of an IndustriesChannelPartnerInventorySettings component.

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
<IndustriesChannelPartnerInventorySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableChannelPartnerInventoryTracking>true</enableChannelPartnerInventoryTracking>
</IndustriesChannelPartnerInventorySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>IndustriesChannelPartnerInventorySettings</members>
        <name>Settings</name>
    </types>
    <version>63.0</version>
</Package>
```
