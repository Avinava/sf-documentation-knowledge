---
title: "FHIR Patient"
domain: life-sciences-dev-guide
topic: fhir-patient
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.825Z
estimatedTokens: 673
keywords: [FHIR, Patient, output, representation, stored, Salesforce, input]
---

# FHIR Patient

> The output representation of the patient stored in Salesforce, as
      specified in the input request.

# FHIR Patient

The output representation of the patient stored in Salesforce, as specified in the input request.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| active | Boolean | Indicates whether the patient is active or not. | Small,53.0 | 53.0 |
| additional​Information | Custom Field Value Output[] | The data stored in any custom fields as specified in the input request. | Small, 53.0 | 53.0 |
| address | FHIR AddresOutput[] | The addresses of the patient, stored as contact point address records. | Small, 53.0 | 53.0 |
| birthDate | String | The date of birth of the patient, recorded in Date format. | Small, 53.0 | 53.0 |
| communication | Patient Communication Language[] | The languages of communication associated with the patient, recorded in the PersonLanguage object. | Small, 53.0 | 53.0 |
| contact | Patient Contact Party[] | The contact party associated with the patient record. Contacts are connected to patients using a Contact​Contact​Relation__c junction record. | Small, 53.0 | 53.0 |
| deceasedDateTime | String | The date and time of the patient’s death. | Small, 53.0 | 53.0 |
| gender | String | The gender of the patient. | Small, 53.0 | 53.0 |
| general​Practitioner | FHIR Reference[] | The practitioner associated with the patient. Practitioners are connected to patients using a Contact​Contact​Relation__c junction record​. | Small, 53.0 | 53.0 |
| identifier | FHIR Identifier[] | The identifier information for the patient, stored as Identifier records that reference the patient record using their Identifier​.Parent​RecordId field. | Small, 53.0 | 53.0 |
| managing​Organisation | FHIR Reference | The organization that manages the patient recorded. Managing organizations are connected to patients using the Account​Contact​Relation​ junction object​. | Small, 53.0 | 53.0 |
| maritalStatus | String | The current marital status of the patient. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| multipleBirthInteger | Integer | The birth order of the patient in a multiple-birth event. | Small, 53.0 | 53.0 |
| name | FHIR Human Name[] | The person name of the patient. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the Person Account record that represents the patient. | Small, 53.0 | 53.0 |
| sourceSystemId | String | The record identifier of the patient’s record in its source system. | Small, 53.0 | 53.0 |
| telecom | FHIR Contact Point[] | The contact details of the patient. For example, phone numbers and email addresses. | Small, 53.0 | 53.0 |

## Related Topics

- Custom Field Value Output (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_custom_field_value_output.htm)
- FHIR AddresOutput (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_address_output.htm)
- Patient Communication Language (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_patient_communication_language_output.htm)
- Patient Contact Party (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_patient_contact_party_output.htm)
- FHIR
                  Reference (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_reference_output.htm)
- FHIR Identifier (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_identifier_output.htm)
- FHIR Human Name (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_human_name_output.htm)
- FHIR Contact Point (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_contact_point_output.htm)
