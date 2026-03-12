---
title: "Buyer Profile Verify Output"
domain: chatterapi
topic: buyer-profile-verify-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.423Z
estimatedTokens: 231
keywords: [Buyer, Profile, Verify, Output]
---

# Buyer Profile Verify Output

> Output details for the buyer profile verify request.

# Buyer Profile Verify Output

Output details for the buyer profile verify request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| identifier | String | An unique identifier for the one-time-password (OTP). | Small, 64.0 | 64.0 |
| message | String | The response message for a successful or failed verification request. | Small, 64.0 | 64.0 |
| status | String | The status of the verification request. | Small, 64.0 | 64.0 |

#### See Also

-   [Commerce Webstore My Profile Verify OTP](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile_verifyotp.htm "Validate the one-time-password (OTP) provided by the buyer.")

-   [Buyer Profile Verify Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_buyer_profile_verify_input.htm "Input details for the buyer profile verify request.")

## Code Examples

```
{
  "identifier": "z9jOsN8Buj8bRISupnbg",
  "message": "The verification request was successful.",
  "status": "Success"
}
```

## Related Topics

- Commerce Webstore My Profile Verify OTP (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile_verifyotp.htm)
- Buyer Profile Verify Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_buyer_profile_verify_input.htm)
