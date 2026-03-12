---
title: "MetadataPackage"
domain: object-reference
topic: metadatapackage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.881Z
estimatedTokens: 382
keywords: [MetadataPackage, package, developed, org, you’re, logged, unlocked, unmanaged, first-generation, second-generation, managed, packages, Calls, Usage]
---

# MetadataPackage

> Represents a  package that has been developed in the org you’re logged
			in to. Applies to unlocked, unmanaged, first-generation, and second-generation managed
			packages.

# MetadataPackage

Represents a package that has been developed in the org you’re logged in to. Applies to unlocked, unmanaged, first-generation, and second-generation managed packages.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the package. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFor first-generation and second-generation managed packages, and unlocked packages with namespaces, this field is the namespace prefix assigned to the package. For unmanaged packages, or no-namespace unlocked packages, this field is blank. |
| PackageCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of package. Valid values are:Application (internal use only)Module (internal use only)Package—Represents either an unmanaged package or a first-generation managed package.Package2—Represents either an unlocked package or a second-generation managed package.The default value is Package.This field is available in API version 49.0 and later. |

## Usage

Here are examples of the types of API queries you can perform.

| Query | String |
| --- | --- |
| Show all managed and unmanaged packages in the org | SELECT Name, NamespacePrefix FROM MetadataPackage |
| Show only managed packages in the org | SELECT Name, NamespacePrefix FROM MetadataPackage WHERE NamespacePrefix <> '' |
