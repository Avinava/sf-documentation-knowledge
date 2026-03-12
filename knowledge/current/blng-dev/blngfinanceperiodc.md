---
title: "blng__FinancePeriod__c"
domain: blng-dev
topic: blngfinanceperiodc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.280Z
estimatedTokens: 1035
keywords: [blng__FinancePeriod__c, stores, lookups, accounting, revenue, transactions, occur, specific, period, blng, _FinancePeriod, Calls]
---

# blng__FinancePeriod__c

> Represents a reference object that stores lookups to all accounting or revenue
      transactions that occur within a specific period.

# blng\_\_FinancePeriod\_\_c

Represents a reference object that stores lookups to all accounting or revenue transactions that occur within a specific period.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the finance period record when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a finance period record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a finance period record. If this value is null, it’s possible that the user only accessed the finance period record or a related list view (LastReferencedDate), but not viewed the finance period record itself. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of the finance period. |
| blng__Family__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe product family associated with the finance period record. |
| blng__FinanceBook__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The financial book associated with the billing. This field helps in categorizing and managing financial records according to different finance books.This field is a relationship field.Relationship Nameblng__FinanceBook__rRelationship TypeMaster-detailRefers Toblng__FinanceBook__c (the master object) |
| blng__FinancePeriodFamily__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe finance period family associated with the finance period. |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity used to associate the finance period with other transactional records in Salesforce Billing.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__NextOpenPeriod__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The next open financial period for billing purposes.The default value is false. |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the finance period. |
| blng__PeriodEndDate__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The end date of the financial period. |
| blng__PeriodStartDate__c | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The start date of the finance period. |
| blng__PeriodStatus__c | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of a financial period to track the state of a financial period.Valid values are:ClosedErrorOpenPending ClosePending Open |
| blng__PeriodType__c | TypestringPropertiesFilter, Nillable, SortDescriptionThe period type of the finance book.This field is a calculated field. |
| blng__ReferenceId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe reference to source for which the finance period record is created. |
| blng__UniqueId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique identification number associated with the finance period record. This field is unique within your organization. |
