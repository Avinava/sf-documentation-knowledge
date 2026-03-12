---
title: "ShippingConfigSetProduct"
domain: object-reference
topic: shippingconfigsetproduct
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.152Z
estimatedTokens: 294
keywords: [ShippingConfigSetProduct, product, associated, shipping, configuration, API, version, 64.0, later, Calls, Special, Access, Rules]
---

# ShippingConfigSetProduct

> Represents a product associated with a
         shipping configuration. This object is available in API version 64.0
      and
      later.

# ShippingConfigSetProduct

Represents a product associated with a shipping configuration. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The ShippingConfigSetProduct object is available only if you've a B2B Commerce or D2C Commerce license and the MultipleShippingProfile org perm is enabled.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the shipping configuration set product record. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the Product2 record that is associated with shipping configuration set record.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| ShippingProfileId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the shipping profile.This field is a relationship field.Relationship NameShippingProfileRelationship TypeMaster-detailRefers ToShippingConfigurationSet (the master object) |
