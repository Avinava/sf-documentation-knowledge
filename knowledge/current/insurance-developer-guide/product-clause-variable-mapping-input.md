---
title: "Product Clause Variable Mapping Input"
domain: insurance-developer-guide
topic: product-clause-variable-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.872Z
estimatedTokens: 179
keywords: [Product, Clause, Variable, Mapping, Input, representation, insurance]
---

# Product Clause Variable Mapping Input

> Input representation for mapping an insurance clause variable to an insurance product variable.

# Product Clause Variable Mapping Input

Input representation for mapping an insurance clause variable to an insurance product variable.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attribute | String | Attribute that's mapped to the variable of the Insurance Product Clause record. | Optional | 65.0 |
| id | String | ID of the Insurance Product Clause Variable Mapping record. | Optional | 65.0 |
| variable | String | Variable that's associated with the Insurance Product Clause record. | Required | 65.0 |
| variableType | String | Type of the variable that's associated with the attribute. | Optional | 65.0 |

## Code Examples

```
{
  "id": "a1Bxx0000000001AAA",
  "variable": "LimitAmount",
  "variableType": "Currency",
  "attribute": "CoverageLimit"
}
```
