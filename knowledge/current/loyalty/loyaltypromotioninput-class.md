---
title: "LoyaltyPromotionInput Class"
domain: loyalty
topic: loyaltypromotioninput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.571Z
estimatedTokens: 124
namespace: LoyaltyManagement
keywords: [LoyaltyPromotionInput, retrieve, active, promotions, eligible, transaction, journal]
---

# LoyaltyPromotionInput Class

> Use this class to retrieve active promotions that are eligible for a
      transaction journal.

**Namespace:** `LoyaltyManagement`

# LoyaltyPromotionInput Class

Use this class to retrieve active promotions that are eligible for a transaction journal. The action can process accrual or redemption transactions. This class receives the input parameter values for the Loyalty Promotion action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

```

```

## Code Examples

```apex
public static void getLoyaltyPromotionsTest() {
   //...Create a list with 'LoyaltyManagement.LoyaltyPromotionInput' as a datatype
   List<LoyaltyManagement.LoyaltyPromotionInput> loyaltyPromotionInputList = new List<LoyaltyManagement.LoyaltyPromotionInput>();

   //...Create an instance of the list object and set the input values 
   loyaltyPromotionInputList.add(new LoyaltyManagement.LoyaltyPromotionInput input = new LoyaltyManagement.LoyaltyPromotionInputBuilder()
      .setJournalId('0lVRM0000004DH22AM')
      .build());

   //...Pass the list that contains the input values to the 'LoyaltyResources.getLoyaltyPromotions()' function.
   //...Store the output returned by the function in the 'LoyaltyPromotionOutput' object
   List<LoyaltyManagement.LoyaltyPromotionOutput> results = LoyaltyManagement.LoyaltyResources.getLoyaltyPromotions(loyaltyPromotionInputList);
   System.debug('Get Loyalty Promotions:'+ results.get(0).isSuccess());
}
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
