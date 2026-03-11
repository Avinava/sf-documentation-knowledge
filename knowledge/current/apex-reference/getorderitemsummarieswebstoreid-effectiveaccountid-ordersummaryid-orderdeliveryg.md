---
title: "getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageParam, pageSize, sortParam, includeAdjustmentDetails)"
domain: apex-reference
topic: getorderitemsummarieswebstoreid-effectiveaccountid-ordersummaryid-orderdeliveryg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderItemSummaries, webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageParam, pageSize, sortParam, includeAdjustmentDetails, Get, sorted, page, order, item, summaries, delivery, group, summary, specific]
---

# getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageParam, pageSize, sortParam, includeAdjustmentDetails)

> Get a sorted page of order item summaries for a delivery group summary
      with specific fields and include adjustment details.

### getOrderItemSummaries(webstoreId, effectiveAccountId, orderSummaryId, orderDeliveryGroupSummaryId, fields, pageParam, pageSize, sortParam, includeAdjustmentDetails)

Get a sorted page of order item summaries for a delivery group summary with specific fields and include adjustment details.

#### API Version

56.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderItemSummaryCollection getOrderItemSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, String orderDeliveryGroupSummaryId, List<String\> fields, String pageParam, Integer pageSize, ConnectApi.OrderItemSummarySort sortParam, Boolean includeAdjustmentDetails)

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

orderDeliveryGroupSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the order delivery group summary.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order item summary or product fields to display in the UI in each item row.

pageParam

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.OrderItemSummarySort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderItemSummarySortEnum)

Sort order for order item summaries. Values are:

-   IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).
-   IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).

If null, IdAsc is the default sort order.

includeAdjustmentDetails

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to return adjustment details (true) or not (false).

#### Return Value

Type: [ConnectApi.OrderItemSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_item_summary_collection.htm "Collection of order item summaries.")