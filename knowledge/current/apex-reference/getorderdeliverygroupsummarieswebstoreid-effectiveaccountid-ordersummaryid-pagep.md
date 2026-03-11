---
title: "getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId,
      orderSummaryId, pageParam, fields)"
domain: apex-reference
topic: getorderdeliverygroupsummarieswebstoreid-effectiveaccountid-ordersummaryid-pagep
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [getOrderDeliveryGroupSummaries, webstoreId, effectiveAccountId, orderSummaryId, pageParam, fields, Get, page, order, delivery, group, summaries, specific, fields., API, Version, Requires, Chatter, Signature, Parameters]
---

# getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId,
      orderSummaryId, pageParam, fields)

> Get a page of order delivery group summaries with specific
      fields.

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, pageParam, fields)

Get a page of order delivery group summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String pageParam, List<String\> fields)

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

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order delivery group summary or order delivery method fields to display in the UI in each item row. For example, fields=OrderDelivery​GroupSummary.DeliveryAddress, OrderDeliveryMethod.Name.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")