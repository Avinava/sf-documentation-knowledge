---
title: "FHIR Dosage Input"
domain: life-sciences-dev-guide
topic: fhir-dosage-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.308Z
estimatedTokens: 562
keywords: [FHIR, Dosage, Input, representation, patient’s, medication]
---

# FHIR Dosage Input

> The input representation of dosage information for a patient’s
      medication.

# FHIR Dosage Input

The input representation of dosage information for a patient’s medication.

The Dosage FHIR resource maps to the [PatientMedicationDosage](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientMedicationDosage.htm "Represents dosage information for medication. This object is primarily used to add dosage information in MedicationStatement, MedicationRequest, or MedicationDispense records. This object is available in API version 51.0 and later.") object in Salesforce.

Root XML tag

<FhirDosageInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalInformation | Custom Field Value Input[] | The additional information associated with the medication for the patient. | Optional | 54.0 |
| additionalInstruction | String | The supplemental instructions or warnings associated with the medication for the patient. | Optional | 54.0 |
| asNeeded | Boolean | Indicates whether the medication is taken on an as-needed basis. | Optional | 54.0 |
| doseAndRate | FHIR Dose And Rate Input | The amount of dosage administration. | Optional | 54.0 |
| method | FHIR Codeable Concept Or ID Input | The method of dosage administration. | Optional | 54.0 |
| patientInstruction | String | The patient or consumer instructions associated with this medication. | Optional | 54.0 |
| route | FHIR Codeable Concept Or ID Input | The route of dosage adminisitration. | Optional | 54.0 |
| sequence | Double | The position of this medication in the sequence of medications prescribed to a patient. | Optional | 54.0 |
| site | FHIR Codeable Concept Or ID Input | The site of dosage adminisitration. | Optional | 54.0 |
| sourceSystem | String | The source system from where the dosage record was brought into Salesforce. | Optional | 54.0 |
| sourceSystemId | String | The identifier of the dosage record in its source system. | Optional | 54.0 |
| sourceSystemModified | String | The date and time when the dosage record was last modified in its source system. | Optional | 54.0 |
| text | String | The free text dosage instructions associated with the medication for the patient. | Optional | 54.0 |

## Code Examples

```
{
   "sequence":"10.0",
   "text":"commentsText",
   "additionalInstruction":"Additioanl Instructions",
   "patientInstruction":"Patient Instructions",
   "asNeeded":"true",
   "site":{
   "salesforceId":"0iPxx00000000MbEAI" },
   "route":{
   "codeableConcept":{
   "text":"Burn of Ear route",
   "coding":[
   {
   "display":"Burn of ear route",
   "code":"123456700",
   "system":"http://sfdc.co",
   "version":"2.16.840.1.113883.6.96",
   "isActive":true,
   "isPrimary":true,
   "use":"Clinical",
   "userSelected":true,
   "startDate":"1993-11-09T15:40:30.000Z",
   "endDate":"2021-08-24T17:00:00.000Z",
   } ]
   }
   },
   "method":{
   "codeableConcept":{
   "text":"Burn of Ear Method",
   "coding":[
   {
   "display":"Burn of ear",
   "code":"1234567777",
   "system":"http://sfdc.co",
   "version":"2.16.840.1.113883.6.96",
   "isActive":true,
   "isPrimary":true,
   "use":"Clinical",
   "userSelected":true,
   "startDate":"1993-11-09T15:40:30.000Z",
   "endDate":"2021-08-24T17:00:00.000Z",
   } ]
   }
   },
   "doseAndRate":{
   "type":"Ordered",
   "dose":{
   "dosageQuantityType":"Dose",
   "dosageQuantityNumerator":"10",
   "dosageQuantityDenominator":"20",
   "dosageUnit":{
   "unitOfMeasure":{
   "unitCode":"MGTest",
   "description":"MG description",
   "type":"Custom" }
   }
   },
   "rate":{
   "dosageRateType":"Frequency Ratio",
   "dosageRateNumerator":"2",
   "dosageRateDenominator":"3",
   "dosageRateUnit":{
   "salesforceId":"0hExx0000000001EAA" }
   }
   },
   "sourceSystem":"http://sfdc.co",
   "sourceSystemId":"567890",
   "sourceSystemModified":"2012-07-26T15:40:30.000Z" 
}
```

## Related Topics

- PatientMedicationDosage (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_PatientMedicationDosage.htm)
- Custom
  Field Value Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_custom_field_value.htm)
- FHIR Dose And Rate Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_dose_and_rate.htm)
- FHIR Codeable Concept Or ID Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_codeable_concept_or_id.htm)
