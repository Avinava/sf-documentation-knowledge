---
title: "FinancialAccount"
domain: financial-services-cloud-object-reference
topic: financialaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.981Z
estimatedTokens: 2124
keywords: [FinancialAccount, different, financial, accounts, investment, bank, credit, cards, API, version, 61.0, later, Calls, Special, Access]
---

# FinancialAccount

> Represents information about different financial accounts, such as investment
         accounts, bank accounts, and credit cards. This object is available in API version
      61.0 and later.

# FinancialAccount

Represents information about different financial accounts, such as investment accounts, bank accounts, and credit cards. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Financial Account Management Standard Objects setting.

## Fields

| Field | Details |
| --- | --- |
| BankerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe person who originated the financial account.This field is a relationship field.Relationship NameBankerRelationship TypeLookupRefers ToBanker |
| BranchUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe bank branch or financial institute to which the financial account is associated with.This field is a relationship field.Relationship NameBranchUnitRelationship TypeLookupRefers ToBranchUnit |
| ClosingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account was closed. |
| CreditLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total credit limit available for the financial account. |
| DownPaymentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn initial up-front partial payment amount. |
| FinancialAccountNumber | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the financial account. |
| InsurancePaidYearToDate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of insurance premium paid in the current tax year. |
| InterestPaidYearToDate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of interest paid in the current tax year. |
| InterestRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe interest rate of the financial account. |
| InterestType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of interest. For example, fixed and variable.Possible values are:FixedVariable |
| IsHeldAway | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this financial account is owned externally (true) or in-house (false).The default value is false. |
| IsOverdraftAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the financial account allows an overdraft (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| MaturityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account with a fixed term matures. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the financial account. |
| OpeningDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account was opened. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the financial account record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentDueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the payment is due for the financial account. |
| PrincipalAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe principal amount on the financial account. |
| PrincipalPaidYearToDate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount paid against the principal in the current tax year. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the financial account.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| PropertyTaxPaidYearToDate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of property tax paid in the current tax year. |
| RelatedFinancialAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent of the financial account.This field is a relationship field.Relationship NameRelatedFinancialAccountRelationship TypeLookupRefers ToFinancialAccount |
| RenewalDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account is due for renewal. |
| SourceSystemIdentifier | Typeexternal lookupPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the financial account in an external system such as, a core banking system. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the financial account.Possible values are:ActiveClosedDelinquentOn HoldThe default value is Active. |
| Term | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe term of the financial account. |
| TotalOutstandingAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total outstanding amount on the financial account. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of financial account.Possible values are:Automotive LeaseAutomotive Loan |

## Usage

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialAccountChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FinancialAccountFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FinancialAccountHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FinancialAccountOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FinancialAccountShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FinancialAccountChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- FinancialAccountFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- FinancialAccountHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- FinancialAccountOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FinancialAccountShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
