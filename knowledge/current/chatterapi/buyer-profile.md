---
title: "Buyer Profile"
domain: chatterapi
topic: buyer-profile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.407Z
estimatedTokens: 309
keywords: [Buyer, Profile, fetch]
---

# Buyer Profile

> Details for a buyer profile fetch request.

# Buyer Profile

Details for a buyer profile fetch request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| email | String | The email address of the buyer. | Medium, 52.0 | 52.0 |
| firstName | String | The first name of the buyer. | Small, 52.0 | 52.0 |
| isEmailVerified | Boolean | Indicates whether the email address of the buyer is verified (true) or not (false). | Small, 64.0 | 64.0 |
| isPhoneVerified | Boolean | Indicates whether the phone number of the buyer is verified (true) or not (false). | Small, 64.0 | 64.0 |
| lastName | String | The last name of the buyer. | Small, 52.0 | 52.0 |
| phoneNumber | String | The phone number of the buyer. | Small, 59.0 | 59.0 |
| userName | String | The user name of the buyer in the Salesforce org, such as user@mycompany.com. | Small, 59.0 | 59.0 |

#### See Also

-   [Commerce Webstore My Profile](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile.htm "Retrieve the buyer's account details. Update buyer account details. The API retrieves or updates the registered buyer’s details by identifying the buyer user’s ID within the logged-in context.")

## Code Examples

```
{
  "firstName": "Morton",
  "isEmailVerified": "true",
  "isPhoneVerified": "true",
  "lastName": "Strosin",
  "email": "Ma**********@vi*****.info",
  "phoneNumber": "********7740",
  "userName": "morton.Strosin10@salesforce.com"
}
```

## Related Topics

- Commerce Webstore My Profile (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_myprofile.htm)
