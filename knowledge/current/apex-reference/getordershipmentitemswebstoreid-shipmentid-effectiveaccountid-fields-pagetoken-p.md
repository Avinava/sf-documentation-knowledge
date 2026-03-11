---
title: "getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId, fields, pageToken, pageSize, sortOrder)"
domain: apex-reference
topic: getordershipmentitemswebstoreid-shipmentid-effectiveaccountid-fields-pagetoken-p
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderShipmentItems, webstoreId, shipmentId, effectiveAccountId, fields, pageToken, pageSize, sortOrder, Get, sorted, page, order, shipment, items., API, Version, Requires, Chatter, Signature, Parameters]
---

# getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId, fields, pageToken, pageSize, sortOrder)

> Get a sorted page of order shipment items.

### getOrderShipmentItems(webstoreId, shipmentId, effectiveAccountId, fields, pageToken, pageSize, sortOrder)

Get a sorted page of order shipment items.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentItemCollection getOrderShipmentItems(String webstoreId, String shipmentId, String effectiveAccountId, List<String\> fields, String pageToken, Integer pageSize, ConnectApi.OrderShipmentItemSort sortOrder)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

shipmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the shipment.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If null, defaults to the account ID for the context user.

fields

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of up to 15 additional shipment items, order item summary, and product fields to display in the UI in each item row.

pageToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the base64 encoded page token. Page tokens are returned as part of the response. If unspecified, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

sortOrder

Type: [ConnectApi.OrderShipmentItemSort](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#OrderShipmentItemSortEnum)

Sort order for order shipment items. Values are:

-   IdAsc—Sorts by ID in ascending alphanumeric order (A–Z, 0–9).
-   IdDesc—Sorts by ID in descending alphanumeric order (Z–A, 9–0).

If unspecified, defaults to IdAsc.

#### Return Value

Type: [ConnectApi.OrderShipmentItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_item_collection.htm "Collection of order shipment items.")