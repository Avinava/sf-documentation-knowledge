---
title: "Patient Get"
domain: health-cloud-object-reference
topic: patient-get
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.703Z
estimatedTokens: 655
keywords: [Patient, Output, representation, record]
---

# Patient Get

> Output representation of details of a patient record.

# Patient Get

Output representation of details of a patient record.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| active | Boolean | Indicates whether the patient record is active or not. | Small, 53.0 | 53.0 |
| address | FHIR Address[] | The addresses of the patient, stored as contact point address records. | Small, 53.0 | 53.0 |
| birthDate | String | The date of birth of the patient, recorded in Date format. | Small, 53.0 | 53.0 |
| communication | Patient Communication Language[] | The languages of communication associated with the patient, recorded in the PersonLanguage object. | Small, 53.0 | 53.0 |
| contact | Patient Contact Party[] | The contact party associated with the patient record. Contacts are connected to patients using a Contact​Contact​Relation__c junction record. | Small, 53.0 | 53.0 |
| deceasedDateTime | String | The date and time of the patient’s death. | Small, 53.0 | 53.0 |
| gender | String | The gender of the patient. | Small, 53.0 | 53.0 |
| general​Practitioner | FHIR Reference[] | The practitioner associated with the patient. Practitioners are connected to patients using a Contact​Contact​Relation__c junction record​. | Small, 53.0 | 53.0 |
| identifier | FHIR Identifier[] | The identifier information for the patient, stored as Identifier records that reference the patient record using their Identifier​.Parent​RecordId field. | Small, 53.0 | 53.0 |
| managing​Organisation | FHIR Reference[] | The organization that manages the patient recorded. Managing organizations are connected to patients using the Account​Contact​Relation​ junction object​. | Small, 53.0 | 53.0 |
| maritalStatus | String | The current marital status of the patient. | Small, 53.0 | 53.0 |
| message | String | A message with any errors that can have been encountered while processing the request. | Small, 53.0 | 53.0 |
| multiple​BirthInteger | Integer | The birth order of the patient in a multiple-birth event. | Small, 53.0 | 53.0 |
| name | FHIR Human Name[] | The person name of the patient. | Small, 53.0 | 53.0 |
| resourceType | String | Reserved for future use. | Small, 53.0 | 53.0 |
| salesforceId | String | The Salesforce ID of the Person Account record that represents the patient. | Small, 53.0 | 53.0 |
| sourceSystemId | String | The record identifier of the patient’s record in its source system. | Small, 53.0 | 53.0 |
| telecom | FHIR Contact Point[] | The contact details of the patient, including phone numbers and email addresses. | Small, 53.0 | 53.0 |

## Code Examples

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
  "sourceSystemId":"567890",
  "deceasedDateTime": "2023-02-10T10:40:13.000Z",
  "salesforceId":"0NBRM0000004CGx4AM",
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

- FHIR Address (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_address_output.htm)
- Patient Communication
                      Language (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_communication_language_output.htm)
- Patient Contact Party (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_patient_contact_party_output.htm)
- FHIR
                        Reference (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_reference_output.htm)
- FHIR Identifier (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_identifier_output.htm)
- FHIR Human Name (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_human_name_output.htm)
- FHIR Contact Point (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_fhir_contact_point_output.htm)
