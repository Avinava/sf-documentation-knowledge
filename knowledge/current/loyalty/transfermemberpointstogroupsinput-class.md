---
title: "TransferMemberPointsToGroupsInput Class"
domain: loyalty
topic: transfermemberpointstogroupsinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.680Z
estimatedTokens: 123
namespace: LoyaltyManagement
keywords: [TransferMemberPointsToGroupsInput, transfer, points, individual, member, corporate, member's, associated, group]
---

# TransferMemberPointsToGroupsInput Class

> Use this class to transfer points from an individual member or a
      corporate member to the member's associated group.

**Namespace:** `LoyaltyManagement`

# TransferMemberPointsToGroupsInput Class

Use this class to transfer points from an individual member or a corporate member to the member's associated group. This class receives the input parameter values for the Transfer Member Points To Groups action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

```

```

## Code Examples

```apex
public static void transferPointsToGroupsTest(){

   //Create a list with LoyaltyManagement.TransferMemberPointsToGroupsInput as a datatype
   List<LoyaltyManagement.TransferMemberPointsToGroupsInput> transferPointsList = 
      new List<LoyaltyManagement.TransferMemberPointsToGroupsInput>();

   //Create an instance of transferPointsList to set the transaction journal ID as input
   transferPointsList.add(new LoyaltyManagement.TransferMemberPointsToGroupsInputBuilder()
      .setJournalId('0lVT10000008CnlMAE')
      .build());

   //Pass the list to the LoyaltyResources.transferMemberPointsToGroups() interface.
   //Store the output returned by the interface in an instance of the 'LoyaltyActionResult' object
   List<LoyaltyManagement.LoyaltyActionResult> transferResults = 
      LoyaltyManagement.LoyaltyResources.transferMemberPointsToGroups(transferPointsList);

   //Return the status of the Apex call
   System.debug('Transfer points to groups is successful:'+ transferResults.get(0).isSuccess());
}
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
