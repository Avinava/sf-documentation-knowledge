---
title: "EmpBenefitSummary"
domain: sfFieldRef
topic: empbenefitsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.962Z
estimatedTokens: 444
keywords: [EmpBenefitSummary, statistics, benefits, provided, employees, usage]
---

# EmpBenefitSummary

> Represents statistics about benefits provided to employees and the
         usage of benefits.

# EmpBenefitSummary

Represents statistics about benefits provided to employees and the usage of benefits.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EmpBenefitSummary in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BenefitUsage | Benefit Usage | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisclsReportingPeriodId | Disclosure Reporting Period ID | reference |  | 18 |  |  |
| EmployeeBenefitType | Benefit Type | picklist |  | 40 |  |  |
| EmployeeCount | Employee Count | double |  |  | 13 | 3 |
| EmployeePercentage | Employee Percentage | percent |  |  | 13 | 3 |
| EmploymentType | Employment Type | picklist |  | 40 |  |  |
| Id | Employment Benefit Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsEmployeeEligible | Employee Eligible | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PercentageCalcType | Percentage Calculation Type | picklist |  | 40 |  |  |
| PrimaryLocation | Primary Location | string |  | 255 |  |  |
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
