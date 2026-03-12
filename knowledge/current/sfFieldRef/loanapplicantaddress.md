---
title: "LoanApplicantAddress"
domain: sfFieldRef
topic: loanapplicantaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.616Z
estimatedTokens: 558
keywords: [LoanApplicantAddress, borrower's, co-borrower's, current, address, API, version, XX.0, later]
---

# LoanApplicantAddress

> Represents borrower's or co-borrower's current address information.
		This object is available in API version XX.0 and later.

# LoanApplicantAddress

Represents borrower's or co-borrower's current address information. This object is available in API version XX.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see LoanApplicantAddress in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AddressExtIdentifier | Loan Applicant Address External ID | string |  | 255 |  |  |
| AddressOwnership | Residence Status | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Loan Applicant Address ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoanApplicantId | Loan Applicant ID | reference |  | 18 |  |  |
| LoanApplicationId | Residential Loan Application ID | reference |  | 18 |  |  |
| MonthlyRentPayment | Monthly Rent Payment | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| ResidenceAdditionalMonthCount | Additional Months in Residence | int | 2 |  |  |  |
| ResidenceAddress | Residence Address | address |  |  |  |  |
| ResidenceCity | Residence City | string |  | 40 |  |  |
| ResidenceCountry | Residence Country | string |  | 80 |  |  |
| ResidenceGeocodeAccuracy | Residence Geocode Accuracy | picklist |  | 40 |  |  |
| ResidenceLatitude | Residence Latitude | double |  |  | 18 | 15 |
| ResidenceLongitude | Residence Longitude | double |  |  | 18 | 15 |
| ResidencePostalCode | Residence Postal Code | string |  | 20 |  |  |
| ResidenceState | Residence State | string |  | 80 |  |  |
| ResidenceStreet | Residence Street | textarea |  | 255 |  |  |
| ResidenceYearCount | Years in Residence | int | 2 |  |  |  |
| ResidencyType | Residence Type | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
