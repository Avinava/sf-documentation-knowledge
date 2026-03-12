---
title: "FinancialGoal"
domain: sfFieldRef
topic: financialgoal
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.152Z
estimatedTokens: 494
keywords: [FinancialGoal, Financial, Goal, standard, Salesforce, person, account, API, version, 59.0, later]
---

# FinancialGoal

> This Financial Goal object is a standard Salesforce object. It represents a
         financial goal for a person account. This object is available in API version 59.0 and
      later.

# FinancialGoal

This Financial Goal object is a standard Salesforce object. It represents a financial goal for a person account. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FinancialGoal in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualAmount | Actual Amount | currency |  |  | 18 | 0 |
| Category | Category | picklist |  | 40 |  |  |
| CompletionDate | Completion Date | date |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| EstimatedSuccessPercent | Estimated Success Percent | percent |  |  | 3 | 0 |
| FinancialPlanId | Financial Plan ID | reference |  | 18 |  |  |
| Frequency | Withdrawal Frequency | picklist |  | 40 |  |  |
| Id | Financial Goal ID | id |  | 18 |  |  |
| InitialAmount | Initial Amount | currency |  |  | 18 | 0 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Priority | Priority | picklist |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetAmount | Target Amount | currency |  |  | 18 | 0 |
| TargetDate | Target Date | date |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
