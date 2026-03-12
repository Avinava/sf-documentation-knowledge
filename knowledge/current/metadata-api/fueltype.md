---
title: "FuelType"
domain: metadata-api
topic: fueltype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.159Z
estimatedTokens: 547
keywords: [FuelType, Represents, custom, fuel, org., Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard]
---

# FuelType

> Represents a custom fuel type in an org.

# FuelType

Represents a custom fuel type in an org.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

FuelType components have the suffix .fuelType and are stored in the fuelTypes folder.

## Version

FuelType components are available in API version 57.0 and later.

## Special Access Rules

The Net Zero Cloud permission set license is required to access this object along with the user access for carbon accounting and org access for custom fuels and unit of measures (UOMs).

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionDescription about the fuel type. |
| isActive | Field TypebooleanDescriptionIndicates whether the fuel type is active (true) or not (false).The default value is false. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type.The default value is false. |
| isStationaryAssetFuel | Field TypebooleanDescriptionIndicates whether the fuel type is used in stationary assets (true) or not (false).The default value is false. |
| isVehicleAssetFuel | Field TypebooleanDescriptionIndicates whether the fuel type is used in a vehicle asset (true) or not (false).The default value is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for FuelType, which is defined when the FuelType is created. |

## Declarative Metadata Sample Definition

The following is an example of a FuelType component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<FuelType xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>This is Petrol Fuel Type</description>
    <isProtected>true</isProtected>
    <isActive>true</isActive>
    <isStationaryAssetFuel>true</isStationaryAssetFuel>
    <isVehicleAssetFuel>true</isVehicleAssetFuel>
    <masterLabel>Petrol</masterLabel>
</FuelType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
      <members>Petrol</members>
      <members>Diesel</members>
      <members>Kerosine</members>
      <name>FuelType</name>
   </types>
   <version>57.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
