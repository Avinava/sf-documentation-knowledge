---
title: "StandardShippingRate"
domain: object-reference
topic: standardshippingrate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:17.428Z
estimatedTokens: 772
keywords: [StandardShippingRate, Standard, shipping, rate, store, API, version, 59.0, later, Calls, Special, Access, Rules]
---

# StandardShippingRate

> Standard shipping rate for a store. This object is available in API
      version 59.0 and later.

# StandardShippingRate

Standard shipping rate for a store. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The StandardShippingRate object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ConditionFactor | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionConditions that affect the shipping rate.Possible values are:OrderPriceFactor—Condition based on the order price value.OrderWeightFactor—Condition based on delivery weight. This value is available in API version 62.0 and later. |
| ConditionRangeMax | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum value of the shipping rate condition. |
| ConditionRangeMin | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMinimum value of the shipping rate condition. This value can't be negative. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrency ISO code of the cart.Possible values are:EUR—EuroUSD—U.S. DollarThe default value is USD. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the standard shipping rate. |
| Price | TypecurrencyPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionPrice of standard shipping. |
| ShippingCarrierMethodId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the shipping service carrier method. This field is available in API version 61.0 and later.This field is a relationship field.Relationship NameShippingCarrierMethodRelationship TypeLookupRefers ToShippingCarrierMethod |
| ShippingZoneId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the shipping zone.This field is a relationship field.Relationship NameShippingZoneRelationship TypeParent-detailRefers ToShippingRateArea (the master object) |
| TransitTimeMax | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMaximum value of the shipping transit time. This field is available in API version 61.0 and later. |
| TransitTimeMin | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMinimum value of the shipping transit time. This value can't be negative. This field is available in API version 61.0 and later. |
| TransitTimeUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUnit of value for shipping transit time. This field is available in API version 61.0 and later.Possible values are:DaysHoursWeeks |
| WeightUnit | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionUnit of measurement for the weight of the cart items. This field is available in API version 62.0 and later.Possible values are:GramsKilogramsOuncesPounds |
