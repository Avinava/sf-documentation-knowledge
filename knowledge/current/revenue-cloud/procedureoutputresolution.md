---
title: "ProcedureOutputResolution"
domain: revenue-cloud
topic: procedureoutputresolution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.251Z
estimatedTokens: 501
keywords: [ProcedureOutputResolution, pricing, resolution, element, determined, strategy, formula, Parent, File, Suffix, Directory, Location, Version, Special, Access, API, version, 63.0, later, Calls]
---

# ProcedureOutputResolution

> Represents the pricing resolution for an pricing element determined using
         strategy name and formula. This object is available in API version 63.0 and later.

# ProcedureOutputResolution

Represents the pricing resolution for an pricing element determined using strategy name and formula. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BusinessVertical | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe business vertical associated with the procedure output resolution record.Possible values are:RLM |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the procedure output resolution. |
| Formula | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe formula function used to determine the minimum or maximum price of a product. The supported operations are MIN and MAX. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the procedure output resolution is active (true) or not (false). Only active procedure output resolutions can be applied to a procedure.The default value is false. |
| IsInternal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates if the procedure output resolution record is created internally by the Salesforce platform (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe languages in which pricing recipe is supported.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionA user-friendly name for procedure output resolution, which is defined when the procedure output resolution record is created. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There’s an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There’s no namespace prefix for all other objects. |
| PricingElement | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the pricing element on which the procedure output resolution is defined.Possible values are:ListPrice—List PriceMinimumPrice—Price TrackingPriceAdjustmentMatrix—Price Adjustment Matrix |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ProcedureOutputResolution xmlns="http://soap.sforce.com/2006/04/metadata">
    <developerName>ProcedureOutputResolution</developerName>
    <isActive>false</isActive>
    <isInternal>false</isInternal>
    <masterLabel>Procedure Output Resolution</masterLabel>
    <pricingElement>ListPrice</pricingElement>
    <formula>MAX(ListPrice)</formula>
</ProcedureOutputResolution>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ProcedureOutputResolution</name>
    </types>
    <version>66.0</version>
</Package>
```
