---
title: "FHIR Dose"
domain: health-cloud-object-reference
topic: fhir-dose
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.997Z
estimatedTokens: 223
keywords: [FHIR, Dose, Input, representation, dosage, quantity]
---

# FHIR Dose

> Input representation for the dosage quantity.

# FHIR Dose

Input representation for the dosage quantity.

Root XML tag

<FhirDoseInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dosageQuantityDenominator | Double | The denominator value for the quantity of medication per dose. This field can be used to record a simple quantity or a quantity range. | Optional | 54.0 |
| dosageQuantityNumerator | Double | The numerator value for the quantity of medication per dose. This field can be used to record a simple quantity or a quantity range. | Optional | 54.0 |
| dosageQuantityType | String | The type of dosage quantity recorded in DosageQuantityNumerator and DosageQuantityDenominator.Possible values are:DoseDose Range | Optional | 54.0 |
| dosageUnit | FHIR Unit Of Measure Or ID | The unit of dosage quantity. | Optional | 54.0 |

## Code Examples

```
{
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
}
```

## Related Topics

- FHIR Unit Of Measure Or ID (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_unit_of_measure_or_i.htm)
