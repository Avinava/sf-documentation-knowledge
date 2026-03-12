---
title: "Promotion Eligibility Input"
domain: loyalty
topic: promotion-eligibility-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.959Z
estimatedTokens: 788
keywords: [Promotion, Eligibility, Input, representation, criteria]
---

# Promotion Eligibility Input

> Input representation details of the promotion eligibility criteria.

# Promotion Eligibility Input

Input representation details of the promotion eligibility criteria.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| areAllLoyalty​MembersEligible | Boolean | Indicates whether all loyalty members are eligible for the promotion (true) or not (false).If this field is set to true, you can’t specify loyalty tiers whose members are eligible for the promotion. | Optional | 60.0 |
| eligibleCampaign | Name And Id Input [] | ID or name of the marketing campaign whose members are eligible for the promotion.Specify either an eligible campaign, a list of eligible segments, or loyalty tiers in a request, but not all.To specify an eligible marketing campaign, you must have the Marketing license. | Optional | 60.0 |
| eligibleChannels | Promotion Eligible Channel Input [] | Channels that are eligible for the promotion. | Optional | 60.0 |
| eligibleClubs | ConnectApi.Eligible​ClubsInputRepresentation[] | List of clubs whose members are eligible for the promotion. | Optional | 64.0 |
| eligibleCoupons | ConnectApi.Eligible​CouponInputRepresentation[] | Coupons that are eligible for the promotion | Optional | 63.0 |
| eligible​CustomerEvents | Events Detail Input | Details of the customer events that the promotion is eligible for. | Optional | 60.0 |
| eligible​EnrollmentPeriod | Eligible Enrollment Period Input | Period during which customers can enroll in the promotion. | Optional | 60.0 |
| eligibleLoyalty​PartnerProducts | Name And Id Input [] | IDs or names of the loyalty partner products that are eligible for the promotion.You can specify only products that belong to loyalty partners associated with the specified loyalty program.Specify either a list of products and categories, or a list of loyalty partner products in a request, but not both. | Optional | 60.0 |
| eligible​LoyaltyTiers | Eligible Loyalty Tiers Input [] | List of loyalty program tiers whose members are eligible for the promotion.Specify either an eligible campaign, a list of eligible segments, or loyalty tiers in a request, but not all. | Optional | 60.0 |
| eligibleProduct​Categories | Name And Id Input [] | IDs or names of the product categories that are eligible for the promotion.Ensure that the number of eligible product categories you want to specify doesn’t exceed the limit supported in your org. | Optional | 60.0 |
| eligibleProducts | Name And Id Input [] | IDs or names of the products that are eligible for the promotion.Ensure that the number of eligible products you want to specify doesn’t exceed the number supported in your org. | Optional | 60.0 |
| eligibleSegments | Name And Id Input [] | IDs or names of the Data Cloud segments whose members are eligible for the promotion.You must have the Marketing user permission to specify market segments.Specify either an eligible campaign, a list of eligible segments, or loyalty tiers in a request, but not all. | Optional | 60.0 |
| productCatalog | Name And Id Input [] | ID or name of the product catalog that’s eligible for the promotion.This field can’t be updated. | Optional | 60.0 |

## Related Topics

- Name And Id Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_name_and_id_input.htm)
- Promotion Eligible Channel
                                                Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_eligible_channel_inpu.htm)
- Events Detail
                                            Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_events_detail_input.htm)
- Eligible Enrollment Period
                                                Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_eligible_enrollment_period_input.htm)
- Eligible Loyalty Tiers
                                                Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_eligible_loyalty_tiers_inpu.htm)
