---
title: "Patients (GET, POST, PUT)"
domain: health-cloud-object-reference
topic: patients-get-post-put
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:33.265Z
estimatedTokens: 1092
keywords: [Patients, POST, PUT, Retrieve, FHIR, patient, resource, record, rather, making, multiple, separate, calls, objects, Salesforce]
---

# Patients (GET, POST, PUT)

> Retrieve the FHIR patient resource record details. Create or update
      a patient record rather than making multiple separate calls to the objects in
    Salesforce.

# Patients (GET, POST, PUT)

Retrieve the FHIR patient resource record details. Create or update a patient record rather than making multiple separate calls to the objects in Salesforce.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=health_cloud_object_reference)

#### Note

We recommend limiting the number of concurrent requests in your org to five. If you exceed this number, the Patients API request can fail.

The update request deletes all child records associated with a patient and recreates them. For example, when you update a patient record having three PersonName records and five Identifier records as child records, the API first deletes all the PersonName and Identifier child records and then reinserts them. If something goes wrong while updating data, the API rolls back to prevent leaving orphan records behind.

Resource for POST

```

```

Resource for GET, PUT

```

```

Example URI

```

```

Available version

53.0

Requires Chatter

No

HTTP methods

GET, POST, PUT

Response body for GET

[Patient Get Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_get_output.htm "Output representation of details of a patient record.")

Request body for POST and PUT

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| active | Boolean | Indicates whether the patient record is active or not. | Optional | 53.0 |
| additional​Information | Custom Field Value Input[] | Adds additional information to any fields not mapped in this API. | Optional | 53.0 |
| address | FHIR Address Input[] | The address of the patient. | Optional | 53.0 |
| birthDate | String | The date of birth of the patient. | Optional | 53.0 |
| communication | Patient Communication Language Input[] | The languages of communication associated with the patient. | Optional | 53.0 |
| contact | Contact Party For Patient Input[] | The contact associated with the patient record, modeled as a person account. Contacts are connected to patients using the Contact​Contact​Relation__c junction object. | Optional | 53.0 |
| deceased​​​DateTime | String | The date and time of the patient’s death. | Optional | 53.0 |
| gender | String | The gender of the patient. | Optional | 53.0 |
| general​Practitioner | FHIR Reference Input[] | The practitioners associated with the patient, modeled as either person accounts or Contacts and HealthcareProvider records. Practitioners are connected to patients using the Contact​Contact​Relation__c junction object​. | Optional | 53.0 |
| identifier | FHIR Identifier Input[] | The identifier information for the patient, stored as Identifier records that reference the patient record using their Identifier​.Parent​RecordId field. | Optional | 53.0 |
| managing​Organisation | FHIR Reference Input | The organization that manages the patient record, referenced using a lookup to the Account object. Managing organizations are connected to patients using the Account​Contact​Relation​ junction object​. | Optional | 53.0 |
| maritalStatus | String | The current marital status of the patient. | Optional | 53.0 |
| multiple​BirthInteger | Integer | The birth order of the patient, in the event that the patient was a part of a multiple birth event. | Optional | 53.0 |
| name | FHIR Human Name Input[] | The names of the patient, stored as a PersonName record. | Optional | 53.0 |
| sourceSystemId | String | The source system ID associated with a patient record. | Optional | 53.0 |
| telecom | FHIR Contact Point Input[] | Contact details of the patient, such as phone numbers and email addresses. These contact details are stored as Contact​Point​Phone records that reference the patient records using their Contact​Point​Phone​.ParentId field. | Optional | 53.0 |

Response body for POST

[Patient Upsert Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_upsert_output.htm "Output representation of result after a Patient FHIR resource is created.")

Response body for PUT

[Patient Update Output](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_update_output.htm "Output representation of result after a Patient FHIR resource is updated.")

## Code Examples

```
/connect/health/patients
```

```
/connect/health/patients/${patientId}
```

```
/services/data/v53.0/connect/health/patients/001x0000005CQbtAAG
```

```
{
  "active": true,
  "identifier": [
    {
      "assigner": {
        "referenceResource": "Organization",
        "referenceId": "Org12345XYZ"
      },
      "type": {
        "text": "Passport Number",
        "coding": [
          {
            "display": "Passport number",
            "code": "PPN",
            "isActive": true,
            "use": "Identifier"
          }
        ]
      },
      "value": "ABCD5678XYZ"
    }
  ],
  "name": [
    {
      "use": "alias",
      "text": "Charles Green",
      "family": "Green",
      "given": "Charles",
      "prefix": "Mr.",
      "suffix": "Sr."
    }
  ],
  "communication": [
    {
      "language": "English",
      "preferenceRank": 1
    }
  ],
  "address": [
    {
      "use": "temp",
      "type": "postal",
      "line": "Green Household"
    }
  ],
  "telecom": [
    {
      "system": "email",
      "value": "a@bc.com"
    }
  ],
  "gender": "male",
  "birthDate": "2000-09-12T18:13:41Z",
  "maritalStatus": "married",
  "contact": [
    {
      "relationship": {
        "coding": [
          {
            "display": "Partner"
          }
        ]
      },
      "name": {
        "use": "Temp",
        "text": "Shawna Green",
        "family": "Green",
        "given": "Shawna",
        "prefix": "Mrs.",
        "suffix": "Jr."
      },
      "telecom": [
        {
          "system": "email",
          "value": "c@de.com"
        },
        {
          "system": "phone",
          "value": "12345678",
          "use": "temp",
          "rank": 1
        }
      ],
      "address": {
        "use": "temp",
        "type": "postal",
        "line": "Green Household"
      }
    }
  ],
  "generalPractitioner": [
    {
      "referenceResource": "Practitioner",
      "referenceId": "PRAC789XYZ",
      "relationship": "Plastic Surgeon"
    }
  ],
  "managingOrganisation": {
    "referenceResource": "Organization",
    "referenceId": "MI9007GBE"
  }
}
```

## Related Topics

- Patient Get Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_get_output.htm)
- Custom Field Value Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_custom_field_value.htm)
- FHIR Address Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_address.htm)
- Patient Communication Language
                        Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_patient_communication_language.htm)
- Contact Party For Patient
                      Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_patient_contact_party.htm)
- FHIR Reference Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_reference.htm)
- FHIR Identifier Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_identifier.htm)
- FHIR Human Name Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_human_name.htm)
- FHIR Contact Point Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_contact_point.htm)
- Patient Upsert Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_upsert_output.htm)
