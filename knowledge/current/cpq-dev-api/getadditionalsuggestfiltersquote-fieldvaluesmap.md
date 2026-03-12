---
title: "getAdditionalSuggestFilters(quote,
    fieldValuesMap)"
domain: cpq-dev-api
topic: getadditionalsuggestfiltersquote-fieldvaluesmap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.543Z
estimatedTokens: 174
keywords: [getAdditionalSuggestFilters, quote, fieldValuesMap, Appends, clause, SOQL, query, guided, selling, prompt, Salesforce, CPQ, Calls, isSuggestCustom]
---

# getAdditionalSuggestFilters(quote,
    fieldValuesMap)

> Appends a WHERE clause to the SOQL query used for a guided selling
      prompt. Salesforce CPQ Calls this method only when isSuggestCustom returns FALSE.

# getAdditionalSuggestFilters(quote, fieldValuesMap)

Appends a WHERE clause to the SOQL query used for a guided selling prompt. Salesforce CPQ Calls this method only when isSuggestCustom returns FALSE.

## Signature

global String getAdditionalSuggestFilters(SObject quote, Map<String,Object\> fieldValuesMap)

## Parameters

quote

Type: SObject

The current quote.

fieldValuesMap

Type: Map<String,Object>

A map of the guided selling suggestion criteria. The Key is a Product2 API name and the value is the desired suggest value.

## Return Value

Type: String

The additional suggestion filter, as a WHERE clause. For example, 'AND Product2.Inventory\_Level\_\_c > 3'

## Example

```

```
