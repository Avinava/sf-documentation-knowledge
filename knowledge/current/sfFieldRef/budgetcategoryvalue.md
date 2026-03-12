---
title: "BudgetCategoryValue"
domain: sfFieldRef
topic: budgetcategoryvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.458Z
estimatedTokens: 425
keywords: [BudgetCategoryValue, Captures, budget, category, time, period, API, version, 57.0, later]
---

# BudgetCategoryValue

> Captures budget values for category and time period. This object
      is available in API version 57.0 and later.

# BudgetCategoryValue

Captures budget values for category and time period. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BudgetCategoryValue in the Energy and Utilities Cloud Developer Guide, Grantmaking Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualAmount | Actual Amount | currency |  |  | 18 | 2 |
| ActualQuantity | Actual Quantity | double |  |  | 18 | 2 |
| Amount | Planned Amount | currency |  |  | 18 | 2 |
| BudgetCategoryId | Budget Category ID | reference |  | 18 |  |  |
| BudgetDivisionId | Budget Period ID | reference |  | 18 |  |  |
| Comments | Comments | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Budget Category Value ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Quantity | Planned Quantity | double |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VarianceAmount | Variance Amount | currency |  |  | 18 | 2 |
| VarianceQuantity | Variance Quantity | double |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
