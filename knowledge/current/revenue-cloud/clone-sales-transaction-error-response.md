---
title: "Clone Sales Transaction Error Response"
domain: revenue-cloud
topic: clone-sales-transaction-error-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.459Z
estimatedTokens: 113
keywords: [Clone, Sales, Transaction, Error, Response, Output, representation, errors, occur, during, clone, sales, transaction, operation.]
---

# Clone Sales Transaction Error Response

> Output representation of the errors that occur during the clone sales transaction
    operation.

# Clone Sales Transaction Error Response

Output representation of the errors that occur during the clone sales transaction operation.

JSON example

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errorCode | String | Code associated with the error. | 64.0 |
| message | String | Message associated with the error. | 64.0 |
| referenceId | String | Reference ID associated with the error. | 64.0 |

## Code Examples

```
{
  "errors": [
    {
      "errorCode": "INVALID_API_INPUT",
      "message": "Specify only one record",
      "referenceId": "0QLxx0000004CBYGA2"
    }
  ]
}
```
