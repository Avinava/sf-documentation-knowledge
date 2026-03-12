---
title: "PartyExpense"
domain: sfFieldRef
topic: partyexpense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.626Z
estimatedTokens: 500
keywords: [PartyExpense, expense, incurred, individual, account, API, version, 58.0, later]
---

# PartyExpense

> Represents the expense incurred by an individual or account.
      This object is available in API version 58.0 and later.

# PartyExpense

Represents the expense incurred by an individual or account. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyExpense in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationFormId | Application Form ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| ExpensesAsOfDate | Expense As Of Date | date |  |  |  |  |
| Id | Party Expense ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsReadOnly | Read Only | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartyFinancialLiabilityId | Party Financial Liability ID | reference |  | 18 |  |  |
| PartyId | Party ID | reference |  | 18 |  |  |
| RecurrenceInterval | Recurrence Interval | picklist |  | 40 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmount | Total Amount | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 40 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| VerificationDate | Verification Date | date |  |  |  |  |
| VerificationStatus | Verification Status | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
