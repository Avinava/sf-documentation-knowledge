---
title: "IssueVoucherInput Class"
domain: loyalty
topic: issuevoucherinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.540Z
estimatedTokens: 101
namespace: LoyaltyManagement
keywords: [IssueVoucherInput, issue, voucher, loyalty, program, member]
---

# IssueVoucherInput Class

> Use this class to issue a voucher to a loyalty program member.

**Namespace:** `LoyaltyManagement`

# IssueVoucherInput Class

Use this class to issue a voucher to a loyalty program member. This class receives the input parameter values for the Issue Voucher action.

## Namespace

[LoyaltyManagement](atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm "The LoyaltyManagement namespace provides Apex classes and methods to run the Loyalty Management actions.")

## Example

```

```

## Code Examples

```apex
public void issueVoucherTest(){
   //...Create a list with LoyaltyManagement.IssueVoucherInput as a datatype
   List<LoyaltyManagement.IssueVoucherInput> issueVoucherList = new List<LoyaltyManagement.IssueVoucherInput>();

   //...Create an instance of the list object and set the input values 
   issueVoucherList.add(new LoyaltyManagement.IssueVoucherInputBuilder().setLoyaltyProgramMemberId('0lMRM0000002BD12AM')
      .setProgramName('LP01')
      .setVoucherDefinitionName('V1')
      .setVoucherCode('demoCode')
      .setJournalId('0lVRM0000004DH22AM')
      .build());

   //...Pass the list that contains the input values to the LoyaltyResources.issueVoucher() function.
   //...Store the output returned by the function in the IssueVoucherOutput object
   List<LoyaltyManagement.IssueVoucherOutput> issueVoucherActionResults = LoyaltyManagement.LoyaltyResources.issueVoucher(issueVoucherList);
   System.debug('Issue Voucher Successful Operation:'+ issueVoucherActionResults.get(0));
}
```

## Related Topics

- LoyaltyManagement (atlas.en-us.loyalty.meta/loyalty/apex_namespace_LoyaltyManagement.htm)
