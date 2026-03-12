---
title: "blng__RevenueSchedule__c"
domain: blng-dev
topic: blngrevenueschedulec
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.732Z
estimatedTokens: 2799
keywords: [blng__RevenueSchedule__c, review, amount, revenue, already, distributed, remaining, allocated, schedule, associated, transaction, blng, _RevenueSchedule, Calls]
---

# blng__RevenueSchedule__c

> Represents the fields that you can use to review the amount of
         revenue already distributed and remaining to be allocated. A revenue schedule is associated
         with a revenue transaction.

# blng\_\_RevenueSchedule\_\_c

Represents the fields that you can use to review the amount of revenue already distributed and remaining to be allocated. A revenue schedule is associated with a revenue transaction.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the revenue schedule when multiple currencies are enabled. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed a revenue schedule record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed a revenue schedule record. If this value is null, it’s possible that the user only accessed the revenue schedule record or a related list view (LastReferencedDate), but not viewed the revenue schedule record itself. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The name of the revenue schedule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Quote__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe quote associated with the revenue schedule.This field is a relationship field.Relationship NameQuote__rRefers ToSBQQ__Quote__c |
| blng__Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account of the customer who made the transaction. This field is a relationship field.Relationship Nameblng__Account__rRefers ToAccount |
| blng__Adjustments__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total of all adjustments made to the revenue schedule.This field is a calculated field. |
| blng__AllocatedRevenueAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of revenue allocated to or for a revenue schedule. |
| blng__Available__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount on the revenue schedule, including adjustments, that hasn’t been distributed to any revenue transactions.This field is a calculated field. |
| blng__BaseCurrencyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of the revenue schedule in the base currency of the organization. This value is used to standardize the amount across different currencies. |
| blng__BaseCurrencyFXDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the Foreign Exchange (FX) rate is applied to convert the amount into the base currency. |
| blng__BaseCurrencyFXRate__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe FX rate used to convert an amount from a foreign currency to the base currency. |
| blng__BaseCurrency__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary currency in which the financial transactions are recorded and reported. |
| blng__BillingFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe financial ledger that tracks all transactions related to billing, including the allocation of payments to debit note lines. This value ensures that all financial activities are accurately recorded and reported.This field is a relationship field.Relationship Nameblng__BillingFinanceBook__rRefers Toblng__FinanceBook__c |
| blng__BillingFinancePeriod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe time frame during which the allocation of payments to revenue schedule is recorded. This period helps in organizing financial data for reporting and analysis, such as monthly or quarterly financial statements.This field is a relationship field.Relationship Nameblng__BillingFinancePeriod__rRefers Toblng__FinancePeriod__c |
| blng__Contract__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contract associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__Contract__rRefers ToContract |
| blng__CreditNoteLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe credit note line associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__CreditNoteLine__rRefers Toblng__CreditNoteLine__c |
| blng__DebitNoteLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe debit note line associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__DebitNoteLine__rRefers Toblng__DebitNoteLine__c |
| blng__DeferredBalance__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionDescriptionThe sum of unrecognized revenue in the current period.This field is a calculated field.This field is a calculated field. |
| blng__Deferred__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of revenue that has been deferred and not yet recognized in the revenue schedule.This field is a calculated field. |
| blng__EstimatedRevenueTransactionCount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe estimated number of revenue transactions that the schedule contains. |
| blng__FullRecognitionDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date by which the revenue schedule recognizes all revenue for its transactions. This field is inherited from the revenue distribution method's full recognition date field. |
| blng__InvoiceLine__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice line associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__InvoiceLine__rRefers Toblng__InvoiceLine__c |
| blng__LegalEntity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe legal entity associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__LegalEntity__rRefers Toblng__LegalEntity__c |
| blng__Notes__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional details or comments related to the revenue schedule. |
| blng__OrderProduct__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe order product associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__OrderProduct__rRefers ToOrderItem |
| blng__RecognizedRevenueLastClosedPeriod__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of all revenue that has been recognized through the current period.This field is a calculated field. |
| blng__RevenueAgreementAllocationStatus__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether any revenue has been allocated to or from the revenue agreement related to a revenue schedule. |
| blng__RevenueAgreement__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe revenue agreement associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__RevenueAgreement__rRefers Toblng__RevenueAgreement__c |
| blng__RevenueDistributionMethod__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe method for calculating how revenue is spread across a period.This field is a relationship field.Relationship Nameblng__RevenueDistributionMethod__rRefers Toblng__RevenueDistributionMethod__c |
| blng__RevenueEndDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe earliest date for revenue recognized under the revenue schedule. |
| blng__RevenueExpectedAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total amount of revenue that’s expected to be received in a revenue schedule. |
| blng__RevenueFinanceBook__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe finance book that records the transactions related to the revenue schedule.This field is a relationship field.Relationship Nameblng__RevenueFinanceBook__rRefers Toblng__FinanceBook__c |
| blng__RevenueLiabilityAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of revenue collected for which a product or service hasn't been rendered. |
| blng__RevenueMostLikelyAmount__c | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of revenue that’s most likely to be received. |
| blng__RevenueRecognitionGLRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe revenue recognition General Ledger (GL) rule associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__RevenueRecognitionGLRule__rRefers Toblng__GLRule__c |
| blng__RevenueRecognitionGLTreatment__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe revenue recognition GL treatment associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__RevenueRecognitionGLTreatment__rRefers Toblng__GLTreatment__c |
| blng__RevenueRecognitionRule__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe revenue recognition rule associated with the revenue schedule.This field is a relationship field.Relationship Nameblng__RevenueRecognitionRule__rRefers Toblng__RevenueRecognitionRule__c |
| blng__RevenueRecognitionTreatment__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDescriptionThe revenue recognition treatment associated with the revenue schedule.This field is a relationship field.This field is a relationship field.Relationship Nameblng__RevenueRecognitionTreatment__rRefers Toblng__RevenueRecognitionTreatment__c |
| blng__RevenueStartDate__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe earliest date for revenue recognized under the revenue schedule. |
| blng__RevenueTransactionStatus__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the process that runs to create revenue transactions for the revenue schedule.Valid values are:CompleteErrorQueued |
| blng__TotalRevenueAmount__c | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The total amount available at the time the revenue schedule is created. |
| blng__Unrecognized__c | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of all revenue allocated to a revenue schedule but not yet recognized.This field is a calculated field. |
