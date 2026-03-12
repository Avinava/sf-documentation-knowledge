---
title: "LoanApplicantIncome"
domain: financial-services-cloud-object-reference
topic: loanapplicantincome
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.980Z
estimatedTokens: 1010
keywords: [LoanApplicantIncome, borrower, co-borrower, current, monthly, income, API, version, 47.0, later, Calls, Associated, Objects]
---

# LoanApplicantIncome

> Represents details about the borrower and co-borrower current monthly
			income. This object is available in API version 47.0 and later.

# LoanApplicantIncome

Represents details about the borrower and co-borrower current monthly income. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IncomeExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). This field is unique within your organization. |
| IncomeSourceType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSource of borrower's monthly non-employment income.Possible values are:AlimonyAutomobile AllowanceBoarder IncomeCapital GainsChild SupportDisabilityFoster CareHousing or ParsonageInterest and DividendsMortgage Credit CertificateMortgage Differential PaymentsNotes ReceivableOtherPublic AssistanceRetirementRoyalty PaymentsSeparate MaintenanceSocial SecurityTrustUnemployment BenefitsVA Compensation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LoanApplicantId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the borrower associated with this income. |
| LoanApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loan application associated with this income or expense. |
| MonthlyIncomeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAmount of the borrower's monthly non-employment income from this source. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the other monthly income. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicantIncomeFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoanApplicantIncomeHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LoanApplicantIncomeOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LoanApplicantIncomeShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoanApplicantIncomeFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- LoanApplicantIncomeHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- LoanApplicantIncomeOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LoanApplicantIncomeShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
