---
title: "PriceProtectionTerm"
domain: channel-revenue-management-dev-guide
topic: priceprotectionterm
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:10.516Z
estimatedTokens: 791
keywords: [PriceProtectionTerm, configuration, record, rules, eligible, conditions, price, protection, API, version, 63.0, later, Calls]
---

# PriceProtectionTerm

> Represents a configuration record that defines the rules, types, and eligible
         conditions for price protection. This object is available in API version 63.0 and
      later.

# PriceProtectionTerm

Represents a configuration record that defines the rules, types, and eligible conditions for price protection. This object is available in API version 63.0 and later.

A PriceProtectionTerm record is referenced during claims processing to calculate supported price and quantity adjustments based on predefined terms.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CalculationReferenceRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRebate type that's applicable for the claim amount calculation. This field is a relationship field.Relationship NameCalculationReferenceRecordRefers ToProgramRebateType |
| IsPayable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the inventory is eligible for payment or refund after a price protection adjustment.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the record was last referenced by the current user. Useful for activity tracking. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and the timestamp when the record was last viewed by the user. Helps in understanding record engagement. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUnique name for the Price Protection Term. This is typically used as a primary identifier for UI display or business logic. |
| NewSalePriceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the type of new sale price applicable after a price protection scenario. This helps classify how the adjusted sale price can be handled. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIdentifier for the user or group who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PriceProtectionType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines the type of price protection applied.Possible values are:PriceProtection—Price ProtectionReversePriceProtection—Reverse Price ProtectionThe default value is PriceProtection. |
| SalePriceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of sale price before price protection is applied. This helps calculate the protection delta during claim processing. |
| SupportedPricePercent | TypepercentPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionIndicates the percentage of the price that is supported for price protection. Helps calculate eligible claim amounts. |
| SupportedQuantityPercent | TypepercentPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionIndicates the percentage of quantity that is eligible for price protection. Used to determine prorated reimbursement. |
