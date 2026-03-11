---
title: "getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields)"
domain: apex-reference
topic: getordershipmentswebstoreid-ordersummaryid-effectiveaccountid-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderShipments, webstoreId, orderSummaryId, effectiveAccountId, fields, Get, order, shipments, specific, fields., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields)

> Get order shipments with specific fields.

### getOrderShipments(webstoreId, orderSummaryId, effectiveAccountId, fields)

Get order shipments with specific fields.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentCollection getOrderShipments(String webstoreId, String orderSummaryId, String effectiveAccountId, List<String\> fields)

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

#### Return Value

Type: [ConnectApi.OrderShipmentCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_collection.htm "Collection of order shipments.")