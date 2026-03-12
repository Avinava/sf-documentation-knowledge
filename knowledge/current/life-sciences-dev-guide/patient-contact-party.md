---
title: "Patient Contact Party"
domain: life-sciences-dev-guide
topic: patient-contact-party
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.867Z
estimatedTokens: 437
keywords: [Patient, Contact, Party, output, representation, parties, associated]
---

# Patient Contact Party

> The output representation of contact parties associated with a
      patient.

# Patient Contact Party

The output representation of contact parties associated with a patient.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value[] | The data stored in any custom fields as specified in the input request. | Small, 53.0 | 53.0 |
| address | FHIR Address | The address associated with the contact party, stored as ContactPointAddress records. | Small, 53.0 | 53.0 |
| contactContact​RelationId | String | The Salesforce ID of the junction record that connects the patient and the contact party. | Small, 53.0 | 53.0 |
| gender | String | The gender of the contact party. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can encounter while processing the request. | Small, 53.0 | 53.0 |
| name | FHIR Human Name | The names of the contact party, specified as PersonName records. | Small, 53.0 | 53.0 |
| organisation | FHIR Reference | The organization associated with the contact party. | Small, 53.0 | 53.0 |
| periodEnd | String | The date until when the person is a valid contact for the patient. | Small, 53.0 | 53.0 |
| periodStart | String | The date from when the person is a valid contact for the patient. | Small, 53.0 | 53.0 |
| relationship | FHIR Codeable Concept | The type of relationship between the contact party and the patient, specified with Reciprocal Role records. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the Person Account record that represents the contact party. | Small, 53.0 | 53.0 |
| telecom | FHIR Contact Point[] | The contact details of the contact party. For example, phone numbers and email addresses. | Small, 53.0 | 53.0 |

## Related Topics

- Custom Field Value (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_custom_field_value_output.htm)
- FHIR Address (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_address_output.htm)
- FHIR Human Name (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_human_name_output.htm)
- FHIR
                  Reference (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_reference_output.htm)
- FHIR Codeable Concept (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_codeable_concept_output.htm)
- FHIR Contact Point (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_fhir_contact_point_output.htm)
