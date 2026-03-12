---
title: "CdpBasedLoyaltyPromotionInput Class"
domain: loyalty
topic: cdpbasedloyaltypromotioninput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.483Z
estimatedTokens: 120
namespace: LoyaltyManagement
keywords: [CdpBasedLoyaltyPromotionInput, retrieve, promotions, eligible, member, member’s, market, segment]
---

# CdpBasedLoyaltyPromotionInput Class

> Use this class to retrieve promotions that are eligible for a member
      based on the member’s market segment.

**Namespace:** `LoyaltyManagement`

# CdpBasedLoyaltyPromotionInput Class

Use this class to retrieve promotions that are eligible for a member based on the member’s market segment. This class receives the input parameter values for the Data Cloud based Loyalty Promotion action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

```

```

## Code Examples

```apex
public static void getCdpBasedLoyaltyPromotionsTest() {
   //...Create a list with LoyaltyManagement.CdpBasedLoyaltyPromotionInput as a datatype
   List<LoyaltyManagement.CdpBasedLoyaltyPromotionInput> loyaltyPromotionInputList = new List<LoyaltyManagement.CdpBasedLoyaltyPromotionInput>();

   //...Create an instance of the list object and set the input values 
   loyaltyPromotionInputList.add(new LoyaltyManagement.CdpBasedLoyaltyPromotionInput input = new LoyaltyManagement.CdpBasedLoyaltyPromotionInputBuilder()
      .setMemberId('0lMRM0000002BD12AM')
      .setPromotions(new List<sObject>{'0c8R000000002MqIAI', '0c8R000000002PqIAI'})
      .build());

   //...Pass the list that contains the input values to the LoyaltyResources.getLoyaltyPromotionBasedOnSalesforceCDP() function.
   //...Store the output returned by the function in the CdpBasedLoyaltyPromotionOutput object
   List<LoyaltyManagement.CdpBasedLoyaltyPromotionOutput> results = LoyaltyManagement.LoyaltyResources.getLoyaltyPromotionBasedOnSalesforceCDP(loyaltyPromotionInputList);
   System.debug('Get Cdp Based Promotions:'+ results.get(0).isSuccess());
}
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
