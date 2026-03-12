---
title: "getInputDefaultValue(quote, fieldName)"
domain: cpq-dev-api
topic: getinputdefaultvaluequote-fieldname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.545Z
estimatedTokens: 111
keywords: [getInputDefaultValue, quote, fieldName, Determines, input, initial, guided, selling, prompt]
---

# getInputDefaultValue(quote, fieldName)

> Determines the input for the initial guided selling
    prompt.

# getInputDefaultValue(quote, fieldName)

Determines the input for the initial guided selling prompt.

## Signature

global String getInputDefaultValue(SObject quote, String fieldName)

## Parameters

quote

Type: SObject

The current quote.

fieldName

Type: String

Quote field used in evaluations to determine the method's output.

## Return Value

Type: String

Returns the string value used as the guided selling prompt's initial input.
