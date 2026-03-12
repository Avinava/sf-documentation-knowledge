---
title: "Contact Information Input"
domain: chatterapi
topic: contact-information-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.252Z
estimatedTokens: 158
keywords: [Contact, Input, Commerce, store, checkout]
---

# Contact Information Input

> Contact information for a Commerce store checkout.

# Contact Information Input

Contact information for a Commerce store checkout.

Root XML tag

<contactInfo>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| email | String | Email address of the contact. | Optional | 55.0 |
| firstName | String | First name of the contact. | Optional | 55.0 |
| isoCountryCodeForPhoneNumber | String | ISO code of the phone number country. | Optional | 62.0 |
| lastName | String | Last name of the contact. | Optional | 55.0 |
| phoneNumber | String | Phone number of the contact. | Optional | 55.0 |

## Code Examples

```
{
   "firstName":"Leung",
   "lastName":"Chan",
   "email":"leung@chan.com",
   "phoneNumber":"+16175551212"
}
```
