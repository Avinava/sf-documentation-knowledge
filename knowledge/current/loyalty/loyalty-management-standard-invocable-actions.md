---
title: "Loyalty Management Standard Invocable Actions"
domain: loyalty
topic: loyalty-management-standard-invocable-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.160Z
estimatedTokens: 1575
keywords: [Loyalty, Management, Standard, Invocable, Actions, manage, programs, organization, tier, groups, group, members, change, member, their]
---

# Loyalty Management Standard Invocable Actions

> Create and manage loyalty programs for your organization using
      invocable actions. Use tier groups to group members and change member tier based on their
    loyalty points, assign and process benefits based on their tier, manage loyalty points for a
    member, issue voucher for a member, and cancel redemption transactions for a member for Loyalty
    Management. For more information on standard invocable actions, see REST API Developer Guide and Actions Developer Guide.

# Loyalty Management Standard Invocable Actions

Create and manage loyalty programs for your organization using invocable actions. Use tier groups to group members and change member tier based on their loyalty points, assign and process benefits based on their tier, manage loyalty points for a member, issue voucher for a member, and cancel redemption transactions for a member for Loyalty Management. For more information on standard invocable actions, see **[REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable_standard.htm)** and **[Actions Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_intro.htm)**.

-   **[Adjust Points](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_adjust_points.htm)**
    Adjust loyalty points for a specified program member or journal transaction.
-   **[Assign Member Tier Benefits](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_assign_member_tier_benefits.htm)**
    Assign benefits to a loyalty program members based on their member’s tier for benefits that are associated with a Benefit Action.
-   **[Accrual Cancellation](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_cancel_accrual.htm)**
    Cancel a specific set of accrual transactions.
-   **[Credit Points](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_credit_points.htm)**
    Credit loyalty points to a specified loyalty program member’s balance.
-   **[Change Tier](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_change_tier.htm)**
    Change the tier for a specified loyalty program member.
-   **[Change All Tiers or None](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_change_tier_with_no_partial_success.htm)**
    Change tier for a specified loyalty program member only when all the input parameters meet the criteria.
-   **[Debit Points](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_debit_points.htm)**
    Debit loyalty points from a specified loyalty program member’s balance. You can debit loyalty points to redeem for a service or upgrade the member to a higher tier.
-   **[Generate Referral Code](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_generate_referral_code.htm)**
    Generate a referral code for a loyalty program member.
-   **[Get Member's Active Segments](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_get_member_active_segments.htm)**
    Retrieve active Data Cloud market segments that a loyalty program member is a part of.
-   **[Get Points Balance](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_get_points_balance.htm)**
    Retrieve the loyalty points balance for a specified loyalty program member.
-   **[Get Loyalty Promotions Based on Member's Data Cloud](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_get_loyalty_promotion_cdp.htm)**
    Retrieve the promotions that are eligible for a member based on their market segment.
-   **[Get Promotions Based on Transaction Journal](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_get_loyalty_promotion.htm)**
    Retrieve active promotions that are eligible for a transaction journal. The action can process accrual or redemption transactions.
-   **[Get Tier](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_get_tier.htm)**
    Retrieve the current tier for a specified loyalty program member.
-   **[Issue Voucher Action](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_issue_voucher.htm)**
    Issue a voucher for a member or contact.
-   **[Map Traceable Points for Redemption Transactions Action](atlas.en-us.loyalty.meta/loyalty/actions_obj_process_traceability_records.htm)**
    Maps Debit type loyalty ledgers to Credit type loyalty ledgers for loyalty ledger traceability records that are pending.
-   **[Merge Memberships Action](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_merge_memberships.htm)**
    Merges two active loyalty program member records that belong to the same loyalty program. Out of the two memberships, one is source membership and the other is the target membership. After the merge is complete, the status of the source membership is changed to Merged and the status of the target membership remains active.
-   **[Process Member Benefit](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_process_member_benefits.htm)**
    Process the benefit action associated with the benefit that is assigned to a loyalty program member.
-   **[Redemption Cancellation](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_cancel_redemption.htm)**
    Revert a specific set of redemption transactions.
-   **[Run Program Process for Transaction Journal](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_run_program_process_for_transaction_journal.htm)**
    Run active loyalty program processes for pending Accrual or Redemption type transaction journals.
-   **[Transfer Member Points to Groups](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_transfer_member_points_to_groups_action.htm)**
    Transfers Individual or Corporate type members’ points contributions to the members’ associated groups.
-   **[Transfer Points](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_transfer_points.htm)**
    Transfers points from a source loyalty program member to a target loyalty program member, or to a group that the member is a part of.
-   **[Unmerge Memberships Action](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_unmerge_memberships.htm)**
    Unmerges loyalty program member records have a Merged status. The action unmerges memberships that are in the Merged status from the membership that it was previously merged with. After the unmerge is complete, the status of the Loyalty Program Member Merge record that was created during the merge is changed to Unmerged. The members are reassigned to the tier that was assigned to them before the merge. They are also credited with the points and transferred the vouchers they had before the membership was merged.
-   **[Update Member Progress for Cumulative Promotion](atlas.en-us.loyalty.meta/loyalty/loyalty_actions_update_loyalty_promotion_cumulative.htm)**
    Update the progress made by a loyalty program member towards attaining a Cumulative type promotion. The action creates a Loyalty Program Member Promotion record if the promotion isn't associated with the member.

## Related Topics

- Adjust Points (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_adjust_points.htm)
- Assign Member Tier Benefits (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_assign_member_tier_benefits.htm)
- Accrual Cancellation (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_cancel_accrual.htm)
- Credit Points (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_credit_points.htm)
- Change Tier (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_change_tier.htm)
- Change All Tiers or None (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_change_tier_with_no_partial_success.htm)
- Debit Points (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_debit_points.htm)
- Generate Referral Code (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_generate_referral_code.htm)
- Get Member's Active Segments (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_get_member_active_segments.htm)
- Get Points Balance (atlas.en-us.loyalty.meta/loyalty/loyalty_actions_get_points_balance.htm)
