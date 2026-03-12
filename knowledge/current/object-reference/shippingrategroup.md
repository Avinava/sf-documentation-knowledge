---
title: "ShippingRateGroup"
domain: object-reference
topic: shippingrategroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.166Z
estimatedTokens: 201
keywords: [ShippingRateGroup, shipping, rates, destination, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# ShippingRateGroup

> Available shipping rates based on shipping destination. This object is
      available in API version 59.0 and later.

# ShippingRateGroup

Available shipping rates based on shipping destination. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The ShippingRateGroup object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the shipping rate group. |
| ShippingProfileId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the shipping profile.This field is a relationship field.Relationship NameShippingProfileRelationship TypeLookupRefers ToShippingConfigurationSet |
