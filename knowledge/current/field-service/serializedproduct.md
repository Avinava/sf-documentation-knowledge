---
title: "SerializedProduct"
domain: field-service
topic: serializedproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:53.997Z
estimatedTokens: 513
keywords: [SerializedProduct, Records, serial, numbers, individual, product, inventory, API, version, 50.0, later, Calls, Special, Access, Rules]
---

# SerializedProduct

> Records serial numbers for each individual product in an inventory. This
    object is available in API version 50.0 and later.

# SerializedProduct

Records serial numbers for each individual product in an inventory. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

To use this object, you need the Manage Industries Visit permission and the Industries Visit permission set license. This rule doesn’t apply to using serialized products in Field Service.

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to an asset record. |
| ExpirationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date the product expires. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time this record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date and time this record was viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the serialized product record. This is auto-generated. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionReference to the owner of the record. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe product that is serialized. |
| ProductItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the inventory, a product item record, this serialized product belongs to. |
| SerialNumber | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe serial number of the product. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the product. Possible values include:AvailableConsumedDamagedLostSentThe default value is Available. |
