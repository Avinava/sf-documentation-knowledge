---
title: "getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields, pageSize, pageToken, sortOrder)"
domain: apex-reference
topic: getordershipmentswebstoreid-ordersummaryid-effectiveaccountid-fields-pagesize-pa
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderShipments, webstoreId, orderSummaryId, effectiveAccountId, fields, pageSize, pageToken, sortOrder, Get, sorted, page, order, shipments, specific, fields., API, Version, Requires, Chatter, Signature]
---

# getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields, pageSize, pageToken, sortOrder)

> Get a sorted page of order shipments with specific
    fields.

### getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields, pageSize, pageToken, sortOrder)

Get a sorted page of order shipments with specific fields.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentCollection getOrderShipments(String webstoreId, String orderSummaryId, String effectiveAccountId, List<String\> fields, Integer pageSize, String pageToken, ConnectApi.OrderShipmentSort sortOrder)

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

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 additional shipment and order delivery method fields to display in the UI in each item row.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

sortOrder

Type: [ConnectApi.OrderShipmentSort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderShipmentSortEnum)

Sort order for order shipments. Values are:

-   ExpectedDeliveryDateAsc—Sorts by the oldest expected delivery date.
-   ExpectedDeliveryDateDesc—Sorts by the most recent expected delivery date.
-   ShipmentNumberAsc—Sorts by shipment number in ascending order (0–9).
-   ShipmentNumberDesc—Sorts by shipment number in descending order (9–0).

If unspecified, defaults to ShipmentNumberAsc.

If you’re sorting by expected delivery date, make sure the expected delivery date is populated on your shipment records. A null value isn’t supported and results in an error.

#### Return Value

Type: [ConnectApi.OrderShipmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_collection.htm "Collection of order shipments.")