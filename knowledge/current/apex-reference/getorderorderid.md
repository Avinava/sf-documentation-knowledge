---
title: "getOrder(orderId)"
domain: apex-reference
topic: getorderorderid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.070Z
keywords: [getOrder, orderId, Get, order., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getOrder(orderId)

> Get an order.

### getOrder(orderId)

Get an order.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudOrder getOrder(String orderId)

#### Parameters

orderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an order.

#### Return Value

Type: [ConnectApi.DatacloudOrder](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_order.htm#apex_connectapi_output_datacloud_order "Represents a Datacloud order.")