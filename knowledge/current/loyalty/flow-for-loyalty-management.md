---
title: "Flow for Loyalty Management"
domain: loyalty
topic: flow-for-loyalty-management
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.148Z
estimatedTokens: 1156
keywords: [Flow, Loyalty, Management, metadata, associated, application, users, series, pages, query, records, database, execute, logic, provide]
---

# Flow for Loyalty Management

> Represents the metadata associated with a flow. Use Flow to create an application that
    takes users through a series of pages to query and update records in the database. You can also
    execute logic and provide branching capability based on user input to build dynamic
    applications.

# Flow for Loyalty Management

Represents the metadata associated with a flow. Use Flow to create an application that takes users through a series of pages to query and update records in the database. You can also execute logic and provide branching capability based on user input to build dynamic applications.

## FlowActionCall

Loyalty Management exposes additional actionType values for the FlowActionCall Metadata type.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionType | InvocableActionType (enumeration of type string) | Required.The action type. Additional valid values only for Loyalty Management include:adjustPoints—Adjusts loyalty points for a specified program member or journal transaction. This value is available in API version 51.0 and later.assignTierBenefits— Assigns Member Benefits to a member tier for benefits that are associated with a Benefit Action. This value is available in API version 51.0 and later.cancelAccrual—Cancels a specific set of accrual transactions.creditPoints—Credits loyalty points to a specified program member’s balance. This value is available in API version 51.0 and later.cancelRedemption—Reverts a specific set of redemption transactions. This value is available in API version 51.0 and later.changeTier—Changes the tier for a specified program member. This value is available in API version 51.0 and later.changeTierWhenNoErrors—Changes tier for a specified loyalty program member only when all the input parameters meet the criteria. This value is available in API version 51.0 and later.debitPoints—Debits loyalty points to a specified program member’s balance. This value is available in API version 51.0 and later.executeMemberBenefit—Processes the benefit action associated with the benefit, which is assigned to a loyalty program member. This value is available in API version 51.0 and later.generateMemberReferralCode—Generates a unique 8-character referral code for a loyalty program member. This value is available in API version 57.0 and later.getMemberActiveSegments—Retrieve active Data Cloud market segments that a loyalty program member is a part of.getTier—Gets the current tier for a specified program member. This value is available in API version 51.0 and later.getPointsBalance—Gets the loyalty points balance for a specified program member. This value is available in API version 51.0 and later.getLoyaltyPromotion—Gets active loyalty promotions based on a transaction journal. This value is available in API version 53.0 and later.getLoyaltyPromotionBasedOnSalesforceCDP—Gets promotions for a member based on the market segment the member belongs to. This value is available in API version 53.0 and later.issueVoucher—Issues a voucher for a member or contract. This value is available in API version 51.0 and later.mergeLoyaltyProgramMembership—Merges two active loyalty program member records that both belong to the same loyalty program. This value is available in API version 56.0 and later.transferMemberPointsToGroups—Transfers points from an individual member or a corporate member to the member’s associated group. This value is available in API version 53.0 and later.transferPoints—Transfers points from a source loyalty program member to a target loyalty program member, or to a group that the member is a part of. This value is available in API version 64.0 and later.updateProgressForCumulativePromotionUsage—Updates the progress a member has made towards attaining a cumulative type promotion. This value is available in API version 53.0 and later.unmergeLoyaltyProgramMembership—Unmerges loyalty program member records that have a Merged status. The action unmerges memberships in the Merged status from the previously merged membership. This value is available in API version 56.0 and later.runProgramProcess—Triggers an active loyalty program process. This value is available in API version 56.0 and later.runProgramProcessForTransactionJournal—Triggers an active loyalty program process whose process type is TransactionJournal. This value is available in API version 54.0 and later.These values are reserved for internal use:addUpdateLimitsInPricingProm—This value is available in API version 64.0 and later.createUpdatePricingPromotion—This value is available in API version 64.0 and later.getEligibleLoyaltyPromotions—This value is available in API version 64.0 and later.getExpiringPointsWithDate—This value is available in API version 64.0 and later.getMemberBenefits—This value is available in API version 64.0 and later.getPointsForNextTier—This value is available in API version 64.0 and later. |
