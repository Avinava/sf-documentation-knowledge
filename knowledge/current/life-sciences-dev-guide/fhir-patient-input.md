---
title: "FHIR Patient Input"
domain: life-sciences-dev-guide
topic: fhir-patient-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.347Z
estimatedTokens: 751
keywords: [FHIR, Patient, Input, representation, resource]
---

# FHIR Patient Input

> Input representation for the FHIR patient resource.

# FHIR Patient Input

Input representation for the FHIR patient resource.

The Patient FHIR resource maps to the [Patient](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_fhir_Patient.htm "The Patient FHIR resource maps to the Account and Contact objects in Salesforce​. Patients are modeled using Person Accounts.") objects in Salesforce​. Patients are modeled using Person Accounts.

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

- Patient (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/map_fhir_Patient.htm)
- Custom Field Value Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_custom_field_value.htm)
- FHIR Address Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_address.htm)
- Patient Communication Language
                        Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_patient_communication_language.htm)
- Contact Party For Patient
                      Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_patient_contact_party.htm)
- FHIR Reference Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_reference.htm)
- FHIR Identifier Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_identifier.htm)
- FHIR Human Name Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_human_name.htm)
- FHIR Contact Point Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_fhir_contact_point.htm)
