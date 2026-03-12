---
title: "LoyaltyManagement Namespace"
domain: loyalty
topic: loyaltymanagement-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.788Z
estimatedTokens: 2723
namespace: LoyaltyManagement
keywords: [LoyaltyManagement, Apex, classes, run, Loyalty, Management, actions]
---

# LoyaltyManagement Namespace

> The LoyaltyManagement
      namespace provides Apex classes and methods to run the Loyalty Management
    actions.

**Namespace:** `LoyaltyManagement`

# LoyaltyManagement Namespace

The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.

Use the developer console to invoke these classes and methods. For more information, see [Open the Developer Console](https://help.salesforce.com/s/articleView?id=platform.code_dev_console_opening.htm&type=5&language=en_US "HTML (New Window)").

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=loyalty)

#### Tip

You can also choose to use the classes and methods of the [Invocable](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_Invocable.htm "HTML (New Window)") namespace to call the Loyalty Management invocable actions from Apex.

The following are the classes in the LoyaltyManagement namespace.

-   **[CdpBasedLoyaltyPromotionInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInput.htm#apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInput)**
    Use this class to retrieve promotions that are eligible for a member based on the member’s market segment. This class receives the input parameter values for the Data Cloud based Loyalty Promotion action.
-   **[CdpBasedLoyaltyPromotionInputBuilder Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm#apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder)**
    Contains methods to build an instance of the LoyaltyManagement.CdpBasedLoyaltyPromotionInput class.
-   **[CdpBasedLoyaltyPromotionOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm#apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput)**
    Represents the promotion records that the member is eligible for based on the member's Data Cloud market segment.
-   **[ChangeTierInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInput.htm#apex_class_LoyaltyManagement_ChangeTierInput)**
    Use this class to change the tier for a given loyalty program member. This class receives the input parameter values for the Change Tier action.
-   **[ChangeTierInputBuilder Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm#apex_class_LoyaltyManagement_ChangeTierInputBuilder)**
    Contains methods to build an instance of the LoyaltyManagement.ChangeTierInput class.
-   **[ChangeTierOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm#apex_class_LoyaltyManagement_ChangeTierOutput)**
    Represents the changed tier details for a loyalty program member.
-   **[CreditPointsOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm#apex_class_LoyaltyManagement_CreditPointsOutput)**
    Represents the details of points credited to a loyalty program member’s balance.
-   **[DebitPointsOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_class_LoyaltyManagement_DebitPointsOutput)**
    Represents the details of points debited from a loyalty program member’s balance.
-   **[GetMemberActiveSegmentsInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInput.htm#apex_class_LoyaltyManagement_GetMemberActiveSegmentsInput)**
    Use this class to retrieve active Data Cloud market segments that a loyalty program member is part of. This class receives the input parameter values for the Get Member's Active Segments action.
-   **[GetMemberActiveSegmentsInputBuilder Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm#apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder)**
    Contains methods to build an instance of the LoyaltyManagement.GetMemberActiveSegmentsInput class.
-   **[GetMemberActiveSegmentsOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput.htm#apex_class_LoyaltyManagement_GetMemberActiveSegmentsOutput)**
    Represents the ist of the active segment IDs that the specified loyalty program member is a part of.
-   **[IssueVoucherInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherInput.htm#apex_class_LoyaltyManagement_IssueVoucherInput)**
    Use this class to issue a voucher to a loyalty program member. This class receives the input parameter values for the Issue Voucher action.
-   **[IssueVoucherInputBuilder Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherInputBuilder.htm#apex_class_LoyaltyManagement_IssueVoucherInputBuilder)**
    Contains methods to build an instance of the LoyaltyManagement.IssueVoucherInput class.
-   **[IssueVoucherOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm#apex_class_LoyaltyManagement_IssueVoucherOutput)**
    Represents the voucher ID issued to a loyalty program member.
-   **[LoyaltyActionError Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionError.htm#apex_class_LoyaltyManagement_LoyaltyActionError)**
    A class that contains the errors related to the execution of a Loyalty Management action.
-   **[LoyaltyActionResult Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionResult.htm#apex_class_LoyaltyManagement_LoyaltyActionResult)**
    A class that contains the result returned by a loyalty action.
-   **[LoyaltyPromotionInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInput.htm#apex_class_LoyaltyManagement_LoyaltyPromotionInput)**
    Use this class to retrieve active promotions that are eligible for a transaction journal. The action can process accrual or redemption transactions. This class receives the input parameter values for the Loyalty Promotion action.
-   **[LoyaltyPromotionInputBuilder Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInputBuilder.htm#apex_class_LoyaltyManagement_LoyaltyPromotionInputBuilder)**
    Contains methods to build an instance of the LoyaltyManagement.LoyaltyPromotionInput class.
-   **[LoyaltyPromotionOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm#apex_class_LoyaltyManagement_LoyaltyPromotionOutput)**
    Represents the active promotions based on the specified transaction journal.
-   **[LoyaltyResources Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_class_LoyaltyManagement_LoyaltyResources)**
    A class that executes a loyalty action and returns a result. Takes the input classes as input and returns the objects of output classes.
-   **[MemberPointBalanceInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInput.htm#apex_class_LoyaltyManagement_MemberPointBalanceInput)**
    Use this class to retrieve loyalty points balance for a given loyalty program member. This class receives the input parameter values for the Get Member Points action.
-   **[MemberPointBalanceInputBuilder Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder.htm#apex_class_LoyaltyManagement_MemberPointBalanceInputBuilder)**
    Contains methods to build an instance of the LoyaltyManagement.MemberPointsBalanceInput class.
-   **[MemberPointBalanceOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_class_LoyaltyManagement_MemberPointBalanceOutput)**
    Represents the loyalty points balance for a specified loyalty program member.
-   **[MemberTierInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInput.htm#apex_class_LoyaltyManagement_MemberTierInput)**
    Use this class to retrieve the current tier for a specified loyalty program member. This class receives the input parameter values for the Get Member Tier action.
-   **[MemberTierInputBuilder Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInputBuilder.htm#apex_class_LoyaltyManagement_MemberTierInputBuilder)**
    Contains methods to build an instance of the LoyaltyManagement.MemberTierInput class.
-   **[MemberTierOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_class_LoyaltyManagement_MemberTierOutput)**
    Represents the tier details for a specified loyalty program member.
-   **[PointsInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInput.htm#apex_class_LoyaltyManagement_PointsInput)**
    Use this class to credit loyalty points to a loyalty program member’s balance or debit loyalty points from a loyalty program member’s balance. This class receives the input parameter values for the Credit and Debit point actions.
-   **[PointsInputBuilder Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInputBuilder.htm#apex_class_LoyaltyManagement_PointsInputBuilder)**
    Contains methods to build an instance of the LoyaltyManagement.PointsInput class.
-   **[TransferMemberPointsToGroupsInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInput.htm#apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInput)**
    Use this class to transfer points from an individual member or a corporate member to the member's associated group. This class receives the input parameter values for the Transfer Member Points To Groups action.
-   **[TransferMemberPointsToGroupsInputBuilder Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder.htm#apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInputBuilder)**
    Contains methods to build an instance of the LoyaltyManagement.TransferMemberPointsToGroupsInput class.
-   **[UpdateCumulativeUsageCompletedInput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedInput.htm#apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedInput)**
    Use this class to update the progress made by a loyalty program member towards attaining a Cumulative type promotion. The action creates a Loyalty Program Member Promotion record if the promotion isn't associated with the member. This class receives the input parameter values for the Update Cumulative Usage Completed action.
-   **[UpdateCumulativeUsageCompletedOutput Class](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm#apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput)**
    Represents the details of the progress made by a loyalty program member towards attaining a Cumulative type promotion.

## Related Topics

- CdpBasedLoyaltyPromotionInput Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInput.htm)
- CdpBasedLoyaltyPromotionInputBuilder Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInputBuilder.htm)
- CdpBasedLoyaltyPromotionOutput Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm)
- ChangeTierInput Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInput.htm)
- ChangeTierInputBuilder Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInputBuilder.htm)
- ChangeTierOutput Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm)
- CreditPointsOutput Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm)
- DebitPointsOutput Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm)
- GetMemberActiveSegmentsInput Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInput.htm)
- GetMemberActiveSegmentsInputBuilder Class (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_GetMemberActiveSegmentsInputBuilder.htm)
