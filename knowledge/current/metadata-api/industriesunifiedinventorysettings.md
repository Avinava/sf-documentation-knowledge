---
title: "IndustriesUnifiedInventorySettings"
domain: metadata-api
topic: industriesunifiedinventorysettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.589Z
estimatedTokens: 471
keywords: [IndustriesUnifiedInventorySettings, Represents, settings, Industries, Unified, Inventory., Parent, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition]
---

# IndustriesUnifiedInventorySettings

> Represents the settings for Industries Unified
			Inventory.

# IndustriesUnifiedInventorySettings

Represents the settings for Industries Unified Inventory.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

IndustriesUnifiedInventorySettings components have the suffix IndustriesUnifiedInventory.settings and are stored in the settings folder.

## Version

IndustriesUnifiedInventorySettings components are available in API version 64.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableBatchManagement | Field TypeBooleanDescriptionIndicates whether the batch-based inventory management features are enabled (true) or not (false). Within Life Sciences Cloud, this is a core component of the Unified Inventory Extension Entities, supporting Sample Inventory use cases. When enabled, it provides access to the entities ProductionBatch, ProductBatchItem, and InventoryCntProdtBatchItem. |
| enableInventoryCount | Field TypeBooleanDescriptionIndicates whether the Inventory Count is enabled (true) or not (false). The Inventory Count provides the ability to manage inventory count processes by planning inventory counts, counting inventory at designated locations, and tracking count results. |
| enableProductInventoryOperations | Field TypeBooleanDescriptionIndicates whether the Product Inventory Operations that provides the capabilities to perform various actions related to managing product inventory is enabled (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of an IndustriesUnifiedInventorySettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesUnifiedInventorySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableBatchManagement>true</enableBatchManagement>
    <enableInventoryCount>true</enableInventoryCount>
    <enableProductInventoryOperations>true</enableProductInventoryOperations>
</IndustriesUnifiedInventorySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>IndustriesUnifiedInventory</members>
        <name>Settings</name>
    </types>
    <version>64.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
