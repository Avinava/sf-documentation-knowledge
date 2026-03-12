---
title: "getError()"
domain: lightning
topic: geterror
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.604Z
estimatedTokens: 95
keywords: [getError, array, error, objects, server-side, actions, message, any, mode, except, PROD, stack, describing, execution, occurred]
---

# getError()

> Returns an array of error objects for server-side actions only. Each
   error object has a message field. In any mode except PROD
   mode, each object also has a stack field, which is a list describing the execution stack when the
   error occurred.

# getError()

Returns an array of error objects for server-side actions only. Each error object has a message field. In any mode except PROD mode, each object also has a stack field, which is a list describing the execution stack when the error occurred.

## Signature

getError()

## Returns

Type: Object\[\]

An array of error objects. Each error object has a message field.
