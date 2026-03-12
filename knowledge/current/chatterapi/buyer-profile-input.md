---
title: "Buyer Profile Input"
domain: chatterapi
topic: buyer-profile-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.107Z
estimatedTokens: 403
keywords: [Buyer, Profile, Input]
---

# Buyer Profile Input

> Input details for the buyer profile update request.

# Buyer Profile Input

Input details for the buyer profile update request.

JSON examples

Here's an example of a request that includes both email and phone number updates when two-factor authentication is disabled:

```

```

Here's an example of a request that includes an email update when two-factor authentication is enabled:

```

```

Here's an example of a request that includes a phone number update when two-factor authentication is enabled:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| email | String | The email address of the buyer. | Optional | 59.0 |
| firstName | String | The first name of the buyer. | Optional | 59.0 |
| lastName | String | The last name of the buyer. | Optional | 59.0 |
| phoneNumber | String | The phone number of the buyer. | Optional | 59.0 |
| verification​Input | Buyer Profile Verification Input | The verification details required to update either the buyer's email or phone number. This update process applies only when two-factor authentication is enabled in your Salesforce org.NoteWhen two-factor authentication is disabled in your org, you can update both the buyer's email and phone number within a single API request. | Required | 64.0 |

#### See Also

-   [Commerce Webstore My Profile](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile.htm "Retrieve the buyer's account details. Update buyer account details. The API retrieves or updates the registered buyer’s details by identifying the buyer user’s ID within the logged-in context.")

## Code Examples

```
{
  "firstName": "Morton",
  "lastName": "Strosin",
  "email": "Ma**********@vi*****.info",
  "phoneNumber": "********7740",
  "verificationInput": {}
}
```

```
{
  "firstName": "Morton",
  "lastName": "Strosin",
  "email": "Ma**********@vi*****.info",
  "verificationInput": {
    "reCaptchaToken": "03AFcWe45uIQZjl6LznRTupQwTySasFVbN7_8Pj9",
    "stepUpVerificationIdentifier": "hjdfghjdfgj768"
  }
}
```

```
{
  "firstName": "Morton",
  "lastName": "Strosin",
  "phoneNumber": "********7740",
  "verificationInput": {
    "reCaptchaToken": "03AFcWe45uIQZjl6LznRTupQwTySasFVbN7_8Pj9",
    "stepUpVerificationIdentifier": "hjdfghjdfgj768"
  }
}
```

## Related Topics

- Buyer Profile
                        Verification Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_buyer_profile_verification_input.htm)
- Commerce Webstore My Profile (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile.htm)
