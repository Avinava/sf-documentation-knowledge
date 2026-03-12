---
title: "reportError()"
domain: lightning
topic: reporterror
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:49.748Z
estimatedTokens: 102
keywords: [reportError, Report, error, server, handling, try-catch, mechanism, desired, functional, nested, promises]
---

# reportError()

> Report an error to the server after handling it. Note that the method
   should be used only if the try-catch mechanism of error handling is not desired or not
   functional, such as in nested promises.

# reportError()

Report an error to the server after handling it. Note that the method should be used only if the try-catch mechanism of error handling is not desired or not functional, such as in nested promises.

## Signature

reportError (String message, Error error)

## Parameters

message

Type: String

The error message.

error

Type: Error

An error object to be included in handling and reporting.
