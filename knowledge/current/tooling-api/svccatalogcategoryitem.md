---
title: "SvcCatalogCategoryItem"
domain: tooling-api
topic: svccatalogcategoryitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.904Z
estimatedTokens: 383
keywords: [SvcCatalogCategoryItem, Represents, assignment, service, category, within, Service, Catalog., API, version, 53.0, later., Supported, SOAP, Calls, REST, Special, Access, Rules, Fields]
---

# SvcCatalogCategoryItem

> Represents the assignment of this service to a category within the Service
         Catalog. This object is available in API version 53.0 and later.

# SvcCatalogCategoryItem

Represents the assignment of this service to a category within the Service Catalog. This object is available in API version 53.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available to customers with Employee Productivity Plus or IT Service Center add-ons.

## Fields

| Field | Details |
| --- | --- |
| IsPrimaryCategory | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines if the catalog category (SvcCatalogCategory) is the primary category for this catalog item. EachSvcCatalogItemDef component can only have one category with this attribute set to true.The default value is 'false'. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe position of the catalog item relative to other catalog items in the catalog category. |
| SvcCatalogCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe catalog category that the catalog item is assigned to.This is a relationship field.Relationship NameSvcCatalogCategoryRelationship TypeLookupRefers ToSvcCatalogCategory |
| SvcCatalogItemDefId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the SvcCatalogItemDef.This is a relationship field.Relationship NameSvcCatalogItemDefRelationship TypeLookupRefers ToSvcCatalogItemDef |
