---
title: "Program"
domain: sfFieldRef
topic: program
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.271Z
estimatedTokens: 512
keywords: [Program, enrollment, disbursement, benefits]
---

# Program

> Represents information about the enrollment and disbursement of
         benefits in a program.

# Program

Represents information about the enrollment and disbursement of benefits in a program.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Program in the Education Cloud Developer Guide, Energy and Utilities Cloud Developer Guide, Net Zero Cloud Developer Guide, Program Management Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActiveEnrolleeCount | Active Enrollee Count | double |  |  | 18 | 0 |
| AdditionalContext | Additional Context | textarea |  | 5000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentMonthDisbCount | Current Month Disbursed Count | double |  |  | 8 | 2 |
| CurrentYearDisbCount | Current Year Disbursed Count | double |  |  | 8 | 2 |
| EndDate | End Date | date |  |  |  |  |
| Id | Program ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentProgramId | Program ID | reference |  | 18 |  |  |
| PreviousMonthDisbCount | Previous Month Disbursed Count | double |  |  | 8 | 2 |
| PreviousYearDisbCount | Previous Year Disbursed Count | double |  |  | 8 | 2 |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| Summary | Summary | string |  | 100 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalEnrolleeCount | Total Enrollee Count | double |  |  | 18 | 0 |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
