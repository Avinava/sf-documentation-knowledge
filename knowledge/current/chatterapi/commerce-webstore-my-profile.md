---
title: "Commerce Webstore My Profile"
domain: chatterapi
topic: commerce-webstore-my-profile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.370Z
estimatedTokens: 567
keywords: [Commerce, Webstore, Profile, Retrieve, buyer's, account, buyer, API, retrieves, updates, registered, buyer’s, identifying, user’s, logged-in]
---

# Commerce Webstore My Profile

> Retrieve the buyer's account details. Update buyer account
      details. The API retrieves or updates the registered buyer’s details by identifying the
    buyer user’s ID within the logged-in context.

# Commerce Webstore My Profile

Retrieve the buyer's account details. Update buyer account details. The API retrieves or updates the registered buyer’s details by identifying the buyer user’s ID within the logged-in context.

The Commerce Webstore My Profile Initiate OTP and Commerce Webstore My Profile Verify OTP APIs integrate with the myprofile API to securely manage updates to a buyer's profile information—specifically their email and phone number. These APIs enforce re-authentication before any changes are made, ensuring that only authorized users can modify contact details and that the new information is verified as belonging to the buyer.

Resource

```

```

Resource example

```

```

Available version

52.0

HTTP methods

GET, PATCH

GET is supported in API version 52.0 and later.

PATCH is supported in API version 59.0 and later.

Request body for PATCH

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

Response body for PATCH

[Buyer Profile Update Details](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_profile_patch.htm "Output details for a buyer profile update request.")

## Code Examples

```
/commerce/webstores/${webstoreId}/myprofile
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/webstores/0ZExx000000005rGAA/myprofile
```

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
- Buyer Profile Update Details (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_profile_patch.htm)
