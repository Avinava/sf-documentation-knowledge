---
title: "EmployeeDemographicSum"
domain: sfFieldRef
topic: employeedemographicsum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.004Z
estimatedTokens: 435
keywords: [EmployeeDemographicSum, statistics, employees, their, demographic, employee, count, age, group, gender, region]
---

# EmployeeDemographicSum

> Represents statistics about employees based on their demographic
         information, such as employee count by age group, by gender, and by region.

# EmployeeDemographicSum

Represents statistics about employees based on their demographic information, such as employee count by age group, by gender, and by region.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EmployeeDemographicSum in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AgeGroup | Age Group | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisclsReportingPeriodId | Disclosure Reporting Period ID | reference |  | 18 |  |  |
| EmployeeCount | Employee Count | double |  |  | 18 | 0 |
| EmploymentType | Employment Type | picklist |  | 40 |  |  |
| Gender | Gender | picklist |  | 40 |  |  |
| Id | Employee Demographic Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Percentage | Percentage | percent |  |  | 13 | 3 |
| Region | Region | picklist |  | 40 |  |  |
| ReportType | Report Type | picklist |  | 40 |  |  |
| SubsidiaryAccountId | Account ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WorkType | Work Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
