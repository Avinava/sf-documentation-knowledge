---
title: "WebStoreCatalog"
domain: object-reference
topic: webstorecatalog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:19.448Z
estimatedTokens: 475
keywords: [WebStoreCatalog, collection, products, associated, store, API, version, 49.0, later, Calls, Special, Access, Rules, Objects]
---

# WebStoreCatalog

> Represents the collection of products associated with a store.
      This object is available in API version 49.0 and later.

# WebStoreCatalog

Represents the collection of products associated with a store. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

You must have the B2B Commerce license and a CMS workspace to access product media.

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:GBP— British PoundUSD— U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the catalog. |
| ProductCatalogId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the catalog, containing products. |
| SalesStoreId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the store that the catalog is associated with. This field is unique within your org. |

## Associated Objects

[WebStoreCatalogHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- WebStoreCatalogHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
