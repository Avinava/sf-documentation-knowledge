---
title: "Budget"
domain: sfFieldRef
topic: budget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.403Z
estimatedTokens: 503
keywords: [Budget, Tracks, estimate, future, revenue, expenses, specific, time, period, API, version, 53.0, later]
---

# Budget

> Tracks an estimate of future revenue or expenses during a specific
         time period. This object is available in API version 53.0 and later.

# Budget

Tracks an estimate of future revenue or expenses during a specific time period. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Budget in the Energy and Utilities Cloud Developer Guide, Grantmaking Guide, Loyalty Management Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| EstimatedUtilizationAmount | Estimated Utilization Amount | currency |  |  | 18 | 2 |
| Id | Budget ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSubmitted | Submitted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Budget Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentBudgetId | Parent Budget ID | reference |  | 18 |  |  |
| PeriodEndDate | Period End Date | date |  |  |  |  |
| PeriodName | Period Name | string |  | 255 |  |  |
| PeriodStartDate | Period Start Date | date |  |  |  |  |
| ProgramId | Program ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |
| UtilizedAmount | Utilized Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
