---
title: "Insurance Product Clause Details"
domain: insurance-developer-guide
topic: insurance-product-clause-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.659Z
estimatedTokens: 228
keywords: [Insurance, Product, Clause, Output, representation]
---

# Insurance Product Clause Details

> Output representation for insurance product clause.

# Insurance Product Clause Details

Output representation for insurance product clause.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| category | String | Category of the insurance clause, such as manual or auto-added. | Big, 65.0 | 65.0 |
| clauseName | String | Name of the insurance product clause. | Big, 65.0 | 65.0 |
| description | String | Description of the insurance product clause. | Big, 65.0 | 65.0 |
| effective​Date | String | Date from which the product clause is valid. | Big, 65.0 | 65.0 |
| expiration​Date | String | Date from when the product clause is no longer valid. | Big, 65.0 | 65.0 |
| insurance​Product​ClauseId | String | ID of the insurance product clause. | Big, 65.0 | 65.0 |
| type | String | Type of insurance product provision, such as clause or exclusion. | Big, 65.0 | 65.0 |

## Code Examples

```
{
    "category": "Manual",
    "clauseName": "Manual Clause 1",
    "description": "This is a manually added clause.",
    "effectiveDate": "2025-10-01T12:00:00.000Z",
    "expirationDate": "2026-10-01T12:00:00.000Z",
    "insuranceProductClauseId": "a4Lxx000000Cde1EAC",
    "type": "Clause"
}
```
