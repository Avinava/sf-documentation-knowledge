---
title: "ProductDiscoverySettings"
domain: revenue-cloud
topic: productdiscoverysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.845Z
estimatedTokens: 834
keywords: [ProductDiscoverySettings, Represents, settings, Product, Discovery., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# ProductDiscoverySettings

> Represents the settings for Product
		Discovery.

# ProductDiscoverySettings

Represents the settings for Product Discovery.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)") for more details.

## File Suffix and Directory Location

ProductDiscoverySettings values are stored in the ProductDiscoverySettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

ProductDiscoverySettings components are available in API version 62.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableGuidedSelling | Field TypebooleanDescriptionIndicates whether guided product selection is enabled (true) or not (false). Using guided product selection, you can manage dynamic forms that assess user requirements and show relevant products. The default value is false. Available in API version 63.0 and later. |
| discoverProductsFlowNameOrgValue | Field TypestringDescriptionName of the custom flow for browsing and adding products. If this field isn’t specified, the Discover Products flow is used for browsing and adding products. Available in API version 63.0 and later. |
| prodDiscBrowseContextDefOrgValue | Field TypestringDescriptionContext definition that gets updated based on the user-selected options and provides summary data. |
| prodDiscDefaultCatalogOrgValue | Field TypestringDescriptionDefault catalog that determines the products to be displayed on the product list page. Available in API version 64.0 and later. |
| prodDiscPricingEnabledOrgValue | Field TypestringDescriptionIndicates whether pricing is enabled (true) or not (false). The default value is false. |
| prodDiscProcedureOrgValue | Field TypestringDescriptionPricing procedure that calculates the list price. |
| prodDiscQualEnabledOrgValue | Field TypestringDescriptionIndicates whether product qualification is enabled (true) or not (false). The default value is false. |
| prodDiscQualificationOrgValue | Field TypestringDescriptionQualification procedure that determines product eligibility. |

## Declarative Metadata Sample Definition

The following is an example of a ProductDiscoverySettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm "HTML (New Window)"). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<ProductDiscoverySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableGuidedSelling>true</enableGuidedSelling>
    <discoverProductsFlowNameOrgValue>revenue_products__DiscoverProducts</discoverProductsFlowNameOrgValue>
    <prodDiscPricingEnabledOrgValue>true</prodDiscPricingEnabledOrgValue>
    <prodDiscQualEnabledOrgValue>true</prodDiscQualEnabledOrgValue>
    <prodDiscProcedureOrgValue>PricingProcedure</prodDiscProcedureOrgValue>
    <prodDiscQualificationOrgValue>QualificationProcedure</prodDiscQualificationOrgValue>
    <prodDiscBrowseContextDefOrgValue>BrowseContextDefinition</prodDiscBrowseContextDefOrgValue>
</ProductDiscoverySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>ProductDiscovery</members>
        <name>Settings</name>
    </types>
    <version>66.0</version>
</Package>
```
