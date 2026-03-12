---
title: "EmployeeDevelopmentSum"
domain: sfFieldRef
topic: employeedevelopmentsum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.028Z
estimatedTokens: 409
keywords: [EmployeeDevelopmentSum, statistics, training, development, provided, upskill, employees]
---

# EmployeeDevelopmentSum

> Represents statistics about training and development provided to
         upskill the employees.

# EmployeeDevelopmentSum

Represents statistics about training and development provided to upskill the employees.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EmployeeDevelopmentSum in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AverageTrainingTime | Average Training Time | double |  |  | 13 | 3 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisclsReportingPeriodId | Disclosure Reporting Period ID | reference |  | 18 |  |  |
| EmployeeCount | Employee Count | double |  |  | 10 | 0 |
| EmployeePercentage | Employee Percentage | percent |  |  | 13 | 3 |
| EmployeeType | Employee Type | picklist |  | 40 |  |  |
| Gender | Gender | picklist |  | 40 |  |  |
| Id | Employee Development Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProgramCategory | Program Category | picklist |  | 40 |  |  |
| SubsidiaryAccountId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
