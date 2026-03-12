---
title: "productsReturnRate(pageParam, pageSize, products)"
domain: apex-reference
topic: productsreturnratepageparam-pagesize-products
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.233Z
estimatedTokens: 365
keywords: [productsReturnRate, pageParam, pageSize, products, their, rates, product, IDs, API, Version, Requires, Chatter]
---

# productsReturnRate(pageParam, pageSize, products)

> Get a page of products and their return rates for a list of product IDs.

# productsReturnRate(pageParam, pageSize, products)

Get a page of products and their return rates for a list of product IDs.

## API Version

60.0

## Requires Chatter

No

## Signature

public static ConnectApi.ProductReturnRateListOutputRepresentation productsReturnRate(Integer pageParam, Integer pageSize, List<String\> products)

## Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

products

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

List of product IDs.

## Return Value

Type: ConnectApi.ProductReturnRateListOutputRepresentation

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
