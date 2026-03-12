---
title: "DivrsEquityInclSum"
domain: sfFieldRef
topic: divrsequityinclsum
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.313Z
estimatedTokens: 458
keywords: [DivrsEquityInclSum, diversity, governance, bodies, employees, gender, age, group, indicators]
---

# DivrsEquityInclSum

> Represents information that indicates the diversity of governance
         bodies and employees by gender, age group, and other diversity indicators.

# DivrsEquityInclSum

Represents information that indicates the diversity of governance bodies and employees by gender, age group, and other diversity indicators.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DivrsEquityInclSum in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AgeGroup | Age Group | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DisclsReportingPeriodId | Disclosure Reporting Period ID | reference |  | 18 |  |  |
| DiversityCategory | Diversity Category | picklist |  | 40 |  |  |
| DiversityType | Diversity Type | picklist |  | 40 |  |  |
| EmployeePercentage | Employee Percentage | percent |  |  | 13 | 3 |
| EmployeeType | Employee Type | picklist |  | 40 |  |  |
| EmploymentType | Employment Type | picklist |  | 40 |  |  |
| Gender | Gender | picklist |  | 40 |  |  |
| Id | Diversity Equity Inclusion Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Location | Employee Location | picklist |  | 40 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Race | Race | picklist |  | 40 |  |  |
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
