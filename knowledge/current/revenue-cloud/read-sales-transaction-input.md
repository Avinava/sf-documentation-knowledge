---
title: "Read Sales Transaction Input"
domain: revenue-cloud
topic: read-sales-transaction-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.401Z
estimatedTokens: 113
keywords: [Read, Sales, Transaction, Input, representation, filter, criteria, details, read, sales, transaction.]
---

# Read Sales Transaction Input

> Input representation of the filter criteria details to read a sales
    transaction.

# Read Sales Transaction Input

Input representation of the filter criteria details to read a sales transaction.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context to retrieve the data records. | Required | 65.0 |
| queryTags | List<String> | List of objects that must be retrieved from the context. | Optional | 65.0 |

## Code Examples

```
{
  "contextId": "008d27d7-e004-4906-a949-ee7d7c323c77",
  "queryTags": [
    "Quote",
    "QuoteLineItem",
    "Product"
  ]
}
```
