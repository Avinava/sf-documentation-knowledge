---
title: "productsReturnRate(pageParam, pageSize)"
domain: apex-reference
topic: productsreturnratepageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.434Z
keywords: [productsReturnRate, pageParam, pageSize, API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# productsReturnRate(pageParam, pageSize)

# productsReturnRate(pageParam, pageSize)

Get a page of products and their return rates.

## API Version

59.0

## Requires Chatter

No

## Signature

public static ConnectApi.ProductReturnRateListOutputRepresentation productsReturnRate(Integer pageParam, Integer pageSize)

## Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default size is 25.

## Return Value

Type: ConnectApi.ProductReturnRateListOutputRepresentation