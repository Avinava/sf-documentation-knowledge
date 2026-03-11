---
title: "getOrderItemSummaries(webstoreId, effectiveAccountId,
      orderSummaryId, pageSize)"
domain: apex-reference
topic: getorderitemsummarieswebstoreid-effectiveaccountid-ordersummaryid-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [getOrderItemSummaries, webstoreId, effectiveAccountId, orderSummaryId, pageSize, Get, order, item, summaries., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderItemSummaries(webstoreId, effectiveAccountId,
      orderSummaryId, pageSize)

> Get order item summaries.

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageSize)

Get order item summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, Integer pageSize)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order summary.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")