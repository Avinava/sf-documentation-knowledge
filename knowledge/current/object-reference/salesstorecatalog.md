---
title: "SalesStoreCatalog"
domain: object-reference
topic: salesstorecatalog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:16.486Z
estimatedTokens: 231
keywords: [SalesStoreCatalog, catalog, associated, store, API, version, 49.0, later, Calls, Special, Access, Rules]
---

# SalesStoreCatalog

> Represents the catalog associated with a store. This object is
      available in API version 49.0 and later.

# SalesStoreCatalog

Represents the catalog associated with a store. This object is available in API version 49.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

You must have the B2B Commerce license and a CMS workspace to access a store.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe default value is USD. Possible values are:USD—U.S. Dollar |
| ImplementorType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of implementor. WebStoreCatalog is the only available implementor type for SalesStoreCatalog. |
| ProductCatalogId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID that references the product catalog. |
| SalesStoreId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID that references the store. |
