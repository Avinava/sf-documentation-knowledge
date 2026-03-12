---
title: "Configurator Unit Of Measure"
domain: revenue-cloud
topic: configurator-unit-of-measure
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.566Z
estimatedTokens: 174
keywords: [Configurator, Unit, Measure, Output, representation, details, unit, measure, record.]
---

# Configurator Unit Of Measure

> Output representation of the details of the unit of measure record.

# Configurator Unit Of Measure

Output representation of the details of the unit of measure record.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the unit of measure record. | Small, 63.0 | 63.0 |
| name | String | Name of the unit of measure record. | Small, 63.0 | 63.0 |
| rounding​Method | String | Rounding method associated with the unit of measure record. | Small, 63.0 | 63.0 |
| scale | Integer | Scale associated with the unit of measure record. | Small, 63.0 | 63.0 |
| unitCode | String | Unit code associated with the unit of measure record. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "unitOfMeasure": {
    "id": "0hEXR00000000BJ2AY",
    "name": "Litres",
    "roundingMethod": "Down",
    "scale": 2,
    "unitCode": "Ltrs"
  }
}
```
