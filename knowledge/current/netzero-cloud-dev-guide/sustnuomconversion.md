---
title: "SustnUomConversion"
domain: netzero-cloud-dev-guide
topic: sustnuomconversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.454Z
estimatedTokens: 625
keywords: [SustnUomConversion, unit, measure, UOM, conversion, custom, fuel, defined, customer, org, Parent, File, Suffix, Directory, Location, additional, API, version, 57.0, later]
---

# SustnUomConversion

> Represents information about the unit of measure conversion for the
         additional fuel types defined by a customer. This object is available in API version
      57.0 and later.

# SustnUomConversion

Represents information about the unit of measure conversion for the additional fuel types defined by a customer. This object is available in API version 57.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| ConversionFactor | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionThe conversion factor that's used to convert values from one unit of measure to another for the fuel type. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for the SustnUomConversion object.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| FuelType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe name of the fuel type.Possible values are:AutogasLPG—Autogas/LPGBiodieselBiomassCityGas—City GasCompressedNaturalGasCNG—Compressed Natural Gas (CNG)CoolingDieselElectricityEthanolFuelOil—Fuel OilGasolineHeatHeavyOil—Heavy OilITElectricity—IT ElectricityJetFuel—Jet FuelKeroseneLightOil—Light OilLiquidNaturalGasLNG—Liquefied Natural Gas (LNG)MobileDiesel—Mobile DieselNaturalGas—Natural GasPropaneRefrigerantSteam |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the SustnUomConversion.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLabel for the SustnUomConversion. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| SourceUom | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe source unit of measure for the fuel type.Possible values are:1000m3—1000 m3GJGWhKilolitersLitersMJMMBtuMWhThermsTonnesUkGallons—UK GallonsUsGallons—US GallonsccfkG—kgkWhkcallbslongTons—long tonsm3shortTons—short tons |
| TargetUom | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe target unit of measure for the fuel type.Possible values are:1000m3—1000 m3GJGWhKilolitersLitersMJMMBtuMWhThermsTonnesUkGallons—UK GallonsUsGallons—US GallonsccfkG—kgkWhkcallbslongTons—long tonsm3shortTons—short tons |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SustnUomConversion xmlns="http://soap.sforce.com/2006/04/metadata">
    <conversionFactor>0.9</conversionFactor>
    <fuelType>Diesel</fuelType>
    <isProtected>false</isProtected>
    <masterLabel>KG_Liters</masterLabel>
    <sourceUom>KG</sourceUom>
    <targetUom>Liters</targetUom>
    <uomsKey>uomsKey</uomsKey>
</SustnUomConversion>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>Pkg</fullName>
    <types>
        <members>US_UK_Gallons</members>
        <members>Therms_kWh</members>
        <members>KG_Liters</members>
        <name>SustnUomConversion</name>
    </types>
    <version>57.0</version>
</Package>
```
