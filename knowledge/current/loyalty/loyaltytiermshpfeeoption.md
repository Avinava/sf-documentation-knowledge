---
title: "LoyaltyTierMshpFeeOption"
domain: loyalty
topic: loyaltytiermshpfeeoption
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.348Z
estimatedTokens: 604
keywords: [LoyaltyTierMshpFeeOption, options, members, pay, tier, club, memberships, API, version, 63.0, later, Calls]
---

# LoyaltyTierMshpFeeOption

> Represents the options by which members can pay for tier or club
         memberships. This object is available in API version 63.0 and later.

# LoyaltyTierMshpFeeOption

Represents the options by which members can pay for tier or club memberships. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| EffectiveEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the loyalty tier membership. |
| EffectiveStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the loyalty tier membership. |
| FeeType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of payment for the membership fee. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the membership is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyProgramCurrencyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the non-qualifying loyalty program currency associated with the loyalty tier.This field is a relationship field.Relationship NameLoyaltyProgramCurrencyRefers ToLoyaltyProgramCurrency |
| LoyaltyTierId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the loyalty tier associated with the membership.This field is a relationship field.Relationship NameLoyaltyTierRelationship TypeMaster-detailRefers ToLoyaltyTier (the master object) |
| MembershipDurationType | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe duration of the loyalty tier membership. |
| MembershipFee | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the loyalty tier membership. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the tier membership fee option. |
| Points | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe points used to pay for the membership fee. |
