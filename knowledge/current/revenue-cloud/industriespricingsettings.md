---
title: "IndustriesPricingSettings"
domain: revenue-cloud
topic: industriespricingsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.770Z
estimatedTokens: 930
keywords: [IndustriesPricingSettings, Represents, settings, Salesforce, Pricing., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules, Fields, Declarative, Metadata, Sample, Definition]
---

# IndustriesPricingSettings

> Represents the settings for Salesforce
		Pricing.

# IndustriesPricingSettings

Represents the settings for Salesforce Pricing.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)") for more details.

## File Suffix and Directory Location

IndustriesPricingSettings values are stored in the IndustriesPricingSettings.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

IndustriesPricingSettings components are available in API version 60.0 and later.

## Special Access Rules

This metadata type is available with Salesforce Pricing.

## Fields

| Field Name | Description |
| --- | --- |
| enableDebugPriceLogs | Field TypebooleanDescriptionIndicates whether to use price logs to diagnose and resolve pricing issues (true) or not (false). The default value is false. Available in API version 63.0 and later. |
| enableHighAvailability | Field TypebooleanDescriptionReserved for internal use. |
| enableHighestPriceCompliance | Field TypebooleanDescriptionIndicates whether to track the maximum price of a product over a period of 30 days (true) or not (false). The default value is false. Available in API version 64.0 and later. |
| enableLowestPriceCompliance | Field TypebooleanDescriptionIndicates whether to track the minimum price of a product over a period of 30 days (true) or not (false). The default value is false. Available in API version 62.0 and later. |
| enablePricingProcParallelization | Field TypebooleanDescriptionIndicates whether to run pricing elements in parallel within a pricing procedure to optimize the performance of the pricing execution process (true) or not (false). The default value is false. Available in API version 64.0 and later. |
| enablePricingWaterfall | Field TypebooleanDescriptionIndicates whether to enable Price Waterfall (true) or not (false). The default value is false. Price Waterfall provides insights that include price breakups and reasons for every step of the pricing process. |
| enablePricingWaterfallPersistence | Field TypebooleanDescriptionIndicates whether to enable Price Waterfall Persistence (true) or not (false). The default value is false. Price Waterfall Persistence stores the process logs that provide insights into the internal pricing processes. |
| enableSalesforcePricing | Field TypebooleanDescriptionIndicates whether to enable Salesforce Pricing (true) or not (false). The default value is false. |

## Declarative Metadata Sample Definition

This example shows a sample IndustriesPricingSettings component.

```

```

This example shows a sample package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)"). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<IndustriesPricingSettings xmlns="http://soap.sforce.com/2006/04/metadata">
     <enableDebugPriceLogs>true</enableDebugPriceLogs>
     <enableHighAvailability>true</enableHighAvailability>
     <enableHighestPriceCompliance>true</enableHighestPriceCompliance>
     <enableLowestPriceCompliance>true</enableLowestPriceCompliance>
     <enablePricingProcParallelization>true</enablePricingProcParallelization>
     <enablePricingWaterfall>true</enablePricingWaterfall>
     <enablePricingWaterfallPersistence>true</enablePricingWaterfallPersistence>
     <enableSalesforcePricing>true</enableSalesforcePricing>
</IndustriesPricingSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>IndustriesPricing</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```
