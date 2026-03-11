---
title: "getContactsFromOrder(orderId, page, pageSize)"
domain: apex-reference
topic: getcontactsfromorderorderid-page-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.070Z
keywords: [getContactsFromOrder, orderId, page, pageSize, Get, list, purchased, contacts, order., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getContactsFromOrder(orderId, page, pageSize)

> Get a list of purchased contacts for an order.

### getContactsFromOrder(orderId, page, pageSize)

Get a list of purchased contacts for an order.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudContacts getContactsFromOrder(String orderId, String page, String pageSize)

#### Parameters

orderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an order.

page

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page that you want returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of contacts to show on a page. The default pageSize is 25.

#### Return Value

Type: [ConnectApi.DatacloudContacts](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_contact_collection.htm#apex_connectapi_output_datacloud_contact_collection "Lists all contacts that were purchased in the specific order, page URLs, and the number of contacts in the order.")