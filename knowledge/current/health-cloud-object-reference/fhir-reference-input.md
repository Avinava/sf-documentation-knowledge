---
title: "FHIR Reference Input"
domain: health-cloud-object-reference
topic: fhir-reference-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.045Z
estimatedTokens: 235
keywords: [FHIR, Input, representation]
---

# FHIR Reference Input

> The input representation for the Reference FHIR
    object.

# FHIR Reference Input

The input representation for the Reference FHIR object.

Root XML tag

<FhirReferenceInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| referenceId | String | The ID of the medication or practitioner (healthcare provider) record or the managing organization (account) record in the source system. | RequiredNoteOptional if salesforceId is specified. | 53.0 |
| referenceResource | String | The FHIR resource referred to. For example, organization or practitioner. | Required | 53.0 |
| relationship | String | The relationship between the patient and the healthcare provider or the managing organization, stored using the Reciprocal Roles records. | Optional | 53.0 |
| salesforceId | String | The Salesforce ID of the record that’s created in Salesforce. | RequiredNoteOptional if referenceId is specified. | 54.0 |

## Code Examples

```
{
   "reference": {
      "referenceResource": "practitioner",
      "referenceId": "ABCId",
      "relationship": "Oncologist"
   }
}
```
