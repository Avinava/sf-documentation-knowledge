---
title: "ShippingConfigurationSet"
domain: object-reference
topic: shippingconfigurationset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.157Z
estimatedTokens: 414
keywords: [ShippingConfigurationSet, Shipping, configuration, products, store, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# ShippingConfigurationSet

> Shipping configuration for a set of products in a store. This object is
      available in API version 59.0 and later.

# ShippingConfigurationSet

Shipping configuration for a set of products in a store. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The ShippingConfigurationSet object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the shipping configuration is the default (True) or not (False).The default value is False. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the shipping configuration set. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the shipping configuration owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProcessTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe amount of time to process an order before it is ready to ship.The default value is 1 Day. |
| ProcessTimeUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUnit of time to process an order.Possible values are:DaysHoursWeeks |
| TargetRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the target record.This field is a relationship field.Relationship NameTargetRecordRelationship TypeLookupRefers ToWebStore |
