---
title: "getCompaniesFromOrder(orderId, pageSize,
    page)"
domain: apex-reference
topic: getcompaniesfromorderorderid-pagesize-page
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.070Z
keywords: [getCompaniesFromOrder, orderId, pageSize, page, Get, list, purchased, company, records, order., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getCompaniesFromOrder(orderId, pageSize,
    page)

> Get a list of purchased company records for an order.

### getCompaniesFromOrder(orderId, pageSize, page)

Get a list of purchased company records for an order.

#### API Version

32.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.DatacloudCompanies getCompaniesFromOrder(String orderId, String pageSize, String page)

#### Parameters

orderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an order.

page

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page that you want returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of companies to show on a page. The default pageSize is 25.

#### Return Value

Type: [ConnectApi.DatacloudCompanies](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_datacloud_company_collection.htm#apex_connectapi_output_datacloud_company_collection "Lists all companies that were purchased in a specific order, page URLs, and the number of companies in the order.")