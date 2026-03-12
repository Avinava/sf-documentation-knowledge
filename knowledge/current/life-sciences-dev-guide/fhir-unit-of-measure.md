---
title: "FHIR Unit Of Measure"
domain: life-sciences-dev-guide
topic: fhir-unit-of-measure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.364Z
estimatedTokens: 142
keywords: [FHIR, Unit, Measure, Input, representation]
---

# FHIR Unit Of Measure

> Input representation for Unit of Measure.

# FHIR Unit Of Measure

Input representation for Unit of Measure.

Root XML tag

<FhirUnitOfMeasureInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | The description of this unit of measure. | Optional | 54.0 |
| type | String | The type of the unit of measure. For example, weight, distance, and period. | Required | 54.0 |
| unitCode | String | The code for this unit of measure. For example, mm[Hg], mcg/mL., kgs, and lbs. | Required | 54.0 |

## Code Examples

```
{
   "unitCode":"MGTeste2",
   "description":"MG description2",
   "type":"Custom"
}
```
