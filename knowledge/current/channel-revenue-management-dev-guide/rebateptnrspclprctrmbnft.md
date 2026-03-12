---
title: "RebatePtnrSpclPrcTrmBnft"
domain: channel-revenue-management-dev-guide
topic: rebateptnrspclprctrmbnft
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.729Z
estimatedTokens: 702
keywords: [RebatePtnrSpclPrcTrmBnft, benefit, tier, rebate, partner, special, pricing, term, API, version, 58.0, later, Calls]
---

# RebatePtnrSpclPrcTrmBnft

> Represents information about the benefit tier in a rebate partner
         special pricing term. This object is available in API version 58.0 and
      later.

# RebatePtnrSpclPrcTrmBnft

Represents information about the benefit tier in a rebate partner special pricing term. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe currency ISO code associated with the record. This is available when multiple currencies are enabled.Possible values are:EUR—EuroUSD—U.S. DollarThe default value is EUR. |
| Discount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe discount that's applicable for the rebate partner special pricing term benefit. |
| EffectiveEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date until when the rebate partner special pricing term benefit is effective. |
| EffectiveStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date from when the rebate partner special pricing term benefit is effective. |
| IsDiscountByPercent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the discount is given by percentage (true) or amount (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MaximumQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe maximum quantity of product sold that is eligible for the rebate partner special pricing term benefit. |
| MinimumQuantity | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe minimum quantity of product sold that is eligible for the rebate partner special pricing term benefit. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the rebate partner special pricing term benefit. |
| RebatePartnerSpecialPrcTrmId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe rebate partner special pricing term that's associated with the rebate partner special pricing term benefit.This field is a relationship field.Relationship NameRebatePartnerSpecialPrcTrmRelationship TypeLookupRefers ToRebatePartnerSpecialPrcTrm |
| ReferencePricePerUnit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe reference price per unit that’s applicable for the rebate partner special pricing term benefit. |
