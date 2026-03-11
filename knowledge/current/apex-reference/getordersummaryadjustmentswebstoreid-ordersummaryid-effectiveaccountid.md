---
title: "getOrderSummaryAdjustments(webstoreId, orderSummaryId, effectiveAccountId)"
domain: apex-reference
topic: getordersummaryadjustmentswebstoreid-ordersummaryid-effectiveaccountid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderSummaryAdjustments, webstoreId, orderSummaryId, effectiveAccountId, Get, adjustments, order, summary., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderSummaryAdjustments(webstoreId, orderSummaryId, effectiveAccountId)

> Get adjustments for an order summary.

### getOrderSummaryAdjustments(webstoreId, orderSummaryId, effectiveAccountId)

Get adjustments for an order summary.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryAdjustmentCollection getOrderSummaryAdjustments(String webstoreId, String orderSummaryId, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.OrderSummaryAdjustmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_collection.htm "Collection of adjustments for an order summary.")