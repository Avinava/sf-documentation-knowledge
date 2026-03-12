---
title: "PartyFinancialLiability"
domain: financial-services-cloud-object-reference
topic: partyfinancialliability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.099Z
estimatedTokens: 2670
keywords: [PartyFinancialLiability, financial, liability, held, party, API, version, 61.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# PartyFinancialLiability

> Represents information about a financial liability held by a
         party. This object is available in API version 61.0 and later.

# PartyFinancialLiability

Represents information about a financial liability held by a party. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Financial Account Management Standard Objects setting.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe account associated with the party financial liability.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe applicant who submitted the application.This field is a relationship field.Relationship NameApplicantRefers ToApplicant |
| ApplicationFormId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe application that's submitted for a party financial liability.This field is a relationship field.Relationship NameApplicationFormRefers ToApplicationForm |
| ContactId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe contact associated with the party financial liability.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, contains the currency ISO code associated with the record.Valid value is USD.The default value is USD. |
| DeclarationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the asset is declared. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the liability. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the obligations or responsibilities linked to the liability ends. |
| EstimatedMonthlyPayment | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated monthly payment. |
| InterestRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe interest rate of the party financial liability. |
| IsLienExisting | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicate whether there is a lien on the financial asset.The default value is false. |
| IsReadOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the party financial liability is read only.The default value is false. |
| IsRepaymentActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the party financial liability is being paid.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Lender | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe branch unit that owns the party financial liability. |
| LiabilityAccountIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of the liability account. |
| MakeName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe make name of the asset. |
| ModelName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model name of the asset. |
| ModelYear | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe model year of the asset. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OutstandingBalance | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe remaining amount of the liability that the party owes. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| OwnershipEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the ownership of the asset ends. |
| OwnershipPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe share owned by the party in percentage. |
| OwnershipStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the ownership of the asset starts. |
| OwnershipType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ownership type of the asset.Valid values are:IndividualJoint |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party, such as account, contact, or party profile associated with the party financial liability.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount, Applicant, Contact, PartyProfile |
| PartyProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionParty profile associated with the party financial liability.This field is a relationship field.Relationship NamePartyProfileRefers ToPartyProfile |
| PayoffDueAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe payoff due amount of the party financial asset. |
| PledgeAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the party pledges as a collateral against a financial asset. |
| PurchaseAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount the party paid for the financial asset. |
| SerialNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe serial number of the financial asset. |
| SharePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage of the financial liability held by the party. |
| ShareType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe share type of the financial liability.Valid values are:IndividualJoint |
| SourceSystemIdentifier | Typeexternal lookupPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the party financial liability in an external system. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date at which the obligations or responsibilities linked to the liability begins. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the financial liability.Valid values are:ActiveInactive |
| Term | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe remaining term in months of the party financial liability. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of financial liability.Possible values are:AlimonyAuto LoanInstallmentPersonal Loan |
| UsageType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage type of the party financial asset.Valid values are:CashFlow—Cash FlowClaimLoanOrigination—Loan Origination |
| ValuationAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe worth of the asset after valuation. |
| VerificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the asset valuation was done. |
| ValuationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the asset valuation was done. |
| Value | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe value of the financial liability. |
| VerficationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe verification status of the party financial liability. |
| VerificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the party financial liability was verified. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyFinancialLiabilityChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PartyFinancialLiabilityFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyFinancialLiabilityHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyFinancialLiabilityShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PartyFinancialLiabilityChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- PartyFinancialLiabilityFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- PartyFinancialLiabilityHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- PartyFinancialLiabilityShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
