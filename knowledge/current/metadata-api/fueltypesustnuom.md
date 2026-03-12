---
title: "FuelTypeSustnUom"
domain: metadata-api
topic: fueltypesustnuom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.168Z
estimatedTokens: 589
keywords: [FuelTypeSustnUom, Represents, mapping, between, custom, fuel, types, their, corresponding, unit, measure, UOM, values, defined, customer, org., Parent, File, Suffix, Directory]
---

# FuelTypeSustnUom

> Represents a mapping between the custom fuel types and their
			corresponding unit of measure (UOM) values defined by a customer in an
		org.

# FuelTypeSustnUom

Represents a mapping between the custom fuel types and their corresponding unit of measure (UOM) values defined by a customer in an org.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

FuelTypeSustnUom components have the suffix .fuelTypeSustnUom and are stored in the fuelTypeSustnUoms folder.

## Version

FuelTypeSustnUom components are available in API version 57.0 and later.

## Special Access Rules

The Net Zero Cloud permission set license is required to access this object along with the user access for carbon accounting and org access for custom fuels and UOMs.

## Fields

| Field Name | Description |
| --- | --- |
| fuelType | Field TypestringDescriptionRequired.The name of the fuel type that’s mapped to the unit of measure.Possible values are:AutogasLPGBiodieselBiomassCityGasCompressedNaturalGasCNGCoolingDieselElectricityEthanolFuelOilGasolineHeatHeavyOilITElectricityJetFuelKeroseneLightOilLiquidNaturalGasLNGMobileDieselNaturalGasPropaneRefrigerantSteam |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type.The default value is false. |
| masterLabel | Field TypestringDescriptionA user-friendly name for FuelTypeSustnUom, which is defined when the FuelTypeSustnUom is created. |
| unitOfMeasure | Field TypestringDescriptionRequired.The unit of measure that’s mapped to the fuel type.Possible values are:1000m3GJGWhKilolitersLitersMJMMBtuMWhThermsTonnesUkGallonsUsGallonsccfkGkWhkcallbslongTonsm3shortTons |

## Declarative Metadata Sample Definition

The following is an example of a FuelTypeSustnUom component.

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
<FuelTypeSustnUom xmlns="http://soap.sforce.com/2006/04/metadata">
    <fuelType>FuelOil</fuelType>
    <isProtected>false</isProtected>
    <masterLabel>FuelOil_Liters</masterLabel>
    <unitOfMeasure>Liters</unitOfMeasure>
</FuelTypeSustnUom>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>Pkg</fullName>
    <types>
        <members>FuelOil_Liters</members>
        <members>Gas_1000m3</members>
        <members>Heat_kWh</members>
        <name>FuelTypeSustnUom</name>
    </types>
    <version>57.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
