---
title: "getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId,
      orderSummaryId)"
domain: apex-reference
topic: getorderdeliverygroupsummarieswebstoreid-effectiveaccountid-ordersummaryid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [getOrderDeliveryGroupSummaries, webstoreId, effectiveAccountId, orderSummaryId, Get, order, delivery, group, summaries., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId,
      orderSummaryId)

> Get order delivery group summaries.

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId)

Get order delivery group summaries.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId)

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

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")