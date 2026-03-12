---
title: "FHIR Medication Resource Input"
domain: life-sciences-dev-guide
topic: fhir-medication-resource-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.331Z
estimatedTokens: 239
keywords: [FHIR, Medication, Resource, Input, representation]
---

# FHIR Medication Resource Input

> The input representation of FHIR Medication.

# FHIR Medication Resource Input

The input representation of FHIR Medication.

The medication FHIR resource maps to the [Medication](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_Medication.htm "Represents detailed information about different medications. This object is available in API version 51.0 and later.")​ object in Salesforce​.

Root XML tag

<FhirMedicationResourceInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| medicationCodeableConcept | FHIR Codeable Concept Or ID Input | The codeable concept value of the medication. | OptionalNoteThis field must be specified if medicationReference is not specified. | 54.0 |
| medicationReference | FHIR Reference Input | The reference of the medication request. | OptionalNoteThis field must be specified if medicationCodeableConcept is not specified. | 54.0 |

## Code Examples

```
{
   "medicationReference":{
   "referenceResource":"Medication",
   "referenceId":"",
   "salesforceId":"0itRM0000004CUkYAM",
   "relationship":""
}
```

## Related Topics

- Medication (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_Medication.htm)
- FHIR Codeable Concept Or ID Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_codeable_concept_or_id.htm)
- FHIR
                        Reference Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_reference.htm)
