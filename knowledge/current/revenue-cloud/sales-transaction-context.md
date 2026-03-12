---
title: "Sales Transaction Context"
domain: revenue-cloud
topic: sales-transaction-context
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.424Z
estimatedTokens: 156
keywords: [Sales, Transaction, Context, Output, representation, context, details, associated, sales, transaction.]
---

# Sales Transaction Context

> Output representation of the context details that are associated with a sales
    transaction.

# Sales Transaction Context

Output representation of the context details that are associated with a sales transaction.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context that’s created for a session of the sales transaction. | Small, 63.0 | 63.0 |
| isBuiltIn​Transaction | Boolean | Indicates whether a new context ID is created for the sales transaction (true) or not (false).If the contextId property isn’t specified, the Place Sales Transaction API generates it. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "contextDetails": {
    "contextId": "e055bb18-d4e8-41c3-881e-0132b9561708",
    "isBuiltInTransaction": true
  }
}
```
