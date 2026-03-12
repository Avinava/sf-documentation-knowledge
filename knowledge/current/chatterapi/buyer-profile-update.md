---
title: "Buyer Profile Update"
domain: chatterapi
topic: buyer-profile-update
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.416Z
estimatedTokens: 330
keywords: [Buyer, Profile, Output]
---

# Buyer Profile Update

> Output details for a buyer profile update request.

# Buyer Profile Update

Output details for a buyer profile update request.

JSON example

Here's an example of a response when two-factor authentication is disabled:

```

```

Here's an example of a response when two-factor authentication is enabled:

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| email | String | The email of the buyer. | Medium, 59.0 | 59.0 |
| firstName | String | The first name of the buyer. | Small, 59.0 | 59.0 |
| isEmailVerified | Boolean | Indicates whether the email of the buyer is verified (true) or not (false). | Small, 64.0 | 64.0 |
| isPhoneVerified | Boolean | Indicates whether the phone number of the buyer is verified (true) or not (false). | Small, 64.0 | 64.0 |
| lastName | String | The last name of the buyer. | Small, 59.0 | 59.0 |
| phoneNumber | String | The phone number of the buyer. | Small, 59.0 | 59.0 |
| userName | String | The user name of the buyer in the Salesforce org, such as user@mycompany.com. | Small, 59.0 | 59.0 |
| verificationResponse | Buyer Profile Verification Response | The response details for an email address or phone number update request. This field is populated only if two-factored authentication is enabled in your Salesforce org. | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "firstName": "Morton",
  "isEmailVerified": "true",
  "isPhoneVerified": "true",
  "lastName": "Strosin",
  "email": "Ma**********@vi*****.info",
  "phoneNumber": "********7740",
  "userName": "morton.Strosin10@salesforce.com",
  "verificationResponse": {}
}
```

```
{
  "firstName": "Morton",
  "isEmailVerified": "true",
  "isPhoneVerified": "true",
  "lastName": "Strosin",
  "email": "Ma**********@vi*****.info",
  "phoneNumber": "********7740",
  "userName": "morton.Strosin10@salesforce.com",
  "verificationResponse": {
    "identifier": "z9jOsN8Buj8bRISupnbg",
    "message": "Ok",
    "method": "Sms",
    "recipient": "(***) ***-6705",
    "status": "Success"
  }
}
```

## Related Topics

- Buyer Profile
                  Verification Response (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_buyer_profile_verification_response.htm)
