---
title: "Promotion Eligibility Output"
domain: loyalty
topic: promotion-eligibility-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.585Z
estimatedTokens: 395
keywords: [Promotion, Eligibility, Output, representation, criteria]
---

# Promotion Eligibility Output

> Output representation of the promotion eligibility criteria.

# Promotion Eligibility Output

Output representation of the promotion eligibility criteria.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| areAllLoyaltyMembersEligible | Boolean | Indicates whether all loyalty members are eligible (true) or not (false). | Small, 60.0 | 60.0 |
| eligibleCampaign | String | A campaign whose members are eligible for the promotion. | Small, 60.0 | 60.0 |
| eligibleChannels | Promotion Eligible Channel Output [] | Channels that are eligible for the promotion. | Small, 60.0 | 60.0 |
| eligibleCustomerEvents | Events Detail Output | Customer events that are eligible for the promotion. | Small, 60.0 | 60.0 |
| eligibleEnrollmentPeriod | Promotion Eligible Enrollment Period Output | Dates within which customers can enroll for the promotion. | Small, 60.0 | 60.0 |
| eligibleLoyaltyPartnerProducts | Name And Id Output [] | List of loyalty partner products that are eligible for the promotion. | Small, 60.0 | 60.0 |
| eligibleLoyaltyTiers | Eligible Loyalty Tiers Output [] | Loyalty tiers eligible for the promotion. | Small, 60.0 | 60.0 |
| eligibleProductCategories | Name And Id Output [] | Product categories eligible for the promotion. | Small, 60.0 | 60.0 |
| eligibleProducts | Name And Id Output [] | Products eligible for the promotion. | Small, 60.0 | 60.0 |
| eligibleSegments | Name And Id Output [] | Segments eligible for the promotion. | Small, 60.0 | 60.0 |
| productCatalog | String | Product catalog eligible for the promotion. | Small, 60.0 | 60.0 |

## Related Topics

- Promotion Eligible Channel Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_eligible_channel_output.htm)
- Events Detail
                  Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_events_detail_output.htm)
- Promotion Eligible Enrollment Period Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_eligible_enrollment_period_output.htm)
- Name And Id
                  Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_name_and_id_output.htm)
- Eligible
                  Loyalty Tiers Output (atlas.en-us.loyalty.meta/loyalty/connect_responses_eligible_loyalty_tiers_output.htm)
