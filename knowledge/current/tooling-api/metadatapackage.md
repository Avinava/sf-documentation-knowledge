---
title: "MetadataPackage"
domain: tooling-api
topic: metadatapackage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.060Z
estimatedTokens: 315
keywords: [MetadataPackage, Represents, package, developed, org, you’re, logged, to., Applies, unlocked, unmanaged, first-generation, second-generation, managed, packages., Tooling, API, version, 38.0, later.]
---

# MetadataPackage

> Represents a  package that has been
            developed in the org you’re logged in to. Applies to unlocked, unmanaged,
            first-generation, and second-generation managed packages. Available in Tooling API
        version 38.0 and later.

# MetadataPackage

Represents a package that has been developed in the org you’re logged in to. Applies to unlocked, unmanaged, first-generation, and second-generation managed packages. Available in Tooling API version 38.0 and later.

## Supported SOAP Calls

query(), retrieve()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the package. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFor first-generation and second-generation managed packages, and unlocked packages with namespaces, this field is the namespace prefix assigned to the package. For unmanaged packages, or no-namespace unlocked packages, this field is blank. |
| PackageCategory | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of package. Valid values are:Application (internal use only)Module (internal use only)Package—Represents either an unmanaged package or a first-generation managed package.Package2—Represents either an unlocked package or a second-generation managed package.The default value is Package.This field is available in API version 49.0 and later. |
