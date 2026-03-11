---
title: "SOQLResult"
domain: tooling-api
topic: soqlresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:46:38.785Z
keywords: [SOQLResult, Fields, Usage]
---

# SOQLResult

# SOQLResult

A complex type that represents the result of a SOQL query in an ApexExecutionOverlayResult object. Available from API version 28.0 or later.

## Fields

| Field | Details |
| --- | --- |
| queryError | TypestringDescriptionThe error text returned if the execution was unsuccessful. |
| queryMetadata | TypeQueryResultMetadataDescriptionThe structured result returned from a successful execution.QueryResultMetadata includes the following fields:columnMetadataentityNamegroupByidSelectedkeyPrefix |
| queryResult | Typearray of MapValueDescriptionMapValue contains an array of MapEntry, which contains the following fields:keyDisplayValuevalue (reference to StateValue) |

## Usage

Overlay SOQL on checkpoints to capture structured debugging information. If your SOQL query may return more than one record when dealing with complex types, select only one row. For example, you can use a LIMIT=1 clause in your SOQL query, or you can list rows for the user and have them select the row to inspect.