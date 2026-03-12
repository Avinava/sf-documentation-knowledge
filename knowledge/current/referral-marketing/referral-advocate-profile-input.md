---
title: "Referral Advocate Profile Input"
domain: referral-marketing
topic: referral-advocate-profile-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.765Z
estimatedTokens: 417
keywords: [Referral, Advocate, Profile, Input, representation, API]
---

# Referral Advocate Profile Input

> Input representation for the Referral Advocate Profile API.

# Referral Advocate Profile Input

Input representation for the Referral Advocate Profile API.

JSON example

```

```

JSON example

```

```

JSON example

```

```

JSON example

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contactDetails | Contact Details [] | The details of that are required to uniquely identify an advocate's Contact record. | Small, 62.0 | 62.0 |
| contactId | String | The ID of the advocate's Contact record. | Small, 62.0 | 62.0 |
| memberId | String | The ID of the advocate's Loyalty Program Member record. | Small, 62.0 | 62.0 |
| membershipNumber | String | The unique referral program membership number of the advocate. | Small, 62.0 | 62.0 |
| programId | String | The ID of the referral program that the advocate is a part of. | Small, 62.0 | 62.0 |
| programName | String | The name of the referral program that the advocate is a part of. | Small, 62.0 | 62.0 |
| promotionCode | String | The code of the promotion for which you want to view the advocate's referral details. | Small, 62.0 | 62.0 |
| promotionId | String | The ID of the promotion for which you want to view the advocate's referral details. | Small, 62.0 | 62.0 |
| shouldGetReferralSummary | Boolean | Indicates whether the response should contain the details of the advocates in progress and successful referrals. | Small, 62.0 | 62.0 |
| shouldGetReferrals | Boolean | True, when you want detailed referral information of all your referrals from promotion if promotion ID is mentioned or program if promotion ID is not mentioned. | Small, 62.0 | 62.0 |

## Code Examples

```
{
   "contactId" : "0lm121212121ASD",
   "programName" : "0op121217777",
   "shouldGetReferralSummary" : "true",
   "shouldGetReferrals" : "true"
}
```

```
{
   "memberId" : "0qw121212121AQD",
   "promotionId" : "0gh123238467AJH"
}
```

```
{
   "membershipNumber" : "mem1",
   "programName" : "RP1"
}
```

```
{
   "membershipNumber" : "mem1",
   "programId" : "0opqwqwqwq1212AFG",
   "promotionCode" "SMRBNZ"
}
```

```
{
   "contactDetails" : {
            "email" : "aman.bindal@sf.com",
            "lastName" : "Bindal"
    },
   "promotionCode" : "SMRBNZ",
   "programName" : "0op121217777"
}
```

## Related Topics

- Contact
                        Details [] (atlas.en-us.referral_marketing.meta/referral_marketing/connect_requests_referral_advocate_contact_input.htm)
