---
title: "Create or Update Care Authorization Request Result"
domain: health-cloud-object-reference
topic: create-or-update-care-authorization-request-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.443Z
estimatedTokens: 189
keywords: [Care, Authorization, Result, services, review]
---

# Create or Update Care Authorization Request Result

> Response to create or update care services review
    request.

# Create or Update Care Authorization Request Result

Response to create or update care services review request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Care Authorization returned code | Small, 46.0 | 46.0 |
| isSuccess | Boolean | Flag to indicate if the request was successful. | Small, 46.0 | 46.0 |
| message | String | If there is any error, this property contains the error message. | Small, 46.0 | 46.0 |
| outputResults | Care Authorization Request[] | Care Authorization Request results output | Small, 46.0 | 46.0 |
| result | Care Authorization Request Result[] | Care Authorization Request result | Small, 46.0 | 46.0 |

## Code Examples

```
{
  "code": "SUCCESS",
  "isSuccess": true,
  "result": [
    {
      "created": true,
      "id": "0Umxx0000004FA9CAM",
      "objectType": "CareRequest",
      "relatedRecords": [
        {
          "created": true,
          "id": "0VDxx0000004DwLGAU",
          "objectType": "CareRequestDrug"
        },
        {
          "created": true,
          "id": "0VKxx0000004DwMGAU",
          "objectType": "CareRequestItem"
        },
        {
          "created": true,
          "id": "0VKxx0000004DwNGAU",
          "objectType": "CareRequestItem"
        },
        {
          "created": true,
          "id": "0VCxx0000004DwMGAU",
          "objectType": "CareDiagnosis"
        },
        {
          "created": true,
          "id": "0VCxx0000004DwNGAU",
          "objectType": "CareDiagnosis"
        },
        {
          "created": true,
          "id": "06Hxx0000004DWbEAM",
          "objectType": "CareRequestReviewer"
        },
        {
          "created": true,
          "id": "06Hxx0000004DWcEAM",
          "objectType": "CareRequestReviewer"
        },
        {
          "created": true,
          "id": "06Hxx0000004DWdEAM",
          "objectType": "CareRequestReviewer"
        },
        {
          "created": true,
          "id": "06Hxx0000004DWeEAM",
          "objectType": "CareRequestReviewer"
        },
        {
          "created": true,
          "id": "06Hxx0000004DWfEAM",
          "objectType": "CareRequestReviewer"
        }
      ]
    }
  ]
}
```

## Related Topics

- Care Authorization Request (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_output.htm)
- Care Authorization Request Result (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_care_authorization_request_resul.htm)
