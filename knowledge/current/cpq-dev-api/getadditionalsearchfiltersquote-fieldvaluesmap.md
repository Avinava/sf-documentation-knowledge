---
title: "getAdditionalSearchFilters(quote, fieldValuesMap)"
domain: cpq-dev-api
topic: getadditionalsearchfiltersquote-fieldvaluesmap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.565Z
estimatedTokens: 222
keywords: [getAdditionalSearchFilters, quote, fieldValuesMap, Appends, clause, SOQL, query, product, search, further, refine, user's, input, Salesforce, CPQ]
---

# getAdditionalSearchFilters(quote, fieldValuesMap)

> Appends a WHERE clause to the SOQL query used for the product search,
      so that you can further refine a user's search input. Salesforce CPQ calls this method only
      when isSearchCustom returns FALSE.

# getAdditionalSearchFilters(quote, fieldValuesMap)

Appends a WHERE clause to the SOQL query used for the product search, so that you can further refine a user's search input. Salesforce CPQ calls this method only when isSearchCustom returns FALSE.

## Signature

global String getAdditionalSearchFilters(SObject quote, Map<String,Object\> fieldValuesMap)

## Parameters

quote

Type: SObject

The current quote.

fieldValuesMap

Type: Map<String,Object>

A map of the search criteria. The Key is a Product2 API name and the value is the desired search value.

## Return Value

Type: String

The additional search filter, as a SOQL query formatted as a string. For example, 'AND Product2.Inventory\_Level\_\_c > 3'

## Example

In this method, we take an existing filter for products in a Hardware family, and append an additional filter for inventory levels greater than 3.

```

```
