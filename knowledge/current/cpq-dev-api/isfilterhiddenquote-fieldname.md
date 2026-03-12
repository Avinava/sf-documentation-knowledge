---
title: "isFilterHidden(quote, fieldName)"
domain: cpq-dev-api
topic: isfilterhiddenquote-fieldname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.571Z
estimatedTokens: 195
keywords: [isFilterHidden, quote, fieldName, Determines, visibility, filter, hide, let, users, Salesforce, CPQ, calls, implemented, search, input]
---

# isFilterHidden(quote, fieldName)

> Determines the visibility of a filter in the UI. Return True to hide the filter and False to let users see the filter. Salesforce CPQ calls this implemented method
      for each search input field.

# isFilterHidden(quote, fieldName)

Determines the visibility of a filter in the UI. Return True to hide the filter and False to let users see the filter. Salesforce CPQ calls this implemented method for each search input field.

## Signature

global Boolean isFilterHidden(SObject quote, String fieldName)

## Parameters

quote

Type: SObject

The quote object containing the field used to determine whether the method returns true or false.

fieldName

Type: String

The field tested to determine whether the method returns true or false.

## Return Value

Type: Boolean

Return True to hide the filter and False to let users see the filter.

## Example

This example shows a method that returns True and hides the filter if the quote's status has a value of Approved.

```

```
