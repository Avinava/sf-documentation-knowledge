---
title: "Buyer Profile Initiate OTP Output"
domain: chatterapi
topic: buyer-profile-initiate-otp-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.410Z
estimatedTokens: 325
keywords: [Buyer, Profile, Initiate, OTP, Output]
---

# Buyer Profile Initiate OTP Output

> Output details for the buyer profile OTP initiate request.

# Buyer Profile Initiate OTP Output

Output details for the buyer profile OTP initiate request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| identifier | String | An unique identifier associated with the OTP request. The identifier is used to verify the OTP through the Commerce Webstore My Profile Verify OTP API. | Small, 64.0 | 64.0 |
| message | String | The response message for a successful or failed initiate OTP request. | Small, 64.0 | 64.0 |
| recipient | String | The recipient of the OTP can be either the buyer's email or phone number, which is masked. | Small, 64.0 | 64.0 |
| status | String | Indicates whether the initiate OTP request succeeded or failed. | Small, 64.0 | 64.0 |

#### See Also

-   [Commerce Webstore My Profile Initiate OTP](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile_initotp.htm "Initiate the one-time password (OTP) via the specified method, such as SMS or Email. The API returns a unique identifier associated with the OTP request.")

-   [Buyer Profile Initiate OTP Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_buyer_profile_init_input.htm "Input details for a buyer profile OTP initiate request.")

## Code Examples

```
{
  "identifier": "z9jOsN8Buj8bRISupnbg",
  "message": "The update request was successful.",
  "recipient": "(***) ***-6705",
  "status": "Success"
}
```

## Related Topics

- Commerce Webstore My Profile Initiate OTP (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile_initotp.htm)
- Buyer Profile Initiate OTP Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_buyer_profile_init_input.htm)
