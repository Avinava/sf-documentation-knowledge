---
title: "Buyer Profile Verify Input"
domain: chatterapi
topic: buyer-profile-verify-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.113Z
estimatedTokens: 237
keywords: [Buyer, Profile, Verify, Input]
---

# Buyer Profile Verify Input

> Input details for the buyer profile verify request.

# Buyer Profile Verify Input

Input details for the buyer profile verify request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The one-time-password (OTP) to be verified. This is generated through the Commerce Webstore My Profile Initiate OTP API. | Required | 64.0 |
| identifier | String | An identifier associated with the OTP. This is generated through the Commerce Webstore My Profile Initiate OTP API. | Required | 64.0 |

#### See Also

-   [Commerce Webstore My Profile Verify OTP](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile_verifyotp.htm "Validate the one-time-password (OTP) provided by the buyer.")

-   [Buyer Profile Verify Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_profile_verify_output.htm "Output details for the buyer profile verify request.")

## Code Examples

```
{
  "code": "87XXXX",
  "identifier": "z9jOsN8Buj8bRISupnbg"
}
```

## Related Topics

- Commerce Webstore My Profile Verify OTP (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile_verifyotp.htm)
- Buyer Profile Verify Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_profile_verify_output.htm)
