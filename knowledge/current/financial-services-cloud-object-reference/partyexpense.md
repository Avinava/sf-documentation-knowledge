---
title: "PartyExpense"
domain: financial-services-cloud-object-reference
topic: partyexpense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.144Z
estimatedTokens: 1096
keywords: [PartyExpense, expense, incurred, individual, account, API, version, 61.0, later, Calls]
---

# PartyExpense

> Represents the expense incurred by an individual or account. This object
      is available in API version 61.0 and later.

# PartyExpense

Represents the expense incurred by an individual or account. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the application form.This field is a relationship field.Relationship NameApplicationFormRefers ToApplicationForm |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, contains the currency ISO code associated with the record.Possible values are:USD—U.S. DollarThe default value is USD. |
| EndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the expense. |
| ExpensesAsOfDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the party expense is documented. |
| IsReadOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the party expense is read only (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the expense. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PartyFinancialLiabilityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe party financial liability that's associated with the party expense.This field is a relationship field.Relationship NamePartyFinancialLiabilityRefers ToPartyFinancialLiability |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party associated with the expense.This field is a polymorphic relationship field.Relationship NamePartyRefers ToAccount, Applicant, Contact, PartyProfile |
| PartyProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the party profile.This field is a relationship field.Relationship NamePartyProfileRefers ToPartyProfile |
| RecurrenceInterval | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe interval after which the expense is incurred.Possible values are:Bi-WeeklyMonthlyOne TimeWeeklyYearly |
| StartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescription |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the party expense.Possible values are:ActiveInactive |
| TotalAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe total expense amount. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe type of expense.Possible values are:Child CareChild SupportClothingDebtEntertainmentFood & DiningGarnishmentsGasGiftsHealth and Hospitalization Insurance PremiumsHousingInsuranceMedical Prescriptions and ExpensesMiscellaneousMobile DeviceMortgagePersonal CareReimbursementRepresentative PayeeShoppingSpousal SupportSubscriptionsTransportationTravelUtilities |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe usage type of the party expense.Possible values are:CashFlow—Cash FlowClaimVehicleAndAssetLoanOrigination—Vehicle And Asset Loan Origination |
| VerificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the party expense information was verified. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe verification status of the party expense. |
