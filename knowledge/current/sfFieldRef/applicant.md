---
title: "Applicant"
domain: sfFieldRef
topic: applicant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.411Z
estimatedTokens: 590
keywords: [Applicant, Specify, care, program, enrollee, represented, API, version, 59.0, later]
---

# Applicant

> Specify the care program enrollee represented as an applicant. This
      object is available in API version 59.0 and later.

# Applicant

Specify the care program enrollee represented as an applicant. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Applicant in the Financial Services Cloud Developer Guide and Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ApplicationFormId | Application Form ID | reference |  | 18 |  |  |
| BirthDate | Birth Date | date |  |  |  |  |
| BusinessEntityName | Business Entity Name | string |  | 255 |  |  |
| BusinessEntityPrimCtctId | Business Entity Primary Contact ID | reference |  | 18 |  |  |
| BusinessEntityType | Business Entity Type | picklist |  | 40 |  |  |
| CareProgramEnrolleeId | Care Program Enrollee ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DebtToIncomeRatio | Debt To Income Ratio | int | 9 |  |  |  |
| Email | Email | email |  | 80 |  |  |
| ExpenseToIncomeRatio | Expense To Income Ratio | int | 9 |  |  |  |
| FirstName | First Name | string |  | 255 |  |  |
| GroupExposure | Group Exposure | currency |  |  | 18 | 2 |
| Id | Applicant ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastName | Last Name | string |  | 255 |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MiddleName | Middle Name | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| PhoneType | Phone Type | picklist |  | 40 |  |  |
| Role | Role | picklist |  | 40 |  |  |
| Salutation | Salutation | picklist |  | 40 |  |  |
| Stage | Stage | picklist |  | 40 |  |  |
| Suffix | Suffix | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UniqueReferenceNumber | Unique Reference Number | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
