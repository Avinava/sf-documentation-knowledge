---
title: "Promotion Recommendations"
domain: loyalty
topic: promotion-recommendations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.612Z
estimatedTokens: 212
keywords: [Promotion, Recommendations, count, promotions, recommended, member, customer]
---

# Promotion Recommendations

> The count and list of promotions recommended for the member or customer.

# Promotion Recommendations

The count and list of promotions recommended for the member or customer.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| loyalty​Program​MemberId | String | Enter the Loyalty Program member ID. | Big, 64.0 | 64.0 |
| loyalty​Program​Name | String | Enter the name of the loyalty program. | Big, 64.0 | 64.0 |
| membership​Number | String | Enter the membership number. | Big, 64.0 | 64.0 |
| personalization​Id | String | Enter the response ID of the product recommendations. | Big, 64.0 | 64.0 |
| recommendation​Count | Integer | Enter the number of promotion recommendations provided. | Big, 64.0 | 64.0 |
| recommendation​List | Recommendation Details | Enter the list of recommended promotions. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "recommendationCount": 0,
  "personalizationId": "string",
  "recommendationList": [
    {
      "rank": 0,
      "promotionDetails": {
        "id": "string",
        "promotionCode": "string",
        "name": "string",
        "description": "string",
        "displayName": "string",
        "productDetails": {
          "personalizationContentId": "string",
          "name": "string",
          "id": "string",
          "sku": "string",
          "productImageUrl": "string"
        },
        "priority": 0,
        "currencyIsoCode": "string",
        "coupon": {
          "couponAvailabilityMessage": "string",
          "couponDetails": {
            "couponCode": "string",
            "startDateTime": "2025-03-06",
            "endDateTime": "2025-03-06",
            "status": "string"
          }
        },
        "isAutomatic": true,
        "startDateTime": "2025-03-06",
        "endDateTime": "2025-03-06",
        "promotionPageUrl": "string",
        "imageUrl": "string",
        "isEnrollmentRequired": true,
        "isEnrolled": true,
        "termsAndCondition": "string"
      }
    }
  ],
  "loyaltyProgramName": "string",
  "membershipNumber": "string",
  "loyaltyProgramMemberId": "string"
}
```

## Related Topics

- Recommendation Details (atlas.en-us.loyalty.meta/loyalty/connect_responses_recommendation_detail.htm)
