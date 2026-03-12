---
title: "LoanApplicantEmployment"
domain: financial-services-cloud-object-reference
topic: loanapplicantemployment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.973Z
estimatedTokens: 1980
keywords: [LoanApplicantEmployment, borrower's, co-borrower's, current, past, employment, API, version, 47.0, later, Calls, Associated, Objects]
---

# LoanApplicantEmployment

> Represents details about the borrower's or co-borrower's current and past
			employment. This object is available in API version 47.0 and later.

# LoanApplicantEmployment

Represents details about the borrower's or co-borrower's current and past employment. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrentJobAdditionalMonthCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional number of months employed at this job (less than 12). |
| CurrentJobYearCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber of full years employed at this job. |
| EmployerAddress | TypeaddressPropertiesFilter, NillableDescriptionAddress of borrower's employer or business. |
| EmployerCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address city. |
| EmployerCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address country. |
| EmployerGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates. |
| EmployerLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| EmployerLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| EmployerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of borrower's employer or business. |
| EmployerPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmployer's phone number. |
| EmployerPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address postal code. |
| EmployerState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address state. |
| EmployerStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address street. |
| EmploymentExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). This field is unique within your organization. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's last date of employment at this job. |
| IsLessThanQuarterShare | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower owns less than 25 percent of this business (if applicable). |
| IsRelToTransactionParty | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is employed by a family member, propery seller, real estate agent, or other person party to the loan application transaction. |
| IsSelfEmployed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is self-employed or owns the business. |
| JobTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe borrowers job title or employer’s business or industry type. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanApplicantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the borrower associated with employment details. |
| LoanApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loan application associated with this borrower's employment information. |
| MonthlyBaseIncomeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's base monthly income from this job. |
| MonthlyBonusAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's monthly bonus from this job. |
| MonthlyCommissionAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's monthly commission from this job. |
| MonthlyIncome | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's monthly income or loss from this business. |
| MonthlyMilitaryEntlAmt | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's monthly military entitlement from this job. |
| MonthlyOtherIncomeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's other monthly income from this job. |
| MonthlyOvertimeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's monthly overtime income from this job. |
| MonthlyTotalIncomeAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionBorrower's total monthly income from this job.FormulaMonthlyBaseIncomeAmount + MonthlyOvertimeAmount + MonthlyBonusAmount + MonthlyCommissionAmount + MonthlyMilitaryEntlAmt + MonthlyOtherIncomeAmount |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the loan applicant employment. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate borrower started working at this job. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicantEmploymentFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoanApplicantEmploymentHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LoanApplicantEmploymentOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LoanApplicantEmploymentShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoanApplicantEmploymentFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- LoanApplicantEmploymentHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- LoanApplicantEmploymentOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LoanApplicantEmploymentShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
