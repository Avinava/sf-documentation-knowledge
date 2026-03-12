---
title: "Enrollments"
domain: life-sciences-dev-guide
topic: enrollments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:43.514Z
estimatedTokens: 534
keywords: [Enrollments, Enroll, multiple, patients, care, program]
---

# Enrollments

> Enroll multiple patients into a care program.

# Enrollments

Enroll multiple patients into a care program.

Resource

```

```

Available version

46.0

Authentication

Use OAuth to connect to Salesforce and get an access token. Pass the access token in your requests. For more information, see [Connect to Connect REST API Using OAuth](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/quickstart_connecting.htm "HTML (New Window)").

HTTP methods

POST

Request body

Root XML tag

<careProgramEnrollmentData>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| patientData | Patient Input[] | List of all objects that contain patients data. You can have up to 200 items in this list. | Yes | 46.0 |
| programId | String | ID of the care program as configured in the care system field mappings. | Yes | 46.0 |
| sourceSystem | String | Name of the source system as configured in the care system field mappings. | Yes | 46.0 |

Response body

[Program Enrollment Result](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_program_enrollment_result.htm "Result containing details of all patient enrollment status. If there is success, it contains id of new records created for each patient.")

Prerequisites

Ensure that you have configured the following care system field mapping configured in **Setup** | **Care System Field Mappings**:

| Name | Role | Target Object |
| --- | --- | --- |
| Care_Program | Not Applicable | CareProgram |
| Patient | Patient | Account |
| Product | Not Applicable | Product2 |
| Provider | Service Provider | Account |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=life_sciences_dev_guide)

#### Note

Ensure that you have configured appropriate external ID field and source system for each of these mappings.

For more information, see [CareSystemFieldMapping](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caresystemfieldmapping.htm "Represents a mapping from source system fields to Salesforce target entities and attributes.").

## Code Examples

```
/services/data/vXX.X/connect/health/care-programs/enrollments
```

```
{
  "programId": "programId1",
  "sourceSystem": "source-system-name",
  "patientData": [
    {
      "patientId": "patient1",
      "careProgramProductData": [
        {
          "providerId": "provider1",
          "productId": "product1"
        },
        {
          "providerId": "provider1",
          "productId": "product2"
        }
      ]
    },
    {
      "patientId": "patient2",
      "careProgramProductData": [
        {
          "providerId": "provider3",
          "productId": "product4"
        }
      ]
    }
  ]
}
```

## Related Topics

- Patient Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_patient_input.htm)
- Program Enrollment Result (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_program_enrollment_result.htm)
- CareSystemFieldMapping (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_objects_caresystemfieldmapping.htm)
