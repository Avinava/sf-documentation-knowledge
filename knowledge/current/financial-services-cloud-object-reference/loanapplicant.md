---
title: "LoanApplicant"
domain: financial-services-cloud-object-reference
topic: loanapplicant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.910Z
estimatedTokens: 1944
keywords: [LoanApplicant, borrower, co-borrower, loan, application, API, version, 47.0, later, Calls, Associated, Objects]
---

# LoanApplicant

> Represents details of the borrower or co-borrower for the loan
			application. This object is available in API version 47.0 and later.

# LoanApplicant

Represents details of the borrower or co-borrower for the loan application. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicantExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). |
| AsianRaceSubType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionBorrower's Asian race.Possible values are:Asian IndianChineseFilipinoJapaneseKoreanOtherVietnamese |
| BorrowerType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionApplicant's borrower type.Values are:BorrowerCoBorrower |
| CitizenshipStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's citizenship status.Possible values are:Non-Permanent Resident AlienPermanent Resident AlienU.S. Citizen |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionContact associated with this borrower. |
| DependentCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's number of dependents. |
| DependentsAge | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAges of borrower's dependents in a comma-separated list. |
| EthnicitySubType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionBorrower's ethnicity origin.Possible values are:CubanMexicanOtherPuerto Rican |
| EthnicityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's ethnicity.Possible values are:Hispanic or LatinoI do not wish to provide this informationNot Hispanic or Latino |
| GenderType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's gender.Possible values are:FemaleI do not wish to provide this informationMale |
| HasMilitaryService | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the borrow is serving in the United States Armed Forces or the borrower or the borrower's deceased spouse served in the past. |
| IsActiveMilitary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is currently on active duty with the United States Armed Forces. |
| IsJointCredit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is applying for joint credit. |
| IsSurvivingMilitarySpouse | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is a surviving spouse of a veteran. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanApplicationId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionLoan application associated with this borrower. |
| MaritalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's marital status.Possible values are:MarriedSeparatedUnmarried |
| MilitaryTourExpirationMonth | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMonth that borrower's tour of service expires. |
| MilitaryTourExpirationYear | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionYear that borrower's tour of service expires. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the loan applicant. |
| OtherAsianRaceSubType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's Asian race if other is specified. |
| OtherEthnicitySubType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's ethnicity if other is selected. |
| OtherPacIslandSubType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's native Hawaiian or Pacific Islander race if other is specified. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record. |
| PacIslandSubType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionBorrower's native Hawaiian or Pacific Islander race.Possible values are:Guamanian or ChamorroNative HawaiianOtherSamoan |
| PreferredLanguage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's preferred communication language.Possible values are:ChineseEnglishI do not wish to respondKoreanOtherSpanishTagalogVietnamese |
| RaceType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionBorrower's race.Possible values are:American Indian or Alaska NativeAsianBlack or African AmericanI do not wish to provide this informationNative Hawaiian or Other Pacific IslanderWhite |
| TribeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of borrower's enrolled or principal tribe. |
| WasActiveMilitary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is currently retired, discharged, or separated from active military duty. |
| WasNonActivatedService | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower's only military service was as a non-activated Reserve soldier or as a non-activated member of the National Guard. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicantFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoanApplicantHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LoanApplicantOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LoanApplicantShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoanApplicantFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- LoanApplicantHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- LoanApplicantOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LoanApplicantShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
