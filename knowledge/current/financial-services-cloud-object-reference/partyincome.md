---
title: "PartyIncome"
domain: financial-services-cloud-object-reference
topic: partyincome
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.231Z
estimatedTokens: 1436
keywords: [PartyIncome, income, individual, business, entity, salaries, commissions, fees, rental, sources, API, version, 55.0, later, Calls]
---

# PartyIncome

> Represents the income of an individual or a business entity. This
         income can be from salaries, commissions, fees, rental properties, and other sources.
      This object is available in API version 55.0 and later.

# PartyIncome

Represents the income of an individual or a business entity. This income can be from salaries, commissions, fees, rental properties, and other sources. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationFormId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe application form that's submitted for a party income.Available with Digital Lending.This field is a relationship field.Relationship NameApplicationFormRelationship TypeLookupRefers ToApplicationForm |
| CalendarYear | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe calendar year when the income was earned. |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim associated with the party income.This field is a relationship field.Relationship NameClaimRelationship TypeLookupRefers ToClaim |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf multiple currencies are enabled, this field contains the currency ISO code associated with the record.Valid values are:AED—UAE DirhamCAD—Canadian DollarGBP—British PoundJPY—Japanese YenUSD—U.S. DollarThe default value is USD. |
| EmployerAddress | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe compound form of the employer's address. |
| EmployerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employer associated with the party income.This field is a relationship field.Relationship NameEmployerRelationship TypeLookupRefers ToAccount |
| EmployerName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the employer. |
| EmployerPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe phone number of the employer. |
| EndDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the party income ends. |
| IncomeAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionThe amount of the party income. |
| IncomeAsOfDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the party income is documented.Available with Digital Lending. |
| IncomeFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe frequency of the party income.Possible values are:MonthlyOne TimeWeeklyYearly |
| IncomeSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of the income.Available with Digital Lending.This field is a polymorphic relationship field.Relationship NameIncomeSourceRelationship TypeLookupRefers ToPartyFinancialAsset, PersonEmployment |
| IncomeStatus | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the party income.Possible values are:ActiveInactive |
| IncomeType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the income.Valid values are:SalaryCommission—Fees—Rent—BonusDividendInterest Income |
| IsReadOnly | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the party income is read only (true) or not (false).The default value is false. |
| JobTitle | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe job title of the party. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the party income. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner associated with the party income.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party associated with the party income.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount, Applicant, ClaimParticipant, Contact, PartyProfile |
| PartyProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe party profile associated with an applicant.Available with Digital LendingThis field is a relationship field.Relationship NamePartyProfileRelationship TypeLookupRefers ToPartyProfile |
| StartDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date when the party income starts. |
| UsageType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionInternal field. Specifies the application using the party income to populate data.Possible values are:CashFlow—Cash FlowClaimKnowYourCustomer—Know Your CustomerVehicleAndAssetLoanOrigination—Vehicle And Asset Loan Origination |
| VerificationDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe timestamp when the verification status is updated. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe verification status of the party income. |
