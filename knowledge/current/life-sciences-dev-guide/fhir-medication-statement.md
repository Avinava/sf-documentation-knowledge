---
title: "FHIR Medication Statement"
domain: life-sciences-dev-guide
topic: fhir-medication-statement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.339Z
estimatedTokens: 787
keywords: [FHIR, Medication, Statement, Input, representation]
---

# FHIR Medication Statement

> Input representation for the Medication Statement FHIR
    object.

# FHIR Medication Statement

Input representation for the Medication Statement FHIR object.

This is a record of medication that the patient is currently taking or has taken in the past. The Medication Statement FHIR resource maps to the [MedicationStatement](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_MedicationStatement.htm "Represents a record of medication that the patient is currently taking or has taken in the past. This object is available in API version 51.0 and later.") object in Salesforce.

Root XML tag

<FhirMedicationStatementInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalInformation | Custom Field Value Input[] | Additional information associated with the medication statement. | Optional | 54.0 |
| basedOn | FHIR Reference Input[] | Additional information based on which the medication statement is prepared. | Optional | 54.0 |
| category | String | The category of the medication statement. | Optional | 54.0 |
| context | FHIR Reference Input | The specific context associated with the medication. | Optional | 54.0 |
| dateAsserted | String | The date and time the medication statement is made. | Optional | 54.0 |
| derivedFrom | FHIR Reference Input[] | Additional information about where the medication statement is derived. | Optional | 54.0 |
| dosage | FHIR Dosage Input[] | Represents the dosage information set for medication. | Optional | 54.0 |
| effectiveEndDateTime | String | The stated end date and time for the medication. | Optional | 54.0 |
| effectiveStartDateTime | String | The stated start date and time for the medication. | Optional | 54.0 |
| identifier | FHIR Identifier Input[] | Set an identifier value to the medication statement. | Optional | 54.0 |
| informationSource | FHIR Reference Input | Set who or where the information in the medication statement came from. | Optional | 54.0 |
| medication | FHIR Medication Resource Input | Represents detailed information about different medications. | Required | 54.0 |
| partOf | FHIR Reference Input[] | Validates only references of medication dispense, medication statement, procedure, observation are passed. | Optional | 54.0 |
| reasonCode | FHIR Codeable Concept Or ID Input[] | The system-defined code that specifies the reason for the medication. | Optional | 54.0 |
| reasonReference | FHIR Reference Input[] | The observation, condition, or diagnostic report that warranted the medication. | Optional | 54.0 |
| sourceSystem | String | The name of the system this record came from. | Optional | 54.0 |
| sourceSystemId | String | The ID of this record in its source system. | Optional | 54.0 |
| sourceSystemModified | String | The date on which this item was last changed in the source system. | Optional | 54.0 |
| status | String | The status of the medication in this statement.Possible values are:ActiveCompletedEntered-in-ErrorIntendedNot-TakenOn-HoldStoppedUnknown | Required | 54.0 |
| statusReason | FHIR Codeable Concept Or ID Input[] | The reason for the medication status. | Optional | 54.0 |

## Related Topics

- MedicationStatement (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/hc_r4_api_objects_MedicationStatement.htm)
- Custom Field Value Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_custom_field_value.htm)
- FHIR Reference Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_reference.htm)
- FHIR
                        Reference Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_reference.htm)
- FHIR
                          Reference Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_reference.htm)
- FHIR Dosage Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_dosage.htm)
- FHIR Identifier Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_identifier.htm)
- FHIR
                            Reference Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_reference.htm)
- FHIR Medication Resource Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_medication_resource.htm)
- FHIR Codeable Concept Or ID Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_codeable_concept_or_id.htm)
