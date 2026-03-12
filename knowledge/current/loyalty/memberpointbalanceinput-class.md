---
title: "MemberPointBalanceInput Class"
domain: loyalty
topic: memberpointbalanceinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.617Z
estimatedTokens: 109
namespace: LoyaltyManagement
keywords: [MemberPointBalanceInput, retrieve, loyalty, points, balance, program, member]
---

# MemberPointBalanceInput Class

> Use this class to retrieve loyalty points balance for a given loyalty
      program member.

**Namespace:** `LoyaltyManagement`

# MemberPointBalanceInput Class

Use this class to retrieve loyalty points balance for a given loyalty program member. This class receives the input parameter values for the Get Member Points action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

```

```

## Code Examples

```apex
public void pointsBalanceTest(){
   //...Create a list with LoyaltyManagement.MemberPointsBalanceInput as a datatype
   List<LoyaltyManagement.MemberPointBalanceInput> memberPointsBalanceList = new List<LoyaltyManagement.MemberPointBalanceInput>();

   //...Create an instance of the list object and set the input values 
   memberPointsBalanceList.add(new LoyaltyManagement.MemberPointBalanceInputBuilder()
      .setLoyaltyProgramMemberId('0lMRM0000002BD12AM')
      .setProgramName('LP01')
      .setProgramCurrencyName('Miles')
      .build());

   //...Pass the list that contains the input values to the LoyaltyResources.getPointsBalance() function.
   //...Store the output returned by the function in the MemberPointsBalanceOutput object
   List<LoyaltyManagement.MemberPointBalanceOutput> pointBalanceActionResults = LoyaltyManagement.LoyaltyResources.getPointsBalance(memberPointsBalanceList);
   System.debug('Get Member Point Balance Successful Operation:'+ pointBalanceActionResults.get(0));
   System.debug('Points balance : ' + pointBalanceActionResults.get(0).getPoints());
}
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
