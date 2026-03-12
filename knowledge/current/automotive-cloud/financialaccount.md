---
title: "FinancialAccount"
domain: automotive-cloud
topic: financialaccount
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.195Z
estimatedTokens: 1730
keywords: [FinancialAccount, financing, option, automotive, loan, lease, customer, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# FinancialAccount

> Represents a financing option, such as an automotive loan or lease related to
         a customer. This object is available in API version 60.0 and later.

# FinancialAccount

Represents a financing option, such as an automotive loan or lease related to a customer. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Vehicle and Asset Finance must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AmountDue | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount that is due for payment for the financial account. |
| BranchUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe captive finance unit associated with the financial account.This field is a relationship field.Relationship NameBranchUnitRelationship TypeLookupRefers ToBranchUnit |
| ClosingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account was closed. |
| CreditLimit | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total credit limit avaialble for the financial account. |
| DownPaymentAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAn initial up-front partial payment amount. |
| FinancialAccountNumber | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe identifier of the financial account. |
| InsurancePaidYearToDate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of insurance premium paid in the current tax year. |
| InterestPaidYearToDate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of interest paid in the current tax year. |
| InterestRate | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rate of interest applied on the loan or lease. |
| InterestType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of interest applied to the loan or lease.Possible values are:FixedVariable |
| IsHeldAway | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this financial account is owned externally (true) or in-house (false).The default value is false. |
| IsOverdraftAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the financial account allows an overdraft (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MaturityDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account with a fixed term matures. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the financial account. |
| OpeningDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account was opened. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the financial account record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentDueDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the payment is due for the financial account. |
| PrincipalAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe principal amount on the financial account. |
| PrincipalPaidYearToDate | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount paid against the principal in the current tax year. |
| ProductId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product associated with the financial account.This field is a relationship field.Relationship NameProductRelationship TypeLookupRefers ToProduct2 |
| RelatedFinancialAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent of the financial account.This field is a relationship field.Relationship NameRelatedFinancialAccountRelationship TypeLookupRefers ToFinancialAccount |
| RenewalDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the financial account is due for renewal. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the financial account in an external system such as a captive finance dealer management system. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the financial account.Possible values are:ActiveClosedDelinquentOn HoldThe default value is Active. |
| Term | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe term for which a loan or lease is taken. |
| TotalOutstandingAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total outstanding amount on the financial account. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the type of the financial account.Possible values are:Asset LeaseAsset LoanAutomotive LeaseAutomotive Loan |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialAccountChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[FinancialAccountFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[FinancialAccountHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[FinancialAccountOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[FinancialAccountShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
