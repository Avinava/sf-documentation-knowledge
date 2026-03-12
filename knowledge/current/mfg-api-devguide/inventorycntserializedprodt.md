---
title: "InventoryCntSerializedProdt"
domain: mfg-api-devguide
topic: inventorycntserializedprodt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.753Z
estimatedTokens: 496
keywords: [InventoryCntSerializedProdt, serialized, product, inventory, count, API, version, 63.0, later, Calls, Special, Access, Rules]
---

# InventoryCntSerializedProdt

> Represents a serialized product in an inventory count. This object is
      available in API version 63.0 and later.

# InventoryCntSerializedProdt

Represents a serialized product in an inventory count. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Inventory Count must be enabled.

## Fields

| Field | Details |
| --- | --- |
| InventoryCountAssessmentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe inventory count assessment that's associated with the inventory count serialized product.This field is a relationship field.Relationship NameInventoryCountAssessmentRelationship TypeMaster-detailRefers ToInventoryCountAssessment (the master object) |
| InventoryCountProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe inventory count product item that's associated with the inventory count serialized product.This field is a relationship field.Relationship NameInventoryCountProductItemRefers ToInventoryCountProductItem |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the inventory count serialized product. |
| SerializedProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe serialized product that is associated with the inventory count serialized product.This field is a relationship field.Relationship NameSerializedProductRefers ToSerializedProduct |
