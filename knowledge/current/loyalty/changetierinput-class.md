---
title: "ChangeTierInput Class"
domain: loyalty
topic: changetierinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.497Z
estimatedTokens: 101
namespace: LoyaltyManagement
keywords: [ChangeTierInput, change, tier, loyalty, program, member]
---

# ChangeTierInput Class

> Use this class to change the tier for a given loyalty program
      member.

**Namespace:** `LoyaltyManagement`

# ChangeTierInput Class

Use this class to change the tier for a given loyalty program member. This class receives the input parameter values for the Change Tier action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

```

```

## Code Examples

```apex
public void changeTierTest(){
   //...Create a list with LoyaltyManagement.ChangeTierInput as a datatype
   List<LoyaltyManagement.ChangeTierInput> changeTierList = new List<LoyaltyManagement.ChangeTierInput>();

   //...Create an instance of the list object and set the input values 
   changeTierList.add(new LoyaltyManagement.ChangeTierInputBuilder()
      .setLoyaltyProgramMemberId('0lcxx00006000001AAA')
      .setProgramName('baProgram')
      .setTierGroupName('QualifyingGroup')
      .setTargetTierName('Gold')
      .setChangeReason('Reason for change.')
      .build());

   //...Pass the list that contains the input values to the LoyaltyResources.changeTier() function.
   //...Store the output returned by the function in the ChangeTierOutput object
   List<LoyaltyManagement.ChangeTierOutput> changeTierActionResults = LoyaltyManagement.LoyaltyResources.changeTier(changeTierList);
   System.debug('Change Tier Successful Operation:'+ changeTierActionResults.get(0).isSuccess());
}
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
