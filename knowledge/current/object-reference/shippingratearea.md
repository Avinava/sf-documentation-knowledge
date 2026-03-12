---
title: "ShippingRateArea"
domain: object-reference
topic: shippingratearea
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.161Z
estimatedTokens: 253
keywords: [ShippingRateArea, designated, geographical, area, that’s, shipping, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# ShippingRateArea

> A designated geographical area that’s available for shipping. This
      object is available in API version 59.0 and later.

# ShippingRateArea

A designated geographical area that’s available for shipping. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The ShippingRateArea object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| Countries | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionCountries in the shipping rate area. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the shipping rate area. |
| Regions | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionReserved for future use. |
| ShippingRateGroupId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the shipping rate groupThis field is a relationship field.Relationship NameShippingRateGroupRelationship TypeLookupRefers ToShippingRateGroup |
