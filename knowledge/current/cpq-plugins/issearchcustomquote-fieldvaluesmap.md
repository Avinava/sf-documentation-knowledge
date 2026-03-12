---
title: "isSearchCustom(quote, fieldValuesMap)"
domain: cpq-plugins
topic: issearchcustomquote-fieldvaluesmap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.892Z
estimatedTokens: 285
keywords: [isSearchCustom, quote, fieldValuesMap, isFilterHidden, getFilterDefaulValue, plugin, uses, custom, searching, enhanced]
---

# isSearchCustom(quote, fieldValuesMap)

> Called after isFilterHidden and
        getFilterDefaulValue. Returns True if the plugin uses custom searching or False if the plugin uses enhanced searching.

# isSearchCustom(quote, fieldValuesMap)

Called after isFilterHidden and getFilterDefaulValue. Returns True if the plugin uses custom searching or False if the plugin uses enhanced searching.

## Signature

global Boolean isSearchCustom(SObject quote, Map<String,Object\> fieldValuesMap)

## Parameters

quote

Type: SObject

The current quote.

fieldValuesMap

Type: Map<String,Object>

A map of the search criteria. The map key is a Product2 API name and the value is the desired search value.

## Return Value

Type: Boolean

Return True to use custom searching or False to use enhanced searching.

If you use custom searching, Salesforce CPQ calls search for search execution. The search() method lets you build the SOQL query's SELECT and WHERE clauses manually before you perform your query.

If you use enhanced searching, Salesforce CPQ calls getAdditionalSearchFilters for search execution. The getAdditionalSearchFilters method appends a WHERE clause to the existing SOQL query.

## Example

In this example, we want a method that returns True if the original search criteria defined and used a Search field for sorting.

```

```
