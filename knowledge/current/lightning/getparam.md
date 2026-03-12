---
title: "getParam()"
domain: lightning
topic: getparam
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.610Z
estimatedTokens: 53
keywords: [getParam, action, event’s]
---

# getParam()

> Returns the value of an event’s parameter.

# getParam()

Returns the value of an event’s parameter.

## Signature

getParam(String name)

## Parameters

name

Type: String

The parameter name. For example, event.getParam("button") returns the value of the pressed mouse button (0, 1, or 2).

## Returns

Type: Object

The parameter value.
