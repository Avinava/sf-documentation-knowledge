---
title: "FHIR Dose And Rate"
domain: life-sciences-dev-guide
topic: fhir-dose-and-rate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.315Z
estimatedTokens: 120
keywords: [FHIR, Dose, Rate, Input, representation]
---

# FHIR Dose And Rate

> Input representation of the specified dose and rate.

# FHIR Dose And Rate

Input representation of the specified dose and rate.

Root XML tag

<FhirDoseAndRateInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dose | FHIR Dose Input | Represents the dosage quantity. | Optional | 54.0 |
| rate | FHIR Rate Input | Represents the dosage rate. | Optional | 54.0 |
| type | String | The type of the specified dose. | Optional | 54.0 |

## Code Examples

```
{
   "type":"Ordered",
   "dose":{
   "dosageQuantityType":"Dose",
   "dosageQuantityNumerator":"10",
   "dosageQuantityDenominator":"20",
   "dosageUnit":{
   "unitOfMeasure":{
   "unitCode":"MGTttest",
   "description":"MG description",
   "type":"Custom"
   }
   }
   },
   "rate":{
   "dosageRateType":"Frequency Ratio",
   "dosageRateNumerator":"2",
   "dosageRateDenominator":"3",
   "dosageRateUnit":{
   "unitOfMeasure":{
   "unitCode":"MGTeste2",
   "description":"MG description2",
   "type":"Custom"
   }
   }
   }
}
```

## Related Topics

- FHIR Dose
  Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_dose.htm)
- FHIR Rate Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_rate.htm)
