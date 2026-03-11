---
title: "increaseRedemption(couponCodeRedemption)"
domain: apex-reference
topic: increaseredemptioncouponcoderedemption
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.778Z
keywords: [increaseRedemption, couponCodeRedemption, Get, coupon, code, redemption, addition, increase, usage., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# increaseRedemption(couponCodeRedemption)

> Get coupon code redemption addition (increase) usage.

### increaseRedemption(couponCodeRedemption)

Get coupon code redemption addition (increase) usage.

#### API Version

58.0

#### Available to Guest Users

58.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.CouponCodeRedemptionCollection increaseRedemption(ConnectApi.CouponCodeRedemptionInput couponCodeRedemption)

#### Parameters

couponCodeRedemption

Type: [ConnectApi.CouponCodeRedemptionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_coupon_code_redemption.htm "Input representation for coupon code redemption.")

Tracks each coupon code redemption.

#### Return Value

Type: [ConnectApi.CouponCodeRedemptionCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_coupon_code_redemption_collection.htm "Collection of coupon code redemption results.")