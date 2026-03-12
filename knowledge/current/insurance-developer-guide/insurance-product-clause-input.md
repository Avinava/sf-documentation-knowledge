---
title: "Insurance Product Clause Input"
domain: insurance-developer-guide
topic: insurance-product-clause-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.869Z
estimatedTokens: 132
keywords: [Insurance, Product, Clause, Input, representation]
---

# Insurance Product Clause Input

> Input representation for a single insurance product clause.

# Insurance Product Clause Input

Input representation for a single insurance product clause.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date from which the product clause is valid. | Optional | 65.0 |
| expirationDate | String | Date from which the product clause is no longer valid. | Optional | 65.0 |
| insurance​Product​ClauseId | String | ID of the insurance product clause. | Optional | 65.0 |

## Code Examples

```
{
    "effectiveDate": "2025-10-27T12:00:00.000Z",
    "expirationDate": "2026-10-27T12:00:00.000Z",
    "insuranceProductClauseId": "a4Lxx000000Cde1EAC"
}
```
