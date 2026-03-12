---
title: "ProductTransferState"
domain: mfg-api-devguide
topic: producttransferstate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.119Z
estimatedTokens: 379
keywords: [ProductTransferState, action, taken, associate, serialized, product, transfer, new, state, result, record, created, products, attached, API]
---

# ProductTransferState

> Represents an action taken to associate a serialized product with a product
         transfer. The new state is a result of the action. A product transfer state record is
         created when serialized products are attached to the product transfer. This object is
      available in API version 60.0 and later.

# ProductTransferState

Represents an action taken to associate a serialized product with a product transfer. The new state is a result of the action. A product transfer state record is created when serialized products are attached to the product transfer. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Action | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe action that must be performed on the inventory item. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated name of the product transfer state. |
| ProductTransferId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe transfer for which this inventory transaction was requested.This field is a relationship field.Relationship NameProductTransferRelationship TypeLookupRefers ToProductTransfer |
| SerializedProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe serialized product being transferred.This field is a relationship field.Relationship NameSerializedProductRelationship TypeLookupRefers ToSerializedProduct |
| TransferState | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe new status for the inventory item. |
