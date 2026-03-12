---
title: "FinancialDeal"
domain: sfFieldRef
topic: financialdeal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.998Z
estimatedTokens: 484
keywords: [FinancialDeal, deal, financial, institution, working]
---

# FinancialDeal

> Represents the deal that the financial institution is working on.

# FinancialDeal

Represents the deal that the financial institution is working on.

For more information, see FinancialDeal in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CloseProbability | Close Probability | percent |  |  | 3 | 0 |
| ConfidentialityType | Confidentiality Type | picklist |  | 40 |  |  |
| ConflictStatus | Conflict Status | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| ExpectedCloseDate | Expected Close Date | date |  |  |  |  |
| FinancialDealCode | Financial Deal Code | string |  | 255 |  |  |
| FinancialDealType | Financial Deal Type | picklist |  | 40 |  |  |
| Id | Financial Deal ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MandatedDate | Mandated Date | date |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentFinancialDealId | Financial Deal ID | reference |  | 18 |  |  |
| ReceivedFee | Received Fee | currency |  |  | 18 | 2 |
| Role | Role | picklist |  | 40 |  |  |
| Stage | Stage | picklist |  | 40 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalExpectedFee | Total Expected Fee | currency |  |  | 18 | 2 |
| TotalExpense | Total Expense | currency |  |  | 18 | 2 |
| TransactionValue | Transaction Value | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
