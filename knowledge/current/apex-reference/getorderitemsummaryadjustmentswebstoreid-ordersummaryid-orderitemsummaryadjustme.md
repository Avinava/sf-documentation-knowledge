---
title: "getOrderItemSummaryAdjustments(webstoreId, orderSummaryId, orderItemSummaryAdjustmentCollectionInput, effectiveAccountId)"
domain: apex-reference
topic: getorderitemsummaryadjustmentswebstoreid-ordersummaryid-orderitemsummaryadjustme
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderItemSummaryAdjustments, webstoreId, orderSummaryId, orderItemSummaryAdjustmentCollectionInput, effectiveAccountId, Get, adjustments, order, items., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderItemSummaryAdjustments(webstoreId, orderSummaryId, orderItemSummaryAdjustmentCollectionInput, effectiveAccountId)

> Get adjustments for order items.

### getOrderItemSummaryAdjustments(webstoreId, orderSummaryId, orderItemSummaryAdjustmentCollectionInput, effectiveAccountId)

Get adjustments for order items.

#### API Version

53.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryAdjustmentCollection getOrderItemSummaryAdjustments(String webstoreId, String orderSummaryId, ConnectApi.OrderItemSummaryAdjustmentCollectionInput orderItemSummaryAdjustmentCollectionInput, String effectiveAccountId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

orderItemSummaryAdjustmentCollectionInput

Type: [ConnectApi.OrderItemSummaryAdjustmentCollectionInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_item_summary_adjustment_collection.htm "Collection of order item summaries.")

Collection of order item summaries to get adjustments for.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.OrderItemSummaryAdjustmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_adjustment_collection.htm "Collection of adjustments for order item summaries.")