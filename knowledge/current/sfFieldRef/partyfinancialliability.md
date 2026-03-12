---
title: "PartyFinancialLiability"
domain: sfFieldRef
topic: partyfinancialliability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.733Z
estimatedTokens: 598
keywords: [PartyFinancialLiability, financial, liability, held, party, API, version, 61.0, later]
---

# PartyFinancialLiability

> Represents information about a financial liability held by a
         party. This object is available in API version 61.0 and later.

# PartyFinancialLiability

Represents information about a financial liability held by a party. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyFinancialLiability in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ApplicantId | Applicant ID | reference |  | 18 |  |  |
| ApplicationFormId | Application Form ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EstimatedMonthlyPayment | Estimated Monthly Payment | currency |  |  | 18 | 2 |
| Id | Party Financial Liability ID | id |  | 18 |  |  |
| InterestRate | Interest Rate | percent |  |  | 5 | 2 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsReadOnly | Read Only | boolean |  |  |  |  |
| IsRepaymentActive | Repayment Active | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Lender | Lender | string |  | 255 |  |  |
| LiabilityAccountIdentifier | Liability Account Identifier | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OutstandingBalance | Outstanding Balance | currency |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartyId | Party ID | reference |  | 18 |  |  |
| SharePercent | Share Percent | percent |  |  | 8 | 5 |
| ShareType | Share Type | picklist |  | 40 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Term | Remaining Term | string |  | 255 |  |  |
| Type | Type | picklist |  | 40 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| VerficationStatus | Verfication Status | picklist |  | 40 |  |  |
| VerificationDate | Verification Date | date |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
