---
title: "LoyaltyTierPromotion"
domain: loyalty
topic: loyaltytierpromotion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:53.353Z
estimatedTokens: 318
keywords: [LoyaltyTierPromotion, junction, member, tier, loyalty, promotion, API, version, 63.0, later, Calls]
---

# LoyaltyTierPromotion

> Represents a junction between a member tier and a loyalty promotion.
      This object is available in API version 63.0 and later.

# LoyaltyTierPromotion

Represents a junction between a member tier and a loyalty promotion. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| LoyaltyTierId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the loyalty tier associated with the promotion.This field is a relationship field.Relationship NameLoyaltyTierRelationship TypeMaster-detailRefers ToLoyaltyTier (the master object) |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the tier promotion. |
| PromotionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the loyalty promotion associated with the tier.This field is a relationship field.Relationship NamePromotionRefers ToPromotion |
