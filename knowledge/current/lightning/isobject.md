---
title: "isObject()"
domain: lightning
topic: isobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.818Z
estimatedTokens: 103
keywords: [isObject, Checks, whether, DOM, element, native, browser, XMLHttpRequest, falsey, array, error, function, number]
---

# isObject()

> Checks whether the specified object is a valid object. A valid object
   is not a DOM element, is not a native browser class (XMLHttpRequest) is not falsey, and is not an array, error, function string or a
   number.

# isObject()

Checks whether the specified object is a valid object. A valid object is not a DOM element, is not a native browser class (XMLHttpRequest) is not falsey, and is not an array, error, function string or a number.

## Signature

isObject(Object obj)

## Parameters

obj

Type: Object

The object to check.

## Returns

Type: Boolean

Returns true if the object is a valid object, or false otherwise.
