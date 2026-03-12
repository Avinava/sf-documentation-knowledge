---
title: "PartyIncome"
domain: sfFieldRef
topic: partyincome
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.804Z
estimatedTokens: 647
keywords: [PartyIncome, income, earned, individual, various, sources, salary, commissions, fees, rental]
---

# PartyIncome

> Represents all income earned by an individual. The income could be from
         various sources such as salary, commissions, fees, rental properties, and so
      on.

# PartyIncome

Represents all income earned by an individual. The income could be from various sources such as salary, commissions, fees, rental properties, and so on.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyIncome in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicationFormId | Application Form ID | reference |  | 18 |  |  |
| CalendarYear | Calendar Year | int | 4 |  |  |  |
| ClaimId | Claim ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EmployerAddress | Employer Address | textarea |  | 255 |  |  |
| EmployerId | Account ID | reference |  | 18 |  |  |
| EmployerName | Employer Name | string |  | 255 |  |  |
| EmployerPhone | Employer Phone | phone |  | 40 |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| Id | Party Income ID | id |  | 18 |  |  |
| IncomeAmount | Income Amount | currency |  |  | 18 | 2 |
| IncomeAsOfDate | Income As Of Date | date |  |  |  |  |
| IncomeFrequency | Income Frequency | picklist |  | 40 |  |  |
| IncomeLossPercent | Income Loss Percent | percent |  |  | 3 | 0 |
| IncomeSourceId | Income Source ID | reference |  | 18 |  |  |
| IncomeStatus | Income Status | picklist |  | 40 |  |  |
| IncomeType | Income Type | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsReadOnly | Read Only | boolean |  |  |  |  |
| JobTitle | Job Title | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| ModificationReason | Change/Termination Reason | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| NetIncome | Net Income | currency |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartyId | Party ID | reference |  | 18 |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
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
