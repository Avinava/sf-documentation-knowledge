---
title: "MemberTierInput Class"
domain: loyalty
topic: membertierinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.641Z
estimatedTokens: 106
namespace: LoyaltyManagement
keywords: [MemberTierInput, retrieve, current, tier, loyalty, program, member]
---

# MemberTierInput Class

> Use this class to retrieve the current tier for a specified loyalty
      program member.

**Namespace:** `LoyaltyManagement`

# MemberTierInput Class

Use this class to retrieve the current tier for a specified loyalty program member. This class receives the input parameter values for the Get Member Tier action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

```

```

## Code Examples

```apex
public void getTierTest(){
   //...Create a list with LoyaltyManagement.MemberTierInput as a datatype
   List<LoyaltyManagement.MemberTierInput> memberTiersList = new List<LoyaltyManagement.MemberTierInput>();

   //...Create an instance of the list object and set the input values 
   memberTiersList.add(new LoyaltyManagement.MemberTierInputBuilder().setLoyaltyProgramMemberId('0lMRM0000002BD12AM')
      .setProgramName('LP01')
      .setTierGroupName('TG1')
      .build());

   //...Pass the list that contains the input values to the LoyaltyResources.getTier() function.
   //...Store the output returned by the function in the MemberTierOutput object
   List<LoyaltyManagement.MemberTierOutput> memberTierActionResults = LoyaltyManagement.LoyaltyResources.getTier(memberTiersList);
   System.debug('Get Member Tier Successful Operation:'+ memberTierActionResults.get(0));
   System.debug('Member Tier : '+ memberTierActionResults.get(0).getMemberTier());
}
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
