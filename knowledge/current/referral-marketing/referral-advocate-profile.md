---
title: "Referral Advocate Profile"
domain: referral-marketing
topic: referral-advocate-profile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.822Z
estimatedTokens: 183
keywords: [Referral, Advocate, Profile, output, API]
---

# Referral Advocate Profile

> Represents the output for Referral Advocate Profile API.

# Referral Advocate Profile

Represents the output for Referral Advocate Profile API.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| eligiblePromotionList | Referral Promotion[] | The list of promotions that the advocate is eligible for. | Small, 62.0 | 62.0 |
| enrolledPromotionList | Referral Promotion [] | The list of promotions that the advocate is enrolled in. | Small, 62.0 | 62.0 |
| programSummary | Referral Statistics [] | referral statistics in thw whole program for advocate | Small, 62.0 | 62.0 |
| referralSummaryList | Referral Info [] | The list of referrals that the advocate has submitted. | Small, 62.0 | 62.0 |

## Code Examples

```
{
    "enrolledPromotionsList" : [
        {
            
            "programId": "0lx1234567ABC",
            "programName": "RP1",
            "memberId" : "0qw12121212121ASD",
            "membershipNumber" : "mem1",
            "promotionName" : "Summer bonanza",
            "promotionCode" : "SMRBNZ",
            "promotionDescription" : "This is a summer promo",
            "promotionId" : "0op84848484848ASD",
            "promotionStartDate" : "2024-01-03T00:00:00",
            "promotionEndDate" : "2025-01-04T00:00:00",
            "promotionPageUrl" : "https://www.nike.com",
            "promotionImageUrl" : "https://www.nike.com/098wqwqwq-898q9ww",
            "isMemberPromotionEnrollementActive" : true,
            "memberReferralCode" : "GTRFDSX09",
            "memberReferralUrl" : "https://www.nike.com/GTRFDSX09-SMRBNZ",
            "memberPromotionSummary" : {
                "referralCount" : 6,
                "referralsOnStageFourCount" : 2,
                "referralsOnStageFiveCount", 1,
                "vouchersIssuedCount" : 3
            }
        }
    ],
    "eligiblePromotionsList" : [
        {
            
            "programId": "0lx1234567ABC",
            "programName": "RP1",
            "memberId" : "0qw12121212121ASD",
            "membershipNumber" : "mem1",
            "promotionName" : "Winter bonanza",
            "promotionCode" : "WNTRBNZ",
            "promotionDescription" : "This is a winter promo",
            "promotionId" : "0op8484848467ASF",
            "promotionStartDate" : "2024-01-03T00:00:00",
            "promotionEndDate" : "2025-01-04T00:00:00",
            "promotionPageUrl" : "https://www.adidas.com",
            "promotionImageUrl" : "https://www.adidas.com/098wqwqwq-898q9ww",
            "isMemberPromotionEnrollementActive" : false
        }
    ],
    "programSummary" : {
       "referralCount" : 14,
        "referralsOnStageFourCount" : 6,
        "referralsOnStageFiveCount", 3,
        "vouchersIssuedCount" : 8
    },
    "referralSummaryList" : [
        {
           "referredPartyName":"Michael Clare",
           "referralId":"0lx567687878GVBH",
           "promotionId":"0opujh343jdbcGVF",
           "promotionName":"Summer Bonanza",
           "referralLastModifiedDate":"2024-06-17T00:00:00",
           "promotionStageName":"Advocate Refers Friend",
           "contactId" : "0c300000000000001A",
           "referralCreationDate" : "2024-06-12T00:00:00"
        }
    ]
}
```

## Related Topics

- Referral
                Promotion[] (atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_referral_promotion_output.htm)
- Referral Promotion
                  [] (atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_referral_promotion_output.htm)
- Referral
                  Statistics [] (atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_referral_statistics_output.htm)
- Referral Info
                [] (atlas.en-us.referral_marketing.meta/referral_marketing/connect_responses_referral_info_output.htm)
