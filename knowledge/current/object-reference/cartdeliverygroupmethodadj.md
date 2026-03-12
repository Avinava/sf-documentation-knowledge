---
title: "CartDeliveryGroupMethodAdj"
domain: object-reference
topic: cartdeliverygroupmethodadj
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.153Z
estimatedTokens: 653
keywords: [CartDeliveryGroupMethodAdj, shipping, promotion, discount, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# CartDeliveryGroupMethodAdj

> Represents the shipping promotion discount for a shipping method. This
      object is available in API version 60.0 and later.

# CartDeliveryGroupMethodAdj

Represents the shipping promotion discount for a shipping method. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The CartDeliveryGroupMethodAdj object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AdjustmentAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionAmount subtracted from the price by the shipping promotion discount. |
| AdjustmentBasisReferenceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the adjustment basis reference. This is the coupon that causes the adjustment. This field is a relationship field.This field is available in API version 62.0 and later.Relationship NameAdjustmentBasisReferenceRefers ToCoupon |
| AdjustmentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionType of shipping promotion discount.Possible values are:AdjustmentAmountAdjustmentPercentageOverrideAmount |
| AdjustmentValue | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionNumber representing the value of the price adjustment. For example, if the AdjustmentType is AdjustmentPercentage, a -10 AdjustmentValue means 10 percent off. If the AdjustmentType is AdjustmentAmount, a -10 AdjustmentValue means 10 dollars off. |
| CartDeliveryGroupMethodId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the cart delivery group method.This field is a relationship field.Relationship NameCartDeliveryGroupMethodRelationship TypeLookupRefers ToCartDeliveryGroupMethod |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCurrency ISO code of the cart.Possible values are:USD—U.S. DollarThe default value is USD. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the cart delivery group method adjustment. |
| PriceAdjustmentCauseId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the price adjustment cause.This field is a relationship field.Relationship NamePriceAdjustmentCauseRelationship TypeLookupRefers ToPromotion |
| Priority | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf there are multiple promotional adjustments, the order in which the shipping promotion is applied. |
