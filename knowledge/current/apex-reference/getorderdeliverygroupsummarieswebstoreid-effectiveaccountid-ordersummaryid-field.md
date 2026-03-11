---
title: "getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId,
      orderSummaryId, fields, pageSize, sortParam)"
domain: apex-reference
topic: getorderdeliverygroupsummarieswebstoreid-effectiveaccountid-ordersummaryid-field
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.603Z
keywords: [getOrderDeliveryGroupSummaries, webstoreId, effectiveAccountId, orderSummaryId, fields, pageSize, sortParam, Get, sorted, list, order, delivery, group, summaries, specific, fields., API, Version, Requires, Chatter]
---

# getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId,
      orderSummaryId, fields, pageSize, sortParam)

> Get a sorted list of order delivery group summaries with specific
      fields.

### getOrderDeliveryGroupSummaries(webstoreId, effectiveAccountId, orderSummaryId, fields, pageSize, sortParam)

Get a sorted list of order delivery group summaries with specific fields.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderDeliveryGroupSummaryCollection getOrderDeliveryGroupSummaries(String webstoreId, String effectiveAccountId, String orderSummaryId, List<String\> fields, Integer pageSize, ConnectApi.OrderDeliveryGroupSummarySort sortParam)

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

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 order delivery group summary or order delivery method fields to display in the UI in each item row. For example, fields=OrderDelivery​GroupSummary.DeliveryAddress, OrderDeliveryMethod.Name.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortParam

Type: [ConnectApi.OrderDeliveryGroupSummarySort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderDeliveryGroupSummarySortEnum)

Sort order for order delivery group summaries. Values are:

-   IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).
-   IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).

If null, IdAsc is the default sort order.

#### Return Value

Type: [ConnectApi.OrderDeliveryGroupSummaryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_delivery_group_summary_collection.htm "Collection of order delivery group summaries.")