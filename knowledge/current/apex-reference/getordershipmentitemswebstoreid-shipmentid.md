---
title: "getOrderShipmentItems(webstoreId, shipmentId)"
domain: apex-reference
topic: getordershipmentitemswebstoreid-shipmentid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.604Z
keywords: [getOrderShipmentItems, webstoreId, shipmentId, Get, order, shipment, items., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrderShipmentItems(webstoreId, shipmentId)

> Get order shipment items.

### getOrderShipmentItems(webstoreId, shipmentId)

Get order shipment items.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.OrderShipmentItemCollection getOrderShipmentItems(String webstoreId, String shipmentId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

shipmentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the shipment.

#### Return Value

Type: [ConnectApi.OrderShipmentItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_shipment_item_collection.htm "Collection of order shipment items.")