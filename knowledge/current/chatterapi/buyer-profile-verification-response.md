---
title: "Buyer Profile Verification Response"
domain: chatterapi
topic: buyer-profile-verification-response
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.420Z
estimatedTokens: 240
keywords: [Buyer, Profile, Verification]
---

# Buyer Profile Verification Response

> Response details for the buyer profile verification request.

# Buyer Profile Verification Response

Response details for the buyer profile verification request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| identifier | String | An identifier for the OTP generated through the Commerce Webstore My Profile Initiate OTP API. The Commerce Webstore My Profile Verify OTP API uses this identifier to verify the OTP. | Small, 64.0 | 64.0 |
| message | String | The response message for a successful or failed update request. | Small, 64.0 | 64.0 |
| method | String | The mode used for sending one-time password (OTP). Possible values are:EmailSms | Small, 64.0 | 64.0 |
| recipient | String | The recipient of the one-time password (OTP) can be either the buyer's email or phone number, which can be masked. | Small, 64.0 | 64.0 |
| status | String | Indicates whether the request succeeded or failed. | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "identifier": "z9jOsN8Buj8bRISupnbg",
  "message": "The update request was successful.",
  "method": "Sms",
  "recipient": "(***) ***-6705",
  "status": "Success"
}
```
