---
title: "search(quote, fieldValuesMap)"
domain: cpq-dev-api
topic: searchquote-fieldvaluesmap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.579Z
estimatedTokens: 156
keywords: [search, quote, fieldValuesMap, Overrides, entire, user, input, Salesforce, CPQ, calls, isSearchCustom]
---

# search(quote, fieldValuesMap)

> Overrides the entire user search input. Salesforce CPQ calls this
      method only when isSearchCustom returns
    TRUE.

# search(quote, fieldValuesMap)

Overrides the entire user search input. Salesforce CPQ calls this method only when isSearchCustom returns TRUE.

## Signature

global List<PricebookEntry> search(SObject quote, Map<String,Object\> fieldValuesMap)

## Parameters

quote

Type: SObject

The current quote.

fieldValuesMap

Type: Map<String,Object>

A map of the search criteria. The map key is a Product2 API name and the value is the desired search value. Contains only keys for non-null values.

## Return Value

Type: List<PricebookEntry>

## Example

This example builds and returns a list of price book entries.

```

```
