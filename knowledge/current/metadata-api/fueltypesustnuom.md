---
title: "FuelTypeSustnUom"
domain: metadata-api
topic: fueltypesustnuom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.839Z
keywords: [FuelTypeSustnUom, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# FuelTypeSustnUom

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