---
title: "ProgramEnrollment"
domain: sfFieldRef
topic: programenrollment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:10.330Z
estimatedTokens: 515
keywords: [ProgramEnrollment, enrollment, benefits, program, API, version, 57.0, later]
---

# ProgramEnrollment

> Represents details of enrollment for benefits in a program. This
      object is available in API version 57.0 and later.

# ProgramEnrollment

Represents details of enrollment for benefits in a program. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ProgramEnrollment in the Energy and Utilities Cloud Developer Guide, Life Sciences Cloud Developer Guide, Net Zero Cloud Developer Guide, Program Management Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ApplicationDate | Application Date | date |  |  |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentMonthDisbCount | Current Month Disbursed Count | double |  |  | 8 | 2 |
| CurrentYearDisbCount | Current Year Disbursed Count | double |  |  | 8 | 2 |
| EndDate | End Date | date |  |  |  |  |
| Id | Program Enrollment ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsAnonymous | Is Anonymous | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PreviousMonthDisbCount | Previous Month Disbursed Count | double |  |  | 8 | 2 |
| PreviousYearDisbCount | Previous Year Disbursed Count | double |  |  | 8 | 2 |
| ProgramId | Program ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
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
