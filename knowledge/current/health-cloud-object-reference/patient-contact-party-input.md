---
title: "Patient Contact Party Input"
domain: health-cloud-object-reference
topic: patient-contact-party-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.109Z
estimatedTokens: 338
keywords: [Patient, Contact, Party, Input, representation]
---

# Patient Contact Party Input

> The input representation of the patient contact
    party.

# Patient Contact Party Input

The input representation of the patient contact party.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Information | Custom Field Value Input[] | Adds additional information to any fields not mapped in this API. | Optional | 53.0 |
| address | FHIR Address Input | The address associated with the contact party, stored as ContactPointAddress records. | Optional | 53.0 |
| gender | String | The gender of the contact party. | Optional | 53.0 |
| name | FHIR Human Name Input | The name of the contact party, stored as PersonName records. | Optional | 53.0 |
| organisation | FHIR Reference Input | The organization associated with the contact party. | Optional | 53.0 |
| periodEnd | String | The date until when the contact is associated with the patient. | Optional | 53.0 |
| periodStart | String | The date from when the contact is associated with the patient. | Optional | 53.0 |
| relationship | FHIR Codeable Concept Input | The type of relationship between the contact party and the patient, recorded using a reference to Reciprocal Roles. | Optional | 53.0 |
| telecom | FHIR Contact Point Input[] | The telecom information for the contact party, stored as ContactPointPhone records. | Optional | 53.0 |

## Code Examples

```
{
   "PatientContactParty": [ {
      "relationship": {
        "coding": [
          {
            "display": "relative"
          }
        ]
      },
      "name": {
        "use": "official",
        "text": "Shawna Green",
        "family": "Green",
        "given": "Shawna",
        "prefix": "Mrs.",
        "suffix": "Sr."
      },
      "telecom": [
        {
          "system": "email",
          "value": "c@d3.com"
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
      },
      "organization": {
        "referenceResource": "Green Family Business",
        "referenceId": "XYZId"
      },
      "gender": "female",
      "periodStart": "1998-05-26T15:40:30.000Z",
      "periodEnd": "2021-08-09T15:40:30.000Z",
    } ]
}
```

## Related Topics

- Custom Field Value Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_custom_field_value.htm)
- FHIR Address Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_address.htm)
- FHIR Human Name Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_human_name.htm)
- FHIR Reference Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_reference.htm)
- FHIR Codeable Concept Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_codeable_concept.htm)
- FHIR Contact Point Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_fhir_contact_point.htm)
