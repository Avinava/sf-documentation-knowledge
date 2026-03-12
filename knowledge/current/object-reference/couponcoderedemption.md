---
title: "CouponCodeRedemption"
domain: object-reference
topic: couponcoderedemption
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.506Z
estimatedTokens: 364
keywords: [CouponCodeRedemption, Tracks, coupon, code, redemption, API, version, 58.0, later, Calls, Special, Access, Rules]
---

# CouponCodeRedemption

> Tracks each coupon code redemption. This object is available in API
      version 58.0 and later.

# CouponCodeRedemption

Tracks each coupon code redemption. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is available through the B2B Commerce license. To access this object, the Promotions Coupon Redemption Limit user permission must be assigned.

## Fields

| Field | Details |
| --- | --- |
| Buyer | TypestringPropertiesCreate, Filter, Group, SortDescriptionInformation about the buyer. Can be any buyer-specific information. |
| CouponId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the redeemed coupon.This field is a relationship field.Relationship NameCouponRelationship TypeLookupRefers ToCoupon |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSalesforce generated coupon code, such as CCR-000000002. Can’t be edited. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the coupon code redemption.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| Transaction | TypestringPropertiesCreate, Filter, Group, idLookup, SortDescriptionID of the transaction where the coupon code was redeemed. Must be a valid cart ID. |
