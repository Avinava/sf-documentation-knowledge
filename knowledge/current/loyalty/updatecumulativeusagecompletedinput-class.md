---
title: "UpdateCumulativeUsageCompletedInput Class"
domain: loyalty
topic: updatecumulativeusagecompletedinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.690Z
estimatedTokens: 553
namespace: LoyaltyManagement
keywords: [UpdateCumulativeUsageCompletedInput, progress, made, loyalty, program, member, towards, attaining, Cumulative, promotion, loyaltyProgramMemberId, promotionId, usageIncrementForCumulativePromotion]
---

# UpdateCumulativeUsageCompletedInput Class

> Use this class to update the progress made by a loyalty program member
      towards attaining a Cumulative type promotion.

**Namespace:** `LoyaltyManagement`

# UpdateCumulativeUsageCompletedInput Class

Use this class to update the progress made by a loyalty program member towards attaining a Cumulative type promotion. The action creates a Loyalty Program Member Promotion record if the promotion isn't associated with the member. This class receives the input parameter values for the Update Cumulative Usage Completed action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

```

```

-   **[UpdateCumulativeUsageCompletedInput Constructors](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedInput.htm#apex_LoyaltyManagement_UpdateCumulativeUsageCompletedInput_constructors)**


## UpdateCumulativeUsageCompletedInput Constructors

The following are constructors for UpdateCumulativeUsageCompletedInput.

-   **[UpdateCumulativeUsageCompletedInput(loyaltyProgramMemberId, promotionId, usageIncrementForCumulativePromotion)](atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedInput.htm#apex_LoyaltyManagement_UpdateCumulativeUsageCompletedInput_ctor)**
    Creates an instance of the LoyaltyManagement.UpdateCumulativeUsageCompletedInput class.

### UpdateCumulativeUsageCompletedInput(loyaltyProgramMemberId, promotionId, usageIncrementForCumulativePromotion)

Creates an instance of the LoyaltyManagement.UpdateCumulativeUsageCompletedInput class.

#### Signature

public UpdateCumulativeUsageCompletedInput(String loyaltyProgramMemberId, String promotionId, Integer usageIncrementForCumulativePromotion)

#### Parameters

loyaltyProgramMemberId

Type: String

The ID of the loyalty program member who progress towards attaining a cumulative promotion must be updated. This is a required field.

promotionId

Type: String

The ID of the Cumulative type promotion for which member's progress must be updated. This is a required field.

usageIncrementForCumulativePromotion

Type: Integer

The value or quantity that must be added to member's usage towards attaining the promotion. This is a required field.

## Code Examples

```apex
public static void updateProgressForCumulativePromotionUsageTest() {

   //Create a list with LoyaltyManagement.UpdateCumulativeUsageCompletedInput as a datatype
   List<LoyaltyManagement.UpdateCumulativeUsageCompletedInput> updateCumulativeUsageCompletedInputList = 
      new List<LoyaltyManagement.UpdateCumulativeUsageCompletedInput>();

   //Create an instance of LoyaltyManagement.UpdateCumulativeUsageCompletedInput class and set the inputs
   LoyaltyManagement.UpdateCumulativeUsageCompletedInput input = new LoyaltyManagement.UpdateCumulativeUsageCompletedInput('0lMxx00000000EXEAY', '0c8xx00000000BJAAY', 200);
   LoyaltyManagement.UpdateCumulativeUsageCompletedInput input1 = new LoyaltyManagement.UpdateCumulativeUsageCompletedInput('0lMxx00000000G9EAI', '0c8xx00000000BJAAY', 200);
      updateCumulativeUsageCompletedInputList.add(input);
      updateCumulativeUsageCompletedInputList.add(input1);

   //Store the output returned by the interface in an instance of the UpdateCumulativeUsageCompletedOutput object
   List<LoyaltyManagement.UpdateCumulativeUsageCompletedOutput> results = 
      LoyaltyManagement.LoyaltyResources.updateProgressForCumulativePromotionUsage(updateCumulativeUsageCompletedInputList);

   //Return the status of the Apex call
   System.debug('updateProgressForCumulativePromotionUsage Successful Operation:'+ results.get(0).isSuccess());
    }
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
- UpdateCumulativeUsageCompletedInput Constructors (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedInput.htm)
- UpdateCumulativeUsageCompletedInput(loyaltyProgramMemberId, promotionId, usageIncrementForCumulativePromotion) (atlas.en-us.loyalty.meta/loyalty/apex_class_LoyaltyManagement_UpdateCumulativeUsageCompletedInput.htm)
