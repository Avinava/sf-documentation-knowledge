---
title: "LoyaltyResources Class"
domain: loyalty
topic: loyaltyresources-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.611Z
estimatedTokens: 3847
namespace: LoyaltyManagement
keywords: [LoyaltyResources, executes, loyalty, action, result, changeTier, changeTierList, creditPoints, creditPointsList, debitPoints, debitPointsList, getLoyaltyPromotionBasedOnSalesforceCDP, loyaltyPromotionInputList, getLoyaltyPromotions, getPointsBalance]
---

# LoyaltyResources Class

> A class that executes a loyalty action and returns a result.

**Namespace:** `LoyaltyManagement`

# LoyaltyResources Class

A class that executes a loyalty action and returns a result. Takes the input classes as input and returns the objects of output classes.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

-   **[LoyaltyResources Methods](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_methods)**


## LoyaltyResources Methods

The following are methods for LoyaltyResources.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=loyalty)

#### Note

Methods in the LoyaltyResources class support processing up to 200 records per invocation. This class predates the [Invocable.Action](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_Invocable_Action.htm "HTML (New Window)") Apex wrapper, which supports up to 2000 records per invocation and is the recommended approach for invoking loyalty actions.

-   **[changeTier(changeTierList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_changeTier)**
    Use this method to change the tier for a loyalty program member.
-   **[creditPoints(creditPointsList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_creditPoints)**
    Use this method to credit loyalty points to a loyalty program member’s balance.
-   **[debitPoints(debitPointsList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_debitPoints)**
    Use this method to debit loyalty points from a loyalty program member’s balance.
-   **[getLoyaltyPromotionBasedOnSalesforceCDP(loyaltyPromotionInputList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_getLoyaltyPromotionBasedOnSalesforceCDP)**
    Use this method to retrieve promotions that are eligible for a member based on the member's market segment.
-   **[getLoyaltyPromotions(loyaltyPromotionInputList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_getLoyaltyPromotions)**
    Use this method to retrieve active promotions that are eligible for a transaction journal. The action can process accrual or redemption transactions.
-   **[getPointsBalance(memberPointBalanceList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_getPointsBalance)**
    Use this method to retrieve the loyalty points balance for a loyalty program member.
-   **[getTier(memberTierList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_getTier)**
    Use this method to retrieve the current tier for a loyalty program member.
-   **[issueVoucher(issueVoucherList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_issueVoucher)**
    Use this method to issue a voucher for a loyalty program member.
-   **[transferMemberPointsToGroups(transferMemberPointsToGroupsList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_transferMemberPointsToGroups)**
    Use this method to transfer points from an individual member or a corporate member to the member's associated group.
-   **[updateProgressForCumulativePromotionUsage(updateCumulativeUsageCompletedInputList)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm#apex_LoyaltyManagement_LoyaltyResources_updateProgressForCumulativePromotionUsage)**
    Use this method to update the progress made by a loyalty program member towards attaining a Cumulative type promotion.

### changeTier(changeTierList)

Use this method to change the tier for a loyalty program member.

#### Signature

public static List<LoyaltyManagement.ChangeTierOutput> changeTier(List<LoyaltyManagement.ChangeTierInput> changeTierList)

#### Parameters

changeTierList

Type: List<[LoyaltyManagement.ChangeTierInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierInput.htm#apex_class_LoyaltyManagement_ChangeTierInput "Use this class to change the tier for a given loyalty program member. This class receives the input parameter values for the Change Tier action.")\>

Set of inputs to change the tier for a loyalty program member.

#### Return Value

Type: List<[LoyaltyManagement.ChangeTierOutput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_ChangeTierOutput.htm#apex_class_LoyaltyManagement_ChangeTierOutput "Represents the changed tier details for a loyalty program member.")\>

### creditPoints(creditPointsList)

Use this method to credit loyalty points to a loyalty program member’s balance.

#### Signature

public static List<LoyaltyManagement.CreditPointsOutput> creditPoints(List<LoyaltyManagement.PointsInput> creditPointsList)

#### Parameters

creditPointsList

Type: List<[LoyaltyManagement.PointsInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInput.htm#apex_class_LoyaltyManagement_PointsInput "Use this class to credit loyalty points to a loyalty program member’s balance or debit loyalty points from a loyalty program member’s balance. This class receives the input parameter values for the Credit and Debit point actions.")\>

Set of inputs to credit points to a loyalty program member’s balance.

#### Return Value

Type: List<[LoyaltyManagement.CreditPointsOutput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CreditPointsOutput.htm#apex_class_LoyaltyManagement_CreditPointsOutput "Represents the details of points credited to a loyalty program member’s balance.")\>

### debitPoints(debitPointsList)

Use this method to debit loyalty points from a loyalty program member’s balance.

#### Signature

public static List<LoyaltyManagement.DebitPointsOutput> debitPoints(List<LoyaltyManagement.PointsInput> debitPointsList)

#### Parameters

debitPointsList

Type: List<[LoyaltyManagement.PointsInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_PointsInput.htm#apex_class_LoyaltyManagement_PointsInput "Use this class to credit loyalty points to a loyalty program member’s balance or debit loyalty points from a loyalty program member’s balance. This class receives the input parameter values for the Credit and Debit point actions.")t>

Set of inputs to debit points from a loyalty program member’s balance.

#### Return Value

Type: List<[LoyaltyManagement.DebitPointsOutput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_DebitPointsOutput.htm#apex_class_LoyaltyManagement_DebitPointsOutput "Represents the details of points debited from a loyalty program member’s balance.")\>

### getLoyaltyPromotionBasedOnSalesforceCDP(loyaltyPromotionInputList)

Use this method to retrieve promotions that are eligible for a member based on the member's market segment.

#### Signature

public static List<LoyaltyManagement.CdpBasedLoyaltyPromotionOutput> getLoyaltyPromotionBasedOnSalesforceCDP(List<LoyaltyManagement.CdpBasedLoyaltyPromotionInput> loyaltyPromotionInputList)

#### Parameters

loyaltyPromotionInputList

Type: List<[LoyaltyManagement.CdpBasedLoyaltyPromotionInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInput.htm#apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionInput "Use this class to retrieve promotions that are eligible for a member based on the member’s market segment. This class receives the input parameter values for the Data Cloud based Loyalty Promotion action.")\>

Set of inputs to retrieve promotions for a member based on the member's market segment.

#### Return Value

Type: List<[LoyaltyManagement.CdpBasedLoyaltyPromotionOutput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput.htm#apex_class_LoyaltyManagement_CdpBasedLoyaltyPromotionOutput "Represents the promotion records that the member is eligible for based on the member's Data Cloud market segment.")\>

### getLoyaltyPromotions(loyaltyPromotionInputList)

Use this method to retrieve active promotions that are eligible for a transaction journal. The action can process accrual or redemption transactions.

#### Signature

public static List<LoyaltyManagement.LoyaltyPromotionOutput> getLoyaltyPromotions(List<LoyaltyManagement.LoyaltyPromotionInput> loyaltyPromotionInputList)

#### Parameters

loyaltyPromotionInputList

Type: List<[LoyaltyManagement.LoyaltyPromotionInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionInput.htm#apex_class_LoyaltyManagement_LoyaltyPromotionInput "Use this class to retrieve active promotions that are eligible for a transaction journal. The action can process accrual or redemption transactions. This class receives the input parameter values for the Loyalty Promotion action.")\>

Set of inputs to retrieve active promotions for a transaction journal.

#### Return Value

Type: List<[LoyaltyManagement.LoyaltyPromotionOutput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyPromotionOutput.htm#apex_class_LoyaltyManagement_LoyaltyPromotionOutput "Represents the active promotions based on the specified transaction journal.")\>

### getPointsBalance(memberPointBalanceList)

Use this method to retrieve the loyalty points balance for a loyalty program member.

#### Signature

public static List<LoyaltyManagement.MemberPointBalanceOutput> getPointsBalance(List<LoyaltyManagement.MemberPointBalanceInput> memberPointBalanceList)

#### Parameters

memberPointBalanceList

Type: List<[LoyaltyManagement.MemberPointBalanceInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceInput.htm#apex_class_LoyaltyManagement_MemberPointBalanceInput "Use this class to retrieve loyalty points balance for a given loyalty program member. This class receives the input parameter values for the Get Member Points action.")\>

Set of inputs to get the loyalty points balance for a loyalty program member’s balance.

#### Return Value

Type: List<[LoyaltyManagement.MemberPointBalanceOutput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberPointBalanceOutput.htm#apex_class_LoyaltyManagement_MemberPointBalanceOutput "Represents the loyalty points balance for a specified loyalty program member.")\>

### getTier(memberTierList)

Use this method to retrieve the current tier for a loyalty program member.

#### Signature

public static List<LoyaltyManagement.MemberTierOutput> getTier(List<LoyaltyManagement.MemberTierInput> memberTierList)

#### Parameters

memberTierList

Type: List<[loyalty\_management.MemberTierInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierInput.htm#apex_class_LoyaltyManagement_MemberTierInput "Use this class to retrieve the current tier for a specified loyalty program member. This class receives the input parameter values for the Get Member Tier action.")\>

Set of inputs to retrieve the current tier for a given loyalty program member.

#### Return Value

Type: List<[loyalty\_management.MemberTierOutput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_MemberTierOutput.htm#apex_class_LoyaltyManagement_MemberTierOutput "Represents the tier details for a specified loyalty program member.")\>

### issueVoucher(issueVoucherList)

Use this method to issue a voucher for a loyalty program member.

#### Signature

public static List<LoyaltyManagement.IssueVoucherOutput> issueVoucher(List<LoyaltyManagement.IssueVoucherInput> issueVoucherList)

#### Parameters

issueVoucherList

Type: List<[loyalty\_management.IssueVoucherInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherInput.htm#apex_class_LoyaltyManagement_IssueVoucherInput "Use this class to issue a voucher to a loyalty program member. This class receives the input parameter values for the Issue Voucher action.")\>

Set of inputs to issue a voucher.

#### Return Value

Type: List<[loyalty\_management.IssueVoucherOutput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_IssueVoucherOutput.htm#apex_class_LoyaltyManagement_IssueVoucherOutput "Represents the voucher ID issued to a loyalty program member.")\>

### transferMemberPointsToGroups(transferMemberPointsToGroupsList)

Use this method to transfer points from an individual member or a corporate member to the member's associated group.

#### Signature

public static List<LoyaltyManagement.LoyaltyActionResult> transferMemberPointsToGroups(List<LoyaltyManagement.TransferMemberPointsToGroupsInput> transferMemberPointsToGroupsList)

#### Parameters

transferMemberPointsToGroupsList

Type: List<[loyalty\_management.TransferMemberPointsToGroupsInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInput.htm#apex_class_LoyaltyManagement_TransferMemberPointsToGroupsInput "Use this class to transfer points from an individual member or a corporate member to the member's associated group. This class receives the input parameter values for the Transfer Member Points To Groups action.")\>

Set of inputs to transfer points from an individual member or a corporate member.

#### Return Value

Type: List<[loyalty\_management.LoyaltyActionResult](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyActionResult.htm#apex_class_LoyaltyManagement_LoyaltyActionResult "A class that contains the result returned by a loyalty action.")\>

### updateProgressForCumulativePromotionUsage(updateCumulativeUsageCompletedInputList)

Use this method to update the progress made by a loyalty program member towards attaining a Cumulative type promotion.

#### Signature

public static List<LoyaltyManagement.UpdateCumulativeUsageCompletedOutput> updateProgressForCumulativePromotionUsage(List<LoyaltyManagement.UpdateCumulativeUsageCompletedInput> updateCumulativeUsageCompletedInputList)

#### Parameters

updateCumulativeUsageCompletedInputList

Type: List<[LoyaltyManagement.UpdateCumulativeUsageCompletedInput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedInput.htm#apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedInput "Use this class to update the progress made by a loyalty program member towards attaining a Cumulative type promotion. The action creates a Loyalty Program Member Promotion record if the promotion isn't associated with the member. This class receives the input parameter values for the Update Cumulative Usage Completed action.")\>

Set of inputs to update the progress for a Cumulative type promotion.

#### Return Value

Type: List<[LoyaltyManagement.UpdateCumulativeUsageCompletedOutput](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput.htm#apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedOutput "Represents the details of the progress made by a loyalty program member towards attaining a Cumulative type promotion.")\>

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- LoyaltyResources Methods (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm)
- changeTier(changeTierList) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm)
- creditPoints(creditPointsList) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm)
- debitPoints(debitPointsList) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm)
- getLoyaltyPromotionBasedOnSalesforceCDP(loyaltyPromotionInputList) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm)
- getLoyaltyPromotions(loyaltyPromotionInputList) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm)
- getPointsBalance(memberPointBalanceList) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm)
- getTier(memberTierList) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm)
- issueVoucher(issueVoucherList) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_LoyaltyResources.htm)
