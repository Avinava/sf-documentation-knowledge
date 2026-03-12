---
title: "isInputHidden(quote, fieldName)"
domain: cpq-plugins
topic: isinputhiddenquote-fieldname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.864Z
estimatedTokens: 159
keywords: [isInputHidden, quote, fieldName, Determines, visibility, input, Guided, Selling, hide, let, users, Salesforce, CPQ, calls]
---

# isInputHidden(quote, fieldName)

> Determines the visibility of an input in the Guided Selling UI.
      Return True to hide the input and False to let users see the input. Salesforce CPQ calls this
      method for each input.

# isInputHidden(quote, fieldName)

Determines the visibility of an input in the Guided Selling UI. Return True to hide the input and False to let users see the input. Salesforce CPQ calls this method for each input.

## Signature

global Boolean isInputHidden(SObject quote, String fieldName)

## Parameters

quote

Type: SObject

The current quote.

fieldName

Type: String

The field tested to determine whether the method returns true or false.

## Return Value

Type: Boolean

Return True to hide the input and False to let users see the input.

## Example

This example hides an input called "Urgent Shipment" on Fridays.

```

```
