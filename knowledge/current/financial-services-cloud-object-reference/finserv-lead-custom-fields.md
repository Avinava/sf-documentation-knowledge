---
title: "FinServ Lead Custom Fields"
domain: financial-services-cloud-object-reference
topic: finserv-lead-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.896Z
estimatedTokens: 557
keywords: [FinServ, Lead, Custom, associated, individual, extend, Financial, Services, Cloud]
---

# FinServ Lead Custom Fields

> Represents a lead associated with an individual. Custom fields extend
   the Lead object for use in Financial Services Cloud.

# FinServ Lead Custom Fields

Represents a lead associated with an individual. Custom fields extend the Lead object for use in Financial Services Cloud.

## Fields

| Field Name | Details |
| --- | --- |
| CreatedByMe__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the current user created the contact record. |
| CreatedFromLead__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a contact converted from this lead sets the value of Contact.CreatedFromLead__c as (true) or not (false). |
| Employer__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe lead’s employer information that converts to the individual’s contact record upon lead conversion. |
| ExpressedInterest__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLead’s expressed area of interest. Label is Category. Valid values:MortgagePersonal LoanCredit CardSavings AccountChecking AccountHELOCDay to Day BankingManage MoneyProperty PurchaseInvestmentsEducationManage Debt |
| Household__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the household record associated with the lead record. |
| PotentialValue__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionPotential value from converting the lead. |
| ProductInterest__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLead’s area of interest. This field is deprecated. Use the ExpressedInterest__c field instead. |
| ReferredByContact__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionExternal contact who made the referral. |
| ReferredByUser__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInternal Salesforce user who made the referral. |
| ReferrerScore__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA value of 0 to 100. A high score reflects a high rate of referral conversion. |
| RelatedAccount__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndividual or household account related to a lead. |
