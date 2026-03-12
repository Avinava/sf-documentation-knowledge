---
title: "SerializedProduct"
domain: mfg-api-devguide
topic: serializedproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.261Z
estimatedTokens: 612
keywords: [SerializedProduct, Records, serial, numbers, product, inventory, API, version, 60.0, later, Calls]
---

# SerializedProduct

> Records serial numbers for each product in an inventory. This object is
      available in API version 60.0 and later.

# SerializedProduct

Records serial numbers for each product in an inventory. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset that’s associated with the serialized product.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the product expires. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the serialized product record. This is auto-generated. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the serialized product.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product that is serialized.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product item associated with the serialized product.This field is a relationship field.Relationship NameProductItemRelationship TypeLookupRefers ToProductItem |
| SerialNumber | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe serial number of the product. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the product.Possible values are:AvailableConsumedDamagedLostSentThe default value is Available. |
