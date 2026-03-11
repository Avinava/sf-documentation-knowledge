---
title: "decreaseRedemption(couponCodeRedemption)"
domain: apex-reference
topic: decreaseredemptioncouponcoderedemption
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.778Z
keywords: [decreaseRedemption, couponCodeRedemption, Get, coupon, code, redemption, usage, revert, previously, redeemed, code., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters]
---

# decreaseRedemption(couponCodeRedemption)

> Get coupon code redemption usage to revert a previously redeemed
      coupon code.

### decreaseRedemption(couponCodeRedemption)

Get coupon code redemption usage to revert a previously redeemed coupon code.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CouponCodeRedemptionCollection decreaseRedemption(ConnectApi.CouponCodeRedemptionInput couponCodeRedemption)

#### Parameters

couponCodeRedemption

Type: [ConnectApi.CouponCodeRedemptionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_coupon_code_redemption.htm "Input representation for coupon code redemption.")

Tracks each coupon code redemption.

#### Return Value

Type: [ConnectApi.CouponCodeRedemptionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_coupon_code_redemption_collection.htm "Collection of coupon code redemption results.")