---
title: "Unit of Measure Info"
domain: revenue-cloud
topic: unit-of-measure-info
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:08.588Z
estimatedTokens: 162
keywords: [Unit, Measure, Info, Output, representation, details, unit, measure, record.]
---

# Unit of Measure Info

> Output representation of the details of a unit of measure record.

# Unit of Measure Info

Output representation of the details of a unit of measure record.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the unit of measure record. | Small, 63.0 | 63.0 |
| name | String | Name of the unit of measure record. | Small, 63.0 | 63.0 |
| roundingMethod | String | Data rounding method of the unit of measure record. | Small, 63.0 | 63.0 |
| scale | Integer | Scale of the unit of measure record. | Small, 63.0 | 63.0 |
| unitCode | String | Code of the unit of measure record. | Small, 63.0 | 63.0 |

## Code Examples

```
"uomIdToUnitOfMeasureInfo": {
    "0hEU200000003M5MAI": {
      "id": "0hEU200000003M5MAI",
      "name": "Pounds",
      "roundingMethod": "Nearest",
      "scale": 1,
      "unitCode": "Pounds"
    },
    "0hEU200000003KTMAY": {
      "id": "0hEU200000003KTMAY",
      "name": "Grams",
      "roundingMethod": "Down",
      "scale": 5,
      "unitCode": "Grams"
    }
  }
```
