---
title: "ApplicationFormProductProposal"
domain: sfFieldRef
topic: applicationformproductproposal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:47.563Z
estimatedTokens: 547
keywords: [ApplicationFormProductProposal, proposal, presented, financial, institution, applicant, interest, rate, monthly, payment, validity, dates, total, API, version]
---

# ApplicationFormProductProposal

> Represents the proposal presented by the financial institution to the
         applicant with details of interest rate, monthly payment, validity dates, and total
         interest. This object is available in API version 61.0 and later. Available with
      Digital Lending permission set.

# ApplicationFormProductProposal

Represents the proposal presented by the financial institution to the applicant with details of interest rate, monthly payment, validity dates, and total interest. This object is available in API version 61.0 and later. Available with Digital Lending permission set.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ApplicationFormProductProposal in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdditionalDetails | Additional Details | textarea |  | 131072 |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| ApplicationFormId | Application Form ID | reference |  | 18 |  |  |
| ApplicationFormProductId | Application Form Product ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Application Form Product Proposal ID | id |  | 18 |  |  |
| InterestRate | Interest Rate | percent |  |  | 5 | 2 |
| InterestRateType | Interest Rate Type | picklist |  | 40 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsManualReviewRequired | Manual Review Required | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MonthlyPayment | Monthly Payment | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| ProposalGenerationMethod | Proposal Generation Method | picklist |  | 255 |  |  |
| SelectedBy | Selected By | picklist |  | 40 |  |  |
| Stage | Stage | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Term | Term | int | 9 |  |  |  |
| TotalInterest | Total Interest | currency |  |  | 18 | 2 |
| ValidEndDate | Valid End Date | date |  |  |  |  |
| ValidStartDate | Valid Start Date | date |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
