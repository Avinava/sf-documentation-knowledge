---
title: "getOrderSummaryAdjustments(webstoreId, orderSummaryId)"
domain: apex-reference
topic: getordersummaryadjustmentswebstoreid-ordersummaryid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderSummaryAdjustments, webstoreId, orderSummaryId, Get, adjustments, order, summary., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderSummaryAdjustments(webstoreId, orderSummaryId)

> Get adjustments for an order summary.

### getOrderSummaryAdjustments(webstoreId, orderSummaryId)

Get adjustments for an order summary.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryAdjustmentCollection getOrderSummaryAdjustments(String webstoreId, String orderSummaryId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

#### Return Value

Type: [ConnectApi.OrderSummaryAdjustmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_collection.htm "Collection of adjustments for an order summary.")