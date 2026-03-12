---
title: "LoanApplicantEmployment"
domain: sfFieldRef
topic: loanapplicantemployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.684Z
estimatedTokens: 794
keywords: [LoanApplicantEmployment, borrower's, co-borrower's, current, past, employment, API, version, 47.0, later]
---

# LoanApplicantEmployment

> Represents details about the borrower's or co-borrower's current and past
			employment. This object is available in API version 47.0 and later.

# LoanApplicantEmployment

Represents details about the borrower's or co-borrower's current and past employment. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicantEmployment in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentJobAdditionalMonthCount | Additional Months at Current Job | int | 2 |  |  |  |
| CurrentJobYearCount | Years at Current Job | int | 2 |  |  |  |
| EmployerAddress | Employer Address | address |  |  |  |  |
| EmployerCity | Employer City | string |  | 40 |  |  |
| EmployerCountry | Employer Country | string |  | 80 |  |  |
| EmployerGeocodeAccuracy | Employer Geocode Accuracy | picklist |  | 40 |  |  |
| EmployerLatitude | Employer Latitude | double |  |  | 18 | 15 |
| EmployerLongitude | Employer Longitude | double |  |  | 18 | 15 |
| EmployerName | Employer Name | string |  | 255 |  |  |
| EmployerPhone | Employer Phone | phone |  | 40 |  |  |
| EmployerPostalCode | Employer Postal Code | string |  | 20 |  |  |
| EmployerState | Employer State | string |  | 80 |  |  |
| EmployerStreet | Employer Street | textarea |  | 255 |  |  |
| EmploymentExtIdentifier | Loan Applicant Employment External ID | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Loan Applicant Employment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLessThanQuarterShare | Owns Less Than 25% | boolean |  |  |  |  |
| IsRelToTransactionParty | Employed by Party to Transaction | boolean |  |  |  |  |
| IsSelfEmployed | Self-Employed | boolean |  |  |  |  |
| JobTitle | Job Title or Type of Business | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanApplicantId | Loan Applicant ID | reference |  | 18 |  |  |
| LoanApplicationId | Residential Loan Application ID | reference |  | 18 |  |  |
| MonthlyBaseIncomeAmount | Monthly Base Income | currency |  |  | 18 | 2 |
| MonthlyBonusAmount | Monthly Bonus | currency |  |  | 18 | 2 |
| MonthlyCommissionAmount | Monthly Commission | currency |  |  | 18 | 2 |
| MonthlyIncome | Monthly Income | currency |  |  | 18 | 2 |
| MonthlyMilitaryEntlAmt | Monthly Military Entitlement | currency |  |  | 18 | 2 |
| MonthlyOtherIncomeAmount | Other Monthly Income | currency |  |  | 18 | 2 |
| MonthlyOvertimeAmount | Monthly Overtime | currency |  |  | 18 | 2 |
| MonthlyTotalIncomeAmount | Total Monthly Income | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
