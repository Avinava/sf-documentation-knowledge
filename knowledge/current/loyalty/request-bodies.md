---
title: "Request Bodies"
domain: loyalty
topic: request-bodies
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.121Z
estimatedTokens: 1883
keywords: [Bodies, Here’s, Loyalty, Management, API]
---

# Request Bodies

> Here’s a list of Loyalty Management API request bodies.

# Request Bodies

Here’s a list of Loyalty Management API request bodies.

-   **[Cart Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_cart_input.htm)**
    The details of a cart and its line items that's used to evaluate and execute promotions.
-   **[Cart Input Map](atlas.en-us.loyalty.meta/loyalty/connect_requests_cart_input_map.htm)**
    Input representation of the summary of the cart whose eligible promotions are to be fetched.
-   **[Channel Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_channel_inpu.htm)**
    Input representation details of a channel for which to retrieve eligible promotions.
-   **[Clone Promotion Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_input.htm)**
    Input representation that decides which existing promotion is cloned and the attributes of the new promotion that’s created.
-   **[Club Member Enrollment Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_club_member_enrollment_inpu.htm)**
    The input representation to enroll a club member.
-   **[Club Membership Renewal Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_club_membership_renewal_inpu.htm)**
    The input representation for club membership renewal.
-   **[Corporate Member Enrollment Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_corporate_member_enrollment_input.htm)**
    Input representation for creating a business account and a Corporate type Loyalty Program Member record for the member.
-   **[Coupon Usage Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_coupon_usage_input.htm)**
    Input representation of coupon usage.
-   **[Eligible Clubs Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_eligible_clubs_input.htm)**
    The club tier groups and tiers whose members are eligible for the promotion.
-   **[Eligible Coupon Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_eligible_coupon_input.htm)**
    The details of an eligible coupon for the promotion.
-   **[Eligible Enrollment Period Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_eligible_enrollment_period_input.htm)**
    Input representation of the enrollment eligibility details for the promotion.
-   **[Eligible Loyalty Tiers Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_eligible_loyalty_tiers_inpu.htm)**
    Input representation of the loyalty program tier whose members are eligible for the promotion.
-   **[Events Detail Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_events_detail_input.htm)**
    Input representation details of the customer event that is eligible for the promotion.
-   **[Individual Member Enrollment Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_individual_member_enrollment_input.htm)**
    Input representation for creating a person account and an Individual type Loyalty Program Member record for the member.
-   **[Link Program Member Partner Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_link_program_member_partner_input.htm)**
    Input details to link a program member and partner.
-   **[Loyalty Engine Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_engine_input.htm)**
    Input representation of the Loyalty Engine Runtime API.
-   **[Loyalty Engine Input Map](atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_engine_input_map.htm)**
    Input representation of the Transaction Journal record execution request.
-   **[Loyalty Engine Run Settings Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_engine_run_settings.htm)**
    Input representation of the loyalty engine settings to run simulation on the transaction journals.
-   **[Loyalty Account Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_account_input.htm)**
    Input representation for creating a business account for the member.
-   **[Loyalty Contact Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_contact_input.htm)**
    Input representation of the loyalty program member’s person account.
-   **[Loyalty Process Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_process_input.htm)**
    Input representation of the details of the loyalty program process action.
-   **[Loyalty Process Input Options](atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_process_input_options.htm)**
    Input representation of the execution options for the loyalty process.
-   **[Loyalty Process Parameter Map Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_process_parameter_map.htm)**
    Input representation of the input parameters for the loyalty process.
-   **[Loyalty View Transaction Journal History Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_loyalty_view_t_j_history_input.htm)**
    Input representation for getting the transaction journal records of a loyalty member.
-   **[Name and ID Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_name_and_id_input.htm)**
    Input representation of an object’s name and ID.
-   **[Product Details](atlas.en-us.loyalty.meta/loyalty/connect_requests_product_details_inpu.htm)**
    An input representation that contains specific details related to the product.
-   **[Promotion Eligible Channel Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_eligible_channel_inpu.htm)**
    Input representation details of the channel eligible for the promotion.
-   **[Promotion Eligibility Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_eligibility_input.htm)**
    Input representation details of the promotion eligibility criteria.
-   **[Promotion Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_inpu.htm)**
    Input representation details of a promotion.
-   **[Promotion Limit Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_limit_input.htm)**
    Input representation details of the promotion limits.
-   **[Promotion Recommendation Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_recommendation_inpu.htm)**
    The input representation to retrieve the recommended promotion.
-   **[Redeem Voucher Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_redeem_voucher_input.htm)**
    Input representation for voucher redemption.
-   **[Related Promotion Records Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_related_promotion_records_input.htm)**
    Input representation that decides which related records and fields of the existing promotion are cloned and associated with the new promotion.
-   **[Unified Promotions Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_unified_promotions_input.htm)**
    Input representation of the promotion configuration to be created, or updated.
-   **[Unified Promotion Template Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_unified_promotion_template_input.htm)**
    Input representation of the unified promotion template.
-   **[Unlink Program Member Partner Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_unlink_program_member_partner_input.htm)**
    Input details to unlink a program member and partner.
-   **[Promotion Reward Application Input](atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_reward_application_input.htm)**
    The details required to create transaction journals. The request includes a list of transaction journals, which are to be created. It includes the list of promotions applied along with the rewards. If any of the rewards aren't applied, then everything is rolled back. No partial rewards are applied.

## Related Topics

- Cart Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_cart_input.htm)
- Cart Input Map (atlas.en-us.loyalty.meta/loyalty/connect_requests_cart_input_map.htm)
- Channel Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_channel_inpu.htm)
- Clone Promotion Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_promotion_input.htm)
- Club Member Enrollment Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_club_member_enrollment_inpu.htm)
- Club Membership Renewal Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_club_membership_renewal_inpu.htm)
- Corporate Member Enrollment Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_corporate_member_enrollment_input.htm)
- Coupon Usage Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_coupon_usage_input.htm)
- Eligible Clubs Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_eligible_clubs_input.htm)
- Eligible Coupon Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_eligible_coupon_input.htm)
