---
title: "FHIR Unit Of Measure Or ID"
domain: health-cloud-object-reference
topic: fhir-unit-of-measure-or-id
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.058Z
estimatedTokens: 144
keywords: [FHIR, Unit, Measure, Input, representation]
---

# FHIR Unit Of Measure Or ID

> Input representation for Unit of Measure Or Id.

# FHIR Unit Of Measure Or ID

Input representation for Unit of Measure Or Id.

Root XML tag

<FhirUnitOfMeasureOrIdInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| salesforceId | String | The Salesforce ID of the unit of measure record. | RequiredNoteOptional if unitOfMeasure is specified. | 54.0 |
| unitOfMeasure | FHIR Unit Of Measure | Represents the unit of measures for care metrics and care observations. | OptionalNoteOptional if salesforceId is specified. | 54.0 |

## Code Examples

```
{
   "unitOfMeasure":{
   "unitCode":"MGTeste2",
   "description":"MG description2",
   "type":"Custom"
   }
}
```

## Related Topics

- FHIR Unit Of Measure (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_unit_of_measur.htm)
