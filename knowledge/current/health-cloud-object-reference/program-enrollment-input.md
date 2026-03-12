---
title: "Program  Enrollment Input"
domain: health-cloud-object-reference
topic: program-enrollment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.132Z
estimatedTokens: 152
keywords: [Program, Enrollment, Input, care]
---

# Program  Enrollment Input

> Request body for care program enrollment.

# Program Enrollment Input

Request body for care program enrollment.

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

## Code Examples

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

- Patient Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_patient_input.htm)
