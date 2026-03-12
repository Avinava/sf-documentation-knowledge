---
title: "LoanApplicationLiability"
domain: financial-services-cloud-object-reference
topic: loanapplicationliability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.031Z
estimatedTokens: 1360
keywords: [LoanApplicationLiability, borrower, co-borrower, current, liabilities, API, version, 47.0, later, Calls, Associated, Objects]
---

# LoanApplicationLiability

> Represents details about the borrower and co-borrower current
			liabilities. This object is available in API version 47.0 and later.

# LoanApplicationLiability

Represents details about the borrower and co-borrower current liabilities. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBorrower's account number with lender or creditor. |
| AccountType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPersonal debt borrower owes like credit card balances, other debts, and leases.Possible values are:InstallmentLeaseOpen 30-DayOtherRevolving |
| CreditLimitAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCredit limit of real estate loan or line of credit. |
| CreditorName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLender or creditor owed the debt. |
| IsJointLiability | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescription |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LiabilityClass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInclude the liability's monthly payment in this liability class monthly payment total.Possible values are:FinancialOtherReal Estate |
| LiabilityExtIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID that uniquely identifies imported data in an external data source (if applicable). This field is unique within your organization. |
| LoanApplicationAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loan application real estate asset associated with a real estate liability. |
| LoanApplicationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the loan application associated with this liability. |
| LoanType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExisting real estate loan type.Possible values are:ConventionalFederal Housing AuthorityOtherUSDA or Rural Housing ServiceVeterans Affairs |
| MonthlyPaymentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBorrower's monthly payment required to keep debt account current. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the loan application liability. |
| OtherLiabilityType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies type of other borrower expense or liability.Possible values are:AlimonyChild SupportJob Related ExpensesOtherSeparate Maintenance |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record. |
| ShouldBePaidInFull | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether borrower to pay off debt on or before closing. |
| UnpaidBalanceAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUnpaid liability balance when borrower completed loan application. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[LoanApplicationLiabilityFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[LoanApplicationLiabilityHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[LoanApplicationLiabilityOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[LoanApplicationLiabilityShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- LoanApplicationLiabilityFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- LoanApplicationLiabilityHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- LoanApplicationLiabilityOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- LoanApplicationLiabilityShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
