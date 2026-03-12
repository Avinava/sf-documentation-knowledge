---
title: "LoyaltyProgramPartnerLedger"
domain: sfFieldRef
topic: loyaltyprogrampartnerledger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.382Z
estimatedTokens: 387
keywords: [LoyaltyProgramPartnerLedger, ledger, loyalty, program, credit, points, debit, prepaid, partner's, pack, postpaid, partner’s, point, balance, add]
---

# LoyaltyProgramPartnerLedger

> Represents the ledger used by a loyalty program to credit points to or debit
         points from a prepaid partner's points pack or from a postpaid partner’s point balance.
         This ledger can also be used to add or deduct the monetary value of points from the
         partner's postpaid bill.

# LoyaltyProgramPartnerLedger

Represents the ledger used by a loyalty program to credit points to or debit points from a prepaid partner's points pack or from a postpaid partner’s point balance. This ledger can also be used to add or deduct the monetary value of points from the partner's postpaid bill.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyProgramPartnerLedger in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityDate | Activity Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Loyalty Program Partner Ledger ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LoyaltyLedgerId | Loyalty Ledger ID | reference |  | 18 |  |  |
| LoyaltyProgramMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| LoyaltyProgramPartnerId | Loyalty Program Partner ID | reference |  | 18 |  |  |
| Points | Points | double |  |  | 18 | 2 |
| PromotionId | Promotion ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransactionJournalId | Transaction Journal ID | reference |  | 18 |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
