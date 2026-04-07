---
title: "Digital Verification Input"
domain: health-cloud-object-reference
topic: digital-verification-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:40.674Z
estimatedTokens: 220
keywords: [Digital, Verification, perform, tasks, records]
---

> Input representation of the request to perform verification tasks for digital
    verification records.

# Digital Verification Input

Input representation of the request to perform verification tasks for digital verification records.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| digital​Verification​Id | String | ID of the digital verification record for which the digital verification is to be performed. | Required | 60.0 |
| sessionId | String | ID that tracks the session established through a connected app or remote system in Salesforce. | Optional | 60.0 |
| user​Credentials | User Credentials Input | Authentication credentials of the user performing the digital verification. | Required | 60.0 |
| digital​Verification​InputFields​Map | Digital Verification Input Fields Map | Map structure holding key-value pairs of digital verification input fields. | Required | 60.0 |

## Code Examples

```
{
  "digitalVerificationInputFieldsMap": {
    "VerificationStatusCategory": "Completed",
    "Comment": "done successfully",
    "VerificationSite": "USA"
  },
  "userCredentials": {
    "loginId": "sanampreet.singh@salesforce.com",
    "password": "123456"
  },
  "digitalVerificationId": "15Exx0000004CAeEAM",
sessionId:12Exz0022004CAfABM
}
```

## Related Topics

- User
                        Credentials Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_user_credentials_input.htm)
- Digital Verification Input Fields Map (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_digital_verification_input_fields_map.htm)
