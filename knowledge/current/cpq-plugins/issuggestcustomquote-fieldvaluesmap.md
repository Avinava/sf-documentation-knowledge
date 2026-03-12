---
title: "isSuggestCustom(quote, fieldValuesMap)"
domain: cpq-plugins
topic: issuggestcustomquote-fieldvaluesmap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.867Z
estimatedTokens: 252
keywords: [isSuggestCustom, quote, fieldValuesMap, isInputHidden, getInputDefaulValue, Salesforce, CPQ, Custom, searching, Enhanced]
---

# isSuggestCustom(quote, fieldValuesMap)

> Called after isInputHidden and
        getInputDefaulValue. Returns True for Salesforce CPQ to use Custom searching or False for Salesforce CPQ to use Enhanced
    searching.

# isSuggestCustom(quote, fieldValuesMap)

Called after isInputHidden and getInputDefaulValue. Returns True for Salesforce CPQ to use Custom searching or False for Salesforce CPQ to use Enhanced searching.

## Signature

global boolean isSuggestCustom(SObject quote, Map<String,Object\> fieldValuesMap)

## Parameters

quote

Type: SObject

The current quote.

fieldValuesMap

Type: Map<String,Object>

A map of the suggestion criteria. The map key is a Product2 API name and the value is the desired search value.

## Return Value

Type: Boolean

Return True to use Custom searching or False to use Enhanced searching.

If you use Custom searching, Salesforce CPQ calls search for search execution. The search() method lets you build the SOQL query's SELECT and WHERE clauses manually before you perform your query.

If you use Enhanced searching, Salesforce CPQ calls getAdditionalSearchFilters for search execution. The getAdditionalSearchFilters method appends a WHERE clause to the existing SOQL query.
