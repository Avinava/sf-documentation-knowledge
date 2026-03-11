---
title: "getOrderSummaries(webstoreId)"
domain: apex-reference
topic: getordersummarieswebstoreid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderSummaries, webstoreId, Get, order, summaries., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderSummaries(webstoreId)

> Get order summaries.

### getOrderSummaries(webstoreId)

Get order summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderSummaryCollectionRepresentation getOrderSummaries(String webstoreId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

#### Return Value

Type: [ConnectApi.OrderSummaryCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_collection.htm "Collection of order summaries.")