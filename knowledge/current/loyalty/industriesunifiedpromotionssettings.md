---
title: "IndustriesUnifiedPromotionsSettings"
domain: loyalty
topic: industriesunifiedpromotionssettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.885Z
estimatedTokens: 594
keywords: [IndustriesUnifiedPromotionsSettings, settings, Promotions, Management, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# IndustriesUnifiedPromotionsSettings

> Represents the settings to Global
      Promotions Management.

# IndustriesUnifiedPromotionsSettings

Represents the settings to Global Promotions Management.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

IndustriesUnifiedPromotionsSettings values are stored in a single file named IndustriesUnifiedPromotions.settings in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

IndustriesUnifiedPromotionsSettings components are available in API version 60.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableGlobalPromotionsEvaluation | boolean | Indicates whether promotions evaluation is enabled (true) or disabled (false) in your org. The default value is false. When enabled, the system evaluates cart details and returns the adjusted price of the cart and line items after applying eligible promotions. Available in API version 65.0 or later. |
| enableGlobalPromotionsForRevenueCloud | boolean | Indicates whether global promotions is enabled (true) or disabled (false) for Revenue Cloud in your org. The default value is false. Available in API version 66.0 or later. |
| enableGlobalPromotionsProductCatalogManagement | boolean | Indicates whether Product Catalog Management is enabled (true) or disabled (false) in your org. The default value is false. Available in API version 62.0 or later. |
| enableUnifiedPromotions | boolean | Indicates whether Global Promotions Management is enabled (true) or disabled (false) for your org. The default value is true. |

## Declarative Metadata Sample Definition

The following is an example of a IndustriesGamificationSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?><IndustriesUnifiedPromotionsSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableUnifiedPromotions>true</enableUnifiedPromotions>
    <enableGlobalPromotionsProductCatalogManagement>true</enableGlobalPromotionsProductCatalogManagement>
    <enableGlobalPromotionsEvaluation>true</enableGlobalPromotionsEvaluation>
</IndustriesUnifiedPromotionsSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>IndustriesUnifiedPromotions</members>
    <name>Settings</name>
  </types>
  <version>66.0</version>
</Package>
```
