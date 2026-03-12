---
title: "LoanApplicantDeclaration"
domain: financial-services-cloud-object-reference
topic: loanapplicantdeclaration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.957Z
estimatedTokens: 1911
keywords: [LoanApplicantDeclaration, financial, issues, foreclosure, lawsuits, defaults, applicant, co-applicant, API, version, 47.0, later, Calls, Associated, Objects]
---

# LoanApplicantDeclaration

> Represents financial issues like foreclosure, lawsuits, or defaults of the
			applicant or co-applicant.  This object is available in API version 47.0 and later.

# LoanApplicantDeclaration

Represents financial issues like foreclosure, lawsuits, or defaults of the applicant or co-applicant. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BankruptcyType | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionBankruptcy type or types (if applicable).Possible values are:Chapter 11Chapter 12Chapter 13Chapter 7 |
| BorrowedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of money borrowed for loan application transaction. |
| DeclarationExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). This field is unique within your organization. |
| HasBorrowedMoney | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is borrowing money for loan application transaction. |
| HasDeclaredBankruptcy | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower declared bankruptcy within the past seven years. |
| HasDeedSurrender | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower conveyed title to a property in lieu of foreclosure in past 7 years. |
| HasOutstandingJudgement | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether there are one or more outstanding judgments against the borrower. |
| HasOwnershipInterest | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower had ownership interest in a property in the last 3 years. |
| HasPastShortSale | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower sold a property to a third party where lender agreed to accept amount less than total outstanding mortgage balance due within past 7 years. |
| HasPropertyForeclosed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower had property foreclosed upon in last 7 years. |
| HasUndisclAddlCreditApp | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether, on or before closing, borrower applied for new undisclosed credit like a credit card or installment loan. |
| HasUndisclAddlPropApp | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether, on or before closing, borrower applied for an undisclosed mortgage loan on a property other than the application property. |
| IsCoSignerUndisclDebt | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is co-signer or guarantor on debt or loan that's not disclosed on loan application. |
| IsPartyToLawsuit | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is party to lawsuit with potential personal financial liability. |
| IsPresentlyDelinquent | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower is currently delinquent or in default on any federal debt or other loan, mortgage, financial obligation, bond, or loan guarantee. |
| IsPrimaryResidence | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether property to be borrower's primary residence. |
| IsRelatedToSeller | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower has family or business relationship with seller of property (for purchase transaction). |
| IsSubjectToPriorityLien | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether application property is to have a priority clean energy lien like Property Assessed Clean Energy Program financing that takes priority over the first mortgage lien. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanApplicantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the borrower making these declarations. |
| LoanApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loan application associated with these declarations. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the loan application declaration. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record. |
| PriorPropertyTitleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies how borrower held title in the ownership interest property.Possible values are:Joint With Other Than SpouseJoint With SpouseYourself |
| PriorPropertyUsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies type of property borrower held ownership interest in.Possible values are:Investment PropertyPrimary ResidenceSecond HomeSecondary Residence |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicantDeclarationFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoanApplicantDeclarationHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LoanApplicantDeclarationOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LoanApplicantDeclarationShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoanApplicantDeclarationFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- LoanApplicantDeclarationHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- LoanApplicantDeclarationOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LoanApplicantDeclarationShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
