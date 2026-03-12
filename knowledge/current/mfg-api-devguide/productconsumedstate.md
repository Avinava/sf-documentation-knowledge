---
title: "ProductConsumedState"
domain: mfg-api-devguide
topic: productconsumedstate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.915Z
estimatedTokens: 333
keywords: [ProductConsumedState, action, taken, associate, serialized, product, transfer, new, state, result, record, created, products, attached, API]
---

# ProductConsumedState

> Represents an action taken to associate a serialized product with a product
         transfer. The new state is a result of the action. A product transfer state record is
         created when serialized products are attached to the product transfer. This object is
      available in API version 60.0 and later.

# ProductConsumedState

Represents an action taken to associate a serialized product with a product transfer. The new state is a result of the action. A product transfer state record is created when serialized products are attached to the product transfer. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the product consumed state. |
| ConsumedState | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe state of the consumed product. |
| ProductConsumedId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe product consumed that’s associated with the product consumed state.This field is a relationship field.Relationship NameProductConsumedRelationship TypeLookupRefers ToProductConsumed |
| SerializedProductId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe serialized product that’s associated with the product consumed state.This field is a relationship field.Relationship NameSerializedProductRelationship TypeLookupRefers ToSerializedProduct |
