---
title: "evaluate(salesTransaction)"
domain: apex-reference
topic: evaluatesalestransaction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.778Z
keywords: [evaluate, salesTransaction, Determine, which, promotions, customer, eligible, based, store, buyer, group, compute, applicable, price, adjustments, coupons, items, cart., API, evaluates]
---

# evaluate(salesTransaction)

> Determine which promotions the customer is eligible for based on the
      store and buyer group, and compute the applicable price adjustments based on the coupons and
      the items in the cart. This API evaluates only the first 50 active manual promotions and first
      50 active automatic promotions, based on priority. This API computes and returns applicable
      price adjustments, but it does not apply those adjustments to the webcart record. If you want
      to enable promotions based on shipping, contact Salesforce Customer Support.

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