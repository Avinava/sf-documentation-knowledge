---
title: "Error Response for Batch Invoice Document Generation"
domain: revenue-cloud
topic: error-response-for-batch-invoice-document-generation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.097Z
estimatedTokens: 115
keywords: [Error, Batch, Invoice, Document, Generation, Output, representation, associated, API]
---

# Error Response for Batch Invoice Document Generation

> Output representation of the error details associated with the Batch Invoice Document
    Generation API.

# Error Response for Batch Invoice Document Generation

Output representation of the error details associated with the Batch Invoice Document Generation API.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorCode | String | Code for the resultant error. | Big, 63.0 | 63.0 |
| errorMessage | String | Error message for the resultant error. | Big, 63.0 | 63.0 |

## Code Examples

```
"errors": {
    "errorCode": "API_DISABLED_FOR_ORG",
    "message": "Document Generation is not enabled for this org!"
  }
```
