---
title: "CommercePromotions Class"
domain: apex-reference
topic: commercepromotions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:17.799Z
estimatedTokens: 1203
namespace: ConnectApi
keywords: [CommercePromotions, Get, coupon, code, redemption, usage, revert, previously, redeemed, code., Note, decreaseRedemption, couponCodeRedemption, API, Version, Guest, Users, Requires, Chatter, evaluate]
---

# CommercePromotions Class

> Get coupon code redemption usage to revert a previously redeemed
      coupon code.

**Namespace:** `ConnectApi`

# CommercePromotions Class

Evaluate promotions for Commerce orders. Get coupon code redemption usage.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CommercePromotions Methods

These methods are for CommercePromotions. All methods are static.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Don’t write an Apex test that calls these CommercePromotions APIs within the context of a guest.

-   **[decreaseRedemption(couponCodeRedemption)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_decreaseRedemption_1)**
    Get coupon code redemption usage to revert a previously redeemed coupon code.
-   **[evaluate(salesTransaction)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_evaluate_1)**
    Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.
-   **[increaseRedemption(couponCodeRedemption)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm#apex_ConnectAPI_CommercePromotions_increaseRedemption_1)**
    Get coupon code redemption addition (increase) usage.

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

### evaluate(salesTransaction)

Determine which promotions the customer is eligible for based on the store and buyer group, and compute the applicable price adjustments based on the coupons and the items in the cart. This API evaluates only the first 50 active manual promotions and first 50 active automatic promotions, based on priority. This API computes and returns applicable price adjustments, but it does not apply those adjustments to the webcart record. If you want to enable promotions based on shipping, contact Salesforce Customer Support.

#### API Version

57.0

#### Available to Guest Users

57.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.PromotionEvaluation evaluate(ConnectApi.PromotionEvaluateInput salesTransaction)

#### Parameters

salesTransaction

Type: [ConnectApi.PromotionEvaluateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_evaluate.htm "Find promotions that the customer is eligible for and compute their discounts.")

Find promotions that the customer is eligible for and compute their discounts.

#### Return Value

Type: [ConnectApi.PromotionEvaluation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_evaluation.htm "Results of a promotion evaluation.")

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

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- decreaseRedemption(couponCodeRedemption) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm)
- evaluate(salesTransaction) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm)
- increaseRedemption(couponCodeRedemption) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CommercePromotions_static_methods.htm)
- ConnectApi.CouponCodeRedemptionInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_coupon_code_redemption.htm)
- ConnectApi.CouponCodeRedemptionCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_coupon_code_redemption_collection.htm)
- ConnectApi.PromotionEvaluateInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_promotion_evaluate.htm)
- ConnectApi.PromotionEvaluation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_promotion_evaluation.htm)
