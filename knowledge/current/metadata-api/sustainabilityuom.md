---
title: "SustainabilityUom"
domain: metadata-api
topic: sustainabilityuom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.381Z
estimatedTokens: 696
keywords: [SustainabilityUom, unit, measure, UOM, custom, fuel, org, Track, consumption, emission, results, flexibility, add, Parent, File]
---

# SustainabilityUom

> Represents the unit of measure (UOM) values for custom fuel
			types in an org. Track fuel consumption and emission results with the flexibility to add
			custom fuel types and UOM values.

# SustainabilityUom

Represents the unit of measure (UOM) values for custom fuel types in an org. Track fuel consumption and emission results with the flexibility to add custom fuel types and UOM values.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

SustainabilityUom components have the suffix .sustainabilityUom and are stored in the sustainabilityUoms folder.

## Version

SustainabilityUom components are available in API version 56.0 and later.

## Special Access Rules

The Net Zero Cloud permission set license is required to access this object along with the user access for carbon accounting and org access for custom fuels and UOMs.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description of the unit of measure. |
| isProductUom | Field TypebooleanDescriptionIndicates whether the unit of measure is for a product that the company has procured in its supply chain operations (true) or not (false).The default value is false. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type.The default value is false. |
| isStationaryAssetUom | Field TypebooleanDescriptionIndicates whether the unit of measure is used in the stationary asset calculations (true) or (false).The default value is false. |
| isVehicleAssetUom | Field TypebooleanDescriptionIndicates whether the unit of measure is used in the vehicle asset calculations (true) or (false).The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.The label assigned to this object. |
| unitType | Field TypeUnitType (enumeration of type string)DescriptionRequired.The type of unit used for conversions or calculations.Values are:EnergyOtherVolumeWeight |

## Declarative Metadata Sample Definition

The following is an example of a SustainabilityUom component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SustainabilityUom xmlns="http://soap.sforce.com/2006/04/metadata">
   <description>Weight in Grams</description>
   <isProductUom>true</isProductUom>
   <isProtected>false</isProtected>
   <isStationaryAssetUom>false</isStationaryAssetUom>
   <isVehicleAssetUom>false</isVehicleAssetUom>
   <masterLabel>Grams</masterLabel>
   <unitType>Weight</unitType>
</SustainabilityUom>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <fullName>Pkg</fullName>
   <types>
    <members>Grams</members>
    <name>SustainabilityUom</name>
   </types>
   <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
