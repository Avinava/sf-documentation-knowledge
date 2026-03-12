---
title: "Patient Input"
domain: health-cloud-object-reference
topic: patient-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.113Z
estimatedTokens: 120
keywords: [Patient, Input, containing, data]
---

# Patient Input

> Input containing data for a single patient.

# Patient Input

Input containing data for a single patient.

Root XML tag

<patientData>

JSON example

```

```

Properties

| Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| careProgramProductData | Enrollee Product Input[] | List of all objects that contain data related to the enrollee’s care program product. | No | 46.0 |
| patientId | String | ID of the patient as configured in the care system field mappings. | Yes | 46.0 |

## Code Examples

```
{
      "patientId": "patient2",
      "careProgramProductData": [
        {
          "providerId": "provider3",
          "productId": "product4"
        }
      ]
    }
```

## Related Topics

- Enrollee Product Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_enrollee_product_input.htm)
