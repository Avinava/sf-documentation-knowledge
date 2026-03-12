---
title: "productsReturnRate(pageParam, pageSize)"
domain: apex-reference
topic: productsreturnratepageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.226Z
estimatedTokens: 357
keywords: [productsReturnRate, pageParam, pageSize, pages, data, showing, rates, products, calculated, Customer, Platform, paginated, descending, order, API, their, Version, Requires, Chatter]
---

# productsReturnRate(pageParam, pageSize)

> Gets pages of data showing the return rates of products that are calculated by the
    Customer Data Platform. Return data is paginated in descending order.

# productsReturnRate(pageParam, pageSize)

Gets pages of data showing the return rates of products that are calculated by the Customer Data Platform. Return data is paginated in descending order.

## API Version

59.0

## Requires Chatter

No

## Signature

public static ConnectApi.ProductReturnRateListOutputRepresentation productsReturnRate(Integer pageParam, Integer pageSize)

## Parameters

page

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page number for the list of products. Starts at 0.

products

Type: List )[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."))

A list of IDs to fetch details for.

pageSize

Type: List )[Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type."))

The number of products that are returned on each page.

## Return Value

Type: [ConnectApi.ProductReturnRateListOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_return_rate_list_output.htm "Products with corresponding return rates.")

## Example

ConnectApi.ProductReturnRateListOutputRepresentation output = ConnectApi.OMSAnalytics.productsReturnRate(page, pageSize);

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.ProductReturnRateListOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_return_rate_list_output.htm)
