---
title: "PersonEmployment"
domain: sfFieldRef
topic: personemployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.106Z
estimatedTokens: 693
keywords: [PersonEmployment, person’s, employment]
---

# PersonEmployment

> Represents information about a person’s employment.

# PersonEmployment

Represents information about a person’s employment.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PersonEmployment in the Education Cloud Developer Guide, Financial Services Cloud Developer Guide, Life Sciences Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AnnualIncome | Annual Income | currency |  |  | 18 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| EmployerAddress | Employer Address | address |  |  |  |  |
| EmployerCity | Employer City | string |  | 40 |  |  |
| EmployerCountry | Employer Country | string |  | 80 |  |  |
| EmployerGeocodeAccuracy | Employer Geocode Accuracy | picklist |  | 40 |  |  |
| EmployerLatitude | Employer Latitude | double |  |  | 18 | 15 |
| EmployerLongitude | Employer Longitude | double |  |  | 18 | 15 |
| EmployerPhone | Employer Phone | phone |  | 40 |  |  |
| EmployerPostalCode | Employer Postal Code | string |  | 20 |  |  |
| EmployerState | Employer State | string |  | 80 |  |  |
| EmployerStreet | Employer Street | textarea |  | 255 |  |  |
| EmployerTaxAccountNumber | Employer Tax Account Number | string |  | 255 |  |  |
| EmploymentStatus | Employment Status | picklist |  | 40 |  |  |
| EmploymentType | Employment Type | picklist |  | 40 |  |  |
| EndDate | End Date | date |  |  |  |  |
| HourlyWage | Hourly Wage | currency |  |  | 18 | 0 |
| Id | Person Employment ID | id |  | 18 |  |  |
| IsCurrentEmployment | Current Employment | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFlagged | Flagged | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Employer | string |  | 255 |  |  |
| Occupation | Occupation | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Position | Position | string |  | 255 |  |  |
| RelatedPersonId | Related Person ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerificationDate | Verification Date | date |  |  |  |  |
| VerificationStatus | Verification Status | picklist |  | 40 |  |  |
| WeeklyHourCount | Weekly Hour Count | int | 9 |  |  |  |
| WorkerType | Worker Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
