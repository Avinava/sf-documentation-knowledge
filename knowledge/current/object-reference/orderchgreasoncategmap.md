---
title: "OrderChgReasonCategMap"
domain: object-reference
topic: orderchgreasoncategmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.733Z
estimatedTokens: 523
keywords: [OrderChgReasonCategMap, mapping, order, change, reason, service, flow, category, API, version, 65.0, later, Calls]
---

# OrderChgReasonCategMap

> The mapping between an order change reason and a service flow category. This
  object is available in API version 65.0 and later.

# OrderChgReasonCategMap

The mapping between an order change reason and a service flow category. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe service flow that reasons are being categorized by.Possible values are:CancelCancelAllCancelFeeDiscountExchangeRMAReturnReturnFee |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency code of the order.Possible values are:EUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the mapping. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the category mapping is active.The default value is false. |
| IsAvailableForExternalUser | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the mapping can be accessed and used by external users.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the mapping. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the mapping.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Reason | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe order change reason that’s being categorized.Possible values are:DamagedDoorLockedIncorrectPriceRejectedWrongItemThe default value is Damaged. |
