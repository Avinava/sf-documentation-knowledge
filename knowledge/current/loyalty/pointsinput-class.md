---
title: "PointsInput Class"
domain: loyalty
topic: pointsinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.664Z
estimatedTokens: 157
namespace: LoyaltyManagement
keywords: [PointsInput, credit, loyalty, points, program, member’s, balance, debit]
---

# PointsInput Class

> Use this class to credit loyalty points to a loyalty program member’s
      balance or debit loyalty points from a loyalty program member’s balance.

**Namespace:** `LoyaltyManagement`

# PointsInput Class

Use this class to credit loyalty points to a loyalty program member’s balance or debit loyalty points from a loyalty program member’s balance. This class receives the input parameter values for the Credit and Debit point actions.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

This example is to credit loyalty points to a member’s balance:

```

```

This example is to debit loyalty points from a member’s balance:

```

```

## Code Examples

```apex
public void creditPointsTest(){
   //...Create a list with LoyaltyManagement.PointsInput as a datatype
   List<LoyaltyManagement.PointsInput> creditPointsList = new List<LoyaltyManagement.PointsInput>();

   //...Create an instance of the list object and set the input values 
   creditPointsList.add(new LoyaltyManagement.PointsInputBuilder()
      .setLoyaltyProgramMemberId('0lMRM0000002BD12AM')
      .setProgramName('LP01')
      .setProgramCurrencyName('Miles')
      .setPoints(100)
      .setJournalId('0lVRM0000004DH22AM')
      .build());

   //...Pass the list that contains the input values to the LoyaltyResources.creditPoints() function.
   //...Store the output returned by the function in the CreditPointsOutput object
   List<LoyaltyManagement.CreditPointsOutput> creditPointActionResults = LoyaltyManagement.LoyaltyResources.creditPoints(creditPointsList);
   System.debug('Credit Successful Operation:'+ creditPointActionResults.get(0));
}
```

```apex
public void debitPointsTest(){
   //...Create a list with LoyaltyManagement.PointsInput as a datatype
   List<LoyaltyManagement.PointsInput> debitPointsList = new List<LoyaltyManagement.PointsInput>();

   //...Create an instance of the list object and set the input values 
   debitPointsList.add(new LoyaltyManagement.PointsInputBuilder()
      .setLoyaltyProgramMemberId('0lMRM0000002BD12AM')
      .setProgramName('LP01')
      .setProgramCurrencyName('Miles')
      .setPoints(1000)
      .setJournalId('0lVRM0000004COB2A2')
      .build());

   //...Pass the list that contains the input values to the LoyaltyResources.debitPoints() function.
   //...Store the output returned by the function in the DebitPointsOutput object
   List<LoyaltyManagement.DebitPointsOutput> debitPointActionResults = LoyaltyManagement.LoyaltyResources.debitPoints(debitPointsList);
   System.debug('Debit Successful Operation:'+ debitPointActionResults.get(0));
}
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
