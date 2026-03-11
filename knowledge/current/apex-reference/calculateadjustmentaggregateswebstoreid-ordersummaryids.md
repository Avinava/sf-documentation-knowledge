---
title: "calculateAdjustmentAggregates(webstoreId, orderSummaryIds)"
domain: apex-reference
topic: calculateadjustmentaggregateswebstoreid-ordersummaryids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [calculateAdjustmentAggregates, webstoreId, orderSummaryIds, Submit, job, calculate, adjustment, aggregates, list, order, summary, IDs., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# calculateAdjustmentAggregates(webstoreId, orderSummaryIds)

> Submit a job to calculate adjustment aggregates for a list of order
      summary IDs.

### calculateAdjustmentAggregates(webstoreId, orderSummaryIds)

Submit a job to calculate adjustment aggregates for a list of order summary IDs.

#### API Version

55.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryAdjustmentAggregatesAsyncOutput calculateAdjustmentAggregates(String webstoreId, ConnectApi.OrderSummaryAdjustmentAggregatesAsyncInput orderSummaryIds)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

orderSummaryIds

Type: [ConnectApi.OrderSummaryAdjustmentAggregatesAsyncInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_order_summary_adjustment_aggregates_async.htm "Order summary IDs for calculating adjustment aggregates.")

A ConnectApi.OrderSummaryAdjustmentAggregatesAsyncInput class with a list of order summary IDs.

#### Return Value

Type: [ConnectApi.OrderSummaryAdjustmentAggregatesAsyncOutput](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_adjustment_aggregates_async_output.htm "Async adjustment aggregates output.")