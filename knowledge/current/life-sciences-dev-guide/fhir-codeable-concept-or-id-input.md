---
title: "FHIR Codeable Concept Or ID Input"
domain: life-sciences-dev-guide
topic: fhir-codeable-concept-or-id-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.287Z
estimatedTokens: 138
keywords: [FHIR, Codeable, Concept, Input, representation]
---

# FHIR Codeable Concept Or ID Input

> Input representation for FHIR Codeable Concept or ID.

# FHIR Codeable Concept Or ID Input

Input representation for FHIR Codeable Concept or ID.

Root XML tag

<FhirCodeableConceptOrIdInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| codeableConcept | FHIR Codeable Concept | Represents the CodeableConcept FHIR object. | RequiredNoteOptional if salesforceId is specified. | 54.0 |
| salesforceId | String | The ID of the Salesforce record. | RequiredNoteOptional if codeableConcept is specified. | 54.0 |

## Code Examples

```
{
   "codeableConcept":{
   "text":"Burn of Ear status reason",
   "coding":[ {
   "display":"Burn of status reasonn ear",
   "code":"1234995607",
   "system":"http://sfdc.co",
   "version":"2.16.840.1.113883.6.96",
   "isActive":true,
   "isPrimary":true,
   "use":"Clinical",
   "userSelected":true,
   "startDate":"1993-11-09T15:40:30.000Z",
   "endDate":"2021-08-24T17:00:00.000Z"
   }
   ] }
}
```

## Related Topics

- FHIR Codeable Concept (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_codeable_concept.htm)
