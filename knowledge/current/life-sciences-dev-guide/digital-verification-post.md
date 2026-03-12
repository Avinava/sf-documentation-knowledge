---
title: "Digital Verification (POST)"
domain: life-sciences-dev-guide
topic: digital-verification-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:42.540Z
estimatedTokens: 305
keywords: [Digital, Verification, POST, Perform, records, advanced, therapy, management]
---

# Digital Verification (POST)

> Perform verification for the digital verification records within advanced therapy
    management.

# Digital Verification (POST)

Perform verification for the digital verification records within advanced therapy management.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

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

Response body for POST

[Digital Verification](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_digital_verification_output.htm "Output Representation for the digital verification API request.")

## Code Examples

```
/connect/health/advanced-therapy-management/digital-verification
```

```
https://yourInstance.salesforce.com/services/data/v60.0/connect/health/advanced-therapy-management/digital-verification
```

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
                        Credentials Input (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_user_credentials_input.htm)
- Digital Verification Input Fields Map (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_requests_digital_verification_input_fields_map.htm)
- Digital Verification (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/connect_responses_digital_verification_output.htm)
