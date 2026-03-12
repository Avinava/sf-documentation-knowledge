---
title: "Clause Generation Options Input"
domain: insurance-developer-guide
topic: clause-generation-options-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.693Z
estimatedTokens: 158
keywords: [Clause, Generation, Options, Input, representation]
---

# Clause Generation Options Input

> Input representation for clause generation options.

# Clause Generation Options Input

Input representation for clause generation options.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| generate​Clauses​Async | Boolean | Indicates whether to generate clauses asynchronously (true) or not (false). | Optional | 65.0 |
| generate​Manual​Clauses | Boolean | Indicates whether to generate clauses manually (true) or not (false). | Optional | 65.0 |
| saveContext | Boolean | Indicates whether to save the context while generating the product clause (true) or not (false). | Optional | 65.0 |

## Code Examples

```
{
  "generateClausesAsync": true,
  "generateManualClauses": false,
  "saveContext": true
}
```
