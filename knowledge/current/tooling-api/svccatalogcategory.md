---
title: "SvcCatalogCategory"
domain: tooling-api
topic: svccatalogcategory
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.899Z
estimatedTokens: 721
keywords: [SvcCatalogCategory, Represents, grouping, individual, catalog, items, Service, Catalog., API, version, 53.0, later., Supported, SOAP, Calls, REST, Special, Access, Rules, Fields]
---

# SvcCatalogCategory

> Represents the grouping of individual catalog items in Service Catalog.
      This object is available in API version 53.0 and later.

# SvcCatalogCategory

Represents the grouping of individual catalog items in Service Catalog. This object is available in API version 53.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available to customers with Employee Productivity Plus or IT Service Center add-ons.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name for this category. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the category. This name has the following requirements:It must be unique across the org.It must contain only alphanumeric characters and underscores.It must begin with a letter.It must not include spaces.It must not end with an underscore.It must not contain two consecutive underscores.Query this field only if the query result contains up to one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if a catalog category is active.The default value is 'false'. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the manageable state of a category that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe primary label for the catalog category record. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe category’s metadata. Query this field only if the query result contains up to one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace associated with this category. |
| ParentCategoryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf provided, the name of another SvcCatalogCategory that this category appears under. The parent category in this field can’t have its own parent category. Categories can’t have more than one level of nesting.This is a relationship field.Relationship NameParentCategoryRelationship TypeLookupRefers ToSvcCatalogCategory |
| SortOrder | TypeintPropertiesFilter, Group, Nillable, SortDescriptionDisplays a set order for catalog category entities. |
