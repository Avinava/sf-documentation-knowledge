---
title: "SvcCatalogCategory"
domain: object-reference
topic: svccatalogcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.618Z
estimatedTokens: 488
keywords: [SvcCatalogCategory, group, Service, Catalog, items, functional, area, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# SvcCatalogCategory

> Represents a group of Service Catalog items by functional area.
      This object is available in API version 58.0 and later.

# SvcCatalogCategory

Represents a group of Service Catalog items by functional area. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, get the Service Catalog Access permission set license , Employee Productivity Starter license, or Employee Productivity Plus add-on license.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique developer name for the catalog item category. |
| ImageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAllows a builder to pick an image displayed in the catalog.This field is a relationship field.Relationship NameImageRelationship TypeLookupRefers ToContentAsset |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAllows service catalog builders to deprecate categories or create in-draft categories.The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ParentCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionParent category of this category. Allows categories to be grouped up to a max depth of 3.This field is a relationship field.Relationship NameParentCategoryRelationship TypeLookupRefers ToSvcCatalogCategory |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the order that the category is displayed to the end user. |
