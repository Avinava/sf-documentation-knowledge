---
title: "FunctionErrorType Enum"
domain: apex-reference
topic: functionerrortype-enum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.502Z
keywords: [FunctionErrorType, Enum, Values]
---

# FunctionErrorType Enum

# FunctionErrorType Enum

Represents the error type of FunctionInvocationError.

## Enum Values

These are the values of the functions.FunctionErrorType enum.

| Value | Description |
| --- | --- |
| FUNCTION_EXCEPTION | A known exception resulting from the Function logic itself. Examples include an exception thrown from the Function code, or an exception thrown from a library or framework the Function uses. |
| RUNTIME_EXCEPTION | A known exception resulting from the Salesforce Functions runtime. For example, a malformed payload passed to the Function when invoked results in this error type. |
| UNEXPECTED_FUNCTION_EXCEPTION | An unknown exception. For example, a network or system-level issue within the Salesforce Functions infrastructure results in this error type. |