---
title: "getFilterDefaultValue(quote, fieldName)"
domain: cpq-dev-api
topic: getfilterdefaultvaluequote-fieldname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.568Z
estimatedTokens: 156
keywords: [getFilterDefaultValue, quote, fieldName, Determines, initial, search, Salesforce, CPQ, calls, implemented, input]
---

# getFilterDefaultValue(quote, fieldName)

> Determines the value for the initial search. Salesforce CPQ calls
      this implemented method for each input field.

# getFilterDefaultValue(quote, fieldName)

Determines the value for the initial search. Salesforce CPQ calls this implemented method for each input field.

## Signature

global String getFilterDefaultValue(SObject quote, String fieldName)

## Parameters

quote

Type: SObject

The current quote.

fieldName

Type: String

Quote field used in evaluations to determine the method's output.

## Return Value

Type: String

Returns the string value used as the filter's initial search input.

## Example

In this example, the method sets the product family filter's value to Service if the quote has a type of Quote.

```

```
