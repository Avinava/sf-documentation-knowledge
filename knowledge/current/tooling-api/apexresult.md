---
title: "ApexResult"
domain: tooling-api
topic: apexresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:46:37.224Z
keywords: [ApexResult, Fields, Usage]
---

# ApexResult

# ApexResult

A complex type that represents the result of Apex code executed as part of an ApexExecutionOverlayAction , returned in an ApexExecutionOverlayResult. Available from API version 28.0 or later.

## Fields

| Field | Details |
| --- | --- |
| apexError | TypestringDescriptionThe error text returned if the execution was unsuccessful. |
| apexExecutionResult | TypeExecuteAnonymousResultDescriptionThe structured result returned from a successful execution.ExecuteAnonymousResult includes the following fields:columncompileProblemcompiledexceptionMessageexceptionStackTracelinesuccessNoteExecuteAnonymousResult is outside the current execution context and does not provide access to variables in the heap. |

## Usage

Overlay Apex on checkpoints to capture structured debugging information. If your SOQL query may return more than one record when dealing with complex types, select only one row. For example, you can use a LIMIT=1 clause in your SOQL query, or you can list rows for the user and have them select the row to inspect.