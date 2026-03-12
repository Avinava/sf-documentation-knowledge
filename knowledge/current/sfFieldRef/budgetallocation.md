---
title: "BudgetAllocation"
domain: sfFieldRef
topic: budgetallocation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.410Z
estimatedTokens: 377
keywords: [BudgetAllocation, subsection, Budget, allocated, resources, applied, API, version, 53.0, later]
---

# BudgetAllocation

> Represents a subsection of a Budget that shows where allocated
         resources are being applied. This object is available in API version 53.0 and later.

# BudgetAllocation

Represents a subsection of a Budget that shows where allocated resources are being applied. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BudgetAllocation in the Grantmaking Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| BudgetCategoryValueId | Budget Category Value ID | reference |  | 18 |  |  |
| BudgetId | Budget ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FundingDisbursementId | Funding Disbursement ID | reference |  | 18 |  |  |
| Id | Budget Allocation ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Budget Allocation Name | string |  | 255 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
