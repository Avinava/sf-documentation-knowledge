---
title: "RevenueManagementSettings"
domain: revenue-cloud
topic: revenuemanagementsettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:08.875Z
estimatedTokens: 1552
keywords: [RevenueManagementSettings, Represents, configuration, settings, set, Revenue, Cloud., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules, Fields, Declarative, Metadata]
---

# RevenueManagementSettings

> Represents the configuration settings to set up Revenue Cloud.

# RevenueManagementSettings

Represents the configuration settings to set up Revenue Cloud.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the "Settings" name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)") for more details.

## File Suffix and Directory Location

RevenueManagementSettings values are stored in the revenuemanagement.settings file in the settings folder. The .settings files are different from other named components, because there's only one settings file for each settings component.

## Version

RevenueManagementSettings is available in API version 60.0 and later.

## Special Access Rules

This metadata settings type is available with Revenue Cloud.

## Fields

| Field Name | Description |
| --- | --- |
| enableAdvCreateOrdersFromQuote | Field TypebooleanDescriptionIndicates whether to enable users to choose a method for generating multiple orders from a single quote (true) or not (false). This setting updates the functionality of the Create Order capability on quotes. Available in API version 65.0 and later. |
| enableAdvancedDetailLinePricing | Field TypebooleanDescriptionIndicates whether to enable advanced pricing for quote and order detail line items (true) or not (false). The default value is false. Available in API version 65.0 and later. |
| enableAsIsRenewals | Field TypebooleanDescriptionIndicates whether users can enable as-is renewals capability for existing assets (true) or not (false). The default value is false. Available in API version 64.0 and later. |
| enableAutoAddDerivedAsset | Field TypebooleanDescriptionIndicates whether to automatically add assets with derived pricing to a quote or an order when contributing products are added to it (true) or not (false). Available in API version 62.0 and later. |
| enableCoreCPQ | Field TypebooleanDescriptionIndicates whether to enable read and write access to Revenue Cloud features and objects (true) or not (false). See Enable Revenue Cloud Features in Your Scratch Org. |
| enableDeltaPricing | Field TypebooleanDescriptionIndicates whether to reprice faster by processing only the changes (delta) made to quotes and orders (true) or not (false). The default value is false. Available in API version 63.0 and later. |
| enableGroupRamp | Field TypebooleanDescriptionReserved for internal use. |
| enableGroupRampPref | Field TypebooleanDescriptionIndicates whether to create ramp deals for multiple products by creating group ramp segments (true) or not (false). The default value is false. Configure group ramp segments with specific start dates and end dates, and different product quantities and prices. Available in API version 65.0 and later.Before you enable this setting, ensure the groupsEnabled and enableTransactionCloning fields are set to true. |
| enableRampDeal | Field TypebooleanDescriptionIndicates whether to create ramp deals for individual line items by creating segments with specific start dates, end dates, quantities, and prices (true) or not (false). Available in API version 62.0 and later. |
| enableRevUnifiedSetup | Field TypebooleanDescriptionIndicates whether to enable the usage of a procedure plan for price calculation (true) or not (false). |
| enableTransactionCloning | Field TypebooleanDescriptionIndicates whether to clone quotes or orders with their line items and groups, or clone the individual line items and groups of line items. Available in API version 64.0 and later. |
| enableTransactionProcessor | Field TypebooleanDescriptionIndicates whether to enable transaction types for quotes and orders (true) or not (false). Transaction types optimize the way transactions are processed, depending on their size, complexity, and the business needs of the org. You can’t turn off transaction processing after it’s turned on. Available in API version 63.0 and later.To set a default transaction type, create transaction types, and select the default. After you select a default transaction type, you can’t be without a default. |
| groupsEnabled | Field TypebooleanDescriptionIndicates whether users can group line items in quotes and orders (true) or not (false). Available in API version 62.0 and later. |
| hidePriceRefreshNtfcn | Field TypebooleanDescriptionIndicates whether to hide the notification that appears when quote or order prices aren’t updated (true) or not (false). Hiding this notification may affect saving quotes and creating orders because you could be using outdated prices. The default value is false. Available in API version 65.0 and later. |
| relaxUniqueCipValidation | Field TypebooleanDescriptionIndicates whether to enable fully customizable extensions to contract item prices by ignoring record validations (true) or not (false). Available in API version 64.0 and later. |
| skipOrgSttPricing | Field TypebooleanDescriptionIndicates whether to skip the default pricing procedure and any pricing procedure set for a sales transaction with quote or order type (true) or not (false). To enable this field, you must enable the enableRevUnifiedSetup field. |

## Declarative Metadata Sample Definition

Here's an example of a RevenueManagementSettings component.

```

```

This example package.xml references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)"). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<RevenueManagementSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCoreCPQ>true</enableCoreCPQ>
    <enableDeltaPricing>true</enableDeltaPricing>
    <enableTransactionProcessor>true</enableTransactionProcessor>
    <enableAutoAddDerivedAsset>true</enableAutoAddDerivedAsset>
    <enableRampDeal>true</enableRampDeal>
    <enableRevUnifiedSetup>true</enableRevUnifiedSetup>
    <groupsEnabled>true</groupsEnabled>
    <enableTransactionCloning>true</enableTransactionCloning>
    <relaxUniqueCipValidation>true</relaxUniqueCipValidation>
    <skipOrgSttPricing>true</skipOrgSttPricing>
    <enableAsIsRenewals>true</enableAsIsRenewals>
    <enableAdvCreateOrdersFromQuote>true</enableAdvCreateOrdersFromQuote>
    <enableAdvancedDetailLinePricing>true</enableAdvancedDetailLinePricing>
    <enableGroupRampPref>true</enableGroupRampPref>
    <hidePriceRefreshNtfcn>true</hidePriceRefreshNtfcn>
</RevenueManagementSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>RevenueManagement</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```
