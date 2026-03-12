---
title: "ProductCatalog"
domain: object-reference
topic: productcatalog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:15.302Z
estimatedTokens: 644
keywords: [ProductCatalog, container, holds, Product, Category, hierarchy, API, version, 55.0, later, Calls, Special, Access, Rules]
---

# ProductCatalog

> The container that holds a Product Category hierarchy. This object is available in API version 55.0 and later.

# ProductCatalog

The container that holds a Product Category hierarchy. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

You must have the Industries, Retail, or B2B Commerce license.

## Fields

| Field | Details |
| --- | --- |
| CatalogCode | TypetextPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA unique ID associated with the catalog. Maximum size is 80 alphanumeric characters. |
| CatalogType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category of an entry in the catalog. These categories can be customized. Examples include: sellable products, services, parts, technical services, or technical resources. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:EUR—EuroUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the category. |
| EffectiveEndDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date after which the catalog is unavailable to end users. |
| EffectiveStartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date on which the catalog is available to end users. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the ProductCatlog record. |
| NumberOfCategories | TypeintPropertiesFilter, Group, Nillable, SortDescriptionNumber of ProductCategory records assigned to this ProductCatalog record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe lifecycle state of the catalog. Possible values include: Draft, Active, Inactive |
