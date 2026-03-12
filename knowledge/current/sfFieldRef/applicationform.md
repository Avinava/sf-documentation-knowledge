---
title: "ApplicationForm"
domain: sfFieldRef
topic: applicationform
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.500Z
estimatedTokens: 647
keywords: [ApplicationForm, high, level, submitted, application, API, version, 62.0, later]
---

# ApplicationForm

> Represents the high level information of a submitted application. This
      object is available in API version 62.0 and later.

# ApplicationForm

Represents the high level information of a submitted application. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ApplicationForm in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ApplicationStatus | Application Status | picklist |  | 40 |  |  |
| ApplicationSummary | Application Summary | textarea |  | 32000 |  |  |
| CompletionDate | Completion Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DueDate | Due Date | date |  |  |  |  |
| Id | Application Form ID | id |  | 18 |  |  |
| IntakeChannelType | Intake Channel Type | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LeadId | Lead ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OpportunityId | Opportunity ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Purpose | Purpose | textarea |  | 32000 |  |  |
| Score | Score | double |  |  | 18 | 2 |
| ScoreReason | Score Reason | textarea |  | 32000 |  |  |
| ScoreType | Score Type | picklist |  | 40 |  |  |
| Stage | Stage | picklist |  | 40 |  |  |
| SubType | Sub Type | picklist |  | 40 |  |  |
| SubmissionDate | Submission Date | date |  |  |  |  |
| SubmittedById | Submitted By ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ThirdPartyLoanProviderAccountId | Account ID | reference |  | 18 |  |  |
| TierType | Tier Type | picklist |  | 40 |  |  |
| Title | Title | string |  | 255 |  |  |
| TotalDebtToIncomePercent | Total Debt To Income Percentage | percent |  |  | 3 | 0 |
| TotalIncomeToExpenseRatio | Total Income To Expense Ratio | double |  |  | 18 | 2 |
| TotalLoanToValuePercent | Total Loan To Value Percentage | percent |  |  | 3 | 0 |
| Type | Type | picklist |  | 40 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
