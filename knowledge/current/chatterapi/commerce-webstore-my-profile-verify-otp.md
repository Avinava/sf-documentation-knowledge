---
title: "Commerce Webstore My Profile Verify OTP"
domain: chatterapi
topic: commerce-webstore-my-profile-verify-otp
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.378Z
estimatedTokens: 575
keywords: [Commerce, Webstore, Profile, Verify, OTP, Validate, one-time-password, provided, buyer]
---

# Commerce Webstore My Profile Verify OTP

> Validate the one-time-password (OTP) provided by the buyer.

# Commerce Webstore My Profile Verify OTP

Validate the one-time-password (OTP) provided by the buyer.

The OTP is initiated through the [Commerce Webstore My Profile Initiate OTP](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile_initotp.htm "Initiate the one-time password (OTP) via the specified method, such as SMS or Email. The API returns a unique identifier associated with the OTP request.") API, which is triggered when there is a change in the buyer's email or phone number.

This API must be called before updating the buyer's email and phone number using the [Commerce Webstore My Profile](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile.htm "Retrieve the buyer's account details. Update buyer account details. The API retrieves or updates the registered buyer’s details by identifying the buyer user’s ID within the logged-in context.") PATCH method. Upon successful verification, the buyer's email or phone number is updated, and the corresponding verification fields, including hasUserVerifiedEmail or hasUserVerifiedPhoneNumber are set to true in the API response.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The one-time-password (OTP) to be verified. This is generated through the Commerce Webstore My Profile Initiate OTP API. | Required | 64.0 |
| identifier | String | An identifier associated with the OTP. This is generated through the Commerce Webstore My Profile Initiate OTP API. | Required | 64.0 |

Response body for POST

[Buyer Profile Verify Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_profile_verify_output.htm "Output details for the buyer profile verify request.")

#### See Also

-   [Buyer Profile Verify Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_buyer_profile_verify_input.htm "Input details for the buyer profile verify request.")

-   [Buyer Profile Verify Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_profile_verify_output.htm "Output details for the buyer profile verify request.")

## Code Examples

```
/commerce/webstores/webstoreId/myprofile/actions/verify
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores/0ZExx000000005rGAA/myprofile/actions/verify
```

```
{
  "code": "87XXXX",
  "identifier": "z9jOsN8Buj8bRISupnbg"
}
```

## Related Topics

- Commerce Webstore My Profile Initiate OTP (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile_initotp.htm)
- Commerce Webstore My Profile (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile.htm)
- Buyer Profile
              Verify Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_profile_verify_output.htm)
- Buyer Profile Verify Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_buyer_profile_verify_input.htm)
- Buyer Profile Verify Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_profile_verify_output.htm)
