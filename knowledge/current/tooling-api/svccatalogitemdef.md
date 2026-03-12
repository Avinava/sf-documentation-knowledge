---
title: "SvcCatalogItemDef"
domain: tooling-api
topic: svccatalogitemdef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.931Z
estimatedTokens: 1013
keywords: [SvcCatalogItemDef, Represents, grouping, individual, catalog, items, Service, Catalog., API, version, 53.0, later., Important, Supported, SOAP, Calls, REST, Special, Access, Rules]
---

# SvcCatalogItemDef

> Represents the grouping of individual catalog items in Service Catalog.
      This object is available in API version 53.0 and later.

# SvcCatalogItemDef

Represents the grouping of individual catalog items in Service Catalog. This object is available in API version 53.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Available to customers with Employee Productivity Plus or IT Service Center add-ons.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesNillableDescriptionFree-text description of the catalog item. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDeveloper name for this catalog item. |
| FlowId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe screen flow associated with the catalog item.This is a relationship field.Relationship NameFlowRelationship TypeLookupRefers ToFlowDefinition |
| FulfillmentFlowId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field is a relationship field.Relationship NameFulfillmentFlowRelationship TypeLookupRefers ToSvcCatalogFulfillmentFlow |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the catalog item. This name has the following requirements:It must be unique across the org.It must contain only alphanumeric characters and underscores.It must begin with a letter.It must not include spaces.It must not end with an underscore.It must not contain two consecutive underscores.Query this field only if the query result contains up to one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| InternalNotes | TypetextareaPropertiesNillableDescriptionDescribes what the catalog item does and its implementation. This value is meant for other catalog builders. |
| IsFeatured | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDetermines if the catalog item is part of the featured catalog items.The default value is 'false'. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted Picklist, SortDescriptionPossible values are:da - Danishde - Germanen_US - Englishes - Spanishes_MX - Spanish (Mexico)fi - Finnishfr - Frenchit - Italianja - Japaneseko - Koreannl_NL - Dutchno - Norwegianpt_BR - Portuguese (Brazil)ru - Russiansv - Swedishth - Thaizh_CN - Chinese (Simplified)zh_TW - Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the manageable state of a catalog item that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe primary label for the catalog item record. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe catalog item’s metadata. Query this field only if the query result contains up to one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace associated with this catalog item. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionDisplays the publishing status of a catalog item.Possible values are:DeprecatedDraftPendingChangesPublishedThe default value is 'Draft'. |
