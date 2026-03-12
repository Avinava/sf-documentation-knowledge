---
title: "LoanApplicant"
domain: sfFieldRef
topic: loanapplicant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.606Z
estimatedTokens: 745
keywords: [LoanApplicant, borrower, co-borrower, loan, application, API, version, 47.0, later]
---

# LoanApplicant

> Represents details of the borrower or co-borrower for the loan
			application. This object is available in API version 47.0 and later.

# LoanApplicant

Represents details of the borrower or co-borrower for the loan application. This object is available in API version 47.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicant in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApplicantExtIdentifier | Applicant External ID | string |  | 255 |  |  |
| AsianRaceSubType | Asian Race | multipicklist |  | 4099 | 0 |  |
| BorrowerType | Borrower Type | picklist |  | 255 |  |  |
| CitizenshipStatus | Citizenship Status | picklist |  | 40 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DependentCount | Number of Dependents | int | 2 |  |  |  |
| DependentsAge | Dependents' Ages | string |  | 255 |  |  |
| EthnicitySubType | Ethnicity Origin | multipicklist |  | 4099 | 0 |  |
| EthnicityType | Ethnicity | picklist |  | 40 |  |  |
| GenderType | Gender | picklist |  | 40 |  |  |
| HasMilitaryService | Military Service | boolean |  |  |  |  |
| Id | Loan Applicant ID | id |  | 18 |  |  |
| IsActiveMilitary | Currently on Active Military Duty | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsJointCredit | Joint Credit | boolean |  |  |  |  |
| IsSurvivingMilitarySpouse | Surviving Military Spouse | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanApplicationId | Residential Loan Application ID | reference |  | 18 |  |  |
| MaritalStatus | Marital Status | picklist |  | 40 |  |  |
| MilitaryTourExpirationMonth | Military Tour Expiration Month | int | 2 |  |  |  |
| MilitaryTourExpirationYear | Military Tour Expiration Year | int | 4 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OtherAsianRaceSubType | Other Asian Race | string |  | 255 |  |  |
| OtherEthnicitySubType | Other Ethnicity Origin Description | string |  | 255 |  |  |
| OtherPacIslandSubType | Other Pacific Islander Race | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PacIslandSubType | Pacific Islander Race | multipicklist |  | 4099 | 0 |  |
| PreferredLanguage | Preferred Language for Communication | picklist |  | 40 |  |  |
| RaceType | Race | multipicklist |  | 4099 | 0 |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TribeName | Name of Enrolled or Principal Tribe | string |  | 255 |  |  |
| WasActiveMilitary | Past Military Service | boolean |  |  |  |  |
| WasNonActivatedService | Non-Activated Reserve or National Guard | boolean |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
