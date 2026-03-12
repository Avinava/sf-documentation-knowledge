---
title: "SvcCatalogCategoryItem"
domain: object-reference
topic: svccatalogcategoryitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.623Z
estimatedTokens: 374
keywords: [SvcCatalogCategoryItem, association, Service, Catalog, item, category, items, grouped, categories, API, version, 58.0, later, Calls, Special]
---

# SvcCatalogCategoryItem

> Represents an association between a Service Catalog item and
         category. Service catalog items can be grouped into categories. This object is
      available in API version 58.0 and later.

# SvcCatalogCategoryItem

Represents an association between a Service Catalog item and category. Service catalog items can be grouped into categories. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, get the Service Catalog Access permission set license, Employee Productivity Starter license, or Employee Productivity Plus add-on license.

## Fields

| Field | Details |
| --- | --- |
| IsPrimaryCategory | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the category is the primary category for a catalog item.The default value is false. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the order in which catalog items appear by default when you're viewing all items in a single category. |
| SvcCatalogCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the category for which the service category item belongs.This field is a relationship field.Relationship NameSvcCatalogCategoryRelationship TypeLookupRefers ToSvcCatalogCategory |
| SvcCatalogItemDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the service category item definition.This field is a relationship field.Relationship NameSvcCatalogItemDefRelationship TypeLookupRefers ToSvcCatalogItemDef |
