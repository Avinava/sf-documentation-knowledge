---
title: "LoyaltyLedger"
domain: sfFieldRef
topic: loyaltyledger
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.089Z
estimatedTokens: 417
keywords: [LoyaltyLedger, Records, points, credited, debited, member, across, transactions]
---

# LoyaltyLedger

> Records the points that have been credited or debited for a member across the
      transactions.

# LoyaltyLedger

Records the points that have been credited or debited for a member across the transactions.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoyaltyLedger in the Loyalty Management Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivityDate | Activity Date | datetime |  |  |  |  |
| AdditionalNotes | Additional Notes | string |  | 255 |  |  |
| Correlation | Correlation ID | string |  | 15 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EscrowPointsCreditDate | Escrow Points Credit Date | date |  |  |  |  |
| EventType | Event Type | picklist |  | 40 |  |  |
| ExpiryDate | Expiry Date | date |  |  |  |  |
| Flow | Flow ID | string |  | 15 |  |  |
| Id | Loyalty Ledger ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoyaltyProgramCurrencyId | Currency ID | reference |  | 18 |  |  |
| LoyaltyProgramMemberId | Loyalty Program Member ID | reference |  | 18 |  |  |
| Points | Points | double |  |  | 18 | 2 |
| PromotionId | Promotion ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TransactionJournalId | Transaction Journal ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
