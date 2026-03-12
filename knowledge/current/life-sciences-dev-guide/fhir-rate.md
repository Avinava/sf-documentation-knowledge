---
title: "FHIR Rate"
domain: life-sciences-dev-guide
topic: fhir-rate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.351Z
estimatedTokens: 249
keywords: [FHIR, Rate, Input, representation, dosage]
---

# FHIR Rate

> Input representation for dosage rate.

# FHIR Rate

Input representation for dosage rate.

Root XML tag

<FhirRateInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dosageRateDenominator | Double | The denominator value for the rate of medication in the dosage. That is, amount of medication per unit of time. This field can be used to record a simple rate, a rate ratio, or a rate range | Optional | 54.0 |
| dosageRateNumerator | Double | The numerator value for the rate of medication in the dosage. That is, amount of medication per unit of time. This field can be used to record a simple rate, a rate ratio, or a rate range. | Optional | 54.0 |
| dosageRateType | String | The type of dosage rate recorded in DosageRateNumerator and DosageRateDenominator.Possibale values are:FrequencyFrequency RangeFrequency Ratio | Optional | 54.0 |
| dosageRateUnit | FHIR Unit Of Measure Or ID | The unit of dosage rate. | Optional | 54.0 |

## Code Examples

```
{
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

- FHIR Unit Of
                        Measure Or ID (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_unit_of_measure_or_i.htm)
